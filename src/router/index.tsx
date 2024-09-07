import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
  Error as ErrorPage,
  ForgotPassword,
  Home,
  Login,
  SignUp,
} from '../pages';
import Admin, { Dashboard } from '../pages/Admin';
import { ProtectedRoute } from '../components';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <div>Products page</div>,
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <h1>Profile page</h1>
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <div>Page Not Found!</div>,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute forAdminOnly>
        <Admin />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/admin/products',
        element: <h1>Admin Products page</h1>,
      },
      {
        path: '/admin/settings',
        element: <h1>Admin Settings page</h1>,
      },
      {
        path: '*',
        element: <div>Page Not Found!</div>,
      },
    ],
  },
  {
    path: '/login',
    errorElement: <ErrorPage />,
    element: <Login />,
  },
  {
    path: '/forgot-password',
    errorElement: <ErrorPage />,
    element: <ForgotPassword />,
  },
  {
    path: '/sign-up',
    errorElement: <ErrorPage />,
    element: <SignUp />,
  },
]);

export default router;
