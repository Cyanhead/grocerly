import FirebaseContext from './context';
import Firebase, {
  db,
  auth,
  colRef,
  productsImagesRef,
  storage,
} from './firebase';

export default Firebase;
export { db, auth, colRef, productsImagesRef, storage, FirebaseContext };
