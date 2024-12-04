import {
  NewProductType,
  AddProductFormPropsType,
  NewProductStateType,
} from './AddProductForm.type';
import ProductForm from '../ProductForm';
import { useState } from 'react';
import ProductFormInput from '../ProductForm/ProductFormInput';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  FieldValue,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../../context/Firebase';
import { useGalleryContext } from '../../Gallery/context';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import {
  generateUniqueId,
  getImageIdFromUrl,
  resizeFile,
} from '../../../helpers';
import { Product } from '../../../types';

function AddProductForm({ closeFormModal }: AddProductFormPropsType) {
  const [formData, setFormData] = useState<NewProductStateType>({
    name: '',
    price: 0,
    about: '',
    otherNames: [],
    images: [],
    category: '',
    stock: 0,
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const { newImagesToUpload } = useGalleryContext();

  async function createNewDocAndReturnId(obj: NewProductStateType) {
    const itemsDocRef = collection(db, 'products');

    const docRef = await addDoc(itemsDocRef, obj);
    const docId = `${docRef.id}`;
    console.log('1. Document written with ID: ', docId);
    return docId;
  }

  async function handleUploadImagesAndReturnUrls(productId: string) {
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
                    `products/${productId}/${imageName}_${suffix}_${id}`
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
                        `products/${productId}/${imageName}_${suffix}_${id}`
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus('loading');

    const productId = await createNewDocAndReturnId(formData);
    const urls = await handleUploadImagesAndReturnUrls(productId);
    const imageGroups: Product['images'] = urls.map(sizes => {
      return {
        id: getImageIdFromUrl(sizes[0]),
        largeURL: sizes[0],
        smallURL: sizes[1],
        thumbnailURL: sizes[2],
      };
    });

    const productsDocRef = doc(db, 'products', productId);

    type ProductData = Omit<NewProductType, 'images'> & {
      id: string;
      images: Product['images'] | FieldValue;
    };

    const productData: ProductData = {
      id: productId,
      images: arrayUnion(...imageGroups),
      name: formData.name,
      otherNames: formData.otherNames,
      category: formData.category,
      about: formData.about,
      price: formData.price,
      stock: formData.stock,
      rating: 1,
      createdAt: serverTimestamp() as Timestamp,
      updatedAt: null as unknown as Timestamp,
      firstOrder: null as unknown as Timestamp,
      lastOrder: null as unknown as Timestamp,
    };

    const productCategoriesDocRef = doc(db, 'product-categories', 'categories');

    try {
      await updateDoc(productCategoriesDocRef, {
        allCategories: arrayUnion(formData.category),
      });

      await updateDoc(productsDocRef, productData);
      console.log('3. Product successfully updated!');
    } catch (error) {
      setStatus('error');
      if (error instanceof Error) {
        console.log(error.message);
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
      state={formData}
      stateSetter={setFormData}
      status={status}
      button={{
        text: 'Save Changes',
        loadingText: 'Saving...',
      }}
    >
      <ProductFormInput
        type="number"
        label="Stock"
        name="stock"
        placeholder="Enter available stock..."
        value={formData.stock}
        onInputChange={e =>
          setFormData(prevState => ({
            ...prevState,
            stock: parseInt(e.target.value),
          }))
        }
      />
    </ProductForm>
  );
}

export default AddProductForm;
