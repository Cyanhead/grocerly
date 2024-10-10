import styled from 'styled-components';
import { getFontWeight } from '../../theme';

export const EmptyTableMessage = styled.p`
  margin-top: 20px;
  font-weight: ${getFontWeight('light')};
  font-style: italic;
  font-size: calc(20 / 16 * 1rem);
`;
