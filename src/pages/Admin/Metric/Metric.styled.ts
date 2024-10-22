import styled from 'styled-components';
import { getColor, getFontWeight } from '../../../theme';
import { SectionHeading2 } from '../../../components';
import { Cell } from '../Admin.styled';

export const Card = styled(Cell)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: calc(14 / 16 * 1rem);
  color: ${getColor('grey')};
  font-weight: ${getFontWeight('semibold')};
`;

export const Value = styled(SectionHeading2)``;
