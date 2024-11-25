import { createContext, useReducer } from 'react';
import { CartContextType } from './types';
import { initialState, reducer } from './reducer';

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
