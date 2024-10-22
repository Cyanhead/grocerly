import styled from 'styled-components';
import { getColor } from '../../theme';
import { StyledButton } from '../Button/Button.styled';

export const Wrapper = styled.div.attrs<{ $numOfCols?: number }>(props => ({
  $numOfCols: props.$numOfCols || 4,
}))`
  display: grid;
  grid-template-columns: repeat(${props => props.$numOfCols}, 1fr);
  gap: 8px;
`;

export const Preview = styled.img.attrs<{ $numOfCols?: number }>(props => ({
  $numOfCols: props.$numOfCols || 4,
}))`
  border: ${getColor('faintLine')};

  width: 100%;

  grid-row: 1 / span ${props => props.$numOfCols};
  grid-column: 1 / span ${props => props.$numOfCols};

  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img.attrs<{ $active: boolean }>(props => ({
  $active: props.$active,
}))`
  grid-column-start: auto;
  grid-column-end: span 1;

  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;

  border-radius: 2px;
  border: 2px solid
    ${props => (props.$active ? getColor('primary') : 'rgba(0, 0, 0, 0.1)')};
`;

export const ImageButton = styled(StyledButton).attrs({
  $variant: 'normal',
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2px;
  cursor: pointer;

  padding: 0;

  grid-column-start: auto;
  grid-column-end: span 1;
`;
