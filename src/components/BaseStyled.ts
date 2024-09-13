import styled from 'styled-components';
import { getBreakpoint, getColor, getFontWeight } from '../theme';
import { Link } from 'react-router-dom';

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

  padding: 40px 16px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    padding: 48px 24px;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    padding: 56px 40px;
  }
`;

export const SectionHeading = styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-weight: ${getFontWeight('semibold')};
  font-size: calc(20 / 16 * 1rem);

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(24 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    font-size: calc(28 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    font-size: calc(32 / 16 * 1rem);
  }
`;

export const SectionHeading2 = styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-weight: ${getFontWeight('semibold')};
  font-size: calc(18 / 16 * 1rem);

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(20 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    font-size: calc(22 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    font-size: calc(24 / 16 * 1rem);
  }
`;

export const TextLink = styled(Link).attrs<{$isActive?: boolean}>(
  props=> ({
   $isActive: props.$isActive
  })
)`
  color: ${props => props.$isActive ? getColor('primary600') :'inherit'};
  text-decoration: none;


  &:hover {
    text-decoration: underline;
    color: ${props => !props.$isActive ? getColor('primary600') :'inherit'};
  }
`;
