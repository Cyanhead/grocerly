import { UploadProductsFromFilePropsType } from './UploadProductsFromFile.type';
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { Button, Layout } from '../../../../components';
import { NewProductType } from '../../../../components/Form/AddProductForm/AddProductForm.type';
import { products } from '../../../../data/products';
import { createDocAndReturnIdAndDocRef } from '../../../../helpers/createDoc';
import { Item } from './UploadProductsFromFile.styled';
import { useState } from 'react';
import { db } from '../../../../context/Firebase';

function UploadProductsFromFile({
  closeModal,
}: UploadProductsFromFilePropsType) {
  const [loading, setLoading] = useState(false);

  const allCategories = products.map(product => product.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  async function uploadToFirebase() {
    setLoading(true);
    try {
      const uploadPromises = products.map(async product => {
        const [productId, docRef] = await createDocAndReturnIdAndDocRef(
          'products'
        );

        type ProductData = Omit<NewProductType, 'images'> & {
          id: string;
          images: [];
        };

        const productData: ProductData = {
          ...product,
          id: productId,
          rating: 1,
          images: [],
          createdAt: serverTimestamp() as Timestamp,
          updatedAt: null as unknown as Timestamp,
          firstOrder: null as unknown as Timestamp,
          lastOrder: null as unknown as Timestamp,
        };

        const productCategoriesDocRef = doc(
          db,
          'product-categories',
          'categories'
        );

        try {
          await updateDoc(productCategoriesDocRef, {
            allCategories: arrayUnion(...uniqueCategories),
          });

          await updateDoc(docRef, productData);
          return productId;
        } catch (error) {
          console.error('Error updating document:', error);
          return null;
        }
      });

      const result = await Promise.allSettled(uploadPromises);

      // Log the result of each upload
      result.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Document ${index + 1} uploaded successfully`);
        } else if (result.status === 'rejected') {
          console.error(
            `Error uploading document ${index + 1}:`,
            result.reason
          );
        }
      });
    } catch (error) {
      setLoading(false);
      console.error('Error in uploadToFirebase:', error);
    } finally {
      setLoading(false);
      closeModal();
    }
  }
  async function handleSubmit() {
    uploadToFirebase();
  }

  return (
    <Layout.FlexCol $gap={16} style={{ height: '80vh', overflowY: 'scroll' }}>
      {products.map((product, index) => (
        <Item key={index} style={{ border: '1px solid black' }}>
          <p>
            <strong>{index + 1}</strong>
          </p>
          <p>
            <strong>Name:</strong> {product.name}
          </p>
          <p>
            <strong>About:</strong> {product.about}
          </p>
          <p>
            <strong>Price:</strong> {product.price}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Other Names:</strong> {product.otherNames.join(', ')}
          </p>
        </Item>
      ))}

      <Button onClick={handleSubmit} disabled={loading}>
        Upload
      </Button>
    </Layout.FlexCol>
  );
}

export default UploadProductsFromFile;
