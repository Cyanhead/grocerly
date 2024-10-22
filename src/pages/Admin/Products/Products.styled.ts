import styled from 'styled-components';
import { Button, IconButton } from '../../../components';
import { getBreakpoint } from '../../../theme';

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddProductButton = styled(Button)`
  display: none;

  @media screen and (min-width: ${getBreakpoint('xs')}) {
    display: flex;
  }
`;

export const MobileAddProductButton = styled(IconButton)`
  @media screen and (min-width: ${getBreakpoint('xs')}) {
    display: none;
  }
`;
