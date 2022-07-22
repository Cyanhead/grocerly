import React, { useState } from 'react';
import { auth } from '../../context/Firebase';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
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
  LoginP,
  LinkSpan,
} from './login-page.style';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/AuthHeader';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';
import { IconWrap } from '../../components/others.style';
import { FiChevronLeft } from 'react-icons/fi';
import { FormWrap } from '../../components/Form/form.style';

const LoginPage = () => {
  const { setSignedUser } = useAuthContext();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [authError, setAuthError] = useState('');

  const [resetMail, setResetMail] = useState('');
  const [resetPassword, setResetPassword] = useState(false);

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

  const handleGoogleSignin = e => {
    e.preventDefault();

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

  const handleForgotPassword = e => {
    e.preventDefault();
    const email = resetMail;

    const doPasswordReset = toast.promise(sendPasswordResetEmail(auth, email), {
      loading: 'One moment...',
      success: 'Password reset mail sent',
      error: 'Error when sending password reset mail!',
    });

    doPasswordReset
      .then(() => {
        // Password reset email sent!
      })
      .catch(error => {
        console.log(error);
        setAuthError(error.code);
      });
  };

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
          {resetPassword === true ? (
            <FormWrap>
              <IconWrap
                bordRad="3px"
                fontSize="1.5rem"
                alignSelf="start"
                onClick={() => setResetPassword(false)}
                bgHover={props => props.theme.color.greyHover}
                bgActive={props => props.theme.color.greyActive}
              >
                <FiChevronLeft />
              </IconWrap>

              <CustomForm
                onSubmit={handleForgotPassword}
                heading="Reset password"
                submitBtnText="Reset"
              >
                <CustomFormInputGroup
                  htmlFor="reset_email"
                  labelName="email address"
                  requiredLabel
                  inputType="email"
                  inputName="reset_email"
                  inputId="reset_email"
                  inputPlaceholder="Enter your email address"
                  inputValue={resetMail}
                  inputOnChange={e => setResetMail(e.target.value)}
                  required
                  promptCondition={
                    resetMail.length && authError === 'auth/user-not-found'
                  }
                  promptMessage="Invalid email address!"
                />
              </CustomForm>
            </FormWrap>
          ) : (
            <>
              <CustomForm
                onSubmit={handleLogin}
                heading="Sign in"
                formAltText1="Sign in with"
                formAltLink={
                  <LinkSpan onClick={handleGoogleSignin}>Google</LinkSpan>
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
              <LoginP onClick={() => setResetPassword(true)}>
                Forgot password? <LinkSpan>Click here</LinkSpan>.
              </LoginP>
            </>
          )}
        </LoginRight>
      </LoginPageWrap>
    </LoginPageContainer>
  );
};

export default LoginPage;
