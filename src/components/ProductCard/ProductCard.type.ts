import { Product } from '../../types';

export type ProductCardPropsType = {
  product: Pick<Product, 'id' | 'name' | 'images' | 'price' | 'category'>;
};
