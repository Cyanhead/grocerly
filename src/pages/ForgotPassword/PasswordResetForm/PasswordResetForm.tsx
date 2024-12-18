import { useState } from 'react';
import AuthForm from '../../../components/Form/AuthForm';
import { auth } from '../../../context/Firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import toast from 'react-hot-toast';
import { FirebaseError } from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import { Link } from '../../../components/NavBar/AuthNavBar/AuthNavBar.styled';
import { P } from '../../AuthPages.styled';

function PasswordResetForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<FirebaseError | unknown>(null);

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await toast.promise(sendPasswordResetEmail(auth, email), {
        loading: 'One moment...',
        success: 'Password reset mail sent!',
        error: 'Error when sending password reset mail!',
      });

      navigate('/login');
    } catch (error) {
      console.error('Firebase sign in error', error);
      if (error instanceof FirebaseError) {
        setError(error);
      } else {
        setError(new Error('An unknown error occurred.'));
      }
    }
  };

  return (
    <AuthForm
      onSubmit={handleForgotPassword}
      content={{
        pre: <Link to="/login">Go back</Link>,
        title: 'Reset password!',
        subheading: (
          <P>
            Enter the email address associated with your account and we will
            send you a link to reset your password.
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
        ],
        button: {
          text: 'Reset',
        },
      }}
    />
  );
}

export default PasswordResetForm;
