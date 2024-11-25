import { CartAction, CartState } from './types';

export const initialState: CartState = [];

export function reducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.some(product => product.id === action.payload.id)
        ? state
        : [...state, action.payload];

    case 'REMOVE_FROM_CART':
      return state.filter(product => product.id !== action.payload.id);

    case 'REMOVE_ALL_FROM_CART':
      return [];

    default:
      throw new Error(`Unhandled action type: ${(action as CartAction).type}`);
  }
}
