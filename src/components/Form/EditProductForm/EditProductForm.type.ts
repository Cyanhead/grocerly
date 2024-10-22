import { Products } from '../../../types';

export type ExistingProductStateType = Omit<
  Products[0],
  'rating' | 'stock' | 'lastOrder' | 'createdAt' | 'updatedAt'
>;

export type EditProductFormPropsType = {
  product: ExistingProductStateType;
  closeFormModal: () => void;
};
