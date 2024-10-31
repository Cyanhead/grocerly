import useSWR from 'swr';
import { VisitEvent } from '../types/events';
import { getSubCollection } from '../helpers';

/**
 * Retrieves all visits from the database and returns an object with the
 * following properties:
 *
 * - `isLoading`: A boolean indicating whether the data is currently being
 *   fetched.
 * - `data`: An array of objects representing the visits. Each object contains
 *   the fields `id`, `sessionId`, `pageUrl`, `userAgent`, `timestamp`.
 * - `error`: An error that occurred while fetching the data. If no error
 *   occurred, this property is `undefined`.
 *
 * @returns An object with the above properties.
 */
export const useGetVisits = () => {
  const path = 'event-logs/user/visits';
  const { isLoading, data, error } = useSWR<VisitEvent[]>(
    path,
    getSubCollection
  );

  return { isLoading, data, error };
};
