import styled from 'styled-components';
import { ImageButton } from '../Gallery.styled';
import { StyledButton } from '../../Button/Button.styled';
import { getColor } from '../../../theme';

export const NewImageButton = styled(ImageButton).attrs({
  $variant: 'ghost',
  type: 'button',
})`
  grid-column-start: auto;
  grid-column-end: span 1;

  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;
`;

export const DeleteImageButton = styled(StyledButton).attrs({
  $variant: 'ghost',
  $theme: 'danger',
  type: 'button',
})`
  position: absolute;
  top: 0;
  right: 0;
`;

export const FileInput = styled.input.attrs({ type: 'file' })`
  position: absolute;
  z-index: -1;

  display: none;

  opacity: 0;
`;

export const ErrorText = styled.p`
  color: ${getColor('danger500')};
`;
