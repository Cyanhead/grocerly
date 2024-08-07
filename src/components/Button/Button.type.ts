import { LinkProps } from 'react-router-dom';

export type ButtonCSSPropsType = {
  $variant?: 'primary' | 'secondary' | 'ghost' | 'normal';
  $theme?: 'danger' | 'normal';
  $pad?: number;
  $gap?: number;
};

export type ButtonPropsType = React.ComponentPropsWithoutRef<'button'> &
  ButtonCSSPropsType & { as?: keyof JSX.IntrinsicElements };

export type LinkButtonPropsType = ButtonCSSPropsType & LinkProps;
