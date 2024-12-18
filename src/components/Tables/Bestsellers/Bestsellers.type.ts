import { Order } from '../../../types';
import { TablePropsType } from '../Tables.type';

export type BestsellersPropsType = TablePropsType & {
  products: Order['products'];
};
