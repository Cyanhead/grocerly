import React, { useEffect, useState } from 'react';
import { auth } from '../../context/Firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { googleAuthPopup } from '../../helpers/handleGoogleAuth';

import { toast } from 'react-hot-toast';
import { FiAlertTriangle } from 'react-icons/fi';

import {
  SignupPageContainer,
  SignupPageWrap,
  SignupLeft,
  AnimatedBg,
  AnimBg1,
  AnimBg2,
  AnimBg3,
  SignupRight,
  FormWrap,
  SignupText,
  SignupPageH1,
  SignupP,
  SignupForm,
  SignupInputGroup,
  HiddenSignupInputGroup,
  PromptMessage,
  PromptP,
  SignupFormLabel,
  SignupFormInput,
  SignupButton,
  GoogleSpan,
} from './signup-page.style';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/AuthHeader';
import { useAuthContext } from '../../context/AuthContext';
import { Disabler, IconWrap } from '../../components/others.style';

const SignupPage = () => {
  const { setSignedUser } = useAuthContext();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isRePasswordValid, setIsRePasswordValid] = useState(false);

  const goToSiginPage = useNavigate();
  const goToHomepage = useNavigate();

  const handleSignup = e => {
    e.preventDefault();

    const email = userEmail;
    const password = userPassword;

    const doSignup = toast.promise(
      createUserWithEmailAndPassword(auth, email, password),
      {
        loading: 'Creating account...',
        success: 'Account created successfully',
        error: 'Error when creating user account',
      }
    );

    doSignup
      .then(cred => {
        console.log('user created:', cred.user);
        setUserName('');
        setUserEmail('');
        setUserPassword('');
        goToSiginPage('/login');

        updateProfile(auth.currentUser, {
          displayName: userName,
        })
          .then(() => {
            // Profile updated!
          })
          .catch(error => {
            // An error occurred
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGoogleSignin = () => {
    const doGoogleSignin = toast.promise(googleAuthPopup(), {
      loading: 'Signing up...',
      success: 'Signed up successfully',
      error: 'Error when signing up user!',
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
        console.log(error.message);
      });
  };

  const checkFormValidity = (value, type) => {
    switch (type) {
      case 'name':
        setUserName(value);
        break;

      case 'email':
        setUserEmail(value);
        break;

      case 'password':
        setUserPassword(value);
        break;

      case 're_password':
        setUserConfirmPassword(value);
        break;

      default:
        console.log('nothing to see here');
        break;
    }
  };

  const checkRegex = email => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const handleName = () => {
      if (userName.length !== 0 && userName.length < 3) {
        setIsNameValid(false);
      } else {
        setIsNameValid(true);
      }
    };

    const handleEmail = () => {
      if (userEmail.length !== 0 && checkRegex(userEmail)) {
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
      }
    };

    const handlePassword = () => {
      if (userPassword.length !== 0 && userPassword.length < 8) {
        setIsPasswordValid(false);
      } else {
        setIsPasswordValid(true);
      }
    };

    const handleRePassword = () => {
      if (
        userConfirmPassword.length !== 0 &&
        userPassword !== userConfirmPassword
      ) {
        setIsRePasswordValid(false);
      } else {
        setIsRePasswordValid(true);
      }
    };

    handleName();
    handleEmail();
    handlePassword();
    handleRePassword();
  }, [userName, userEmail, userPassword, userConfirmPassword]);

  // TODO create a re-usable form component as well as input group with prompt

  return (
    <SignupPageContainer>
      <AuthHeader />
      <SignupPageWrap>
        <SignupLeft>
          <AnimatedBg>
            <AnimBg1></AnimBg1>
            <AnimBg2></AnimBg2>
            <AnimBg3></AnimBg3>
          </AnimatedBg>
        </SignupLeft>
        <SignupRight>
          <FormWrap>
            <SignupText>
              <SignupPageH1>Create your account</SignupPageH1>
              <SignupP>
                Sign up with
                <GoogleSpan onClick={handleGoogleSignin}>Google</GoogleSpan>
                instead?
              </SignupP>
            </SignupText>
            <SignupForm onSubmit={handleSignup}>
              <SignupInputGroup>
                <SignupFormLabel htmlFor="username">your name</SignupFormLabel>
                <SignupFormInput
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter a name"
                  value={userName}
                  onChange={e => checkFormValidity(e.target.value, 'name')}
                />
                <PromptMessage show={isNameValid === false}>
                  <IconWrap fontSize="1rem">
                    <FiAlertTriangle />
                  </IconWrap>
                  <PromptP>Enter at least 2 characters!</PromptP>
                </PromptMessage>
              </SignupInputGroup>
              <SignupInputGroup>
                <SignupFormLabel htmlFor="email">
                  email address<span style={{ color: 'red' }}>*</span>
                </SignupFormLabel>
                <SignupFormInput
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={userEmail}
                  onChange={e => checkFormValidity(e.target.value, 'email')}
                  required
                />
                <PromptMessage show={isEmailValid === false}>
                  <IconWrap fontSize="1rem">
                    <FiAlertTriangle />
                  </IconWrap>
                  <PromptP>Enter a valid email address!</PromptP>
                </PromptMessage>
              </SignupInputGroup>
              <SignupInputGroup>
                <SignupFormLabel htmlFor="password">
                  password<span style={{ color: 'red' }}>*</span>
                </SignupFormLabel>
                <SignupFormInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Create a password"
                  value={userPassword}
                  onChange={e => checkFormValidity(e.target.value, 'password')}
                  required
                />
                <PromptMessage show={isPasswordValid === false}>
                  <IconWrap fontSize="1rem">
                    <FiAlertTriangle />
                  </IconWrap>
                  <PromptP>Password too short!</PromptP>
                </PromptMessage>
              </SignupInputGroup>
              <HiddenSignupInputGroup reveal={userPassword.length !== 0}>
                <SignupFormLabel htmlFor="re_password">
                  re-enter password<span style={{ color: 'red' }}>*</span>
                </SignupFormLabel>
                <SignupFormInput
                  type="password"
                  name="re_password"
                  id="re_password"
                  placeholder="Confirm password"
                  value={userConfirmPassword}
                  onChange={e =>
                    checkFormValidity(e.target.value, 're_password')
                  }
                  required
                />
                <PromptMessage show={isRePasswordValid === false}>
                  <IconWrap fontSize="1rem">
                    <FiAlertTriangle />
                  </IconWrap>
                  <PromptP>Password does not match!</PromptP>
                </PromptMessage>
              </HiddenSignupInputGroup>
              <Disabler
                disabled={
                  userName.length < 3 ||
                  userPassword.length < 8 ||
                  userPassword !== userConfirmPassword
                }
              >
                <SignupButton reveal={userPassword.length !== 0}>
                  Sign up
                </SignupButton>
              </Disabler>
            </SignupForm>
            {/* TODO privacy policy */}
          </FormWrap>
        </SignupRight>
      </SignupPageWrap>
    </SignupPageContainer>
  );
};

export default SignupPage;
