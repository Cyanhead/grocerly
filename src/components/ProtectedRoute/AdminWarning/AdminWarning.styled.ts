import styled from 'styled-components';
import { getBreakpoint } from '../../../theme';
import { BaseContainer, BaseWrapper } from '../../BaseStyled';

export const Container = styled(BaseContainer)`
  margin-top: 0;
  height: 100vh;
`;

export const Wrapper = styled(BaseWrapper)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  max-width: 600px;
  font-size: calc(20 / 16 * 1rem);

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(28 / 16 * 1rem);
  }
`;
