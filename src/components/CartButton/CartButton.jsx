import React from 'react';
import {
  CartButtonWrap,
  CartButtonCounterWrap,
  CartButtonCounter,
  CartButtonCount,
  CartButtonText,
  CartButtonP,
} from './cart-button.style';
import { GreenSpan, IconWrap } from '../others.style';
import ChevronDown from '../ChevronDown';
import { FiShoppingCart } from 'react-icons/fi';

const CartButton = () => {
  return (
    <CartButtonWrap>
      <IconWrap pos="relative" mar="0 4px 0 0">
        <FiShoppingCart />
        <CartButtonCounterWrap>
          <CartButtonCounter>
            <CartButtonCount>4</CartButtonCount>
          </CartButtonCounter>
        </CartButtonCounterWrap>
      </IconWrap>
      <CartButtonText>
        <CartButtonP>My Cart</CartButtonP>
        <CartButtonP>
          <GreenSpan>$21</GreenSpan>
        </CartButtonP>
      </CartButtonText>
      <ChevronDown />
    </CartButtonWrap>
  );
};

export default CartButton;
