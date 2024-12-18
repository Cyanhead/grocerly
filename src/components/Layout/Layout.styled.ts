import { getBreakpoint } from './../../theme/themeUtils';
import styled from 'styled-components';
import { LayoutFlexPropsType, LayoutGridPropsType } from './Layout.type';

export const Container = styled.div``;

export const FlexRow = styled.div.attrs<LayoutFlexPropsType>(props => ({
  $pad: props.$pad || 0,
  $gap: props.$gap || 0,
  $justify: props.$justify || 'flex-start',
  $align: props.$align || 'flex-start',
  $width: props.$width || 'auto',
  $position: props.$position || 'static',
  $wrap: props.$wrap || 'nowrap',
}))`
  display: flex;
  flex-direction: row;
  gap: ${props => `${props.$gap}px`};
  padding: ${props => `${props.$pad}px`};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
  width: ${props => props.$width};
  position: ${props => props.$position};
  flex-wrap: ${props => props.$wrap};
`;

export const FlexCol = styled.div.attrs<LayoutFlexPropsType>(props => ({
  $pad: props.$pad || 0,
  $gap: props.$gap || 0,
  $justify: props.$justify || 'flex-start',
  $align: props.$align || 'flex-start', // CONSIDER: stretch
  $width: props.$width || 'auto',
  $position: props.$position || 'static',
  // $wrap: props.$wrap || 'nowrap', // NOTE: not sure it's needed here
}))`
  display: flex;
  flex-direction: column;
  gap: ${props => `${props.$gap}px`};
  padding: ${props => `${props.$pad}px`};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
  width: ${props => props.$width};
  position: ${props => props.$position};
  /* flex-wrap: ${props => props.$wrap}; */
`;

export const Grid = styled.div.attrs<LayoutGridPropsType>(props => ({
  $pad: props.$pad || 0,
  $gap: props.$gap || 0,
  $cols:
    typeof props.$cols === 'number'
      ? `repeat(${props.$cols}, 1fr)`
      : props.$cols || '1fr',
  $justify: props.$justify || 'flex-start',
  $align: props.$align || 'flex-start',
  $width: props.$width || 'auto',
  $position: props.$position || 'static',
}))`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: ${props => `${props.$gap}px`};
  padding: ${props => `${props.$pad}px`};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
  width: ${props => props.$width};
  position: ${props => props.$position};

  @media screen and (min-width: ${getBreakpoint('md')}) {
    grid-template-columns: ${props => props.$cols};
  }
`;
