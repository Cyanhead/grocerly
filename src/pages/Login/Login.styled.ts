import styled from 'styled-components';
import { getBreakpoint, getColor } from '../../theme';

export const ForgotPass = styled.div`
  background-color: ${getColor('white')};

  margin: 8px;
  padding: 20px;
  border-radius: 2px;
  max-width: 576px;

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    text-align: center;
    margin: 8px auto;
  }
`;
