import { OrdersPropsType } from './Orders.type';
import { useGetOrders } from '../../../hooks';
import { Card, Detail, Title } from '../Profile.styled';
import { Divider, Layout, TextLink } from '../../../components';
import { parseTimestamp } from '../../../helpers';
import { ExpandButton, List, ListItem, Status, TopRow } from './Orders.styled';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Orders({ userId }: OrdersPropsType) {
  const {
    // isLoading: ordersIsLoading, // TODO: add skeleton
    data: orders = [],
    // error: ordersError,
  } = useGetOrders();

  const ordersByUser = orders.filter(order => order.customer.id === userId);

  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <Layout.FlexCol $align="stretch" $gap={16}>
      {ordersByUser.map(({ id, status, products = [], revenue, createdAt }) => {
        const productsToShow = showAllProducts
          ? products
          : products.slice(0, 2);

        return (
          <Card key={id}>
            <TopRow $justify="space-between">
              <Title>Order ID: {id}</Title>
              <Layout.FlexRow $gap={4}>
                STATUS:
                <Status $text={status}>{status}</Status>
              </Layout.FlexRow>
            </TopRow>
            <Divider />
            <Layout.FlexRow $gap={16} $justify="space-between">
              <Layout.FlexCol>
                <List>
                  {productsToShow.map(product => (
                    <ListItem key={product.id}>
                      <TextLink
                        style={{ textTransform: 'capitalize' }}
                        $isActive
                        key={product.id}
                        to={`/products/${product.id}`}
                      >
                        {product.name}
                      </TextLink>
                    </ListItem>
                  ))}
                  {products.length > 2 && (
                    <ExpandButton
                      onClick={() => setShowAllProducts(!showAllProducts)}
                    >
                      {showAllProducts ? (
                        <>
                          View less <ChevronUp />
                        </>
                      ) : (
                        <>
                          View more <ChevronDown />
                        </>
                      )}
                    </ExpandButton>
                  )}
                </List>
              </Layout.FlexCol>
              <Layout.FlexCol $align="flex-end">
                <Detail>${revenue}</Detail>
                <Detail>{parseTimestamp(createdAt)}</Detail>
              </Layout.FlexCol>
            </Layout.FlexRow>
          </Card>
        );
      })}
    </Layout.FlexCol>
  );
}

export default Orders;
