import { Dispatch } from 'react';
import { Product } from '../../types';

type WishlistProduct = Pick<Product, 'id' | 'name' | 'price' | 'stock'> & {
  image: string;
};

export type WishlistState = WishlistProduct[];

export type WishlistAction =
  | {
      type: 'ADD_TO_WISHLIST';
      payload: WishlistProduct;
    }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: { id: string } }
  | { type: 'REMOVE_ALL_FROM_WISHLIST' };

export type WishlistContextType = {
  state: WishlistState;
  dispatch: Dispatch<WishlistAction>;
};
