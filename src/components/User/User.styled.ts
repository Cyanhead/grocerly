import styled from 'styled-components';
import { getBreakpoint } from '../../theme';

export const P = styled.p`
  text-transform: capitalize;

  display: none;
  @media screen and (min-width: ${getBreakpoint('sm')}) {
    display: block;
  }
`;
