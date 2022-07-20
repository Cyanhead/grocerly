import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
// import { useLocation } from 'react-router-dom';
import { auth } from '../context/Firebase';
// import{useAuthContext}from '../context/AuthContext'

const provider = new GoogleAuthProvider();

export const googleAuthRedirect = () => {
  signInWithRedirect(auth, provider);

  const doAuth = getRedirectResult(auth)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log('google user', user);
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log('errorCode', errorCode);
      console.log('errorMessage', errorMessage);
    });

  return doAuth();
};

export const googleAuthPopup = () => {
  return signInWithPopup(auth, provider);
  // .then(result => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   console.log('google user', user);

  //   // ...
  // })
  // .catch(error => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  //   console.log('errorCode', errorCode);
  //   console.log('errorMessage', errorMessage);
  // });
};
