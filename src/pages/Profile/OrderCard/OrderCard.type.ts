import { Order } from '../../../types';

export type OrderCardPropsType = Pick<
  Order,
  'id' | 'status' | 'revenue' | 'createdAt' | 'products'
>;
