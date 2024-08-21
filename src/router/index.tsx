import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Error as ErrorPage, ForgotPassword, Login, SignUp } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        errorElement: <div>Error page</div>,
        children: [
          {
            index: true,
            element: <h3>Home Page</h3>,
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
