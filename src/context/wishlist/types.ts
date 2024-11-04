import { Dispatch } from 'react';
import { Products } from '../../types';

type WishlistProduct = Pick<Products[0], 'id' | 'name' | 'price' | 'stock'> & {
  image: string;
};

export type WishlistState = WishlistProduct[];

export type Action =
  | {
      type: 'ADD_TO_WISHLIST';
      payload: WishlistProduct;
    }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: { id: string } }
  | { type: 'REMOVE_ALL_FROM_WISHLIST' };

export type WishlistContextType = {
  state: WishlistState;
  dispatch: Dispatch<Action>;
};
