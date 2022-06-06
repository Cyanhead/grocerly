import React from 'react';

import { LogoWrap, Link, LogoImg } from './logo.style';
import logo from '../../assets/images/Logo.svg'

const Logo = () => {
  return (
    <LogoWrap>
      <Link href="#">
        <LogoImg src={logo} alt="" />
      </Link>
    </LogoWrap>
  );
};

export default Logo;
