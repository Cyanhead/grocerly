import { Cell } from '../Admin.styled';
import Metric from '../Metric';
import revenue_chart from '../bar_chart.svg';
import { Link } from 'react-router-dom';
import { useGetOrders, useGetProducts } from '../../../hooks';
import { MetricPropsType } from '../Metric/Metric.type';

function Products() {
  const {
    isLoading: isLoadingProducts,
    data: products,
    error: productsError,
  } = useGetProducts();
  const {
    isLoading: isLoadingOrders,
    data: orders,
    error: orderError,
  } = useGetOrders();

  if (!products || !orders) {
    return <div>Loading...</div>;
  }

  if (productsError) {
    return <div>{productsError.message}</div>;
  }

  if (orderError) {
    return <div>{orderError.message}</div>;
  }

  const totalRevenue = products.reduce(
    (acc, product) => acc + product.price,
    0
  );
  const totalStock = products.reduce((acc, product) => acc + product.stock, 0);
  const totalOutOfStock = products.reduce((acc, product) => {
    if (product.stock === 0) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const totalOrders = orders.reduce((acc, order) => {
    const productCountPerOrder = order.products.reduce(
      (incr, product) => incr + product.count,
      0
    );

    return acc + productCountPerOrder;
  }, 0);

  const metrics: MetricPropsType[] = [
    { name: 'Unclaimed Revenue', value: totalRevenue, prefix: '$' },
    { name: 'Sold', value: totalOrders },
    { name: 'Stock', value: totalStock },
    { name: 'Out of Stock', value: totalOutOfStock },
  ];

  return (
    <>
      {metrics.map(metric => (
        <Metric
          key={metric.name}
          {...metric}
          loading={isLoadingProducts || isLoadingOrders}
        />
      ))}

      <Cell $span={4}>
        {/* TODO: replace with chart */}
        <img src={revenue_chart} alt="" />
      </Cell>

      <Cell $span={4}>
        Latest orders
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {products.map(product => (
            <Link
              key={product.id}
              to={`${product.id}`}
              state={{ title: product.name }}
            >
              {product.name}
            </Link>
          ))}
        </div>
      </Cell>
    </>
  );
}

export default Products;
