import { LatestOrderedProductsPropsType } from './LatestOrderedProducts.type';
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
import { parseTimestamp } from '../../../helpers';
import { TextLink } from '../../BaseStyled';
import { Timestamp } from 'firebase/firestore';

function LatestOrderedProducts({ products }: LatestOrderedProductsPropsType) {
  const nodes = products.map(({ id, name, lastOrder, createdAt }) => {
    return {
      id,
      name,
      lastOrder,
      createdAt,
    };
  });

  const data = { nodes };

  const theme = useTheme({
    Table: `
      --data-table-library_grid-template-columns: 1fr 1fr;
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
    }
    `,
  });

  return (
    <Table
      data={data}
      theme={theme}
      layout={{ custom: true, horizontalScroll: true }}
    >
      {(tableList: typeof nodes) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Last Order</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map(product => {
              function determineFirstSale(
                lastOrder: Timestamp,
                createdAt: Timestamp
              ) {
                if (!lastOrder || !createdAt) return 'Never';

                const diff =
                  lastOrder.toDate().getTime() - createdAt.toDate().getTime();
                return diff > 1000 * 60
                  ? parseTimestamp(product.lastOrder, {
                      hour: 'numeric',
                      minute: 'numeric',
                    })
                  : 'Never';
              }

              const lastOrderedDateTime = determineFirstSale(
                product.lastOrder,
                product.createdAt
              );

              return (
                <Row key={product.id} item={product}>
                  <Cell style={{ textTransform: 'capitalize' }}>
                    <TextLink
                      $isActive
                      to={product.id}
                      state={{ title: product.name }}
                    >
                      {product.name}
                    </TextLink>
                  </Cell>
                  <Cell title={lastOrderedDateTime}>{lastOrderedDateTime}</Cell>
                </Row>
              );
            })}
          </Body>
        </>
      )}
    </Table>
  );
}

export default LatestOrderedProducts;
