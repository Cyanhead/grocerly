import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AuthCheck = ({ children }) => {
  const { signedUser } = useAuthContext();

  if (signedUser === null) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default AuthCheck;
