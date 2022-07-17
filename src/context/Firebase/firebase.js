import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// initialize firebase app
const Firebase = initializeApp(firebaseConfig);
export default Firebase;

// initialize services
export const db = getFirestore();

// initialize auth
export const auth = getAuth();

// collection ref
export const colRef = collection(db, 'products');

// access storage
export const storage = getStorage();

// acces products folder in cloud store
export const productsImagesRef = ref(storage, 'products');
