// TODO: Delete this file

import { signOut } from 'firebase/auth';
import { auth } from '../context/Firebase';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
// import { useEffect } from 'react';

export const useHandleLogout = () => {
  const { setSignedUser, setIsUserLoggedIn } = useAuthContext();

  // useEffect(() => {
  const doLogout = toast.promise(signOut(auth), {
    loading: 'Logging out...',
    success: 'logged out successfully',
    error: 'Error when logging out'
  });

  console.log('logged out in hook');

  doLogout
    .then(() => {
      // console.log('the user signed out');
      setSignedUser(null);
      setIsUserLoggedIn(false);
      return;
    })
    .catch(err => console.log(err.message));
  // }, [setIsUserLoggedIn, setSignedUser]);
};
