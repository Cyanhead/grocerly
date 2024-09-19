import {
  ExistingProductType,
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

function EditProductForm({
  product,
  closeFormModal,
}: EditProductFormPropsType) {
  const [formData, setFormData] = useState<ExistingProductType>({ ...product });

  const { newImagesToUpload, imagesToDeleteOnBackend } = useGalleryContext();

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  async function handleUploadImagesAndReturnUrls() {
    const urls = await Promise.all(
      newImagesToUpload.map(imgFile => {
        return new Promise<string>((resolve, reject) => {
          const uploadTask = uploadBytesResumable(
            ref(storage, `items/${product.id}/${imgFile.name}`), // TODO: rename to 'products'
            imgFile
          );

          function next(snapshot: {
            bytesTransferred: number;
            totalBytes: number;
          }) {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('1. Upload is ' + progress + '% done');
          }

          function error(error: { message: unknown }) {
            console.log('Error upload task error', error.message);
            reject(error);
          }

          async function complete() {
            try {
              const url = await getDownloadURL(
                ref(storage, `items/${product.id}/${imgFile.name}`) // TODO: rename to 'products'
              );
              resolve(url);
            } catch (err) {
              if (err instanceof Error) {
                console.log('Error 2. url error', err.message);
                reject(err);
              } else {
                reject('Unknown error occurred');
              }
            }
          }

          uploadTask.on('state_changed', next, error, complete);
        });
      })
    );

    return urls;
  }

  async function handleDeleteImagesOnBackend() {
    const productsDocRef = doc(db, 'items', product.id); // TODO: rename to 'products'
    const urls = imagesToDeleteOnBackend;

    try {
      await updateDoc(productsDocRef, {
        images: arrayRemove(...urls),
      });
      console.log('Document successfully updated!');
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
      const decodedUrl = decodeURIComponent(
        mediaUrl.split('/o/')[1].split('?')[0]
      );

      // Create a reference to the file to delete
      const fileRef = ref(storage, decodedUrl);

      // Delete the file
      await deleteObject(fileRef);

      console.log('File deleted successfully');
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus('loading');

    if (imagesToDeleteOnBackend.length !== 0) {
      await handleDeleteImagesOnBackend();
      await Promise.all(
        imagesToDeleteOnBackend.map(url => deleteMediaFromStorage(url))
      );
    }

    const urls = await handleUploadImagesAndReturnUrls();

    const productsDocRef = doc(db, 'items', product.id); // TODO: rename to 'products'

    const updatedProductData = {
      images: arrayUnion(...urls),
      name: formData.name,
      otherNames: formData.otherNames,
      category: formData.category,
      about: formData.about,
      price: formData.price,
      updatedAt: serverTimestamp(),
    };

    try {
      await updateDoc(productsDocRef, updatedProductData);
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
