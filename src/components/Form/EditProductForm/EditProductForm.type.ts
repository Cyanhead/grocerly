import { Products } from '../../../types';

export type ExistingProductType = Omit<
  Products[0],
  'rating' | 'stock' | 'lastOrder' | 'createdAt' | 'updatedAt'
>;

export type EditProductFormPropsType = {
  product: ExistingProductType;
  closeFormModal: () => void;
};
