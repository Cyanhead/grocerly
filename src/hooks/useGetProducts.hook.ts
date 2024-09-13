import useSWR from 'swr';
import { getCollection } from '../helpers';
import { Timestamp } from 'firebase/firestore';

export type Products = {
  id: string;
  name: string;
  otherNames: string[];
  category: string;
  about: string;
  images: string[];
  price: number;
  stock: number;
  rating: 1 | 2 | 3 | 4 | 5;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastOrder: Timestamp;
}[];

/**
 * Retrieves all products from the database and returns an object with the
 * following properties:
 *
 * - `isLoading`: A boolean indicating whether the data is currently being
 *   fetched.
 * - `data`: An array of objects representing the products. Each object contains
 *   the fields `id`, `name`, `otherNames`, `category`, `about`, `price`,
 *   `stock`, `rating`, `createdAt`, and `updatedAt`.
 * - `error`: An error that occurred while fetching the data. If no error
 *   occurred, this property is `undefined`.
 *
 * @returns An object with the above properties.
 */
export function useGetProducts() {
  const { isLoading, data, error } = useSWR<Products>('items', getCollection); // TODO: revert to 'products'

  return { isLoading, data, error };
}
