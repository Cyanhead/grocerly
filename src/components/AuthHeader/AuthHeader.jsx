import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  AuthHeaderWrap,
  AuthHeaderRight,
  AuthHeaderP,
} from './auth-header.style';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const AuthHeader = () => {
  const location = useLocation();

  return (
    <AuthHeaderWrap>
      <Logo />
      <AuthHeaderRight>
        {location.pathname === '/signup' ? (
          <>
            <AuthHeaderP>Already have an account?</AuthHeaderP>
            <AuthHeaderP mobile>
              <Link style={{ marginLeft: '8px' }} to="/login">
                Sign in
              </Link>
              .
            </AuthHeaderP>
          </>
        ) : (
          <>
            <AuthHeaderP>Don't have an account?</AuthHeaderP>
            <AuthHeaderP mobile>
              <Link style={{ marginLeft: '8px' }} to="/signup">
                Sign up
              </Link>
              .
            </AuthHeaderP>
          </>
        )}
      </AuthHeaderRight>
    </AuthHeaderWrap>
  );
};

export default AuthHeader;
