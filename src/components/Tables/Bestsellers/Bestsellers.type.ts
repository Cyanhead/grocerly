import { Orders } from '../../../types';
import { TablePropsType } from '../Tables.type';

export type BestsellersPropsType = TablePropsType & {
  products: Orders[0]['products'];
};
