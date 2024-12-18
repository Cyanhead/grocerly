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
import { SectionHeading2, TextLink } from '../../BaseStyled';
import { EmptyTableMessage } from '../Tables.styled';

function LatestOrderedProducts({
  heading = 'Ordered Products',
  products,
  emptyTableMessage = 'No products found!',
}: LatestOrderedProductsPropsType) {
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

  if (products.length === 0)
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
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Last Order</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(product => {
                const lastOrderedDate =
                  parseTimestamp(product.lastOrder) ?? 'Never';

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
                    <Cell title={lastOrderedDate}>{lastOrderedDate}</Cell>
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

export default LatestOrderedProducts;
