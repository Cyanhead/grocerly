import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../Firebase';
import { reducer, initialState } from './reducer';
import { AuthContextType } from './types';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true); // Initialize loading state

  async function getUserRoles() {
    if (auth.currentUser) {
      const docRef = doc(db, 'users', auth.currentUser?.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        return docSnap.data().roles;
      } else {
        console.log('No such document!');
      }
    } else {
      console.error(
        'auth.currentUser is null. Could not get the user document.'
      );
    }
    return {};
  }

  useEffect(() => {
    const unSubAuth = onAuthStateChanged(
      auth,
      async user => {
        if (user) {
          const roles = await getUserRoles();
          dispatch({
            type: 'LOGIN',
            payload: {
              isLoggedIn: true,
              user: user,
              roles: roles,
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
