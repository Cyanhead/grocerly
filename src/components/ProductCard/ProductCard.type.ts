import { Products } from '../../types';

export type ProductCardPropsType = {
  product: Pick<Products[0], 'id' | 'name' | 'images' | 'price' | 'category'>;
};
