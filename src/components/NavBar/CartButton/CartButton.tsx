import { ShoppingCart } from 'lucide-react';
import Button from '../../Button';
import Icon from '../../Icon';
import Layout from '../../Layout';
import { Balance, P } from './CartButton.styled';

function CartButton() {
  return (
    <Button $variant="normal" $pad={16}>
      <Icon icon={ShoppingCart} />
      <Layout.FlexCol $position="relative">
        <P>My Cart</P>
        <Balance>$9,297.43</Balance>
      </Layout.FlexCol>
    </Button>
  );
}

export default CartButton;
