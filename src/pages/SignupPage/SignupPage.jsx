import React, { useEffect, useState } from 'react';
import { auth } from '../../context/Firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { googleAuthPopup } from '../../helpers/handleGoogleAuth';

import { toast } from 'react-hot-toast';

import {
  SignupPageContainer,
  SignupPageWrap,
  SignupLeft,
  AnimatedBg,
  AnimBg1,
  AnimBg2,
  AnimBg3,
  SignupRight,
  LinkSpan,
} from './signup-page.style';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/AuthHeader';
import { useAuthContext } from '../../context/AuthContext';

import { CustomForm, CustomFormInputGroup } from '../../components/Form';

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
      if (userName.length !== 0 && userName.length < 2) {
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
          <CustomForm
            //
            onSubmit={handleSignup}
            heading="Create your account"
            formAltText1="Sign up with"
            formAltLink={
              <LinkSpan onClick={handleGoogleSignin}>Google</LinkSpan>
            }
            formAltText2="insteady?"
            submitBtnDisableCondition={
              userName.length < 3 ||
              userPassword.length < 8 ||
              userPassword !== userConfirmPassword
            }
            submitBtnRevealType
            submitBtnRevealCondition={userPassword.length !== 0}
            submitBtnText="Sign up"
          >
            <CustomFormInputGroup
              // inputRevealType={false}
              // revealCondition
              htmlFor="username"
              labelName="your name"
              // requiredLabel
              inputType="text"
              inputName="username"
              inputId="username"
              inputPlaceholder="Enter a name"
              inputValue={userName}
              inputOnChange={e => checkFormValidity(e.target.value, 'name')}
              // required
              promptCondition={isNameValid === false}
              promptMessage="Enter at least 2 characters!"
            />
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
              inputOnChange={e => checkFormValidity(e.target.value, 'email')}
              required
              promptCondition={isEmailValid === false}
              promptMessage="Enter a valid email address!"
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
              inputPlaceholder="Create a password"
              inputValue={userPassword}
              inputOnChange={e => checkFormValidity(e.target.value, 'password')}
              required
              promptCondition={isPasswordValid === false}
              promptMessage="Password too short!"
            />
            <CustomFormInputGroup
              inputRevealType
              revealCondition={userPassword.length !== 0}
              htmlFor="re_password"
              labelName="re-enter password"
              requiredLabel
              inputType="password"
              inputName="re_password"
              inputId="re_password"
              inputPlaceholder="Confirm password"
              inputValue={userConfirmPassword}
              inputOnChange={e =>
                checkFormValidity(e.target.value, 're_password')
              }
              required
              promptCondition={isRePasswordValid === false}
              promptMessage="Passwords do not match!"
            />
          </CustomForm>
          {/* TODO privacy policy */}
        </SignupRight>
      </SignupPageWrap>
    </SignupPageContainer>
  );
};

export default SignupPage;
