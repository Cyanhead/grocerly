import React from 'react';

import { UserWrap, UserPhoto, UserName } from './user.style';

import ChevronDown from '../ChevronDown';
import goat from '../../assets/images/evil_goat.webp';

const User = () => {
  return (
    <UserWrap>
      <UserPhoto src={goat} alt="" />
      <UserName>Window Shopper</UserName>
      <ChevronDown />
    </UserWrap>
  );
};

export default User;
