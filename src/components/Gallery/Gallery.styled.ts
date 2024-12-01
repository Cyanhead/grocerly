import styled from 'styled-components';
import { getBreakpoint, getColor } from '../../theme';
import { StyledButton } from '../Button/Button.styled';

export const Wrapper = styled.div.attrs<{ $numOfCols?: number }>(props => ({
  $numOfCols: props.$numOfCols || 4,
}))`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    grid-template-columns: repeat(${props => props.$numOfCols}, 1fr);
  }
`;

export const Preview = styled.img.attrs<{ $numOfCols?: number }>(props => ({
  $numOfCols: props.$numOfCols || 4,
}))`
  border: ${getColor('faintLine')};

  height: auto;

  aspect-ratio: 1 / 1;
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    grid-row: 1 / span ${props => props.$numOfCols};
    grid-column: 1 / span ${props => props.$numOfCols};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img.attrs<{ $active: boolean }>(props => ({
  $active: props.$active,
}))`
  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;

  border-radius: 2px;
  border: 2px solid
    ${props => (props.$active ? getColor('primary') : 'rgba(0, 0, 0, 0.1)')};

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    grid-column-start: auto;
    grid-column-end: span 1;
  }
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
`;
