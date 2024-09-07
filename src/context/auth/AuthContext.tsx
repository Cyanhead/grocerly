import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';
import { reducer, initialState } from './reducer';
import { AuthContextType } from './types';
import { getUserRoles } from '../../helpers';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubAuth = onAuthStateChanged(
      auth,
      async user => {
        if (user) {
          dispatch({
            type: 'LOGIN',
            payload: {
              isLoggedIn: true,
              user: user,
              roles: await getUserRoles(),
            },
          });
        } else {
          dispatch({ type: 'LOGOUT' });
        }
        setLoading(false);
      },
      error => {
        console.error('Auth state change error:', error);
        setLoading(false);
      }
    );

    return () => {
      unSubAuth();
    };
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ state, dispatch, loading }}>
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

// REFACTOR
// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuthContext };
