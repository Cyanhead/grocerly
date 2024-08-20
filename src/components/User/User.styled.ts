import styled from 'styled-components';
import { getBreakpoint } from '../../theme';

export const P = styled.p`
  display: none;
  @media screen and (min-width: ${getBreakpoint('sm')}) {
    display: block;
  }
`;

export const Photo = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  margin-right: 8px;
`;
