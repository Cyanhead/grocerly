import { useMemo } from 'react';
import { useGetSingleUser, useGetOrders } from '../../../hooks';
import { MetricPropsType } from '../Metric/Metric.type';
import Metric from '../Metric';
import { Skeleton } from '../../../components';
import { Orders } from '../../../components/Tables';
import revenue_chart from '../bar_chart.svg';
import { Cell } from '../Admin.styled';
import Details, { DetailsPropsType } from '../Details';
import { useParams } from 'react-router-dom';
import { parseTimestamp } from '../../../helpers';
import { CalendarPlus, MapPin, ShoppingBag, UserSquare2 } from 'lucide-react';
import fallbackPhoto from '../../../assets/images/default_user_fade.svg';

function User() {
  const { id: userId = '' } = useParams();
  const {
    isLoading: isLoadingUser,
    user,
    error: userError,
  } = useGetSingleUser(userId);

  const {
    isLoading: ordersIsLoading,
    data: orders = [],
    error: ordersError,
  } = useGetOrders();

  const ordersByUser = orders.filter(order => order.customer.id === userId);

  const metrics: MetricPropsType[] = useMemo(() => {
    const ordersPaid = ordersByUser.filter(
      order => order.status === 'completed'
    );
    const revenue = ordersPaid.reduce((acc, order) => acc + order.revenue, 0);
    const totalProfit = ordersPaid.reduce(
      (acc, order) => acc + order.netProfit,
      0
    );
    const netProfit = (totalProfit / revenue) * 100;
    const refunds = ordersByUser.filter(
      order => order.status === 'refunded'
    ).length;

    return [
      { name: 'Revenue', value: revenue, prefix: '$' },
      { name: 'Net Profit', value: netProfit || 0, suffix: '%' },
      { name: 'Orders Paid ', value: ordersPaid.length },
      { name: 'Refunds', value: refunds },
    ];
  }, [ordersByUser]);

  if (isLoadingUser || ordersIsLoading) {
    return <Skeleton.Dashboard />;
  }

  if (userError || !user) {
    console.error(userError);
    return (
      <div>
        Error loading orders: {userError.message ?? 'Error message not found!'}
      </div>
    );
  }

  if (ordersError) {
    console.error(ordersError);
    return (
      <div>
        Error loading orders:{' '}
        {ordersError.message ?? 'Error message not found!'}
      </div>
    );
  }

  const userInfo: DetailsPropsType['stats'] = [
    { stat: 'User ID', value: user.id, icon: UserSquare2 },
    { stat: 'Address', value: user.address[0], icon: MapPin },
    {
      stat: 'First Order',
      value: user.firstOrder
        ? parseTimestamp(user.firstOrder, {
            hour: 'numeric',
            minute: 'numeric',
          })
        : 'Never',
      icon: CalendarPlus,
    },
    {
      stat: 'Latest Order',
      value: user.lastOrder
        ? parseTimestamp(user.lastOrder, {
            hour: 'numeric',
            minute: 'numeric',
          })
        : 'Never',
      icon: ShoppingBag,
    },
  ];

  return (
    <>
      {metrics.map(metric => (
        <Metric key={metric.name} {...metric} loading={isLoadingUser} />
      ))}

      <Details
        type="user"
        image={user.photoUrl || fallbackPhoto}
        name={user.name}
        additionalInfo={user.email ?? 'N/A'}
        stats={userInfo}
      />

      <Cell $span={[2, 3]}>
        {/* TODO: replace with chart */}
        <img src={revenue_chart} alt="" />
      </Cell>

      <Cell $span={[2, 4]} $scroll>
        <Orders
          orders={ordersByUser}
          emptyTableMessage={`${user.name} has not placed any orders.`}
        />
      </Cell>
    </>
  );
}

export default User;
