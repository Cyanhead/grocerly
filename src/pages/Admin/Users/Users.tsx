import { useMemo } from 'react';
import { useGetUsers } from '../../../hooks';
import { MetricPropsType } from '../Metric/Metric.type';
import Metric from '../Metric';
import { Skeleton } from '../../../components';
import { Users as UsersTable } from '../../../components/Tables';
import revenue_chart from '../bar_chart.svg';
import { Cell } from '../Admin.styled';

function Users() {
  const { isLoading, data: users = [], error } = useGetUsers();

  const metrics: MetricPropsType[] = useMemo(() => {
    const activeUsers = users.filter(user => {
      const diff = new Date().getTime() - user.lastOrder.toDate().getTime();

      // users that have placed an order in the past week
      return diff < 1000 * 60 * 60 * 24 * 7;
    });

    return [
      { name: 'All', value: users.length },
      { name: 'Active ', value: activeUsers.length },
      { name: 'Visitors', value: 999 },
      { name: 'Conversion', value: 13, suffix: '%' },
    ];
  }, [users]);

  if (isLoading) {
    return <Skeleton.Dashboard />;
  }

  if (error) {
    console.error(error);
    return <div>Error loading orders: {error.message}</div>;
  }

  return (
    <>
      {metrics.map(metric => (
        <Metric key={metric.name} {...metric} loading={isLoading} />
      ))}

      <Cell $span={[2, 4]}>
        {/* TODO: replace with chart */}
        <img src={revenue_chart} alt="" />
      </Cell>

      <Cell $span={[2, 4]} style={{ overflow: 'auto' }}>
        <UsersTable users={users} heading="All Users" />
      </Cell>
    </>
  );
}

export default Users;
