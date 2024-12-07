import { WishlistAction, WishlistState } from './types';

export const initialState: WishlistState = JSON.parse(
  localStorage.getItem('wishlist') || '[]'
);

export function reducer(state: WishlistState, action: WishlistAction) {
  const newState = (() => {
    switch (action.type) {
      case 'ADD_TO_WISHLIST':
        return state.some(product => product.id === action.payload.id)
          ? state
          : [...state, action.payload];

      case 'REMOVE_FROM_WISHLIST':
        return state.filter(product => product.id !== action.payload.id);

      case 'REMOVE_ALL_FROM_WISHLIST':
        return [];

      default:
        throw new Error(
          `Unhandled action type: ${(action as WishlistAction).type}`
        );
    }
  })();

  localStorage.setItem('wishlist', JSON.stringify(newState));
  return newState;
}
