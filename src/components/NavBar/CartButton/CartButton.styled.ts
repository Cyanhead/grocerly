import styled from 'styled-components';
import { getColor } from '../../../theme';

export const P = styled.p`
  margin-top: -9px;
`;

export const Balance = styled.p`
  color: ${getColor('primary600')};
  font-size: 12px;
  margin-bottom: -9px;

  /* position: absolute;
  bottom: -100%;
  left: 0; */
`;
