import useSWR from 'swr';
import { getDocument } from '../helpers';
import { Product } from '../types';

/**
 * Retrieves a single product from the database by its id and returns an object
 * with the following properties:
 *
 * - `isLoading`: A boolean indicating whether the data is currently being
 *   fetched.
 * - `product`: The product with the given id if found, or `null` if not found.
 * - `error`: An error that occurred while fetching the data. If no error
 *   occurred, this property is `undefined`.
 *
 * @param productId The id of the product to be retrieved.
 *
 * @returns An object with the above properties if the product is found, or
 * `null` if not found.
 */
export function useGetSingleProduct(productId: string) {
  const { isLoading, data, error } = useSWR<Product | undefined>(
    ['products', productId],
    ([collectionName, documentId]) =>
      getDocument(collectionName, documentId as string)
  );

  const product = data?.id === productId ? data : null;

  return { isLoading, product, error };
}
