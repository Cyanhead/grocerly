import styled from 'styled-components';
import { BaseWrapper, IconButton } from '../../../components';
import { getBreakpoint } from '../../../theme';

export const Container = styled.header`
  width: 100%;
`;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 0;
  padding-bottom: 0;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    justify-content: flex-end;
  }
`;

export const MenuButton = styled(IconButton)`
  display: flex;
  @media screen and (min-width: ${getBreakpoint('lg')}) {
    display: none;
  }
`;
