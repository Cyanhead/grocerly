import styled from 'styled-components';
import {
  BaseWrapper,
  IconButton,
  Logo as LogoComponent,
} from '../../../components';
import { getBreakpoint } from '../../../theme';

export const Container = styled.header`
  width: 100%;
`;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 4px;
  padding-bottom: 4px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    justify-content: flex-end;
  }
`;

export const MenuButton = styled(IconButton)`
  display: flex;
  @media screen and (min-width: ${getBreakpoint('xl')}) {
    display: none;
  }
`;

export const Logo = styled(LogoComponent)`
  @media screen and (min-width: ${getBreakpoint('xl')}) {
    display: none;
  }
`;
