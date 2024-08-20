import toast from 'react-hot-toast';
import AuthForm from '../../../components/Form/AuthForm';
import { useAuthContext } from '../../../context';
import { ForgotPass } from '../Login.styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../context/Firebase';
import { FirebaseError } from 'firebase/app';
import { Link } from '../../../components/NavBar/AuthNavBar/AuthNavBar.styled';
import { LinkButton, P } from '../../AuthPages.styled';
import { useSignInWithGoogle } from '../../../hooks';

function LoginForm() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<FirebaseError | unknown>(null);

  const [isLoading, setIsLoading] = useState(false);

  const { handleGoogleSignIn, loading: googleLoading } = useSignInWithGoogle();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const credentials = await toast.promise(
        signInWithEmailAndPassword(auth, email, password),
        {
          loading: 'Signing in...',
          success: 'Signed in successfully',
          error: 'Error when signing in user!',
        }
      );

      const { user } = credentials;
      dispatch({
        type: 'LOGIN',
        payload: {
          isLoggedIn: true,
          user: user,
        },
      });
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Firebase sign in error', error);
      if (error instanceof FirebaseError) {
        setError(error);
      } else {
        setError(new Error('An unknown error occurred.'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthForm
        onSubmit={handleLogin}
        content={{
          title: 'Log in to your account',
          subheading: (
            <P>
              Sign in with{' '}
              <LinkButton onClick={handleGoogleSignIn}>Google</LinkButton>{' '}
              instead?
            </P>
          ),
          fieldsets: [
            {
              id: 'email',
              label: 'Email address',
              placeholder: 'e.g. johndoe@example.com',
              type: 'email',
              required: true,
              value: email,
              onChange: setEmail,
              error: {
                trigger:
                  error instanceof FirebaseError &&
                  error.code === 'auth/user-not-found',
                prompt: 'Email address not found!',
              },
            },
            {
              id: 'password',
              label: 'Password',
              placeholder: '********',
              type: 'password',
              required: true,
              value: password,
              onChange: setPassword,
              error: {
                trigger:
                  error instanceof FirebaseError &&
                  error.code === 'auth/wrong-password',
                prompt: 'Incorrect password!',
              },
            },
          ],
          button: {
            text: isLoading ? 'Logging in...' : 'Log in',
            isDisabled: isLoading || googleLoading,
          },
        }}
      />
      <ForgotPass>
        Forgot password? <Link to="/forgot-password">Click here</Link>.
      </ForgotPass>
    </>
  );
}

export default LoginForm;
