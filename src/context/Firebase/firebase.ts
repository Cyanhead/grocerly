import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// initialize firebase app
const Firebase = initializeApp(firebaseConfig);
export default Firebase;

// initialize services
export const db = getFirestore();

// initialize auth
export const auth = getAuth();

// collection ref for products
export const productsColRef = collection(db, 'products');

// collection ref for users
export const usersColRef = collection(db, 'users');

// access storage
export const storage = getStorage();

// access products folder in cloud store
export const productsImagesRef = ref(storage, 'products');
