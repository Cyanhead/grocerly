import { Product } from '../../../types';

export type NewProductType = Omit<Product, 'id'>;
export type NewProductStateType = Omit<
  NewProductType,
  'id' | 'rating' | 'createdAt' | 'updatedAt' | 'lastOrder' | 'firstOrder'
>;

export type AddProductFormPropsType = {
  closeFormModal: () => void;
};
