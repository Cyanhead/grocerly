import React, { useEffect } from 'react';

import Hero from '../../components/Hero';
import Categories from '../../components/Categories';
import Labels from '../../components/Labels';
import { useAuthContext } from '../../context/auth/AuthContext';
import { db, usersColRef } from '../../context/Firebase';
import { doc, getDocs, query, setDoc, where } from 'firebase/firestore';

const HomePage = () => {
  // TODO: modify this to use isUserLoggedIn boolean
  const { signedUser } = useAuthContext();

  useEffect(() => {
    if (signedUser !== null) {
      // isNewUser checks if the signed in user is already in the database
      const isNewUser = async uid => {
        let existingUserCount = 0;

        // Create a query against the collection.
        const q = query(usersColRef, where('id', '==', uid));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(doc => {
          existingUserCount++;
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, ' => ', doc.data());
        });

        const isNewUser = existingUserCount === 0 ? true : false;
        return isNewUser;
      };

      // create new doc in users collection with signedUser data
      const createNewUserDoc = async userObj => {
        const { uid, displayName, email } = userObj;

        await setDoc(doc(db, 'users', uid), {
          id: uid,
          displayName,
          email,
          admin: false,
        });
        return;
      };

      isNewUser(signedUser.uid).then(res => {
        if (res) {
          createNewUserDoc(signedUser);
          return;
        }
        return;
      });

      return;
    }

    return () => 'no user';
  }, [signedUser]);

  return (
    <>
      <Hero />
      <Categories />
      <Labels />
    </>
  );
};

export default HomePage;
