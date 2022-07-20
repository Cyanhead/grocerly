import React, { useState } from 'react';
import { auth } from '../../context/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { googleAuthPopup } from '../../helpers/handleGoogleAuth';

import {
  LoginPageContainer,
  LoginPageWrap,
  LoginLeft,
  AnimatedBg,
  AnimBg1,
  AnimBg2,
  AnimBg3,
  LoginRight,
  FormWrap,
  LoginText,
  LoginPageH1,
  LoginP,
  LoginForm,
  LoginInputGroup,
  LoginFormLabel,
  LoginFormInput,
  LoginButton,
  GoogleSpan,
} from './login-page.style';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/AuthHeader';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const { setSignedUser } = useAuthContext();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const goToHomepage = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    const email = userEmail;
    const password = userPassword;

    const doLogin = toast.promise(
      signInWithEmailAndPassword(auth, email, password),
      {
        loading: 'Signing in...',
        success: 'Signed in successfully',
        error: 'Error when signing in user!',
      }
    );

    doLogin
      .then(cred => {
        console.log('user logged in:', cred.user);
        setUserEmail('');
        setUserPassword('');

        goToHomepage('/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleGoogleSignin = () => {
    const doGoogleSignin = toast.promise(googleAuthPopup(), {
      loading: 'Signing in...',
      success: 'Signed in successfully',
      error: 'Error when signing in user!',
    });

    doGoogleSignin
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        const user = result.user;
        setSignedUser(user);
        goToHomepage('/');
      })
      .catch(error => {
        // Handle Errors here.
        console.log('google signin error', error);
      });
  };

  // TODO client-side form validation for password (re-enter, length and complexity)

  return (
    <LoginPageContainer>
      <AuthHeader />
      <LoginPageWrap>
        <LoginLeft>
          <AnimatedBg>
            <AnimBg1></AnimBg1>
            <AnimBg2></AnimBg2>
            <AnimBg3></AnimBg3>
          </AnimatedBg>
        </LoginLeft>
        <LoginRight>
          <FormWrap>
            <LoginText>
              <LoginPageH1>Sign in</LoginPageH1>
              <LoginP>
                Sign in with
                <GoogleSpan onClick={handleGoogleSignin}>Google</GoogleSpan>
                instead?
              </LoginP>
            </LoginText>
            <LoginForm onSubmit={handleLogin}>
              <LoginInputGroup>
                <LoginFormLabel htmlFor="email">email address</LoginFormLabel>
                <LoginFormInput
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={userEmail}
                  onChange={e => setUserEmail(e.target.value)}
                />
              </LoginInputGroup>
              <LoginInputGroup>
                <LoginFormLabel htmlFor="password">password</LoginFormLabel>
                <LoginFormInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={userPassword}
                  onChange={e => setUserPassword(e.target.value)}
                />
              </LoginInputGroup>
              <LoginButton>Sign in</LoginButton>
            </LoginForm>
            {/* TODO privacy policy */}
          </FormWrap>
        </LoginRight>
      </LoginPageWrap>
    </LoginPageContainer>
  );
};

export default LoginPage;
