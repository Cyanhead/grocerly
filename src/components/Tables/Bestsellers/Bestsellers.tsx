import { BestsellersPropsType } from './Bestsellers.type';
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
import { TextLink } from '../../BaseStyled';

function Bestsellers({ products }: BestsellersPropsType) {
  const nodes = products.map(({ id, name, count, price }) => {
    return {
      id,
      name,
      count,
      price,
    };
  });

  const data = { nodes };

  const theme = useTheme({
    Table: `
      --data-table-library_grid-template-columns: 2fr 1fr 1fr;
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
      // layout={{ custom: true, horizontalScroll: true }}
    >
      {(tableList: typeof nodes) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Sales</HeaderCell>
              <HeaderCell>Price</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map(product => {
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
                  <Cell>{product.count}</Cell>
                  <Cell>${product.price}</Cell>
                </Row>
              );
            })}
          </Body>
        </>
      )}
    </Table>
  );
}

export default Bestsellers;
