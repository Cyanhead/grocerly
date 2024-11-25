import { ShoppingCart } from 'lucide-react';
import Button from '../../Button';
import Layout from '../../Layout';
import { Balance, P } from './CartButton.styled';
import { WishlistButtonPropsType } from '../WishlistButton/WishlistButton.type';
import IconAndBadge from '../../IconAndBadge';
import { useCartContext } from '../../../context';

function CartButton({ onClick }: WishlistButtonPropsType) {
  const { state: cart } = useCartContext();

  return (
    <Button $variant="normal" $pad={16} onClick={onClick}>
      <IconAndBadge icon={ShoppingCart} count={cart.length} />
      <Layout.FlexCol $position="relative">
        <P>My Cart</P>
        <Balance>
          ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </Balance>
      </Layout.FlexCol>
    </Button>
  );
}

export default CartButton;
