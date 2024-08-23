import styled from 'styled-components';
import { Input } from '../../../components';
import { getBreakpoint, getColor } from '../../../theme';

export const Form = styled.form`
  margin-top: 20px;
  background-color: ${getColor('white')};

  display: flex;
  align-items: center;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    max-width: 600px;
  }
`;

export const Group = styled.fieldset`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;

  padding-left: 12px;

  &:focus-within {
    outline: 2px solid black;
    border-radius: 2px;
  }
`;

export const EmailInput = styled(Input).attrs<{ $bg?: string }>(props => ({
  $bg: props.$bg || 'white',
}))`
  background-color: ${props => props.$bg};
  width: 100%;
  padding-left: 12px;
  outline: none;
  font-size: calc(14 / 16 * 1rem);
`;
