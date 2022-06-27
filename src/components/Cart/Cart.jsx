import React from 'react';
import {
  CartWrap,
  CartCounterWrap,
  CartCounter,
  CartCount,
  CartText,
  CartP,
} from './cart.style';
import { GreenSpan, IconWrap } from '../others.style';
import ChevronDown from '../ChevronDown';
import { FiShoppingCart } from 'react-icons/fi';

const Cart = () => {
  return (
    <CartWrap>
      <IconWrap pos="relative" mar="0 4px 0 0">
        <FiShoppingCart />
        <CartCounterWrap>
          <CartCounter>
            <CartCount>4</CartCount>
          </CartCounter>
        </CartCounterWrap>
      </IconWrap>
      <CartText>
        <CartP>My Cart</CartP>
        <CartP>
          <GreenSpan>$21</GreenSpan>
        </CartP>
      </CartText>
      <ChevronDown />
    </CartWrap>
  );
};

export default Cart;
