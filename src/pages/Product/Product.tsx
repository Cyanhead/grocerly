import { useParams } from 'react-router-dom';
import {
  Container,
  DetailsWrapper,
  Details,
  Wrapper,
  Header,
  Name,
  Category,
  Brief,
  Price,
  Group,
  Discount,
  OldPrice,
  Percentage,
  Images,
  WishlistButton,
  BuyButton,
  OtherName,
  Offer,
  Contact,
  Specifications,
} from './Product.styled';
import { useGetSingleProduct } from '../../hooks';
import {
  Counter,
  Gallery,
  Icon,
  Loader,
  SectionHeading2,
  SimilarProducts,
} from '../../components';
import { GalleryProvider } from '../../components/Gallery/context';
import { separateNumberByComma } from '../../helpers';
import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

function Product() {
  const { id: productId = '' } = useParams();
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const {
    isLoading: productIsLoading,
    product,
    error: productError,
  } = useGetSingleProduct(productId);

  if (productIsLoading) {
    return <Loader fullscreen />;
  }

  if (productError || !product) {
    console.error(productError);
    return (
      <div>
        Error loading product: {productError?.message || 'Product not found'}
      </div>
    );
  }

  const { name, otherNames, category, about, price, images } = product;

  function calcOldPrice(price: number) {
    return separateNumberByComma(price * 1.35, 2);
  }

  const oldPrice = calcOldPrice(price);
  function calcPercentage(price: number, oldPrice: number) {
    const percentage = ((price - oldPrice) / oldPrice) * 100;
    return percentage.toFixed(0);
  }

  const percentage = calcPercentage(price, parseFloat(oldPrice));

  return (
    <Container>
      <Wrapper>
        <DetailsWrapper>
          <Images>
            <GalleryProvider>
              <Gallery images={images} />
            </GalleryProvider>
          </Images>
          <Details>
            <Header>
              <Name>{name}</Name>
              <WishlistButton
                onClick={() => {
                  setAddedToWishlist(!addedToWishlist);
                  console.log('Added to wishlist');
                }}
                $variant={addedToWishlist ? 'primary' : 'ghost'}
              >
                <Icon icon={Heart} visuallyHidden="Wishlist" />
              </WishlistButton>
            </Header>
            <div>
              <Category>{category}</Category>Also called
              {otherNames.map((name, index) => {
                if (otherNames.length === 1) {
                  return <OtherName key={name}> {name}.</OtherName>;
                }
                return (
                  <OtherName key={name}>
                    {' '}
                    {index === otherNames.length - 1 && 'or '}
                    {name}
                    {index !== otherNames.length - 1 && ', '}
                    {index === otherNames.length - 1 && '.'}
                  </OtherName>
                );
              })}
            </div>
            rating {/* TODO: implement <Rating /> component */}
            <Brief>{about.split('.')[0]}.</Brief>
            <Price>
              &#36;
              {price}
            </Price>
            <Group>
              <Discount>
                <OldPrice>&#36; {oldPrice}</OldPrice>
                <Percentage> {percentage} &#37;</Percentage>
              </Discount>
              <Counter />
            </Group>
            <BuyButton onClick={() => console.log('Added to cart')}>
              <Icon icon={ShoppingCart} visuallyHidden="Cart" /> Add to cart
            </BuyButton>
            <Contact>
              <SectionHeading2>Need assistance?</SectionHeading2>
              <Offer>Call us at 1233-777 to place your order.</Offer>
              <Offer>
                You can also place orders from your phone using our mobile apps.
              </Offer>
            </Contact>
          </Details>
        </DetailsWrapper>

        <Specifications>{about}</Specifications>

        <SimilarProducts excludedProductId={productId} category={category} />
      </Wrapper>
    </Container>
  );
}

export default Product;
