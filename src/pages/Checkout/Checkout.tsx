import { Trash } from 'lucide-react';
import {
  Counter,
  Icon,
  Layout,
  SectionHeading2,
  TextLink,
} from '../../components';
import { RemoveButton } from '../../components/Cart/Cart.styled';
import { useAuthContext, useCartContext } from '../../context';
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
import { createDocAndReturnIdAndDocRef } from '../../helpers/createDoc';
import {
  doc,
  increment,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { Order } from '../../types';
import { db } from '../../context/Firebase';
import { useState } from 'react';

function getRandomStatus(): Order['status'] {
  const statuses: Order['status'][] = [
    'processing',
    'cancelled',
    'failed',
    'refunded',
    'completed',
  ];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

function Checkout() {
  const [loading, setLoading] = useState(false);
  const { state: cart, dispatch } = useCartContext();
  const { state } = useAuthContext();
  const user = state.user;

  if (!user) {
    return (
      <Container>
        <h1>You must be logged in to checkout.</h1>
      </Container>
    );
  }

  const { uid: userId, displayName: userName } = user;

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

  async function handleCheckout() {
    setLoading(true);
    dispatch({ type: 'REMOVE_ALL_FROM_CART' });

    const [orderId, orderRef] = await createDocAndReturnIdAndDocRef('orders');

    const orderData: Order = {
      id: orderId,
      status: getRandomStatus(),
      createdAt: serverTimestamp() as Timestamp,
      customer: {
        id: userId,
        name: userName ?? userId,
      },
      products: cart.map(({ id, image, name, quantity, price }) => ({
        id,
        image,
        name,
        quantity,
        price,
      })),
      revenue: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      netProfit: cart.reduce((acc, item) => {
        const profitMargin = Math.random() * (0.6 - 0.2) + 0.2;
        return acc + item.price * item.quantity * profitMargin;
      }, 0),
    };

    try {
      await toast.promise(updateDoc(orderRef, orderData), {
        loading: 'Placing order...',
        success: 'Order successfully placed!',
        error: 'Error when placing order!',
      });

      // update product stock and lastOrder
      Promise.allSettled(
        cart.map(async item => {
          const docRef = doc(db, 'products', item.id);
          await updateDoc(docRef, {
            stock: increment(-item.quantity),
            lastOrder: serverTimestamp(),
            // firstOrder: serverTimestamp(),
          });
        })
      );

      setLoading(false);

      console.log('Product successfully updated!');
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unknown error:', error);
      }
    }
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
          <Button onClick={handleCheckout} disabled={loading || !cart.length}>
            {loading ? 'Placing order...' : 'Place order'}
          </Button>
        </Summary>
      </Wrapper>
    </Container>
  );
}

export default Checkout;
