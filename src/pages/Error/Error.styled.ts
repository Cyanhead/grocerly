import styled from 'styled-components';
import { getBreakpoint, getColor } from '../../theme';

export const Container = styled.div`
  width: 100%;
  background-color: ${getColor('white')};

  height: 100vh;
`;

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  max-width: 1200px;
  margin: 0 auto;

  padding: 8px 16px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    padding: 12px 24px;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    padding: 16px 40px;
  }
`;

export const Section = styled.div``;

export const ErrorMessage = styled.p`
  color: ${getColor('danger600')};
  font-style: italic;
`;

export const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
