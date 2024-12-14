import { WishlistPropsType } from './Wishlist.type';
import { CartState, useCartContext, useWishlistContext } from '../../context';
import {
  Card,
  Column,
  Image,
  Price,
  Stock,
  Title,
  Wrapper,
} from './Wishlist.styled';
import Button, { LinkButton } from '../Button';
import Icon from '../Icon';
import { ChevronLeft, ShoppingCart, Trash } from 'lucide-react';
import { ModalBackground, SectionHeading2 } from '../BaseStyled';
import Layout from '../Layout';
import { useRef } from 'react';
import { useClickOutside, useLockScroll } from '../../hooks';
import toast from 'react-hot-toast';

function Wishlist({ isVisible, setIsVisible }: WishlistPropsType) {
  const { state: wishlist, dispatch: wishlistDispatch } = useWishlistContext();
  const { dispatch: cartDispatch } = useCartContext();

  const wishlistRef = useRef<HTMLDivElement>(null);
  useClickOutside([wishlistRef], () => setIsVisible(false));
  useLockScroll(isVisible);

  function handleRemoveAll() {
    wishlistDispatch({ type: 'REMOVE_ALL_FROM_WISHLIST' });
  }

  function removeFromWishlist(productId: string) {
    wishlistDispatch({
      type: 'REMOVE_FROM_WISHLIST',
      payload: {
        id: productId,
      },
    });
  }

  function handleAddToCart(product: CartState[0]) {
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });

    toast.success(`${product.name} added to cart.`);
  }

  return (
    <>
      <ModalBackground $show={isVisible} />

      <Wrapper $isVisible={isVisible} ref={wishlistRef}>
        <Layout.FlexRow $justify="space-between" $align="center">
          <Button $variant="normal" onClick={() => setIsVisible(false)}>
            <Icon icon={ChevronLeft} size={32} />
            <SectionHeading2>Wishlist</SectionHeading2>
          </Button>
          <Button $theme="danger" $variant="normal" onClick={handleRemoveAll}>
            <Icon icon={Trash} />
            Remove all
          </Button>
        </Layout.FlexRow>
        {wishlist.length === 0 && (
          <Layout.FlexCol
            $align="center"
            $justify="center"
            $gap={16}
            style={{ flex: 1 }}
          >
            <SectionHeading2>Wishlist is empty</SectionHeading2>
            <LinkButton to="/products">
              <Icon icon={ShoppingCart} />
              Shop now
            </LinkButton>
          </Layout.FlexCol>
        )}
        <Column>
          {wishlist.map(({ id, name, price, image, stock }) => (
            <Card key={id}>
              <Image src={image} alt={name} />
              <Layout.FlexRow
                $gap={8}
                $width="100%"
                $justify="space-between"
                $align="stretch"
              >
                <Layout.FlexCol $gap={8} $justify="space-between">
                  <Title>{name}</Title>
                  <Price>${price}</Price>
                  <Stock $stock={stock}>
                    {stock < 1 && 'Out of stock'}
                    {stock > 0 && stock < 10 && `Only ${stock} left`}
                    {stock >= 10 && 'In stock'}
                  </Stock>
                </Layout.FlexCol>
                <Layout.FlexCol $align="flex-end">
                  <Button
                    $theme="danger"
                    $variant="normal"
                    onClick={() => removeFromWishlist(id)}
                  >
                    Remove
                  </Button>
                  <Button
                    $variant="ghost"
                    disabled={stock < 1}
                    onClick={() =>
                      handleAddToCart({ id, name, price, image, quantity: 1 })
                    }
                  >
                    <Icon icon={ShoppingCart} />
                    Add
                  </Button>
                </Layout.FlexCol>
              </Layout.FlexRow>
            </Card>
          ))}
        </Column>
      </Wrapper>
    </>
  );
}

export default Wishlist;
