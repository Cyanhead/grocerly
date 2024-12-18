import useSWR from 'swr';
import { getDocument } from '../helpers';
import { Order } from '../types';

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
export function useGetSingleOrder(orderId: string) {
  const { data, error } = useSWR<Order | undefined>(
    ['orders', orderId],
    ([collectionName, documentId]) =>
      getDocument(collectionName, documentId as string)
  );

  const isLoading = !data && !error;
  const order = data?.id === orderId ? data : null;

  return { isLoading, order, error };
}
