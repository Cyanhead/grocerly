import { useEffect, useState } from 'react';
import { AddToWishlistButtonPropsType } from './AddToWishlistButton.type';
import { WishlistButton } from './AddToWishlistButton.styled';
import Icon from '../Icon';
import { Heart } from 'lucide-react';
import { useWishlistContext, WishlistState } from '../../context';

function AddToWishlistButton({ product }: AddToWishlistButtonPropsType) {
  const { state: wishlist, dispatch } = useWishlistContext();

  const productInWishlist = wishlist.some(
    productInWishlist => productInWishlist.id === product.id
  );
  const [addedToWishlist, setAddedToWishlist] = useState(productInWishlist);

  useEffect(() => {
    setAddedToWishlist(productInWishlist);
  }, [productInWishlist]);

  function addToWishlist(product: WishlistState[0]) {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        stock: product.stock,
      },
    });
  }

  function removeFromWishlist(productId: string) {
    dispatch({
      type: 'REMOVE_FROM_WISHLIST',
      payload: {
        id: productId,
      },
    });
  }

  function handleClick() {
    setAddedToWishlist(!addedToWishlist);

    if (addedToWishlist) {
      removeFromWishlist(product.id);

      return;
    }

    addToWishlist(product);
  }

  return (
    <WishlistButton
      onClick={handleClick}
      $variant={addedToWishlist ? 'primary' : 'ghost'}
    >
      <Icon icon={Heart} visuallyHidden="Wishlist" />
    </WishlistButton>
  );
}

export default AddToWishlistButton;
