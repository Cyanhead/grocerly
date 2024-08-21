import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { auth } from '../context/Firebase';

export const useLogout = async () => {
  try {
    await toast.promise(signOut(auth), {
      loading: 'Logging out...',
      success: 'logged out successfully',
      error: 'Error when logging out',
    });
  } catch (error) {
    console.error(error);
  }
};
