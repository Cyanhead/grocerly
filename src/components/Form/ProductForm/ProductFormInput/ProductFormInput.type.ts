export type ProductFormInputPropsType = {
  label: React.ReactNode;
  name: string;
  placeholder?: string;
  type?: 'text' | 'textarea' | 'number';
  value: string | number;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTextAreaChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
};
