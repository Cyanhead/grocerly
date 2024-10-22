import styled from 'styled-components';
import { getColor } from '../../theme';

export const Group = styled.div.attrs<{ $gap?: string }>(props => ({
  $gap: props.$gap || '6px',
}))`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$gap};
`;

export const Row = styled.div.attrs<{ $gap?: string }>(props => ({
  $gap: props.$gap || '6px',
}))`
  display: flex;
  gap: ${props => props.$gap};
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: ${getColor('faintLine')};
  object-fit: cover;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #eaeaeabb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
