import { useState } from 'react';
import Header from '../../components/Header';

import { addDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { colRef, db, storage } from '../../components/Firebase';

const AddProduct = () => {
  const imageTypes = ['image/png', 'image/jpg'];

  const AddProductByForm = () => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productOldPrice, setProductOldPrice] = useState(0);
    const [productImage, setProductImage] = useState(null);
    const [error, setError] = useState('');

    const productImageHandler = e => {
      let selectedFile = e.target.files[0];
      if (selectedFile && imageTypes.includes(selectedFile.type)) {
        setProductImage(selectedFile);
        setError('');
      } else {
        setProductImage(null);
        setError('select a valid image type, png or jpg');
      }
    };

    const addProducts = e => {
      e.preventDefault();
      console.log(
        productName,
        productCategory,
        productPrice,
        productOldPrice,
        productImage
      );

      setProductName('');
      setProductCategory('');
      setProductPrice(0);
      setProductOldPrice(0);
      setProductImage(null);
      //
      setError('');
    };

    return (
      <>
        <h1>Add Product By Form (not working!)</h1>
        <form autoComplete="off" onSubmit={addProducts}>
          <label htmlFor="product-name">Name</label>
          <input
            type="text"
            id="product-name"
            required
            onChange={e => setProductName(e.target.value)}
            value={productName}
          />
          <label htmlFor="product-category">Category</label>
          <input
            type="text"
            id="product-category"
            required
            onChange={e => setProductCategory(e.target.value)}
            value={productCategory}
          />
          <br />
          <br />
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            required
            onChange={e => setProductPrice(e.target.value)}
            value={productPrice}
          />
          <label htmlFor="product-old-price">Old price</label>
          <input
            type="number"
            id="product-old-price"
            required
            onChange={e => setProductOldPrice(e.target.value)}
            value={productOldPrice}
          />
          <br />
          <br />
          <label htmlFor="product-image">image</label>
          <input
            type="file"
            id="product-image"
            required
            onChange={productImageHandler}
          />
          <br />
          <br />
          <button>ADD</button>
        </form>
        {error && <p>{error}</p>}
      </>
    );
  };

  const AddProductsByArray = () => {
    const [successMsg, setSuccessMsg] = useState('Products not yet uploaded');

    const SingleProduct = ({ product }) => {
      const [singleImage, setSingleImage] = useState(null);
      const [singleProductError, setSingleProductError] = useState(null);

      const handleImage = e => {
        let selectedFile = e.target.files[0];

        if (selectedFile && imageTypes.includes(selectedFile.type)) {
          setSingleImage(selectedFile);
          setSingleProductError('');

          // set the value to the products object
          product.imageFile = selectedFile;
        } else {
          setSingleImage(null);
          setSingleProductError('select a valid image type, png or jpg');
        }
      };

      return (
        <div style={{ border: '1px solid black' }}>
          {singleProductError && <h3> {singleProductError} </h3>}
          <p>
            image:
            {singleImage !== null ? (
              ` you have selected ${singleImage.name}`
            ) : (
              <input type="file" onInputCapture={handleImage} />
            )}
          </p>
          <p> name: {product.name} </p>
          <p> category: {product.category} </p>
          <p> price: {product.price} </p>
          <p> old price: {product.oldPrice} </p>
          <p style={{ maxWidth: '80%' }}> details: {product.details} </p>
        </div>
      );
    };

    const uploadProductsV2 = productsArray => {
      if (areAllPhotosSelected(productsArray)) {
        productsArray.forEach(product => {
          let fileName = product.imageFile.name;

          // create collection reference
          const createNewDocAndReturnId = async obj => {
            // removes the imageFile property from the product data to be uploaded
            const { imageFile, ...rest } = obj;
            const docRef = await addDoc(colRef, rest);
            let docId = `${docRef.id}`;
            console.log('1. Document written with ID: ', docId);
            return docId;
          };

          createNewDocAndReturnId(product)
            .then(returnedId => {
              const uploadTask = uploadBytesResumable(
                ref(storage, `products/${returnedId}/${fileName}`),
                product.imageFile
              );
              uploadTask.on(
                'state_changed',
                snapshot => {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
                  console.log('2. Uploaded a blob or file!', snapshot);
                },
                error => {
                  console.log('upload task error', error.message);
                },
                () => {
                  let url = '';
                  getDownloadURL(
                    ref(storage, `products/${returnedId}/${fileName}`)
                  )
                    .then(resUrl => {
                      url = resUrl;
                      console.log('3. resUrl & url', url);
                      const productsDocRef = doc(db, 'products', returnedId);
                      updateDoc(productsDocRef, {
                        images: [url],
                      });
                      console.log('4. Created image field');
                      setSuccessMsg('Products successfully uploaded');
                    })
                    .catch(error => {
                      console.log('url error', error.message);
                    });
                }
              );
            })
            .catch(error => {
              console.log(error.message);
            });
        });
      } else {
        console.log('some products have no photos');
      }
    };

    const areAllPhotosSelected = array => {
      let counter = 0;
      array.forEach(arrItem => {
        if (arrItem.imageFile !== null && arrItem.imageFile !== undefined) {
          counter += 1;
        } else {
          console.log(`${arrItem.name} has no image`);

          return false;
        }
      });
      if (counter === array.length) {
        console.log('all items have images');
        return true;
      } else {
        return false;
      }
    };

    const productsList = [
      {
        name: 'apple',
        otherNames: [],
        category: 'fruit',
        price: Number(3),
        oldPrice: Number(5),
        details: `One a day, keeps the doctors away`,
        timestamp: serverTimestamp(),
      },
    ];

    return (
      <>
        <h1>Add Products By Array</h1>
        <h2> {successMsg} </h2>
        <br />
        <button onClick={() => uploadProductsV2(productsList)}>
          upload products
        </button>
        <br />

        {productsList?.map((product, index) => {
          return <SingleProduct key={index} product={product} />;
        })}
      </>
    );
  };

  return (
    <>
      <Header />
      <AddProductByForm />
      <br /> <hr /> <br />
      <AddProductsByArray />
    </>
  );
};

export default AddProduct;
