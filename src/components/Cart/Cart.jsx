import React from 'react';

import { useCartContext } from '../../context/CartContext';
import {
  CartWrap,
  CartTop,
  CartTopLeft,
  EmptyCartButton,
  EmptyCartButtonSpan,
  CartMid,
  CartHeading,
  CartP,
  AddProductsButton,
  CartItemsList,
  CartItemWrap,
  CartItemLeft,
  ItemImg,
  ItemDetails,
  CartItemRight,
  CartRow,
  CartBottom,
  CheckoutButton,
} from './cart.style';
import { FiShoppingCart, FiTrash, FiChevronLeft } from 'react-icons/fi';
import { Disabler, GreenSpan, IconWrap } from '../others.style';
import ItemQuantityCounter from '../ItemQuantityCounter';

const Cart = () => {
  const {
    cartItems,
    setCartItems,
    totalQuantity,
    setTotalQuantity,
    totalPrice,
    setTotalPrice,
    showCart,
    setShowCart,
    onRemove,
  } = useCartContext();

  const EmptyCart = () => {
    return (
      <CartMid>
        {/* TODO: replace icon with svg */}
        <IconWrap fontSize="8rem">
          <FiShoppingCart />
        </IconWrap>
        <CartP
          fontSize="1.25rem"
          fontWght={props => props.theme.fontWght.medium}
          textTrans="inherit"
          textAlign="center"
        >
          There are no items in the cart ಥ_ಥ
        </CartP>
        <AddProductsButton
          to="/products"
          onClick={() => setShowCart(!showCart)}
        >
          Add products
        </AddProductsButton>
      </CartMid>
    );
  };

  const CartInterface = () => {
    return (
      <CartItemsList>
        {cartItems.map(item => {
          return (
            <CartItemWrap key={item?.id}>
              <CartItemLeft>
                <ItemImg src={item?.images[0]} alt="" />
                <ItemDetails>
                  <CartP> {item?.name} </CartP>
                  <CartP> &#36;{item?.price} </CartP>
                  <CartP>
                    sub total:{' '}
                    <GreenSpan
                      fontWght={props => props.theme.fontWght.semibold}
                    >
                      &#36;{item.price * item.quantity}
                    </GreenSpan>
                  </CartP>
                </ItemDetails>
              </CartItemLeft>
              <CartItemRight>
                <ItemQuantityCounter item={item} mar="0" cart />
                <IconWrap onClick={() => onRemove(item)} fgHover="red">
                  <FiTrash />
                </IconWrap>
              </CartItemRight>
            </CartItemWrap>
          );
        })}
      </CartItemsList>
    );
  };

  const CartCheckout = () => {
    return (
      <CartBottom>
        <CartRow>
          <CartP
            fontSize="1.25rem"
            fontWght={props => props.theme.fontWght.medium}
          >
            Total price:
          </CartP>
          <CartP
            fontSize="1.25rem"
            fontWght={props => props.theme.fontWght.bold}
          >
            &#36;{totalPrice}
          </CartP>
        </CartRow>
        <CheckoutButton>Checkout</CheckoutButton>
      </CartBottom>
    );
  };

  const handleEmptyCart = () => {
    setCartItems([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };

  return (
    <CartWrap centerCenter={cartItems.length === 0} showCart={showCart}>
      <CartTop>
        <CartTopLeft>
          <IconWrap
            onClick={() => setShowCart(!showCart)}
            mar="0 4px 0 0"
            pad="8px"
            bordRad="4px"
            bgHover={props => props.theme.color.greyHover}
            bgActive={props => props.theme.color.greyActive}
          >
            <FiChevronLeft />
          </IconWrap>
          <CartHeading>
            My Cart{' '}
            <GreenSpan>
              ({totalQuantity} item{totalQuantity === 1 ? '' : 's'})
            </GreenSpan>
          </CartHeading>
        </CartTopLeft>
        <Disabler disabled={cartItems.length === 0} onClick={handleEmptyCart}>
          <EmptyCartButton>
            <IconWrap fontSize="1.25rem" bg="transparent" bgHover="transparent">
              <FiTrash />
            </IconWrap>
            <EmptyCartButtonSpan>Empty Cart</EmptyCartButtonSpan>
          </EmptyCartButton>
        </Disabler>
      </CartTop>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartInterface />
          <CartCheckout />
        </>
      )}
    </CartWrap>
  );
};

export default Cart;
