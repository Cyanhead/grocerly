import styled from 'styled-components';
import { BaseWrapper, SectionHeading2 } from '../../components';
import { getBreakpoint, getColor } from '../../theme';

export const Container = styled.div`
  display: flex;
`;

export const Page = styled.main`
  width: 100%;
`;

export const Title = styled(SectionHeading2)`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  text-transform: capitalize;
  word-wrap: break-word;
`;

export const Grid = styled(BaseWrapper)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;

  padding-top: 20px;

  @media screen and (min-width: ${getBreakpoint('xs')}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
`;

export const Cell = styled.div.attrs<{
  $span?: [number, number];
  children: React.ReactNode;
}>(({ $span = [1, 1] }) => ({
  $span,
}))`
  grid-column-start: auto;
  grid-column-end: span 1;

  padding: 16px;

  border-radius: 2px;
  border: ${getColor('faintLine')};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);

  @media screen and (min-width: ${getBreakpoint('xs')}) {
    grid-column-end: span ${props => props.$span?.[0] ?? 1};
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    grid-column-end: span ${props => props.$span?.[1] ?? 1};
  }
`;

export const TitleWrapper = styled(BaseWrapper)`
  padding-bottom: 0;

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    padding-top: 0;
  }
`;
