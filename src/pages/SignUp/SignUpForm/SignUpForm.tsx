import { FirebaseError } from 'firebase/app';
import AuthForm from '../../../components/Form/AuthForm';
import { LinkButton, P } from '../../AuthPages.styled';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../context/Firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from '../../../hooks';
import PasswordInput from '../../../components/Form/PasswordInput';

function SignUpForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<FirebaseError | unknown>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const { handleGoogleSignIn: handleGoogleSignUp, loading: googleLoading } =
    useSignInWithGoogle();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isPasswordValid) {
      return;
    }

    setIsLoading(true);

    try {
      await toast.promise(
        createUserWithEmailAndPassword(auth, email, password),
        {
          loading: 'Creating account...',
          success: 'Account created successfully',
          error: 'Error when creating user account',
        }
      );

      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: username,
        });
      }

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
  }

  return (
    <AuthForm
      onSubmit={handleSubmit}
      content={{
        title: 'Create your account',
        subheading: (
          <P>
            Sign up with{' '}
            <LinkButton onClick={handleGoogleSignUp}>Google</LinkButton>{' '}
            instead?
          </P>
        ),
        fieldsets: [
          {
            id: 'username',
            label: 'Your name',
            placeholder: 'e.g. John Doe',
            type: 'text',
            required: false,
            value: username,
            onChange: setUsername,
          },
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
                error.code === 'auth/email-already-in-use',
              prompt: 'Email address already in use!',
            },
          },
        ],
        customInput: (
          <PasswordInput
            key="password"
            id="password"
            label="password"
            placeholder="********"
            type="password"
            required={true}
            value={password}
            onChange={setPassword}
            setIsPasswordValid={setIsPasswordValid}
          />
        ),
        button: {
          text: isLoading ? 'Signing up...' : 'Sign up',
          isDisabled: isLoading || googleLoading,
        },
      }}
    />
  );
}

export default SignUpForm;
