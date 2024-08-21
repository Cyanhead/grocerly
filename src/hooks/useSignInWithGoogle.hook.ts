// TODO: write test
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context';
import { googleAuthPopup } from '../helpers/handleGoogleAuth';

const useSignInWithGoogle = () => {
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

      dispatch({
        type: 'LOGIN',
        payload: {
          isLoggedIn: true,
          user: result.user,
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
};

export default useSignInWithGoogle;
