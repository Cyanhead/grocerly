import { CSSProperties } from 'styled-components';

export type LayoutPropsType = {
  $pad?: number;
  $gap?: number;
  $justify?: CSSProperties['justifyContent'];
  $align?: CSSProperties['alignItems'];
  $width?: CSSProperties['width'];
  $position?: CSSProperties['position'];
};
