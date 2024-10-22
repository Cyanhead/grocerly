import useSWR from 'swr';
import { VisitEvent } from '../types/events';
import { getSubCollection } from '../helpers';

export const useGetVisits = () => {
  const path = 'event-logs/user/visits';
  const { isLoading, data, error } = useSWR<VisitEvent[]>(
    path,
    getSubCollection
  );

  return { isLoading, data, error };
};
