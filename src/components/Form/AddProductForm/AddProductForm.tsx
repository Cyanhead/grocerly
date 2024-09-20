import { NewProductType, AddProductFormPropsType } from './AddProductForm.type';
import ProductForm from '../ProductForm';
import { useState } from 'react';
import ProductFormInput from '../ProductForm/ProductFormInput';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../../context/Firebase';
import { useGalleryContext } from '../../Gallery/context';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function AddProductForm({ closeFormModal }: AddProductFormPropsType) {
  const [formData, setFormData] = useState<NewProductType>({
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

  async function createNewDocAndReturnId(obj: NewProductType) {
    const itemsDocRef = collection(db, 'products');

    const docRef = await addDoc(itemsDocRef, obj);
    const docId = `${docRef.id}`;
    console.log('1. Document written with ID: ', docId);
    return docId;
  }

  async function handleUploadImagesAndReturnUrls(productId: string) {
    const urls = await Promise.all(
      newImagesToUpload.map(imgFile => {
        return new Promise<string>((resolve, reject) => {
          const uploadTask = uploadBytesResumable(
            ref(storage, `products/${productId}/${imgFile.name}`),
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
                ref(storage, `products/${productId}/${imgFile.name}`)
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus('loading');

    const productId = await createNewDocAndReturnId(formData);
    const urls = await handleUploadImagesAndReturnUrls(productId);

    const productsDocRef = doc(db, 'products', productId);

    const productData = {
      id: productId,
      images: arrayUnion(...urls),
      name: formData.name,
      otherNames: formData.otherNames,
      category: formData.category,
      about: formData.about,
      price: formData.price,
      stock: formData.stock,
      rating: 1,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      lastOrder: serverTimestamp(),
    };

    try {
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
