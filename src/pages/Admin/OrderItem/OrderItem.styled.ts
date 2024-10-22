import styled from 'styled-components';
import { SectionHeading2 } from '../../../components';
import { getBreakpoint, getFontWeight } from '../../../theme';

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;

  @media screen and (min-width: ${getBreakpoint('xs')}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Status = styled(SectionHeading2)`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const P = styled(SectionHeading2)`
  margin-left: 34px;

  font-weight: ${getFontWeight('regular')};
  text-transform: capitalize;
`;
