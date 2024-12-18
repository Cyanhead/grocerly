import { WishlistButtonPropsType } from './WishlistButton.type';
import { Heart } from 'lucide-react';
import { Button } from './WishlistButton.styled';
import IconAndBadge from '../../IconAndBadge';
import { useWishlistContext } from '../../../context';

function WishlistButton({ onClick }: WishlistButtonPropsType) {
  const { state: wishlist } = useWishlistContext();

  return (
    <Button $variant="normal" onClick={onClick}>
      <IconAndBadge count={wishlist.length} icon={Heart} />
      Wishlist
    </Button>
  );
}

export default WishlistButton;
