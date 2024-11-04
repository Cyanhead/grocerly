import { WishlistButtonPropsType } from './WishlistButton.type';
import Button from '../../Button';
import Icon from '../../Icon';
import { Heart } from 'lucide-react';

function WishlistButton({ onClick }: WishlistButtonPropsType) {
  // TODO: implement badge count
  return (
    <Button $variant="normal" onClick={onClick}>
      <Icon icon={Heart} />
      Wishlist
    </Button>
  );
}

export default WishlistButton;
