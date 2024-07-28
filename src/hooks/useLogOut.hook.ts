// TODO: Delete this file

import { signOut } from 'firebase/auth';
import { auth } from '../context/Firebase';

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return { logout };
};
