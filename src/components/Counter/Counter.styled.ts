import styled from 'styled-components';
import { getColor, getFontWeight } from '../../theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  border: ${getColor('faintLine')};
`;

export const Count = styled.p`
  font-weight: ${getFontWeight('semibold')};
  font-size: calc(20 / 16 * 1rem);
  width: 40px;
  text-align: center;
`;
