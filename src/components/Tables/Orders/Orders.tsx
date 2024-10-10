import { OrdersPropsType } from './Orders.type';
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { parseTimestamp, separateNumberByComma } from '../../../helpers';
import { SectionHeading2, TextLink } from '../../BaseStyled';
import { Status } from './Orders.styled';
import PhotoGroup from '../../PhotoGroup';
import { EmptyTableMessage } from '../Tables.styled';

function Orders({
  heading = 'Orders',
  orders,
  emptyTableMessage = 'No orders!',
}: OrdersPropsType) {
  const nodes = orders.map(
    ({ id, customer, products, revenue, netProfit, status, createdAt }) => {
      return {
        id,
        customer,
        products,
        revenue,
        netProfit,
        status,
        createdAt,
      };
    }
  );

  const data = { nodes };

  const theme = useTheme({
    Table: `
      --data-table-library_grid-template-columns: 220px minmax(180px, 1fr) minmax(100px, 1fr) minmax(76px, 1fr) 100px 1fr;
      width: 100%;
    
      tr {
        &:is(:last-of-type) {
         td {
          padding-bottom: 20px;
         }
      }
    `,
    Row: `
      td {
        border-top: 1px solid #00000022;
      }
    `,
    HeaderCell: `
      padding: 12px 0;
      padding-top: 20px;
    `,
    Cell: `
      padding: 12px 0;
      
      // for the product column
      &:is(:nth-of-type(2)) {
        div {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }
    }
    `,
  });

  if (orders.length === 0)
    return (
      <>
        <SectionHeading2>{heading}</SectionHeading2>
        <EmptyTableMessage>{emptyTableMessage}</EmptyTableMessage>
      </>
    );

  return (
    <>
      <SectionHeading2>{heading}</SectionHeading2>
      <Table
        data={data}
        theme={theme}
        layout={{ custom: true, horizontalScroll: true }}
      >
        {(tableList: typeof nodes) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Order ID</HeaderCell>
                <HeaderCell>Products</HeaderCell>
                <HeaderCell>Customer</HeaderCell>
                <HeaderCell>Revenue</HeaderCell>
                <HeaderCell>Status</HeaderCell>
                <HeaderCell>Date</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(order => {
                return (
                  <Row key={order.id} item={order}>
                    <Cell style={{ textTransform: 'capitalize' }}>
                      <TextLink
                        $isActive
                        to={`/admin/orders/${order.id}`}
                        state={{ title: order.id }}
                      >
                        {order.id}
                      </TextLink>
                    </Cell>
                    <Cell>
                      <PhotoGroup
                        photos={new Array(order.products.length).fill('dummy')}
                      />
                      {order.products.length}{' '}
                      {order.products.length === 1 ? 'item' : 'items'}
                    </Cell>
                    <Cell>
                      <TextLink
                        $isActive
                        to={`/admin/users/${order.customer.id}`}
                        state={{ title: order.customer.id }}
                      >
                        {order.customer.name}
                      </TextLink>
                    </Cell>
                    <Cell title={`$${separateNumberByComma(order.revenue)}`}>
                      ${separateNumberByComma(order.revenue)}
                    </Cell>
                    <Cell style={{ textTransform: 'capitalize' }}>
                      <Status $text={order.status}>{order.status}</Status>
                    </Cell>
                    <Cell>{parseTimestamp(order.createdAt)}</Cell>
                  </Row>
                );
              })}
            </Body>
          </>
        )}
      </Table>
    </>
  );
}

export default Orders;
