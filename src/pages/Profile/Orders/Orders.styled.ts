import styled from 'styled-components';
import { Layout } from '../../../components';
import { getFontWeight } from '../../../theme';
import { Status as OrderStatus } from '../../../components/Tables/Orders/Orders.styled';

export const TopRow = styled(Layout.FlexRow)`
  flex-wrap: wrap;
`;

export const Status = styled(OrderStatus)`
  text-transform: uppercase;
`;

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  list-style-position: inside;
`;

export const ExpandButton = styled.button`
  display: flex;

  padding: 0;
  font-size: calc(14 / 16 * 1rem);
  font-weight: ${getFontWeight('medium')};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
