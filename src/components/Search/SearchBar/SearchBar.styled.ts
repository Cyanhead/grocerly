import styled from 'styled-components';
import { getBreakpoint } from '../../../theme';
import IconButton from '../../IconButton';
import Input from '../../Input';

export const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 16px);
  left: 0;
  right: 0;

  padding: 0 16px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    display: none;
  }
`;

// export const SearchIconButton = styled(IconButton).attrs({})`
export const SearchIconButton = styled(IconButton)`
  @media screen and (min-width: ${getBreakpoint('md')}) {
    display: none;
  }
`;

export const SearchInput = styled(Input).attrs<{ $bg?: string }>(props => ({
  $bg: props.$bg || 'white',
}))`
  background-color: ${props => props.$bg};
  width: 100%;
  height: 100%;
`;
