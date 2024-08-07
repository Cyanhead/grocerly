import styled from 'styled-components';
import { LayoutPropsType } from './Layout.type';

export const Container = styled.div``;

export const FlexRow = styled.div.attrs<LayoutPropsType>(props => ({
  $pad: props.$pad || 0,
  $gap: props.$gap || 0,
  $justify: props.$justify || 'flex-start',
  $align: props.$align || 'flex-start',
  $width: props.$width || 'auto',
  $position: props.$position || 'static',
}))`
  display: flex;
  flex-direction: row;
  gap: ${props => `${props.$gap}px`};
  padding: ${props => `${props.$pad}px`};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
  width: ${props => props.$width};
  position: ${props => props.$position};
`;

export const FlexCol = styled.div.attrs<LayoutPropsType>(props => ({
  $pad: props.$pad || 0,
  $gap: props.$gap || 0,
  $justify: props.$justify || 'flex-start',
  $align: props.$align || 'flex-start',
  $width: props.$width || 'auto',
  $position: props.$position || 'static',
}))`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$gap};
  padding: ${props => `${props.$pad}px`};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
  width: ${props => props.$width};
  position: ${props => props.$position};
`;
