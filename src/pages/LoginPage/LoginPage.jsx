import React, { useState } from 'react';
import { auth } from '../../context/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { googleAuthPopup } from '../../helpers/handleGoogleAuth';
import { CustomForm, CustomFormInputGroup } from '../../components/Form';

import {
  LoginPageContainer,
  LoginPageWrap,
  LoginLeft,
  AnimatedBg,
  AnimBg1,
  AnimBg2,
  AnimBg3,
  LoginRight,
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

  const [authError, setAuthError] = useState('');

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
        console.log('err code', error.code);
        console.log(error.message);
        setAuthError(error.code);
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
          <CustomForm
            onSubmit={handleLogin}
            heading="Sign in"
            formAltText1="Sign in with"
            formAltLink={
              <GoogleSpan onClick={handleGoogleSignin}>Google</GoogleSpan>
            }
            formAltText2="instead?"
            // submitBtnDisableCondition
            // submitBtnRevealType
            // submitBtnRevealCondition
            submitBtnText="Sign in"
          >
            <CustomFormInputGroup
              // inputRevealType={false}
              // revealCondition
              htmlFor="email"
              labelName="email address"
              requiredLabel
              inputType="email"
              inputName="email"
              inputId="email"
              inputPlaceholder="Enter your email address"
              inputValue={userEmail}
              inputOnChange={e => setUserEmail(e.target.value)}
              required
              promptCondition={
                userEmail.length && authError === 'auth/user-not-found'
              }
              promptMessage="Invalid email address!"
            />
            <CustomFormInputGroup
              // inputRevealType={false}
              // revealCondition
              htmlFor="password"
              labelName="password"
              requiredLabel
              inputType="password"
              inputName="password"
              inputId="password"
              inputPlaceholder="Enter your password"
              inputValue={userPassword}
              inputOnChange={e => setUserPassword(e.target.value)}
              required
              promptCondition={
                userEmail.length && authError === 'auth/wrong-password'
              }
              promptMessage="Invalid password!"
            />
          </CustomForm>
        </LoginRight>
      </LoginPageWrap>
    </LoginPageContainer>
  );
};

export default LoginPage;
