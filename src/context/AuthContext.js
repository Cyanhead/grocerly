import { createContext, useContext, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

const Context = createContext();

export const AuthContext = ({ children }) => {
  const [signedUser, setSignedUser] = useState(null);

  onAuthStateChanged(auth, user => {
    if (user) {
      setSignedUser(user);
    } else {
      // User is signed out
    }
  });
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
