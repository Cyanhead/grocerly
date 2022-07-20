import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../context/Firebase';

const provider = new GoogleAuthProvider();

export const googleAuthPopup = () => {
  return signInWithPopup(auth, provider);
};
