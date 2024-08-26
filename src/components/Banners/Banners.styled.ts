import styled from 'styled-components';
import { getBreakpoint } from '../../theme';
import { BaseContainer, BaseWrapper } from '../BaseStyled';

export const Container = styled(BaseContainer)``;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    flex-direction: row;
  }
`;
