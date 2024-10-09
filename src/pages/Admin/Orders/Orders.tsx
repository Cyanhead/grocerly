import { useMemo } from 'react';
import { SectionHeading2, Skeleton } from '../../../components';
import { Orders as OrdersTable } from '../../../components/Tables';
import { useGetOrders } from '../../../hooks';
import { MetricPropsType } from '../Metric/Metric.type';
import Metric from '../Metric';
import { Cell } from '../Admin.styled';
import revenue_chart from '../bar_chart.svg';

function Orders() {
  const { isLoading, data: orders = [], error } = useGetOrders();

  const mostRecentOrders = useMemo(() => {
    return [...orders]
      .sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis())
      .slice(0, 5);
  }, [orders]);

  // Memoize metrics calculation to avoid unnecessary recalculations
  const metrics1: MetricPropsType[] = useMemo(() => {
    const successfulOrders = orders.filter(
      order => order.status === 'completed'
    );
    const claimedRevenue = successfulOrders.reduce(
      (acc, order) => acc + order.revenue,
      0
    );

    const claimedProfit = successfulOrders.reduce(
      (acc, order) => acc + order.netProfit,
      0
    );

    const percentageProfit = (claimedProfit / claimedRevenue) * 100;

    const cancelled = orders.filter(
      order => order.status === 'cancelled'
    ).length;

    return [
      { name: 'Claimed Revenue', value: claimedRevenue, prefix: '$' },
      { name: 'Profit', value: percentageProfit, suffix: '%' },
      { name: 'All  ', value: orders.length },
      { name: 'Cancelled  ', value: cancelled },
    ];
  }, [orders]);

  const metrics2: MetricPropsType[] = useMemo(() => {
    const processingOrders = orders.filter(
      order => order.status === 'processing'
    );
    const processingRevenue = processingOrders.reduce(
      (acc, order) => acc + order.revenue,
      0
    );

    const failed = orders.filter(order => order.status === 'failed').length;

    const refundedOrders = orders.filter(order => order.status === 'refunded');

    const refunds = refundedOrders.reduce((acc, order) => {
      return acc + order.revenue;
    }, 0);

    return [
      { name: 'Pending Revenue', value: processingRevenue, prefix: '$' },
      { name: 'Failed ', value: failed },
      { name: 'Refunded ', value: refundedOrders.length },
      { name: 'Refunded Amount', value: refunds, prefix: '$' },
    ];
  }, [orders]);

  if (isLoading) {
    return <Skeleton.Dashboard />;
  }

  if (error) {
    console.error(error);
    return <div>Error loading orders: {error.message}</div>;
  }

  return (
    <>
      {metrics1.map(metric => (
        <Metric key={metric.name} {...metric} loading={isLoading} />
      ))}

      {metrics2.map(metric => (
        <Metric key={metric.name} {...metric} loading={isLoading} />
      ))}

      <Cell $span={[2, 4]}>
        {/* TODO: replace with chart */}
        <img src={revenue_chart} alt="" />
      </Cell>

      <Cell $span={[2, 4]} style={{ overflow: 'auto' }}>
        <SectionHeading2>Latest Orders</SectionHeading2>
        <OrdersTable orders={mostRecentOrders} />
      </Cell>
    </>
  );
}

export default Orders;
