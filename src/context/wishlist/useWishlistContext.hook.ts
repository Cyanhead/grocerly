import { useContext } from 'react';
import { WishlistContext } from './WishlistContext';

export function useWishlistContext() {
  const context = useContext(WishlistContext);

  if (context === undefined) {
    throw new Error(
      'useWishlistContext must be used within a WishlistProvider'
    );
  }

  return context;
}
