import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ProtectedRoute = ({ children }) => {
  const { isUserLoggedIn } = useAuthContext();
  const gotoRoute = useNavigate();

  useEffect(() => {
    // FIXME: doesn't work as expected. It should not render the children if the user is not logged in
    if (!isUserLoggedIn) {
      // ? replace
      // ? Defaults to false. When true, next/link will replace the current history state instead of adding a new URL into the browser’s history stack.
      // CONSIDER: removing the replace option
      // TODO: create a custom hook for this
      gotoRoute('/login', { replace: true });
    }
  }, [gotoRoute, isUserLoggedIn]);

  return (
    <>
      {!isUserLoggedIn ? (
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <Loading />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedRoute;
