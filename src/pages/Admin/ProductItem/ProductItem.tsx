import Metric from '../Metric';
import { Cell } from '../Admin.styled';
import revenue_chart from '../bar_chart.svg';
import { useGetOrders, useGetSingleProduct } from '../../../hooks';
import {
  EditProductForm,
  Modal,
  SectionHeading2,
  Skeleton,
} from '../../../components';
import { useParams } from 'react-router-dom';
import { MetricPropsType } from '../Metric/Metric.type';
import defaultImage from '../../../assets/images/default_product.svg';
import {
  CalendarPlus,
  DollarSign,
  Package,
  ShoppingBag,
  Star,
} from 'lucide-react';
import { parseTimestamp } from '../../../helpers';
import Details from '../Details';
import { DetailsPropsType } from '../Details/Details.type';
import { useMemo, useState } from 'react';
import { GalleryProvider } from '../../../components/Gallery/context';
import { Timestamp } from 'firebase/firestore';
import { Orders } from '../../../components/Tables';

function ProductItem() {
  const { id: productId = '' } = useParams();
  const [showEditModal, setShowEditModal] = useState(false);

  const {
    isLoading: ordersIsLoading,
    data: orders = [],
    error: ordersError,
  } = useGetOrders();

  const {
    isLoading: productIsLoading,
    product,
    error: productError,
  } = useGetSingleProduct(productId);

  const productOrders = orders.filter(order =>
    order.products.some(item => item.id === productId)
  );

  const metrics: MetricPropsType[] = useMemo(() => {
    const completedOrders = orders.filter(
      order => order.status === 'completed'
    );
    const completedOrdersThatIncludeProductId = completedOrders.filter(order =>
      order.products.some(item => item.id === productId)
    );

    const productRevenue = completedOrdersThatIncludeProductId.reduce(
      (acc, order) => {
        const productItem = order.products.find(item => item.id === productId);
        if (!productItem) return acc;
        return acc + productItem.price * productItem.count;
      },
      0
    );

    const ordersThatIncludeProductId = orders.filter(order =>
      order.products.some(item => item.id === productId)
    );

    const numOfProductsSold = ordersThatIncludeProductId.reduce(
      (acc, order) => {
        const productItem = order.products.find(item => item.id === productId);
        return productItem ? acc + productItem.count : acc;
      },
      0
    );

    const refundedOrders = orders.filter(order => order.status === 'refunded');

    const refundedOrdersThatIncludeProductId = refundedOrders.filter(order =>
      order.products.some(item => item.id === productId)
    );

    const numOfProductsRefunded = refundedOrdersThatIncludeProductId.reduce(
      (acc, order) => {
        const productItem = order.products.find(item => item.id === productId);
        return productItem ? acc + productItem.count : acc;
      },
      0
    );

    return [
      { name: 'Revenue', value: productRevenue, prefix: '$' },
      { name: 'Orders', value: numOfProductsSold },
      { name: 'Refunds', value: numOfProductsRefunded },
      { name: 'Net profit', value: productRevenue * 0.18, prefix: '$' },
    ];
  }, [orders, productId]);

  if (productIsLoading || ordersIsLoading) {
    return <Skeleton.Dashboard />;
  }

  if (productError || !product) {
    console.error(productError);
    return (
      <div>
        Error loading product: {productError?.message || 'Product not found'}
      </div>
    );
  }

  if (ordersError) {
    console.error(ordersError);
    return <div>Error loading orders: {ordersError.message}</div>;
  }

  function determineFirstSale(lastOrder: Timestamp, createdAt: Timestamp) {
    if (!lastOrder || !createdAt) return 'Never';

    const diff = lastOrder.toDate().getTime() - createdAt.toDate().getTime();
    return diff > 1000 * 60 ? parseTimestamp(lastOrder) : 'Never';
  }

  const productInfo: DetailsPropsType['stats'] = [
    { stat: 'Price', value: product.price, icon: DollarSign },
    { stat: 'In Stock', value: product.stock, icon: Package },
    { stat: 'Rating', value: product.rating ?? 'N/A', icon: Star },
    {
      stat: 'Start Date',
      value: parseTimestamp(product.createdAt) ?? 'N/A',
      icon: CalendarPlus,
    },
    {
      stat: 'First sale',
      value: determineFirstSale(product.lastOrder, product.createdAt),
      icon: ShoppingBag,
    },
  ];

  return (
    <>
      {metrics.map(metric => (
        <Metric key={metric.name} {...metric} loading={ordersIsLoading} />
      ))}

      <Details
        image={product.images?.[0] ?? defaultImage}
        name={product.name || 'Unnamed Product'}
        additionalInfo={product.category || 'Unknown Category'}
        stats={productInfo}
        setShowEditModal={setShowEditModal}
      />

      <Cell $span={[2, 3]}>
        revenue chart
        <img src={revenue_chart} alt="" />
      </Cell>

      {productOrders.length > 0 && (
        <Cell $span={[2, 4]}>
          <SectionHeading2>Orders</SectionHeading2>
          <Orders orders={productOrders} />
        </Cell>
      )}

      {showEditModal && (
        <Modal closeModal={() => setShowEditModal(false)}>
          <GalleryProvider>
            <EditProductForm
              closeFormModal={() => setShowEditModal(false)}
              product={product}
            />
          </GalleryProvider>
        </Modal>
      )}
    </>
  );
}

export default ProductItem;
