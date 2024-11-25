import { useRef } from 'react';

import {
  Card,
  Image,
  Price,
  Title,
  Wrapper,
} from '../Wishlist/Wishlist.styled';
import { ModalBackground, SectionHeading2 } from '../BaseStyled';
import Layout from '../Layout';
import Button, { LinkButton } from '../Button';
import Icon from '../Icon';
import { ChevronLeft, ShoppingCart, Trash } from 'lucide-react';
import { CartPropsType } from './Cart.type';
import { useClickOutside, useLockScroll } from '../../hooks';
import { useCartContext } from '../../context';

function Cart({ isVisible, setIsVisible }: CartPropsType) {
  const { state: cart, dispatch } = useCartContext();

  const cartRef = useRef(null);
  useClickOutside([cartRef], () => setIsVisible(false));
  useLockScroll(isVisible);

  function handleRemoveAll() {
    dispatch({ type: 'REMOVE_ALL_FROM_CART' });
  }

  function removeFromCart(productId: string) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: productId,
      },
    });
  }

  return (
    <>
      <ModalBackground $show={isVisible} />

      <Wrapper $isVisible={isVisible} ref={cartRef}>
        <Layout.FlexRow $justify="space-between" $align="center">
          <Button $variant="normal" onClick={() => setIsVisible(false)}>
            <Icon icon={ChevronLeft} size={32} />
            <SectionHeading2>Cart</SectionHeading2>
          </Button>
          <Button $theme="danger" $variant="normal" onClick={handleRemoveAll}>
            <Icon icon={Trash} />
            Remove all
          </Button>
        </Layout.FlexRow>
        {cart.length === 0 && (
          <Layout.FlexCol
            $align="center"
            $justify="center"
            $gap={16}
            style={{ flex: 1 }}
          >
            <SectionHeading2>Cart is empty</SectionHeading2>
            <LinkButton to="/products">
              <Icon icon={ShoppingCart} />
              Shop now
            </LinkButton>
          </Layout.FlexCol>
        )}

        {cart.map(({ id, name, price, image, quantity }) => (
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
                <Price>
                  {quantity} {quantity === 1 ? 'item' : 'items'}
                </Price>
              </Layout.FlexCol>
              <Layout.FlexCol $align="flex-end">
                <Button
                  $theme="danger"
                  $variant="normal"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
                {/* <Counter count={quantity} setCount={() => {}} /> */}
                <Price>Subtotal: ${price * quantity}</Price>
              </Layout.FlexCol>
            </Layout.FlexRow>
          </Card>
        ))}
        {cart.length !== 0 && (
          <Layout.FlexCol $align="flex-end">
            <Price style={{ marginBottom: '10px' }}>
              Total: $
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </Price>

            <Button onClick={() => setIsVisible(false)}>Checkout</Button>
          </Layout.FlexCol>
        )}
      </Wrapper>
    </>
  );
}

export default Cart;
