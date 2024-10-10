import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context';
import { ProtectedRoutePropsType } from './ProtectedRoute.type';
import Loader from '../Loader';
import { useState } from 'react';
import AdminWarning from './AdminWarning';

function ProtectedRoute({
  forAdminOnly = false,
  children,
}: ProtectedRoutePropsType) {
  const { state, loading } = useAuthContext();
  const { user, roles } = state;
  const [shouldProceed, setShouldProceed] = useState(false);

  if (loading) {
    return <Loader fullscreen />;
  }

  const isAdmin = roles?.admin;
  const isUser = Boolean(user);

  if (!isUser) {
    return <Navigate to="/login" replace />;
  }

  if (forAdminOnly && !isAdmin) {
    if (!shouldProceed) {
      return <AdminWarning setShouldProceed={setShouldProceed} />;
    }
    return (
      <Navigate
        to="/"
        // to="/profile" // TODO: redirect to profile settings to enable admin access
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;
