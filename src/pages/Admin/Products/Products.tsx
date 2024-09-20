import { Cell } from '../Admin.styled';
import Metric from '../Metric';
import revenue_chart from '../bar_chart.svg';
import { Link } from 'react-router-dom';
import { useGetOrders, useGetProducts } from '../../../hooks';
import { MetricPropsType } from '../Metric/Metric.type';
import { AddProductForm, Button, Modal, Skeleton } from '../../../components';
import Icon from '../../../components/Icon';
import { Plus } from 'lucide-react';
import { useMemo, useState } from 'react';
import { GalleryProvider } from '../../../components/Gallery/context';

function Products() {
  const {
    isLoading: isLoadingProducts,
    data: products = [],
    error: productsError,
  } = useGetProducts();

  const {
    isLoading: isLoadingOrders,
    data: orders = [],
    error: ordersError,
  } = useGetOrders();

  const [showAddProductModal, setShowAddProductModal] = useState(false);

  // Memoize metrics calculation to avoid unnecessary recalculations
  const metrics: MetricPropsType[] = useMemo(() => {
    const totalRevenue = products.reduce(
      (acc, product) => acc + product.price * product.stock,
      0
    );
    const totalStock = products.reduce(
      (acc, product) => acc + product.stock,
      0
    );
    const totalOutOfStock = products.filter(
      product => product.stock === 0
    ).length;

    const totalOrders = orders.reduce((acc, order) => {
      const productCountPerOrder = order.products.reduce(
        (incr, product) => incr + product.count,
        0
      );
      return acc + productCountPerOrder;
    }, 0);

    return [
      { name: 'Unclaimed Revenue', value: totalRevenue, prefix: '$' },
      { name: 'Sold', value: totalOrders },
      { name: 'Stock', value: totalStock },
      { name: 'Out of Stock', value: totalOutOfStock },
    ];
  }, [products, orders]);

  // Display a loading spinner while fetching products or orders
  if (isLoadingProducts || isLoadingOrders) {
    return <Skeleton.Dashboard />;
  }

  // Handle errors separately for products and orders
  if (productsError) {
    console.error(productsError);
    return <div>Error loading products: {productsError.message}</div>;
  }

  if (ordersError) {
    console.error(ordersError);
    return <div>Error loading orders: {ordersError.message}</div>;
  }

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

      <Cell $span={2}>
        <h2>Recently Ordered</h2>
      </Cell>

      <Cell $span={2}>
        <h2>Bestsellers</h2>
      </Cell>

      <Cell $span={4}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h2>All Products</h2>
          <Button $variant="ghost" onClick={() => setShowAddProductModal(true)}>
            <Icon icon={Plus} />
            Add Product
          </Button>
        </div>
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

      {showAddProductModal && (
        <Modal closeModal={() => setShowAddProductModal(false)}>
          <GalleryProvider>
            <AddProductForm
              closeFormModal={() => setShowAddProductModal(false)}
            />
          </GalleryProvider>
        </Modal>
      )}
    </>
  );
}

export default Products;
