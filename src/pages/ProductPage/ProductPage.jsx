import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

import {
  ProductPageContainer,
  ProductPageWrap,
  ProductLanding,
  ProductPageLeft,
  ProductImagePreviewWrap,
  ProductImagePreview,
  ProductImageSlide,
  ProductImageWrap,
  ProductImage,
  ProductPageRight,
  TopRow,
  ProductName,
  AddToWishlistBtn,
  ProductCategory,
  ProductBrief,
  Price,
  QuantityWrap,
  DiscountWrap,
  OldPrice,
  DiscountPercent,
  AddToCartBtn,
  BtnSpan,
  Promotional,
  ProductDetailsWrap,
  ProductDetailsHeading,
  ProductDetails,
  SimilarProducts,
  SimilarProductsHeading,
  SimilarProductsMarquee,
} from './product-page.style';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { IconWrap } from '../../components/others.style';
import SimilarProductTile from '../../components/SimilarProductTile/SimilarProductTile';

import { query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { colRef } from '../../components/Firebase/firebase';
import ItemQuantityCounter from '../../components/ItemQuantityCounter';

const ProductPage = () => {
  const [previewImage, setPreviewImage] = useState(0);
  const [similarProductList, setSimilarProductList] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);

  let params = useParams();
  const [productUrl, setProductUrl] = useState(params.productId);

  const fetchProductMatchedById = async () => {
    // const docRef = doc(colRef, params.productId);
    const docRef = doc(colRef, productUrl);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setCurrentProduct(docSnap.data());

      // fetches similar products
      fetchSimilarProducts(docSnap.data().category);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  const fetchSimilarProducts = async category => {
    const q = query(colRef, where('category', '==', category));

    const querySnapshot = await getDocs(q);

    let fetchedData = [];
    querySnapshot.forEach(doc => {
      fetchedData.push({ ...doc.data(), id: doc.id });
    });
    setSimilarProductList(fetchedData);

    // ? will it be possible to exclude this product from the list?
  };

  useEffect(() => {
    fetchProductMatchedById();
  }, [productUrl]);

  return (
    <>
      <Header />

      {currentProduct.length !== 0 ? (
        <ProductPageContainer>
          <ProductPageWrap>
            <ProductLanding>
              <ProductPageLeft>
                <ProductImagePreviewWrap>
                  <ProductImagePreview
                    src={currentProduct?.images[previewImage] || ''}
                    alt=""
                  />
                </ProductImagePreviewWrap>
                <ProductImageSlide>
                  {
                    // ? consider the max amount of product photos uploadable
                    currentProduct?.images.map((image, i) => {
                      return (
                        <ProductImageWrap
                          key={i}
                          onMouseEnter={() => setPreviewImage(i)}
                          active={i === previewImage ? 'active' : ''}
                        >
                          <ProductImage src={image} alt="" />
                        </ProductImageWrap>
                      );
                    })
                  }
                </ProductImageSlide>
              </ProductPageLeft>
              <ProductPageRight>
                <TopRow>
                  <ProductName>{currentProduct?.name || 'name'}</ProductName>
                  <AddToWishlistBtn
                  // click function goes here
                  >
                    <IconWrap>
                      <FiHeart />
                    </IconWrap>
                  </AddToWishlistBtn>
                </TopRow>
                <ProductCategory>
                  Category: {currentProduct?.category || 'category'}
                </ProductCategory>
                rating
                {/* todo: star rating */}
                {/* todo: label */}
                <ProductBrief>{currentProduct?.brief || 'brief'}</ProductBrief>
                <Price>
                  &#36;
                  {currentProduct?.price}
                </Price>
                <QuantityWrap>
                  <DiscountWrap>
                    <OldPrice>
                      &#36; {currentProduct?.oldPrice || 'old price'}
                    </OldPrice>
                    <DiscountPercent>
                      &#45;
                      {Math.floor(
                        ((currentProduct?.oldPrice - currentProduct?.price) /
                          currentProduct?.oldPrice) *
                          100
                      )}
                      &#37;
                    </DiscountPercent>
                  </DiscountWrap>
                  <ItemQuantityCounter />
                </QuantityWrap>
                <AddToCartBtn>
                  <IconWrap>
                    <FiShoppingCart />
                  </IconWrap>
                  <BtnSpan>Add to cart</BtnSpan>
                </AddToCartBtn>
                <Promotional>Promotional content</Promotional>
              </ProductPageRight>
            </ProductLanding>
            <ProductDetailsWrap>
              <ProductDetailsHeading>product details</ProductDetailsHeading>
              <ProductDetails>
                {currentProduct?.details || 'details'}
              </ProductDetails>
            </ProductDetailsWrap>
            <SimilarProducts>
              <SimilarProductsHeading>similar products</SimilarProductsHeading>
              <SimilarProductsMarquee>
                {similarProductList.slice(0, 10).map(product => {
                  return (
                    <SimilarProductTile
                      key={product.id}
                      product={product}
                      setProductUrl={setProductUrl}
                    />
                  );
                })}
              </SimilarProductsMarquee>
            </SimilarProducts>
          </ProductPageWrap>
        </ProductPageContainer>
      ) : (
        // * replace with loading component
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2>loading...</h2>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductPage;
