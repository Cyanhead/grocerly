import { Users } from '../types';
import { useGetUsers } from './useGetUsers.hook';

/**
 * Retrieves a single user from the database by its id and returns an object
 * with the following properties:
 *
 * - `isLoading`: A boolean indicating whether the data is currently being
 *   fetched.
 * - `user`: The user with the given id if found, or `null` if not found.
 * - `error`: An error that occurred while fetching the data. If no error
 *   occurred, this property is `undefined`.
 *
 * @param userId The id of the user to be retrieved.
 *
 * @returns An object with the above properties.
 */
export function useGetSingleUser(userId: string): {
  isLoading: boolean;
  user: Users[0] | null;
  error: Error;
} {
  const { isLoading, data, error } = useGetUsers();

  if (!data) return { isLoading, user: null, error };

  const user = data.filter(user => user.id === userId)[0];
  return { isLoading, user, error };
}
