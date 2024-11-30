import { Products } from '../../../types';

export type NewProductType = Omit<Products[0], 'id'>;
export type NewProductStateType = Omit<
  NewProductType,
  'id' | 'rating' | 'createdAt' | 'updatedAt' | 'lastOrder' | 'firstOrder'
>;

export type AddProductFormPropsType = {
  closeFormModal: () => void;
};
