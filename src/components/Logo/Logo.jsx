import React from 'react';

import { LogoWrap, HomeLink, LogoImg } from './logo.style';
import logo from '../../assets/images/Logo.svg';

const Logo = () => {
  return (
    <LogoWrap>
      <HomeLink to="/">
        <LogoImg src={logo} alt="" />
      </HomeLink>
    </LogoWrap>
  );
};

export default Logo;
