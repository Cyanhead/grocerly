import { createContext, useReducer } from 'react';
import { WishlistContextType } from './types';
import { initialState, reducer } from './reducer';

export const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WishlistContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistProvider };
