import styled from 'styled-components';
import { getColor, getFontWeight } from '../../../../theme';

export const Container = styled.div.attrs<{ $bg_color?: string }>(props => ({
  $bg_color: props.$bg_color || '#3BB77E',
}))`
  border: ${getColor('faintLine')};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  height: 100%;
  padding: 16px;
  background-color: ${props => props.$bg_color};
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
  aspect-ratio: 1;
`;

export const Title = styled.p`
  font-size: calc(20 / 16 * 1rem);
  font-weight: ${getFontWeight('semibold')};
  text-transform: capitalize;
`;
