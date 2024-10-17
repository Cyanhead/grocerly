import { Cell } from '../Admin.styled';
import revenue_chart from '../bar_chart.svg';
import cart_chart from '../cart_chart.svg';
import Metric from '../Metric';
import { MetricPropsType } from '../Metric/Metric.type';
import { useGetOrders, useGetVisits } from '../../../hooks';
import { Skeleton } from '../../../components';
import { useMemo } from 'react';

function Dashboard() {
  const { isLoading, data: orders = [], error } = useGetOrders();
  const { data: visits = [] } = useGetVisits();

  const metrics: MetricPropsType[] = useMemo(() => {
    const totalRevenue = orders.reduce((acc, order) => acc + order.revenue, 0);

    const pendingOrders = orders.filter(order => order.status === 'processing');

    return [
      { name: 'Revenue', value: totalRevenue, prefix: '$' },
      { name: 'Orders', value: orders.length },
      {
        name: 'Pending Orders',
        value: pendingOrders.length,
      },
      { name: 'Visitors', value: visits.length ?? 0 },
    ];
  }, [orders, visits.length]);

  if (isLoading) {
    return <Skeleton.Dashboard />;
  }

  if (error) {
    console.error(error);
    return <div>Error getting orders: {error.message}</div>;
  }

  return (
    <>
      {metrics.map(metric => (
        <Metric key={metric.name} {...metric} />
      ))}

      <Cell $span={[2, 3]}>
        {/* TODO: replace with chart */}
        <img src={revenue_chart} alt="" />
      </Cell>
      <Cell>
        {/* NOTE: might delete */}
        {/* TODO: replace with chart */}
        <img src={cart_chart} alt="" />
      </Cell>

      <Cell $span={[1, 2]}>
        <h2>Traffic</h2>
      </Cell>

      <Cell $span={[1, 2]}>
        <h2>Latest orders</h2>
      </Cell>
    </>
  );
}

export default Dashboard;
