import { State, Action } from './types';

export const initialState: State = {
  isLoggedIn: false,
  user: null,
  roles: {
    superAdmin: false,
    admin: false,
  },
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        roles: action.payload.roles,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        roles: {
          superAdmin: false,
          admin: false,
        },
      };
    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`);
  }
};
