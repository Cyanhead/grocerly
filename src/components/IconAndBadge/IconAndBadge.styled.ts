import styled from 'styled-components';
import { getColor, getFontWeight } from '../../theme';

export const Wrapper = styled.div`
  position: relative;
`;

export const Badge = styled.span`
  position: absolute;
  top: -9px;
  right: -9px;

  font-size: calc(10 / 16 * 1rem);
  font-weight: ${getFontWeight('semibold')};
  color: ${getColor('white')};
  min-width: 18px;
  background-color: ${getColor('primary')};
  border-radius: 50%;
  border: 2px solid ${getColor('white')};
`;
