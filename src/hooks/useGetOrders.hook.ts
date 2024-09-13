import { Timestamp } from 'firebase/firestore';
import useSWR from 'swr';
import { getCollection } from '../helpers';

type Orders = {
  status: 'processing' | 'cancelled' | 'failed' | 'refunded' | 'completed';
  netProfit: number;
  products: {
    id: string;
    count: number;
    price: number;
  }[];
  createdAt: Timestamp;
  customerId: string;
  id: string;
  revenue: number;
}[];

/**
 * Retrieves all orders from the database and returns an object with the
 * following properties:
 *
 * - `isLoading`: A boolean indicating whether the data is currently being
 *   fetched.
 * - `data`: An array of objects representing the orders. Each object contains
 *   the following properties:
 *   - `status`: The status of the order. Must be one of 'pending', 'completed',
 *     'cancelled', 'failed', 'refund', or 'processing'.
 *   - `netProfit`: The net profit of the order.
 *   - `products`: An array of objects representing the products in the order.
 *     Each object contains the following properties:
 *     - `id`: The id of the product.
 *     - `count`: The amount of the product in the order.
 *   - `createdAt`: An object representing the date and time the order was
 *     created.
 *   - `customerId`: The id of the customer who made the order.
 *   - `id`: The id of the order.
 *   - `revenue`: The revenue from the order.
 * - `error`: An error that occurred while fetching the data. If no error
 *   occurred, this property is `undefined`.
 *
 * @returns An object with the above properties.
 */
export function useGetOrders() {
  const { isLoading, data, error } = useSWR<Orders>('orders', getCollection);

  return { isLoading, data, error };
}
