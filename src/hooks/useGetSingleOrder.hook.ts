import { Order } from '../types';
import { useGetOrders } from './useGetOrders.hook';

/**
 * Retrieves a single order from the database by its id and returns an object
 * with the following properties:
 *
 * - `isLoading`: A boolean indicating whether the data is currently being
 *   fetched.
 * - `order`: The order with the given id if found, or `null` if not found.
 * - `error`: An error that occurred while fetching the data. If no error
 *   occurred, this property is `undefined`.
 *
 * @param orderId The id of the order to be retrieved.
 *
 * @returns An object with the above properties.
 */
export function useGetSingleOrder(orderId: string): {
  isLoading: boolean;
  order: Order | null;
  error: Error;
} {
  const { isLoading, data, error } = useGetOrders(); // TODO: use getDocument helper

  if (!data) return { isLoading, order: null, error };

  const order = data.filter(order => order.id === orderId)[0];

  return { isLoading, order, error };
}
