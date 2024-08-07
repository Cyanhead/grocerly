import styled from 'styled-components';
import { getColor } from './../../theme/themeUtils';

export const Input = styled.input`
  color: ${getColor('black')};
  background-color: ${getColor('white')};

  width: 100%;
  height: 50px;
  padding: 4px 16px;
  border: none;
  border-radius: 2px;

  &::placeholder {
    /* color: ${getColor('black')}; */
  }
`;
