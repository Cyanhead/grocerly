import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

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

import { IconWrap } from '../../components/others.style';
import SimilarProductTile from '../../components/SimilarProductTile/SimilarProductTile';

import { query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { productsColRef } from '../../context/Firebase/firebase';
import ItemQuantityCounter from '../../components/ItemQuantityCounter';
import { useCartContext } from '../../context/CartContext';
import { useWishlistContext } from '../../context/WIshlistContext';
import Loading from '../../components/Loading';

const ProductPage = () => {
  const [previewImage, setPreviewImage] = useState(0);
  const [similarProductList, setSimilarProductList] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);

  const { onAdd, qty, setQty } = useCartContext();
  const { wishlistItems, onWishlistAdd } = useWishlistContext();

  const handleAddToCart = () => {
    onAdd(currentProduct, qty);
    setQty(1);
  };

  const { productId } = useParams();

  useEffect(() => {
    const fetchSimilarProducts = async category => {
      const q = query(productsColRef, where('category', '==', category));

      const querySnapshot = await getDocs(q);

      const fetchedData = [];
      querySnapshot.forEach(doc => {
        fetchedData.push({ ...doc.data(), id: doc.id });
      });

      // returns a list of products that doesn't contain the currently viewed product
      const productListExceptThisProduct = fetchedData.filter(
        item => item.id !== productId
      );
      setSimilarProductList(productListExceptThisProduct);
    };

    const fetchProductMatchedById = async () => {
      const docRef = doc(productsColRef, productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCurrentProduct({ ...docSnap.data(), id: docSnap.id });

        // fetches similar products
        fetchSimilarProducts(docSnap.data().category);
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    };

    fetchProductMatchedById();
  }, [productId]);

  return (
    <>
      {currentProduct.length !== 0 ? (
        <ProductPageContainer>
          <ProductPageWrap>
            <ProductLanding>
              <ProductPageLeft>
                <ProductImageSlide mobile>
                  {
                    // TODO consider the max amount of product photos uploadable
                    currentProduct?.images?.map((image, i) => {
                      return <ProductImage key={i} src={image} alt="" />;
                    })
                  }
                </ProductImageSlide>
                <ProductImagePreviewWrap>
                  <ProductImagePreview
                    src={currentProduct?.images[previewImage] || ''}
                    alt=""
                  />
                </ProductImagePreviewWrap>
                <ProductImageSlide>
                  {
                    // TODO consider the max amount of product photos uploadable
                    currentProduct?.images?.map((image, i) => {
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
                    onClick={() => onWishlistAdd(currentProduct)}
                  >
                    <IconWrap
                      fg={props => props.theme.color.primary}
                      fgHover={props => props.theme.color.primaryHover}
                      bgHover={props => props.theme.color.primaryLite}
                      bordRad="50%"
                      pad="16px"
                    >
                      {wishlistItems.find(
                        item => item.id === currentProduct.id
                      ) ? (
                        <FaHeart />
                      ) : (
                        <FiHeart />
                      )}
                    </IconWrap>
                  </AddToWishlistBtn>
                </TopRow>
                <ProductCategory>
                  Category: {currentProduct?.category || 'category'}
                </ProductCategory>
                rating
                {/* TODO: add star rating */}
                {/* TODO: add label */}
                {/* TODO add wishlist button beside rating */}
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
                <AddToCartBtn onClick={handleAddToCart}>
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
                {similarProductList.slice(0, 10)?.map(product => {
                  return (
                    <SimilarProductTile key={product.id} product={product} />
                  );
                })}
              </SimilarProductsMarquee>
            </SimilarProducts>
          </ProductPageWrap>
        </ProductPageContainer>
      ) : (
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <Loading />
        </div>
      )}
    </>
  );
};

export default ProductPage;
