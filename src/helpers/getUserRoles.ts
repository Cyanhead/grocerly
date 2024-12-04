import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../context/Firebase';
import { Roles } from '../context/auth/types';

/**
 * Gets the roles of the currently signed in user.
 *
 * @returns {Roles} The roles of the user, or a default object with
 * `admin` and `user` set to `false` if the user is not signed in
 * or the user document does not exist.
 */
export async function getUserRoles(): Promise<Roles> {
  const defaultRoles: Roles = {
    superAdmin: false,
    admin: false,
  };
  const user = auth.currentUser;

  if (!user) {
    console.error('auth.currentUser is null. Could not get the user document.');
    return defaultRoles;
  }

  const docRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.warn('No such document!');
    return defaultRoles;
  }

  return docSnap.data().roles;
}
