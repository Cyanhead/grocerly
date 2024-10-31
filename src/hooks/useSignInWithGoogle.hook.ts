// TODO: write test
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context';
import { googleAuthPopup } from '../helpers/handleGoogleAuth';
import { getUserRoles } from '../helpers';
import { auth, db } from '../context/Firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { Users } from '../types';

/**
 * Provides a function to handle Google sign in and a loading state indicator.
 *
 * @returns An object with a `handleGoogleSignIn` function and a `loading` state.
 * @example
 * const { handleGoogleSignIn, loading } = useSignInWithGoogle();
 *
 * ```tsx
 * <Button onClick={handleGoogleSignIn} disabled={loading}>
 *   {loading ? 'Signing in...' : 'Sign in with Google'}
 * </Button>
 * ```
 */
export function useSignInWithGoogle() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await toast.promise(googleAuthPopup(), {
        loading: 'Signing in...',
        success: 'Signed in successfully',
        error: 'Error when signing in user!',
      });

      const user = auth.currentUser;

      if (user === null) {
        console.error(
          'auth.currentUser is null. Could not create user document.'
        );
        return;
      }

      const userData: Users[0] = {
        name: user.displayName ?? '',
        email: user.email ?? '',
        roles: {
          admin: false,
          user: true,
        },

        id: '',
        photoUrl: '',
        address: [],
        firstOrder: null,
        lastOrder: null,
        createdAt: serverTimestamp(),
        updatedAt: null,
      };

      userData.id = user.uid;
      userData.photoUrl = user.photoURL ?? '';

      await setDoc(doc(db, 'users', user.uid), userData);

      dispatch({
        type: 'LOGIN',
        payload: {
          isLoggedIn: true,
          user: result.user,
          roles: await getUserRoles(),
        },
      });

      navigate('/', { replace: true });
    } catch (error) {
      console.error('Google sign in error', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleGoogleSignIn,
    loading,
  };
}
