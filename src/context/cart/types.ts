import { Dispatch } from 'react';
import { Product } from '../../types';

type CartProduct = Pick<Product, 'id' | 'name' | 'price'> & {
  image: string;
  quantity: number;
};

export type CartState = CartProduct[];

export type CartAction =
  | {
      type: 'ADD_TO_CART';
      payload: CartProduct;
    }
  | {
      type: 'UPDATE_QUANTITY_IN_CART';
      payload: { id: string; quantity: number };
    }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
  | { type: 'REMOVE_ALL_FROM_CART' };

export type CartContextType = {
  state: CartState;
  dispatch: Dispatch<CartAction>;
};
