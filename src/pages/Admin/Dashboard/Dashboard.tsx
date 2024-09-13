import { Cell } from '../Admin.styled';
import revenue_chart from '../bar_chart.svg';
import cart_chart from '../cart_chart.svg';
import Metric from '../Metric';
import { MetricPropsType } from '../Metric/Metric.type';
import { useGetOrders } from '../../../hooks';
import { Loader } from '../../../components';

function Dashboard() {
  const { data, error } = useGetOrders();

  if (!data) {
    return <Loader fullscreen />;
  }

  if (error) {
    console.error(error);
  }

  const totalRevenue = data?.reduce((acc, order) => acc + order.revenue, 0);

  const metrics: MetricPropsType[] = [
    { name: 'Revenue', value: totalRevenue, prefix: '$' },
    { name: 'Orders', value: data.length },
    { name: 'Visitors', value: 45 },
    {
      name: 'Conversion',
      value: 12,
      suffix: '%',
    },
  ];

  return (
    <>
      {metrics.map(metric => (
        <Metric key={metric.name} {...metric} />
      ))}

      <Cell $span={3}>
        {/* TODO: replace with chart */}
        <img src={revenue_chart} alt="" />
      </Cell>
      <Cell $span={1}>
        {/* NOTE: might delete */}
        {/* TODO: replace with chart */}
        <img src={cart_chart} alt="" />
      </Cell>

      <Cell $span={2}>Best sellers</Cell>
      <Cell $span={2}>Traffic</Cell>

      <Cell $span={4}>Latest orders</Cell>
    </>
  );
}

export default Dashboard;
