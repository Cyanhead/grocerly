import styled from 'styled-components';
import { getBreakpoint } from '../../../theme';
import Input from '../../Input';

export const Wrapper = styled.form`
  position: relative;
  display: none;
  max-width: 350px;
  width: 100%;
  height: 44px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    display: flex;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    max-width: 450px;
  }
`;

export const SearchInput = styled(Input).attrs<{ $bg?: string }>(props => ({
  $bg: props.$bg || 'white',
}))`
  background-color: ${props => props.$bg};
  width: 100%;
  height: 100%;
`;
