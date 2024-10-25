import useSWR from 'swr';
import { getDocument } from '../helpers';
import { Categories } from '../types';

/**
 * Retrieves all categories from the database and returns an object with the
 * following properties:
 *
 * - `isLoading`: A boolean indicating whether the data is currently being
 *   fetched.
 * - `data`: An array of strings representing the categories. The array always
 *   contains the string 'all', which is used as the default category when
 *   filtering products. The array may contain additional strings if there are
 *   categories defined in the database.
 * - `error`: An error that occurred while fetching the data. If no error
 *   occurred, this property is `undefined`.
 *
 * @returns An object with the above properties.
 */
export function useGetCategories() {
  const { isLoading, data, error } = useSWR<Categories | undefined>(
    ['product-categories', 'categories'],
    ([collectionName, documentId]) =>
      getDocument(collectionName, documentId as string)
  );

  const categories = data ? ['all', ...(data.allCategories ?? [])] : null;

  return { isLoading, data: categories, error };
}
