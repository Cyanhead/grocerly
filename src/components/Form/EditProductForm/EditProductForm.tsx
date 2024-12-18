import {
  ExistingProductStateType,
  EditProductFormPropsType,
} from './EditProductForm.type';
import { useState } from 'react';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { db, storage } from '../../../context/Firebase';
import {
  arrayRemove,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { useGalleryContext } from '../../Gallery/context';
import ProductForm from '../ProductForm';
import {
  generateUniqueId,
  getImageIdFromUrl,
  resizeFile,
} from '../../../helpers';
import { Product } from '../../../types';

function EditProductForm({
  product,
  closeFormModal,
}: EditProductFormPropsType) {
  const [formData, setFormData] = useState<ExistingProductStateType>({
    ...product,
  });

  const { newImagesToUpload, imagesToDeleteOnBackend } = useGalleryContext();

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  async function handleUploadImagesAndReturnUrls() {
    const urls = await Promise.all(
      newImagesToUpload.flatMap(async imgFile => {
        const id = generateUniqueId();
        const fileVariants = [
          { file: await resizeFile(imgFile, 'large'), suffix: 'large' },
          { file: await resizeFile(imgFile, 'small'), suffix: 'small' },
          { file: await resizeFile(imgFile, 'thumbnail'), suffix: 'thumbnail' },
        ];

        const [imageName] = imgFile.name.split('.');

        return Promise.all(
          fileVariants.map(
            ({ file, suffix }) =>
              new Promise<string>((resolve, reject) => {
                const uploadTask = uploadBytesResumable(
                  ref(
                    storage,
                    `products/${product.id}/${imageName}_${suffix}_${id}`
                  ),
                  file as File
                );

                function next(snapshot: {
                  bytesTransferred: number;
                  totalBytes: number;
                }) {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log(`${suffix} Upload is ` + progress + `% done`);
                }

                function error(error: { message: unknown }) {
                  console.log(`${suffix} upload task error`, error.message);
                  reject(error);
                }

                async function complete() {
                  try {
                    const url = await getDownloadURL(
                      ref(
                        storage,
                        `products/${product.id}/${imageName}_${suffix}_${id}`
                      )
                    );
                    resolve(url);
                  } catch (err) {
                    if (err instanceof Error) {
                      console.log(`Error 2. ${suffix} url error`, err.message);
                      reject(err);
                    } else {
                      reject('Unknown error occurred');
                    }
                  }
                }

                uploadTask.on('state_changed', next, error, complete);
              })
          )
        );
      })
    );

    return urls;
  }

  async function deleteMediaUrlsFromFirestore(
    image: (typeof product.images)[0]
  ) {
    const productsDocRef = doc(db, 'products', product.id);

    try {
      await updateDoc(productsDocRef, {
        images: arrayRemove(image),
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Unknown error:', error);
      }
    }
  }

  async function deleteMediaFromStorage(mediaUrl: string) {
    try {
      // Extract file path from the URL
      const decodedStorageUrl = decodeURIComponent(
        mediaUrl.split('/o/')[1].split('?')[0]
      );
      const variants = ['small', 'large', 'thumbnail'];

      // Create references and delete the files concurrently
      await Promise.all(
        variants.map(async variant => {
          const fileRef = ref(
            storage,
            decodedStorageUrl.replace('small', variant)
          );
          return await deleteObject(fileRef);
        })
      );

      console.log('Files deleted successfully');
    } catch (error) {
      console.error('Error deleting files:', error);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus('loading');

    if (imagesToDeleteOnBackend.length !== 0) {
      await Promise.all(
        imagesToDeleteOnBackend.map(async imageMap => {
          await deleteMediaFromStorage(imageMap.smallURL);
          await deleteMediaUrlsFromFirestore(imageMap);
        })
      );
    }

    const productsDocRef = doc(db, 'products', product.id);

    const cleanUrls = await handleUploadImagesAndReturnUrls();
    const imageGroups: Product['images'] = cleanUrls.map(sizes => {
      return {
        id: getImageIdFromUrl(sizes[0]),
        largeURL: sizes[0],
        smallURL: sizes[1],
        thumbnailURL: sizes[2],
      };
    });

    const updatedProductData = {
      images: arrayUnion(...imageGroups),
      name: formData.name,
      otherNames: formData.otherNames,
      category: formData.category,
      about: formData.about,
      price: formData.price,
      updatedAt: serverTimestamp(),
    };

    const productCategoriesDocRef = doc(db, 'product-categories', 'categories');

    try {
      await updateDoc(productsDocRef, updatedProductData);
      await updateDoc(productCategoriesDocRef, {
        allCategories: arrayUnion(updatedProductData.category),
      });

      console.log('3. Product successfully updated!');
    } catch (error) {
      setStatus('error');
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.log('Unknown error:', error);
      }
    } finally {
      setStatus('success');
      closeFormModal();
    }
  }

  return (
    <ProductForm
      onSubmit={handleSubmit}
      status={status}
      state={formData}
      stateSetter={setFormData}
      button={{
        text: 'Save Changes',
        loadingText: 'Saving...',
      }}
    />
  );
}

export default EditProductForm;
