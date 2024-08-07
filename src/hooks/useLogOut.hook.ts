import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { auth } from '../context/Firebase';

export const useLogout = () => {
  const doLogout = toast.promise(signOut(auth), {
    loading: 'Logging out...',
    success: 'logged out successfully',
    error: 'Error when logging out',
  });

  doLogout
    .then(() => {
      return;
    })
    .catch(err => console.log(err.message));
};
