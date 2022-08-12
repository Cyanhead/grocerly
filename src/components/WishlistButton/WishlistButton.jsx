import React from 'react';

import {
  WishlistButtonWrap,
  WishlistButtonCounterWrap,
  WishlistButtonCounter,
  WishCount,
  WishlistButtonP,
} from './wishlist-button.style';
import { IconWrap } from '../others.style';
import { FiHeart } from 'react-icons/fi';
import { useWishlistContext } from '../../context/WIshlistContext';

const WishlistButtonButton = () => {
  const { showWishlist, setShowWishlist, totalQuantity } = useWishlistContext();

  return (
    <WishlistButtonWrap onClick={() => setShowWishlist(!showWishlist)}>
      <IconWrap pos="relative">
        <FiHeart />
        <WishlistButtonCounterWrap>
          <WishlistButtonCounter>
            <WishCount>{totalQuantity}</WishCount>
          </WishlistButtonCounter>
        </WishlistButtonCounterWrap>
      </IconWrap>
      <WishlistButtonP>Wishlist</WishlistButtonP>
    </WishlistButtonWrap>
  );
};

export default WishlistButtonButton;
