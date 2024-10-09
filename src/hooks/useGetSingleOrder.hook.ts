import { Orders } from '../types';
import { useGetOrders } from './useGetOrders.hook';

export function useGetSingleOrder(orderId: string): {
  isLoading: boolean;
  order: Orders[0] | null;
  error: Error;
} {
  const { isLoading, data, error } = useGetOrders();

  if (!data) return { isLoading, order: null, error };

  const order = data.filter(order => order.id === orderId)[0];

  return { isLoading, order, error };
}
