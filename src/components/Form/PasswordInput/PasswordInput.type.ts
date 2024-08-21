import { AuthFormPropsType } from '../AuthForm/AuthForm.type';

type FieldsetType = AuthFormPropsType['content']['fieldsets'][0];

export type PasswordErrorType = {
  hasAtLeastEightChars: boolean;
  hasNumber: boolean;
  hasUppercase: boolean;
  hasSpecialChar: boolean;
};

export type PasswordInputPropsType = Omit<FieldsetType, 'error'> & {
  type: 'password';
  error?: PasswordErrorType;
  setIsPasswordValid: React.Dispatch<React.SetStateAction<boolean>>;
};
