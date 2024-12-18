import useSWR from 'swr';
import { getCollection } from '../helpers';
import { Order } from '../types';

/**
 * Retrieves all orders from the database and returns an object with the
 * following properties:
 *
 * - `isLoading`: A boolean indicating whether the data is currently being
 *   fetched.
 * - `data`: An array of objects representing the orders. Each object contains
 *   the fields `id`, `user`, `products`, `totalPrice`, `createdAt`, and
 *   `updatedAt`.
 * - `error`: An error that occurred while fetching the data. If no error
 *   occurred, this property is `undefined`.
 *
 * @returns An object with the above properties.
 */
export function useGetOrders() {
  const { isLoading, data, error } = useSWR<Order[]>('orders', getCollection);

  return { isLoading, data, error };
}
