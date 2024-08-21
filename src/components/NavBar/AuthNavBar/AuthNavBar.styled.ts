import styled from 'styled-components';
import { getBreakpoint, getColor } from '../../../theme';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.header`
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${getColor('white')};

  margin: 8px;
  border-radius: 2px;

  padding: 12px 24px;
  @media screen and (min-width: ${getBreakpoint('md')}) {
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    margin: 0;
    padding: 16px 40px;
    border-bottom: 1px solid ${getColor('grey')};
  }
`;

export const P = styled.p`
  display: flex;
  font-weight: 500;
`;

export const Link = styled(RouterLink)`
  color: ${getColor('primary600')};
`;

export const Span = styled.span`
  margin-right: 6px;
  display: none;
  @media screen and (min-width: ${getBreakpoint('md')}) {
    display: block;
  }
`;
