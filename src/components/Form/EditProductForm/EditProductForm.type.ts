import { Product } from '../../../types';

export type ExistingProductStateType = Omit<
  Product,
  'rating' | 'stock' | 'lastOrder' | 'createdAt' | 'updatedAt'
>;

export type EditProductFormPropsType = {
  product: ExistingProductStateType;
  closeFormModal: () => void;
};
