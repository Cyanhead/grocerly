import { useRef } from 'react';

import {
  Card,
  Column,
  Image,
  Price,
  Title,
  Wrapper,
} from '../Wishlist/Wishlist.styled';
import { ModalBackground, SectionHeading2, TextLink } from '../BaseStyled';
import Layout from '../Layout';
import Button, { LinkButton } from '../Button';
import Icon from '../Icon';
import { ChevronLeft, ShoppingCart, Trash, X } from 'lucide-react';
import { CartPropsType } from './Cart.type';
import { useClickOutside, useLockScroll } from '../../hooks';
import { useCartContext } from '../../context';
import Counter from '../Counter';
import { RemoveButton } from './Cart.styled';
import { toast } from 'react-hot-toast';

function Cart({ isVisible, setIsVisible }: CartPropsType) {
  const { state: cart, dispatch } = useCartContext();

  const cartRef = useRef(null);
  useClickOutside([cartRef], () => setIsVisible(false));
  useLockScroll(isVisible);

  function handleRemoveAll() {
    dispatch({ type: 'REMOVE_ALL_FROM_CART' });

    toast.success('All items removed from cart.');
  }

  function removeFromCart(productId: string, productName: string) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: productId,
      },
    });

    toast.success(`${productName} removed from cart.`);
  }

  function handleCounterChange(productId: string, quantity: number) {
    dispatch({
      type: 'UPDATE_QUANTITY_IN_CART',
      payload: {
        id: productId,
        quantity,
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
            <Icon icon={X} />
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

        <Column>
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
                  <Title as={TextLink} to={`/products/${id}`} $isActive>
                    {name}
                  </Title>
                  <Price>${price}</Price>
                  <Counter
                    count={quantity}
                    setCount={quantity => handleCounterChange(id, quantity)}
                  />
                </Layout.FlexCol>
                <Layout.FlexCol $align="flex-end" $justify="space-between">
                  <RemoveButton
                    $theme="danger"
                    $variant="normal"
                    onClick={() => removeFromCart(id, name)}
                  >
                    <Icon icon={Trash} /> Remove
                  </RemoveButton>

                  <Price>
                    <span
                      style={{
                        color: '#555',
                        fontWeight: 400,
                      }}
                    >
                      Subtotal:
                    </span>{' '}
                    ${price * quantity}
                  </Price>
                </Layout.FlexCol>
              </Layout.FlexRow>
            </Card>
          ))}
        </Column>
        {cart.length !== 0 && (
          <Layout.FlexCol $align="flex-end">
            <Price style={{ marginBottom: '10px' }}>
              Total: $
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </Price>

            <LinkButton to="/checkout" onClick={() => setIsVisible(false)}>
              Checkout
            </LinkButton>
          </Layout.FlexCol>
        )}
      </Wrapper>
    </>
  );
}

export default Cart;
