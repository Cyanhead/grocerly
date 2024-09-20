import { Products } from '../../../hooks';

export type NewProductType = Omit<
  Products[0],
  'id' | 'rating' | 'lastOrder' | 'createdAt' | 'updatedAt'
>;

export type AddProductFormPropsType = {
  closeFormModal: () => void;
};
