import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';
import { reducer, initialState } from './reducer';
import { AuthContextType } from './types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const unSubAuth = onAuthStateChanged(
      auth,
      user => {
        if (user) {
          const { uid, displayName } = user;
          const userName = displayName || 'User';

          dispatch({
            type: 'LOGIN',
            payload: {
              isLoggedIn: true,
              user: {
                id: uid,
                name: userName,
              },
            },
          });
        } else {
          dispatch({ type: 'LOGOUT' });
        }
      },
      error => {
        console.error('Auth state change error:', error);
      }
    );

    return () => {
      unSubAuth();
    };
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuthContext };
