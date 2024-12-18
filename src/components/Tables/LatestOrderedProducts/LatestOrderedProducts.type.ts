import { Product } from '../../../types';
import { TablePropsType } from '../Tables.type';

export type LatestOrderedProductsPropsType = TablePropsType & {
  products: Product[];
};
