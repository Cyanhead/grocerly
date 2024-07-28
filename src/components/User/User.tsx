import React, { useRef, useState } from 'react';

import {
  UserWrap,
  UserLeft,
  UserPhoto,
  UserName,
  MenuWrap,
  MenuItem,
  MenuItemP
} from './user.style';

import ChevronDown from '../ChevronDown';
import WishlistButton from '../WishlistButton';
import CartButton from '../CartButton';
import { IconWrap, MobileIcon } from '../others.style';
import { FiUser, FiUserCheck, FiMenu, FiPower, FiLogIn } from 'react-icons/fi';

import { useAuthContext } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../context/Firebase';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useOnClickOutside } from '../../hooks/useOnClickOutside.hook';

const User = () => {
  const [showMenu, setShowMenu] = useState(false);

  const {
    signedUser,
    setSignedUser,
    isUserLoggedIn,
    setIsUserLoggedIn,
    isUserAdmin,
    setIsUserAdmin
  } = useAuthContext();

  const clickOutRef = useRef(null);
  useOnClickOutside(clickOutRef, () => setShowMenu(false));

  // TODO: create a custom hook for this
  const handleLogout = () => {
    const doLogout = toast.promise(signOut(auth), {
      loading: 'Logging out...',
      success: 'logged out successfully',
      error: 'Error when logging out'
    });

    doLogout
      .then(() => {
        // console.log('the user signed out');
        setSignedUser(null);
        setIsUserLoggedIn(false);
      })
      .catch(err => console.log(err.message));
  };

  const trimEmailAddress = address => {
    let emailString;
    let trimmed;

    if (typeof address === 'string') {
      emailString = address;

      for (let i = 0; i < emailString.length; i++) {
        if (emailString[i] === '@') {
          trimmed = emailString.slice(0, i);
        }
      }
    } else {
      console.log(`${address} is not a string`);
    }

    return trimmed;
  };
  const trimUsername = username => {
    let nameString;
    let trimmed;

    if (typeof username === 'string') {
      nameString = username;

      trimmed = nameString.slice(0, 7);
    } else {
      console.log(`${username} is not a string`);
    }

    return nameString.length <= 7 ? trimmed : `${trimmed}...`;
  };

  return (
    <UserWrap
      showMenu={showMenu}
      onClick={() => setShowMenu(!showMenu)}
      ref={clickOutRef}
    >
      <UserLeft>
        {signedUser !== null ? (
          signedUser.photoURL !== null ? (
            <UserPhoto src={signedUser.photoURL} alt="" />
          ) : (
            <IconWrap pad="4px 8px 4px 4px">
              <FiUserCheck />
            </IconWrap>
          )
        ) : (
          <IconWrap pad="4px 8px 4px 4px">
            <FiUser />
          </IconWrap>
        )}
        <UserName>
          {signedUser !== null
            ? signedUser.displayName !== null
              ? trimUsername(signedUser.displayName)
              : trimEmailAddress(signedUser.email)
            : 'Guest user'}
        </UserName>
      </UserLeft>
      <ChevronDown mobile trigger={showMenu} />
      <MobileIcon>
        <IconWrap fontSize="2rem">
          <FiMenu />
        </IconWrap>
      </MobileIcon>
      <MenuWrap showMenu={showMenu}>
        {signedUser !== null ? (
          <Link
            to="/user/profile"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <MenuItem>
              <IconWrap>
                <FiUser />
              </IconWrap>
              <MenuItemP>Profile</MenuItemP>
            </MenuItem>
          </Link>
        ) : (
          <Link
            to="/login"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <MenuItem>
              <IconWrap>
                <FiLogIn />
              </IconWrap>
              <MenuItemP>Log in</MenuItemP>
            </MenuItem>
          </Link>
        )}

        <MenuItem mobile>
          <WishlistButton />
        </MenuItem>
        <MenuItem mobile>
          <CartButton />
        </MenuItem>

        {signedUser !== null && (
          <MenuItem onClick={handleLogout}>
            <IconWrap>
              <FiPower />
            </IconWrap>
            <MenuItemP>Log out</MenuItemP>
          </MenuItem>
        )}
      </MenuWrap>
    </UserWrap>
  );
};

export default User;
