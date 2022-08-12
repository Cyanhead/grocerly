import React, { createContext, useContext, useState } from 'react';

import { toast } from 'react-hot-toast';

const Context = createContext();

export const CartContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty(prevQty => prevQty + 1);
  };

  const onAdd = (product, quantity = 1) => {
    // * checks if product already exists in the cart and returns product
    const checkProductInCart = cartItems.find(item => product.id === item.id);

    setTotalPrice(previousPrice => previousPrice + product.price * quantity);
    setTotalQuantity(previousQuantity => previousQuantity + quantity);

    // * if product exists, increase the quantity only, else add a new product entry
    if (checkProductInCart) {
      const updatedCartItems = [...cartItems];

      const productIndex = updatedCartItems.findIndex(
        cartProduct => cartProduct.id === product.id
      );
      updatedCartItems[productIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(
      `${qty} ${product.name}${qty === 1 ? '' : 's'} added to cart.`
    );
  };

  const onRemove = product => {
    const newCartItems = cartItems.filter(item => item.id !== product.id);

    setTotalPrice(
      previousPrice => previousPrice - product.price * product.quantity
    );
    setTotalQuantity(previousQuantity => previousQuantity - product.quantity);
    setCartItems(newCartItems);
    toast.error(
      `${product.quantity} ${product.name}${
        product.quantity === 1 ? '' : 's'
      } removed from cart.`
    );
  };

  const toggleCartItemQuanitity = (id, value) => {
    const foundProduct = cartItems.find(item => item.id === id);
    const productIndex = cartItems.findIndex(product => product.id === id);
    const newCartItems = [...cartItems];

    if (value === 'inc') {
      newCartItems[productIndex].quantity += 1;

      setCartItems(newCartItems);

      setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price);
      setTotalQuantity(prevTotalQuantities => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        newCartItems[productIndex].quantity -= 1;
        setCartItems(newCartItems);

        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price);
        setTotalQuantity(prevTotalQuantities => prevTotalQuantities - 1);
      }
    }
  };

  const decQty = () => {
    setQty(prevQty => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantity,
        setTotalQuantity,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        onRemove,
        toggleCartItemQuanitity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCartContext = () => useContext(Context);
