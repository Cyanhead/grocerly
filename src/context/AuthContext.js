import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

const Context = createContext();

export const AuthContext = ({ children }) => {
  const [signedUser, setSignedUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  useEffect(() => {
    let unsubAuth = onAuthStateChanged(auth, user => {
      if (user) {
        setIsUserLoggedIn(true);
        setSignedUser(user);
        return;
      }
    });

    return unsubAuth;
  }, []);

  return (
    <Context.Provider
      value={{
        signedUser,
        setSignedUser,
        isUserLoggedIn,
        setIsUserLoggedIn,
        isUserAdmin,
        setIsUserAdmin
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => useContext(Context);
