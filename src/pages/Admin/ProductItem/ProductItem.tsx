import Metric from '../Metric';
import { Cell } from '../Admin.styled';

import revenue_chart from '../bar_chart.svg';
import { useGetOrders, useGetSingleProduct } from '../../../hooks';
import { Loader } from '../../../components';
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

function ProductItem() {
  const { id: productId = '' } = useParams();

  const {
    isLoading: ordersIsLoading,
    data: orders,
    error: ordersError,
  } = useGetOrders();

  const {
    isLoading: productIsLoading,
    product,
    error: productError,
  } = useGetSingleProduct(productId);

  if (productIsLoading || ordersIsLoading || !orders || !product) {
    return <Loader fullscreen />;
  }

  if (ordersError || productError) {
    console.error(ordersError);
    console.error(productError);
    return <Loader fullscreen />;
  }

  // REVENUE -------------------------------------------------
  const completedOrders = orders.filter(order => order.status === 'completed');

  const completedOrdersThatIncludeProductId = completedOrders.filter(order =>
    order.products.some(item => item.id === productId)
  );

  const productRevenue = completedOrdersThatIncludeProductId.reduce(
    (acc, order) => {
      const product = order.products.find(item => item.id === productId);

      if (!product) return acc;

      const productRevenue = product.price * product.count;
      return acc + productRevenue;
    },
    0
  );

  // ORDER COUNT --------------------------------------------
  const ordersThatIncludeProductId = orders.filter(order =>
    order.products.some(item => item.id === productId)
  );

  const numOfProductsSold = ordersThatIncludeProductId.reduce((acc, order) => {
    const product = order.products.find(item => item.id === productId);

    if (!product) return acc;

    return acc + product.count;
  }, 0);

  // REFUNDS -------------------------------------------------
  const refundedOrders = orders.filter(order => order.status === 'refunded');

  const refundedOrdersThatIncludeProductId = refundedOrders.filter(order =>
    order.products.some(item => item.id === productId)
  );

  const numOfProductsRefunded = refundedOrdersThatIncludeProductId.reduce(
    (acc, order) => {
      const product = order.products.find(item => item.id === productId);

      if (!product) return acc;

      return acc + product.count;
    },
    0
  );

  const metrics: MetricPropsType[] = [
    {
      name: 'Revenue',
      value: productRevenue,
      prefix: '$',
    },
    { name: 'Orders', value: numOfProductsSold },
    { name: 'Refunds', value: numOfProductsRefunded },
    {
      name: 'Net profit',
      value: productRevenue * 0.18,

      prefix: '$',
    },
  ];

  const productInfo: DetailsPropsType['stats'] = [
    { stat: 'Price', value: product.price, icon: DollarSign },
    { stat: 'In Stock', value: product.stock, icon: Package },
    { stat: 'Rating', value: product.rating, icon: Star },
    {
      stat: 'Start Date',
      value: parseTimestamp(product.createdAt),
      icon: CalendarPlus,
    },
    {
      stat: 'First sale',
      value: parseTimestamp(product.lastOrder),
      icon: ShoppingBag,
    },
  ];

  return (
    <>
      {metrics.map(metric => (
        <Metric key={metric.name} {...metric} loading={ordersIsLoading} />
      ))}

      <Details
        image={product.images[0] ?? defaultImage}
        name={product.name}
        additionalInfo={product.category}
        stats={productInfo}
      />

      <Cell $span={3}>
        revenue chart
        {/* TODO: replace with chart */}
        <img src={revenue_chart} alt="" />
      </Cell>

      <Cell $span={4}>Latest orders</Cell>
    </>
  );
}

export default ProductItem;
