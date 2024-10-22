import { NewProductStateType } from '../AddProductForm/AddProductForm.type';
import { ExistingProductStateType } from '../EditProductForm/EditProductForm.type';

export type ProductFormPropsType<
  T extends NewProductStateType | ExistingProductStateType
> = {
  status: 'idle' | 'loading' | 'success' | 'error';

  children?: React.ReactNode;

  state: ExistingProductStateType | NewProductStateType;
  stateSetter: React.Dispatch<React.SetStateAction<T>>;

  button: {
    text: string;
    loadingText: string;
  };

  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
