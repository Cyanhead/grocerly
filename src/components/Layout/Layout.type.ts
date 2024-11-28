import { CSSProperties } from 'styled-components';

export type LayoutFlexPropsType = {
  children: React.ReactNode;
  $pad?: number;
  $gap?: number;
  $justify?: CSSProperties['justifyContent'];
  $align?: CSSProperties['alignItems'];
  $width?: CSSProperties['width'];
  $position?: CSSProperties['position'];
};

export type LayoutGridPropsType = LayoutFlexPropsType & {
  $cols?: number | string;
};
