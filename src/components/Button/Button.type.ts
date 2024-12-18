import { LinkProps } from 'react-router-dom';

export type ButtonCSSPropsType = {
  $variant?: 'primary' | 'secondary' | 'ghost' | 'normal';
  $theme?: 'danger' | 'normal';
  $pad?: number;
  $gap?: number;
};

export type ButtonPropsType = React.ComponentPropsWithoutRef<'button'> &
  ButtonCSSPropsType & {
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    variant?: ButtonPropsType['$variant'];
  };

export type LinkButtonPropsType = ButtonCSSPropsType &
  LinkProps & { variant?: ButtonPropsType['$variant'] };
