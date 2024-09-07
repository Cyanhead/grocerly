import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context';
import { ProtectedRoutePropsType } from './ProtectedRoute.type';
import Loader from '../Loader';

function ProtectedRoute({
  forAdminOnly = false,
  children,
}: ProtectedRoutePropsType) {
  const { state, loading } = useAuthContext();
  const { user, roles } = state;

  if (loading) {
    return <Loader fullscreen />;
  }

  const isAdmin = roles?.admin;
  const isUser = !!user;

  if (!isUser) {
    return <Navigate to="/login" replace />;
  }

  if (forAdminOnly && isAdmin === false) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
