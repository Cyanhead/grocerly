import { CartAction, CartState } from './types';

export const initialState: CartState = JSON.parse(
  localStorage.getItem('cart') || '[]'
);

export function reducer(state: CartState, action: CartAction) {
  const newState = (() => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return state.some(product => product.id === action.payload.id)
          ? state
          : [...state, action.payload];

      case 'UPDATE_QUANTITY_IN_CART':
        return state.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: action.payload.quantity,
            };
          }
          return product;
        });

      case 'REMOVE_FROM_CART':
        return state.filter(product => product.id !== action.payload.id);

      case 'REMOVE_ALL_FROM_CART':
        return [];

      default:
        throw new Error(
          `Unhandled action type: ${(action as CartAction).type}`
        );
    }
  })();

  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
}
