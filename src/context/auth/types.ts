import { User } from 'firebase/auth';
import { Dispatch } from 'react';

export type Roles = {
  superAdmin: boolean;
  admin: boolean;
};

export type State = {
  isLoggedIn: boolean;
  user: User | null;
  roles: Roles;
};

export type Action =
  | {
      type: 'LOGIN';
      payload: { isLoggedIn: boolean; user: User; roles: Roles };
    }
  | { type: 'LOGOUT' };

export type AuthContextType = {
  state: State;
  dispatch: Dispatch<Action>;
  loading: boolean;
};
