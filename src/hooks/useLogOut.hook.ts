import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { auth } from '../context/Firebase';

/**
 * Logs out the current user.
 *
 * @returns a promise that resolves when the user has been logged out
 * @example
 * const { handleLogout } = useLogout();
 *
 * <Button onClick={handleLogout}>Log out</Button>
 */
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
