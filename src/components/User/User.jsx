import React, { useState } from 'react';

import {
  UserWrap,
  UserPhoto,
  UserName,
  MenuWrap,
  MenuItem,
  MenuItemP,
} from './user.style';

import ChevronDown from '../ChevronDown';
import goat from '../../assets/images/evil_goat.webp';
import Wishlist from '../Wishlist';
import CartButton from '../CartButton';
import { IconWrap, MobileIcon } from '../others.style';
import { FiSettings, FiUser, FiMenu } from 'react-icons/fi';

const User = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <UserWrap showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
      <UserPhoto src={goat} alt="" />
      <UserName> Window Shopper </UserName>
      <ChevronDown mobile trigger={showMenu} />
      <MobileIcon>
        <IconWrap fontSize="2rem">
          <FiMenu />
        </IconWrap>
      </MobileIcon>
      <MenuWrap showMenu={showMenu}>
        <MenuItem>
          <IconWrap>
            <FiUser />
          </IconWrap>
          <MenuItemP>Profile</MenuItemP>
        </MenuItem>
        <MenuItem mobile>
          <Wishlist />
        </MenuItem>
        <MenuItem mobile>
          <CartButton />
        </MenuItem>
        <MenuItem>
          <IconWrap>
            <FiSettings />
          </IconWrap>
          <MenuItemP>Settings</MenuItemP>
        </MenuItem>
      </MenuWrap>
    </UserWrap>
  );
};

export default User;
