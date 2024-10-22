import { Products } from '../types';
import { useGetProducts } from './useGetProducts.hook';

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
export function useGetSingleProduct(productId: string): {
  isLoading: boolean;
  product: Products[0] | null;
  error: Error;
} {
  const { isLoading, data, error } = useGetProducts();

  if (!data) return { isLoading, product: null, error };

  const product = data.filter(product => product.id === productId)[0];

  return { isLoading, product, error };
}
