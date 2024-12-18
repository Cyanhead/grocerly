import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../context/Firebase';

const provider = new GoogleAuthProvider();

/**
 * Signs in user with Google authentication popup.
 *
 * @returns A promise that resolves with result of the sign-in operation.
 * @example
 * const result = await googleAuthPopup();
 * if (result) {
 *   const user = result.user;
 * }
 */
export const googleAuthPopup = () => {
  return signInWithPopup(auth, provider);
};
