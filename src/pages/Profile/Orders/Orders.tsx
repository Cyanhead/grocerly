import { OrdersPropsType } from './Orders.type';
import { useGetOrders } from '../../../hooks';
import { Layout } from '../../../components';
import OrderCard from '../OrderCard';

function Orders({ userId }: OrdersPropsType) {
  const {
    // isLoading: ordersIsLoading, // TODO: add skeleton
    data: orders = [],
    // error: ordersError,
  } = useGetOrders();

  const ordersByUser = orders.filter(order => order.customer.id === userId);

  if (!ordersByUser.length) {
    return <p>You haven't placed any orders!</p>;
  }

  return (
    <Layout.FlexCol $align="stretch" $gap={16}>
      {ordersByUser.map(order => {
        return <OrderCard key={order.id} {...order} />;
      })}
    </Layout.FlexCol>
  );
}

export default Orders;
