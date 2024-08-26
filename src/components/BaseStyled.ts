import styled from 'styled-components';
import { getBreakpoint } from '../theme';

export const BaseContainer = styled.section`
  width: 100%;
  margin: 40px 0; // TODO: consider increasing this value since it collapses

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BaseWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  padding: 8px 16px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    padding: 12px 24px;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    padding: 16px 40px;
  }
`;
