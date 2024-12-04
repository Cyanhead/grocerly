import { Order } from '../../../types';
import { TablePropsType } from '../Tables.type';

export type OrdersPropsType = TablePropsType & {
  orders: Order[];
};
