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

const WishlistButtonButton = () => {
  return (
    <WishlistButtonWrap>
      <IconWrap pos="relative">
        <FiHeart />
        <WishlistButtonCounterWrap>
          <WishlistButtonCounter>
            <WishCount>4</WishCount>
          </WishlistButtonCounter>
        </WishlistButtonCounterWrap>
      </IconWrap>
      <WishlistButtonP>Wishlist</WishlistButtonP>
    </WishlistButtonWrap>
  );
};

export default WishlistButtonButton;
