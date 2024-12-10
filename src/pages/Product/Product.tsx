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
  BuyButton,
  OtherName,
  Offer,
  Contact,
  Specifications,
} from './Product.styled';
import { useGetSingleProduct } from '../../hooks';
import {
  AddToWishlistButton,
  Counter,
  Error,
  Gallery,
  Icon,
  Loader,
  SectionHeading2,
  SimilarProducts,
} from '../../components';
import { GalleryProvider } from '../../components/Gallery/context';
import { separateNumberByComma } from '../../helpers';
import { ShoppingCart } from 'lucide-react';
import { useCartContext } from '../../context';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Stock } from '../../components/Wishlist/Wishlist.styled';

function Product() {
  const { id: productId = '' } = useParams();
  const { dispatch } = useCartContext();
  const [count, setCount] = useState(1);

  const {
    isLoading: productIsLoading,
    product,
    error: productError,
  } = useGetSingleProduct(productId);

  const { state: cart } = useCartContext();

  const isItemInCart = cart.some(item => item.id === productId);

  if (productIsLoading) {
    return <Loader fullscreen />;
  }

  if (productError || !product) {
    console.error(productError);
    return (
      <Error>
        Error loading product: {productError?.message || 'Product not found'}.
      </Error>
    );
  }

  const { name, otherNames, category, about, price, images, stock } = product;

  function calcOldPrice(price: number) {
    return separateNumberByComma(price * 1.35, 2);
  }

  const oldPrice = calcOldPrice(price);
  function calcPercentage(price: number, oldPrice: number) {
    const percentage = ((price - oldPrice) / oldPrice) * 100;
    return percentage.toFixed(0);
  }

  const percentage = calcPercentage(price, parseFloat(oldPrice));

  function handleAddToCart(productId: string) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: productId,
        name,
        price,
        image: images[0].smallURL,
        quantity: count,
      },
    });

    toast.success(`${name} added to cart.`);
  }

  const buttonMessage =
    stock === 0
      ? 'Out of stock'
      : isItemInCart
      ? 'Added to cart'
      : 'Add to cart';

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
              <AddToWishlistButton
                product={{ ...product, image: product.images[0].smallURL }}
              />
            </Header>
            <div>
              <Category>{category}</Category>
              {otherNames.length !== 0 && (
                <>
                  Also called{' '}
                  {otherNames.map((name, index) => {
                    if (otherNames.length === 1) {
                      return <OtherName key={name}> {name}.</OtherName>;
                    }
                    return (
                      <OtherName key={name}>
                        {index === otherNames.length - 1 && 'or '}
                        {name}
                        {index !== otherNames.length - 1 && ', '}
                        {index === otherNames.length - 1 && '.'}
                      </OtherName>
                    );
                  })}
                </>
              )}
            </div>
            {/*rating*/} {/* TODO: implement <Rating /> component */}
            <Stock $stock={stock}>
              {stock === 0 && 'Out of stock'}
              {stock > 0 && stock < 10 && `Only ${stock} left`}
              {stock >= 10 && 'In stock'}
            </Stock>
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
              <Counter count={count} setCount={setCount} />
            </Group>
            <BuyButton
              onClick={() => handleAddToCart(productId)}
              disabled={stock === 0 || isItemInCart}
            >
              <Icon icon={ShoppingCart} visuallyHidden="Cart" /> {buttonMessage}
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
