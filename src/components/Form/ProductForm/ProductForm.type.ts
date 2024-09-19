import { NewProductType } from '../AddProductForm/AddProductForm.type';
import { ExistingProductType } from '../EditProductForm/EditProductForm.type';

export type ProductFormPropsType<
  T extends NewProductType | ExistingProductType
> = {
  status: 'idle' | 'loading' | 'success' | 'error';

  children?: React.ReactNode;

  state: ExistingProductType | NewProductType;
  stateSetter: React.Dispatch<React.SetStateAction<T>>;

  button: {
    text: string;
    loadingText: string;
  };

  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
