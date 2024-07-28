import { useEffect, useState } from 'react';

import {
  addDoc,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { productsColRef, db, storage } from '../../context/Firebase';

import { generateRandom } from '../../helpers/generateRandom';
import { useUserListContext } from '../../context/UsersListContext';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

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
    const generatePrice = () => {
      return generateRandom(5, 64);
    };

    const generateDiscount = () => {
      return generateRandom(65, 100);
    };

    const itemsToBeUploaded = [
      {
        localId: Math.random().toString(36).substring(7),
        name: 'green pepper',
        otherNames: [],
        category: 'Vegetable',
        price: Number(generatePrice()),
        oldPrice: Number(generateDiscount()),
        brief: 'green pepper is popularly used in salads',
        details: `green pepper is popularly used in salads, stir-fries, and other dishes. It is also a great source of vitamin C and vitamin A, as well as other nutrients like vitamin E, vitamin B6, folate, and vitamin K. Additionally, it is low in calories and packed with antioxidants.`,
        timestamp: serverTimestamp()
      },
      {
        localId: Math.random().toString(36).substring(7),
        name: 'lemongrass',
        otherNames: [],
        category: 'Vegetable',
        price: Number(generatePrice()),
        oldPrice: Number(generateDiscount()),
        brief: 'lemongrass is used in teas, soups, and curries',
        details: `lemongrass is used in teas, soups, and curries. It is also suitable for poultry, fish, beef, and seafood. It is also a great source of vitamin A, vitamin C, folate, magnesium, zinc, copper, iron, potassium, phosphorus, calcium, and manganese. Additionally, it is low in calories and packed with antioxidants.`,
        timestamp: serverTimestamp()
      },
      {
        localId: Math.random().toString(36).substring(7),
        name: 'lime',
        otherNames: [],
        category: 'Fruit',
        price: Number(generatePrice()),
        oldPrice: Number(generateDiscount()),
        brief: 'lime is a great source of vitamin C',
        details: `limes are a popular ingredient in drinks, desserts, and marinades. They are also a great source of vitamin C, vitamin B6, potassium, folate, magnesium, and thiamine. Additionally, they are low in calories and packed with antioxidants.`,
        timestamp: serverTimestamp()
      },
      {
        localId: Math.random().toString(36).substring(7),
        name: 'lemon',
        otherNames: [],
        category: 'Fruit',
        price: Number(generatePrice()),
        oldPrice: Number(generateDiscount()),
        brief: 'a lemon has a sour taste, yet a pleasant aroma',
        details: `Lemons are a popular ingredient in drinks, desserts, and marinades. They are also a great source of vitamin C, vitamin B6, potassium, folate, magnesium, and thiamine. Additionally, they are low in calories and packed with antioxidants.`,
        timestamp: serverTimestamp()
      },
      {
        localId: Math.random().toString(36).substring(7),
        name: 'onion',
        otherNames: [],
        category: 'Vegetable',
        price: Number(generatePrice()),
        oldPrice: Number(generateDiscount()),
        brief: 'onions are a popular ingredient in many dishes',
        details: `An onion has many layers and a strong taste. It is a popular ingredient in many dishes. It is also a great source of vitamin C, vitamin B6, potassium, folate, magnesium, and thiamine. Additionally, it is low in calories and packed with antioxidants.`,
        timestamp: serverTimestamp()
      },
      {
        localId: Math.random().toString(36).substring(7),
        name: 'orange',
        otherNames: [],
        category: 'Fruit',
        price: Number(generatePrice()),
        oldPrice: Number(generateDiscount()),
        brief: 'Oranges are a great source of vitamin C',
        details: `Oranges are a popular ingredient in drinks, desserts, and marinades. They are also a great source of vitamin C, vitamin B6, potassium, folate, magnesium, and thiamine. Additionally, they are low in calories and packed with antioxidants.`,
        timestamp: serverTimestamp()
      },
      {
        localId: Math.random().toString(36).substring(7),
        name: 'parsley',
        otherNames: [],
        category: 'Vegetable',
        price: Number(generatePrice()),
        oldPrice: Number(generateDiscount()),
        brief: 'parsley is a popular ingredient in many dishes',
        details: `The parsley plant has a mild taste and a pleasant aroma. It is a popular ingredient for soups, salads, and other dishes.`,
        timestamp: serverTimestamp()
      },
      // {
      //   localId: Math.random().toString(36).substring(7),
      //   name: 'xxx',
      //   otherNames: [],
      //   category: 'xxx',
      //   price: Number(generatePrice()),
      //   oldPrice: Number(generateDiscount()),
      //   brief: 'xxx',
      //   details: `xxx`,
      //   timestamp: serverTimestamp()
      // },
      {
        localId: Math.random().toString(36).substring(7),
        name: 'pear',
        otherNames: [],
        category: 'Fruit',
        price: Number(generatePrice()),
        oldPrice: Number(generateDiscount()),
        brief: 'pears are soft and have a mild taste',
        details: `Pears are used in desserts, salads, and other dishes. They are also a great source of vitamin C, vitamin K, potassium, copper, and folate. Additionally, they are low in calories and packed with antioxidants.`,
        timestamp: serverTimestamp()
      },
      {
        localId: Math.random().toString(36).substring(7),
        name: 'peas',
        otherNames: [],
        category: 'Vegetable',
        price: Number(generatePrice()),
        oldPrice: Number(generateDiscount()),
        brief: 'peas are a popular ingredient in many dishes',
        details: `Peas are used in soups, salads, and other dishes. They are also a great source of vitamin C, vitamin K, potassium, copper, and folate. Additionally, they are low in calories and packed with antioxidants.`,
        timestamp: serverTimestamp()
      }
      // ,{        localId: Math.random().toString(36).substring(7),
      //   name: 'xxx',
      //   otherNames: [],
      //   category: 'xxx',
      //   price: Number(generatePrice()),
      //   oldPrice: Number(generateDiscount()),
      //   brief: 'xxx',
      //   details: `xxx`,
      //   timestamp: serverTimestamp()
      // }
    ];

    const [successMsg, setSuccessMsg] = useState('Products not yet uploaded');
    const [productList, setProductList] = useState(itemsToBeUploaded);

    const SingleProduct = ({ product }) => {
      const [multipleImages, setMultipleImages] = useState([]);
      const [imageTypeError, setImageTypeError] = useState(null);
      // const [productData, setProductData] = useState();

      const handleMultipleImages = e => {
        let selectedFiles = e.target.files;

        let imageArray = [...selectedFiles];
        const validImages = [];

        imageArray.forEach(file => {
          if (file && imageTypes.includes(file.type)) {
            validImages.push(file);

            setMultipleImages(() => [...validImages]);
            setImageTypeError('');
          } else {
            setMultipleImages(null);
            setImageTypeError('select a valid image type, png or jpg');
          }
        });
      };

      const addImagesToProduct = item => {
        // clone the current productList
        // const copyOfProductList = [...productList];
        const copyOfProductList = structuredClone(productList);

        // find the index of the item to be updated
        const itemIndex = copyOfProductList.findIndex(
          product => product.localId === item.localId
        );

        // add the imageFiles property to the item
        item.imageFiles = multipleImages;

        // update the item in the copyOfProductList
        copyOfProductList[itemIndex] = item;

        // set the productList to the updated copyOfProductList
        setProductList(copyOfProductList);

        return;
      };

      return (
        <li style={{ border: '1px solid black', padding: '32px 8px' }}>
          {imageTypeError && <h3> Image error: {imageTypeError} </h3>}
          {multipleImages?.length
            ? multipleImages?.map((photo, i) => {
                return <p key={i}>You have selected ${photo.name}</p>;
              })
            : !product.imageFiles?.length && (
                <input
                  type="file"
                  onInputCapture={handleMultipleImages}
                  multiple
                />
              )}

          {product.imageFiles?.length ? (
            <>
              <p>
                You have added {product.imageFiles?.length} image
                {product.imageFiles?.length === 1 ? '' : 's'}
              </p>
              <ol>
                {product.imageFiles?.map((photo, i) => {
                  return <li key={i}>${photo.name}</li>;
                })}
              </ol>
            </>
          ) : (
            <button type="button" onClick={() => addImagesToProduct(product)}>
              add images
            </button>
          )}
          <br />
          <p> name: {product.name} </p>
          <p> category: {product.category} </p>
          <p> price: {product.price} </p>
          <p> old price: {product.oldPrice} </p>
          <p> brief: {product.brief} </p>
        </li>
      );
    };

    const handleProductUpload = productsArray => {
      // console.log({ productsArray });

      if (checkIfAllProductsHaveImages(productsArray)) {
        // console.log('all products have images');

        productsArray.forEach(product => {
          let allImages = product.imageFiles;

          // create collection reference
          const createNewDocAndReturnId = async obj => {
            // removes the imageFile and localId properties from the product data to be uploaded
            const { imageFiles, localId, ...rest } = obj;
            const docRef = await addDoc(productsColRef, rest);
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
                          images: arrayUnion(url)
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
        return;
      }

      return 'something went wrong';
    };

    const checkIfAllProductsHaveImages = array => {
      let counter = 0;

      array.forEach(arrItem => {
        if (arrItem.imageFiles?.length) {
          counter += 1;
        }
      });

      if (counter === array.length) {
        console.log('all products have photos');
        return true;
      }

      console.log('some products have no photos');
      return false;
    };

    return (
      <div style={{ width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
          <h1>Add Products By Array</h1>
          <h2> {successMsg} </h2>
          <br />
          <button onClick={() => handleProductUpload(productList)}>
            upload products
          </button>
          <br /> <br />
          <ol>
            {productList?.map(product => {
              return <SingleProduct product={product} key={product.localId} />;
            })}
          </ol>
        </div>
      </div>
    );
  };

  // const { isUserAdmin } = useAuthContext();
  // console.log('isUserAdmin', isUserAdmin);

  // const gotoRoute = useNavigate();

  // useEffect(() => {
  //   if (!isUserAdmin) {
  //     gotoRoute(-1);
  //     return;
  //   }
  //   console.log('isUserAdmin', isUserAdmin);

  //   // first
  //   // return () => {
  //   //   second
  //   // }
  // }, [gotoRoute, isUserAdmin]);

  return (
    <>
      {/* <AddProductByForm /> */}
      {/* <br /> <hr /> <br /> */}
      <AddProductsByArray />
    </>
  );
};

export default AddProduct;
