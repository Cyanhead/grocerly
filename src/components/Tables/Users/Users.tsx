import { UsersPropsType } from './Users.type';
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
import PhotoGroup from '../../PhotoGroup';
import fallbackUserImage from '../../../assets/images/default_user_fade.svg';

function Users({ users }: UsersPropsType) {
  const nodes = users.map(({ id, image, name, lastOrder }) => {
    return {
      id,
      image,
      name,
      lastOrder,
    };
  });

  const data = { nodes };

  const theme = useTheme({
    Table: `
      // --data-table-library_grid-template-columns: 220px minmax(180px, 1fr) minmax(100px, 1fr) minmax(76px, 1fr) 100px 1fr;
      --data-table-library_grid-template-columns: 1fr 52px 1fr 1fr;
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
              <HeaderCell>ID</HeaderCell>
              <HeaderCell></HeaderCell>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Last Order</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map(user => {
              return (
                <Row key={user.id} item={user}>
                  <Cell>{user.id}</Cell>
                  <Cell>
                    <PhotoGroup
                      // TODO: show fallback image when there is no image
                      photos={[user.image ?? fallbackUserImage]}
                    />
                  </Cell>
                  <Cell style={{ textTransform: 'capitalize' }}>
                    <TextLink
                      $isActive
                      to={`/admin/users/${user.id}`}
                      state={{ title: user.id }}
                    >
                      {user.name}
                    </TextLink>
                  </Cell>
                  <Cell>{parseTimestamp(user.lastOrder)}</Cell>
                </Row>
              );
            })}
          </Body>
        </>
      )}
    </Table>
  );
}

export default Users;
