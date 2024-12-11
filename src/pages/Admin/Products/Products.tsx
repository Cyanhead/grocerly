import { Cell } from '../Admin.styled';
import Metric from '../Metric';
import revenue_chart from '../bar_chart.svg';
import { useGetOrders, useGetProducts } from '../../../hooks';
import { MetricPropsType } from '../Metric/Metric.type';
import { Icon, Modal, SectionHeading2, Skeleton } from '../../../components';
import { AddProductForm } from '../../../components/Form';
import {
  AllProducts,
  Bestsellers,
  LatestOrderedProducts,
} from '../../../components/Tables';
import { Plus } from 'lucide-react';
import { useMemo, useState } from 'react';
import { GalleryProvider } from '../../../components/Gallery/context';
import {
  AddProductButton,
  MobileAddProductButton,
  TableHeader,
} from './Products.styled';
import { useAuthContext } from '../../../context';

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

  const { state } = useAuthContext();
  const isSuperAdmin = state.roles.superAdmin;

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
        (incr, product) => incr + product.quantity,
        0
      );

      return acc + productCountPerOrder;
    }, 0);

    return [
      { name: 'Unclaimed Revenue', value: totalRevenue, prefix: '$' },
      { name: 'Sold', value: totalOrders },
      { name: 'In Stock', value: totalStock },
      { name: 'Out of Stock', value: totalOutOfStock },
    ];
  }, [products, orders]);

  const latestSoldProducts = useMemo(() => {
    return [...products]
      .sort(
        (a, b) =>
          (b.lastOrder?.toMillis() ?? 0) - (a.lastOrder?.toMillis() ?? 0)
      )
      .slice(0, 5);
  }, [products]);

  const bestsellers = useMemo(() => {
    const soldProducts = orders.map(order => order.products).flat();
    return soldProducts.sort((a, b) => b.quantity - a.quantity).slice(0, 5);
  }, [orders]);

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

      <Cell $span={[2, 4]}>
        {/* TODO: replace with chart */}
        <img src={revenue_chart} alt="" />
      </Cell>

      <Cell $span={[2, 2]}>
        <LatestOrderedProducts
          products={latestSoldProducts}
          heading="Recently Ordered"
        />
      </Cell>

      <Cell $span={[2, 2]}>
        <Bestsellers products={bestsellers} />
      </Cell>

      <Cell $span={[2, 4]} $scroll>
        <TableHeader>
          <SectionHeading2>All Products</SectionHeading2>
          {isSuperAdmin && (
            <>
              <AddProductButton
                variant="ghost"
                onClick={() => setShowAddProductModal(true)}
              >
                <Icon icon={Plus} />
                Add Product
              </AddProductButton>
              <MobileAddProductButton
                icon={Plus}
                variant="ghost"
                onClick={() => setShowAddProductModal(true)}
              />
            </>
          )}
        </TableHeader>

        <AllProducts products={products} />
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
