import { User } from 'firebase/auth';
import { Dispatch } from 'react';

export type State = {
  isLoggedIn: boolean;
  user: User | null;
};

export type Action =
  | { type: 'LOGIN'; payload: { isLoggedIn: boolean; user: User } }
  | { type: 'LOGOUT' };

export type AuthContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};
