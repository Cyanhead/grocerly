import { createContext, useContext, useEffect, useState } from 'react';
import { usersColRef } from './Firebase';
import { onSnapshot } from 'firebase/firestore';
import { useAuthContext } from './auth/AuthContext';

const Context = createContext();

export const UsersListContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  // TODO: modify this to use isUserLoggedIn boolean
  const { signedUser } = useAuthContext();

  console.log({ signedUser });

  // useEffect(() => {
  //   let unsubUserCollection;

  //   const fetchUsers = async () => {
  //     unsubUserCollection = onSnapshot(usersColRef, snapshot => {
  //       let userList = [];
  //       snapshot.docs.forEach(doc => {
  //         userList.push({ ...doc.data(), id: doc.id });
  //       });
  //       setUsers(userList);
  //     });
  //   };

  //   fetchUsers().then(() => {
  //     const getCurrentUserInCollection = users.find(
  //       user => user.id === signedUser?.uid
  //     );
  //     if (getCurrentUserInCollection.admin) {
  //       setIsUserAdmin(true);
  //       return;
  //     }
  //     setIsUserAdmin(false);
  //     return;
  //   });

  //   return unsubUserCollection;
  // }, [signedUser.uid, users]);

  return (
    <Context.Provider
      value={{
        // users,
        // setUsers,
        isUserAdmin,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUserListContext = () => useContext(Context);
