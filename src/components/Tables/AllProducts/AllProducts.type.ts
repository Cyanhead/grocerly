import { Products } from '../../../types';
import { TablePropsType } from '../Tables.type';

export type AllProductsPropsType = TablePropsType & {
  products: Products;
};
