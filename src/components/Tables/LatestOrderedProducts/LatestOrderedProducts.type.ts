import { Products } from '../../../types';
import { TablePropsType } from '../Tables.type';

export type LatestOrderedProductsPropsType = TablePropsType & {
  products: Products;
};
