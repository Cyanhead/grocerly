import React from 'react';

import {
  WishlistWrap,
  WishlistCounterWrap,
  WishlistCounter,
  WishCount,
  WishlistP,
} from './wishlist.style';
import { IconWrap } from '../others.style';
import { FiHeart } from 'react-icons/fi';

const Wishlist = () => {
  return (
    <WishlistWrap>
      <IconWrap pos="relative">
        <FiHeart />
        <WishlistCounterWrap>
          <WishlistCounter>
            <WishCount>4</WishCount>
          </WishlistCounter>
        </WishlistCounterWrap>
      </IconWrap>
      <WishlistP>Wishlist</WishlistP>
    </WishlistWrap>
  );
};

export default Wishlist;
