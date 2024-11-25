import { Dispatch } from 'react';
import { Products } from '../../types';

type CartProduct = Pick<Products[0], 'id' | 'name' | 'price'> & {
  image: string;
  quantity: number;
};

export type CartState = CartProduct[];

export type CartAction =
  | {
      type: 'ADD_TO_CART';
      payload: CartProduct;
    }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
  | { type: 'REMOVE_ALL_FROM_CART' };

export type CartContextType = {
  state: CartState;
  dispatch: Dispatch<CartAction>;
};
