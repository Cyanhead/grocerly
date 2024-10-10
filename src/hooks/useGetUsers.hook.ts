import useSWR from 'swr';
import { getCollection } from '../helpers';
import { Users } from '../types';

/**
 * Retrieves all users from the database and returns an object with the
 * following properties:
 *
 * - `isLoading`: A boolean indicating whether the data is currently being
 *   fetched.
 * - `data`: An array of objects representing the users. Each object contains
 *   the fields `id`, `name`, `email`, `image`, `address`, `role`, `createdAt`, `updatedAt`, `firstOrder`, and `lastOrder`.
 * - `error`: An error that occurred while fetching the data. If no error
 *   occurred, this property is `undefined`.
 *
 * @returns An object with the above properties.
 */
export function useGetUsers() {
  const { isLoading, data, error } = useSWR<Users>('users', getCollection);

  return { isLoading, data, error };
}
