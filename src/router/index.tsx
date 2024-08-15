import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ForgotPassword, Login } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: 'Custom Router Error', // TODO: create error component
    element: <App />,
    children: [
      {
        errorElement: <div>Error page</div>,
        children: [
          {
            // default path
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
    errorElement: 'Custom Router Error', // TODO: create error component
    element: <Login />,
  },
  {
    path: '/forgot-password',
    errorElement: 'Custom Router Error', // TODO: create error component
    element: <ForgotPassword />,
  },
  {
    path: '/signup',
    errorElement: 'Custom Router Error', // TODO: create error component
    element: <h1>Sign up!</h1>,
  },
]);

export default router;
