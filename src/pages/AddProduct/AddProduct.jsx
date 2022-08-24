import { useState } from 'react';

import {
  addDoc,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { colRef, db, storage } from '../../context/Firebase';

import { generateRandom } from '../../helpers/generateRandom';

const AddProduct = () => {
  const imageTypes = ['image/png', 'image/jpg', 'image/webp'];

  // const AddProductByForm = () => {
  //   const [productName, setProductName] = useState('');
  //   const [productCategory, setProductCategory] = useState('');
  //   const [productPrice, setProductPrice] = useState(0);
  //   const [productOldPrice, setProductOldPrice] = useState(0);
  //   const [productImage, setProductImage] = useState(null);
  //   const [error, setError] = useState('');

  //   const productImageHandler = e => {
  //     let selectedFile = e.target.files[0];
  //     if (selectedFile && imageTypes.includes(selectedFile.type)) {
  //       setProductImage(selectedFile);
  //       setError('');
  //     } else {
  //       setProductImage(null);
  //       setError('select a valid image type, png or jpg');
  //     }
  //   };

  //   const addProducts = e => {
  //     e.preventDefault();
  //     console.log(
  //       productName,
  //       productCategory,
  //       productPrice,
  //       productOldPrice,
  //       productImage
  //     );

  //     setProductName('');
  //     setProductCategory('');
  //     setProductPrice(0);
  //     setProductOldPrice(0);
  //     setProductImage(null);
  //     //
  //     setError('');
  //   };

  //   return (
  //     <>
  //       <h1>Add Product By Form (not working!)</h1>
  //       <form autoComplete="off" onSubmit={addProducts}>
  //         <label htmlFor="product-name">Name</label>
  //         <input
  //           type="text"
  //           id="product-name"
  //           required
  //           onChange={e => setProductName(e.target.value)}
  //           value={productName}
  //         />
  //         <label htmlFor="product-category">Category</label>
  //         <input
  //           type="text"
  //           id="product-category"
  //           required
  //           onChange={e => setProductCategory(e.target.value)}
  //           value={productCategory}
  //         />
  //         <br />
  //         <br />
  //         <label htmlFor="product-price">Price</label>
  //         <input
  //           type="number"
  //           id="product-price"
  //           required
  //           onChange={e => setProductPrice(e.target.value)}
  //           value={productPrice}
  //         />
  //         <label htmlFor="product-old-price">Old price</label>
  //         <input
  //           type="number"
  //           id="product-old-price"
  //           required
  //           onChange={e => setProductOldPrice(e.target.value)}
  //           value={productOldPrice}
  //         />
  //         <br />
  //         <br />
  //         <label htmlFor="product-image">image</label>
  //         <input
  //           type="file"
  //           id="product-image"
  //           required
  //           onChange={productImageHandler}
  //         />
  //         <br />
  //         <br />
  //         <button>ADD</button>
  //       </form>
  //       {error && <p>{error}</p>}
  //     </>
  //   );
  // };

  const AddProductsByArray = () => {
    const [successMsg, setSuccessMsg] = useState('Products not yet uploaded');

    const SingleProduct = ({ product }) => {
      const [multipleImages, setMultipleImages] = useState([]);
      const [imageTypeError, setImageTypeError] = useState('null');

      const handleMultipleImages = e => {
        let selectedFiles = e.target.files;

        let imageArray = [...selectedFiles];
        const validImages = [];

        imageArray.forEach(file => {
          if (file && imageTypes.includes(file.type)) {
            validImages.push(file);

            setMultipleImages(() => [...validImages]);
            setImageTypeError('');

            // set the value to the products object
            product.imageFiles = [...validImages];
            console.log('img props', product.imageFiles);
          } else {
            setMultipleImages(null);
            setImageTypeError('select a valid image type, png or jpg');
          }
        });
      };

      return (
        <div style={{ border: '1px solid black' }}>
          {imageTypeError && <h3> {imageTypeError} </h3>}

          {multipleImages.length !== 0 ? (
            multipleImages.map((photo, i) => {
              return <p key={i}>image: ` you have selected ${photo.name}`</p>;
            })
          ) : (
            <input type="file" onInputCapture={handleMultipleImages} multiple />
          )}

          <p> name: {product.name} </p>
          <p> category: {product.category} </p>
          <p> price: {product.price} </p>
          <p> old price: {product.oldPrice} </p>
          <p style={{ maxWidth: '80%' }}> details: {product.details} </p>
        </div>
      );
    };

    const handleProductUpload = productsArray => {
      if (areAllPhotosSelected(productsArray)) {
        productsArray.forEach(product => {
          let allImages = product.imageFiles;

          // create collection reference
          const createNewDocAndReturnId = async obj => {
            // removes the imageFile property from the product data to be uploaded
            const { imageFiles, ...rest } = obj;
            const docRef = await addDoc(colRef, rest);
            let docId = `${docRef.id}`;
            console.log('1. Document written with ID: ', docId);
            return docId;
          };

          createNewDocAndReturnId(product)
            .then(returnedId => {
              allImages.forEach(imgFile => {
                const uploadTask = uploadBytesResumable(
                  ref(storage, `products/${returnedId}/${imgFile.name}`),
                  imgFile
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
                      ref(storage, `products/${returnedId}/${imgFile.name}`)
                    )
                      .then(resUrl => {
                        url = resUrl;
                        console.log('3. resUrl & url', url);
                        const productsDocRef = doc(db, 'products', returnedId);
                        updateDoc(productsDocRef, {
                          images: arrayUnion(url),
                        });
                        console.log('4. Created image field');
                        setSuccessMsg('Products successfully uploaded');
                      })
                      .catch(error => {
                        console.log('url error', error.message);
                      });
                  }
                );
              });
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
      let totalLength = 0;
      array.forEach(arrItem => {
        for (let i = 0; i < arrItem.imageFiles.length; i++) {
          if (
            arrItem.imageFiles[i] !== null &&
            arrItem.imageFile[i] !== undefined
          ) {
            counter += 1;
            totalLength += arrItem.imageFiles.length;
          } else {
            console.log(`${arrItem.name} has no image`);
            return false;
          }
        }
      });
      if (counter === totalLength) {
        console.log('all items have images');
        return true;
      } else {
        return false;
      }
    };

    const productsList = [
      {
        name: 'xxx',
        otherNames: [],
        category: 'xxx',
        price: Number(generateRandom(4, 8)),
        oldPrice: Number(9),
        brief: 'xxx.',
        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        assumenda. Incidunt, hic illo. Alias adipisci exercitationem quod ab
        eum provident veniam tenetur eos magni iure libero, quo debitis at
        sequi!`,
        timestamp: serverTimestamp(),
      },
    ];

    return (
      <div style={{ width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
          <h1>Add Products By Array</h1>
          <h2> {successMsg} </h2>
          <br />
          <button onClick={() => handleProductUpload(productsList)}>
            upload products
          </button>
          <br /> <br />
          {productsList?.map((product, index) => {
            return <SingleProduct key={index} product={product} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* <AddProductByForm /> */}
      {/* <br /> <hr /> <br /> */}
      <AddProductsByArray />
    </>
  );
};

export default AddProduct;
