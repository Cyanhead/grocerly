import { useParams } from 'react-router-dom';
import { Icon, SectionHeading2, Skeleton, TextLink } from '../../../components';
import { Cell } from '../Admin.styled';
import { P, Row, Status } from './OrderItem.styled';
import { useGetOrders, useGetSingleOrder } from '../../../hooks';
import { parseTimestamp } from '../../../helpers';
import { OrderItemProducts, Orders } from '../../../components/Tables';
import {
  BadgeDollarSign,
  CalendarClockIcon,
  DollarSign,
  RefreshCw,
  User,
} from 'lucide-react';

function OrderItem() {
  const { id: orderId = '' } = useParams();

  const {
    isLoading: isLoadingOrder,
    order,
    error: orderError,
  } = useGetSingleOrder(orderId);
  const {
    isLoading: isLoadingOrdersList,
    data: ordersList = [],
    error: ordersListError,
  } = useGetOrders();

  if (isLoadingOrder || isLoadingOrdersList) {
    return <OrderItemSkeleton />;
  }

  if (!order || orderError) {
    console.error(orderError);
    return <div>Error loading orders: {orderError.message}</div>;
  }

  if (!ordersList || ordersListError) {
    console.error(ordersListError);
    return <div>Error loading orders: {ordersListError.message}</div>;
  }

  const { status, createdAt, customer, products, revenue, netProfit } = order;

  const orderDetails = [
    {
      title: 'Status',
      icon: RefreshCw,
      value: status,
    },
    {
      title: 'Revenue',
      icon: DollarSign,
      value: `$${revenue}`,
    },
    {
      title: 'Profit',
      icon: BadgeDollarSign,
      value: `$${netProfit} (${((netProfit / revenue) * 100).toFixed(2)}%)`,
    },
    {
      title: 'Customer',
      icon: User,
      value: customer.name,
    },
    {
      title: 'Date',
      icon: CalendarClockIcon,
      value:
        parseTimestamp(createdAt, { hour: 'numeric', minute: 'numeric' }) ??
        'N/A',
    },
  ];

  const userOrders = ordersList.filter(
    order => order.customer.id === customer.id
  );
  const moreOrdersByUser = userOrders.filter(order => order.id !== orderId);

  return (
    <>
      <Cell
        $span={[2, 2]}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        {orderDetails.map(({ title, icon, value }) => {
          if (title === 'Customer') {
            return (
              <Row key={title}>
                <Status>
                  <Icon icon={icon} size={22} />
                  {title}
                </Status>
                <TextLink to={`/admin/users/${customer.id}`} $isActive>
                  <P>{value}</P>
                </TextLink>
              </Row>
            );
          }

          return (
            <Row key={title}>
              <Status>
                <Icon icon={icon} size={22} /> {title}
              </Status>
              <P>{value}</P>
            </Row>
          );
        })}
      </Cell>
      <Cell $span={[2, 2]} $scroll>
        <Row>
          <SectionHeading2>Products</SectionHeading2>
          <P>
            {products.length} {products.length === 1 ? 'item' : 'items'}
          </P>
        </Row>
        <OrderItemProducts products={products} />
      </Cell>
      <Cell $span={[2, 4]} $scroll>
        <Orders
          orders={moreOrdersByUser}
          heading={`More orders by ${customer.name}`}
          emptyTableMessage={`${customer.name} hasn't placed any other orders!`}
        />
      </Cell>
    </>
  );
}

export default OrderItem;

function OrderItemSkeleton() {
  return (
    <Skeleton.Wrapper>
      <Cell $span={[2, 2]} style={{ padding: 0, border: 'none' }}>
        <Skeleton.Chart height="400px" />
      </Cell>
      <Cell $span={[2, 2]} style={{ padding: 0, border: 'none' }}>
        <Skeleton.Chart height="400px" />
      </Cell>
      <Skeleton.Chart height="400px" />
    </Skeleton.Wrapper>
  );
}
