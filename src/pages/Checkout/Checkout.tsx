import { Trash } from 'lucide-react';
import {
  Counter,
  Icon,
  Layout,
  SectionHeading2,
  TextLink,
} from '../../components';
import { RemoveButton } from '../../components/Cart/Cart.styled';
import { useCartContext } from '../../context';
import {
  Button,
  Card,
  Cart,
  Container,
  Image,
  Price,
  Summary,
  Title,
  Wrapper,
} from './Checkout.styled';
import { toast } from 'react-hot-toast';

function Checkout() {
  const { state: cart, dispatch } = useCartContext();

  function removeFromCart(productId: string) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: productId,
      },
    });

    toast.success('All items removed from cart.');
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
    <Container data-testid="Checkout">
      <Wrapper>
        <Cart>
          <SectionHeading2>Cart ({cart.length})</SectionHeading2>
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

                  <RemoveButton
                    $theme="danger"
                    $variant="normal"
                    onClick={() => removeFromCart(id)}
                  >
                    <Icon icon={Trash} /> Remove
                  </RemoveButton>
                </Layout.FlexCol>
                <Layout.FlexCol
                  $gap={4}
                  $align="flex-end"
                  $justify="space-between"
                >
                  <Price>${price}</Price>
                  <Counter
                    count={quantity}
                    setCount={quantity => handleCounterChange(id, quantity)}
                  />
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
        </Cart>
        <Summary>
          <SectionHeading2>Cart Summary</SectionHeading2>

          <Layout.FlexRow $gap={8} $justify="space-between" $align="center">
            <Price>
              <span
                style={{
                  color: '#555',
                  fontWeight: 400,
                }}
              >
                Total
              </span>{' '}
            </Price>
            <Price>
              $
              {cart.reduce(
                (acc, { price, quantity }) => acc + price * quantity,
                0
              )}
            </Price>
          </Layout.FlexRow>
          <Button>Place order</Button>
          {/* // CONSIDER: confirming address details first */}
        </Summary>
      </Wrapper>
    </Container>
  );
}

export default Checkout;
