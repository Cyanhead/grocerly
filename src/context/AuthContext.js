import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

const Context = createContext();

export const AuthContext = ({ children }) => {
  const [signedUser, setSignedUser] = useState(null);

  useEffect(() => {
    let unsubAuth;

    unsubAuth = onAuthStateChanged(auth, user => {
      if (user) {
        setSignedUser(user);
      } else {
        // User is signed out
      }
    });

    return unsubAuth;
  }, []);

  return (
    <Context.Provider
      value={{
        signedUser,
        setSignedUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => useContext(Context);
