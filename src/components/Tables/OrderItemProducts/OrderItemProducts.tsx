import { OrderItemProductsPropsType } from './OrderItemProducts.type';
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
import PhotoGroup from '../../PhotoGroup';
import { TextLink } from '../../BaseStyled';

function OrderItemProducts({ products }: OrderItemProductsPropsType) {
  const nodes = products.map(({ id, image, name, quantity, price }) => {
    return {
      id,
      image,
      name,
      quantity,
      price,
    };
  });

  const data = { nodes };

  const theme = useTheme({
    Table: `
      // --data-table-library_grid-template-columns: 210px minmax(180px, 1fr) minmax(100px, 1fr) minmax(76px, 1fr) 100px 2fr;
      --data-table-library_grid-template-columns: 60px minmax(150px, 1fr) minmax(100px, 1fr) 60px;
      width: 100%;
    
      // @media screen and (min-width: 768px) {
      //   --data-table-library_grid-template-columns: 1fr 1fr 100px 160px repeat(2, 1fr);
      // }

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
              <HeaderCell>Item</HeaderCell>
              <HeaderCell></HeaderCell>
              <HeaderCell>Price</HeaderCell>
              <HeaderCell>Qty</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map(product => {
              return (
                <Row key={product.id} item={product}>
                  <Cell>
                    <PhotoGroup photos={[product.image]} />
                  </Cell>
                  <Cell style={{ textTransform: 'capitalize' }}>
                    <TextLink
                      $isActive
                      to={`/admin/products/${product.id}`}
                      state={{ title: product.id }}
                    >
                      {product.name}
                    </TextLink>
                  </Cell>

                  {/* <Cell></Cell> */}
                  <Cell>${product.price}</Cell>
                  <Cell>{product.quantity}</Cell>
                </Row>
              );
            })}
          </Body>
        </>
      )}
    </Table>
  );
}

export default OrderItemProducts;
