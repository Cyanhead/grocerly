import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
  Error as ErrorPage,
  ForgotPassword,
  Home,
  Login,
  SignUp,
} from '../pages';

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
