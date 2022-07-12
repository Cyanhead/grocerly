import React from 'react';
import {
  CartButtonWrap,
  CartButtonCounterWrap,
  CartButtonCounter,
  CartButtonCount,
  CartButtonText,
  CartButtonP,
  CartMobileP,
} from './cart-button.style';

import { useCartContext } from '../../context/CartContext';

import { GreenSpan, IconWrap } from '../others.style';
import { FiShoppingCart } from 'react-icons/fi';

const CartButton = () => {
  const { showCart, setShowCart, totalQuantity, totalPrice } = useCartContext();

  return (
    <CartButtonWrap onClick={() => setShowCart(!showCart)}>
      <IconWrap pos="relative" mar="0 4px 0 0">
        <FiShoppingCart />
        <CartButtonCounterWrap>
          <CartButtonCounter>
            <CartButtonCount> {totalQuantity} </CartButtonCount>
          </CartButtonCounter>
        </CartButtonCounterWrap>
      </IconWrap>
      <CartMobileP>My Cart</CartMobileP>
      <CartButtonText>
        <CartButtonP>My Cart</CartButtonP>
        <CartButtonP>
          <GreenSpan>&#36;{totalPrice}</GreenSpan>
        </CartButtonP>
      </CartButtonText>
    </CartButtonWrap>
  );
};

export default CartButton;
