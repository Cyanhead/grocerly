import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
  Checkout,
  Error as ErrorPage,
  ForgotPassword,
  Home,
  Login,
  NotFound,
  Product,
  Products,
  Profile,
  SignUp,
} from '../pages';
import Admin, {
  Dashboard,
  OrderItem,
  Orders,
  ProductItem,
  Products as AdminProducts,
  User,
  Users,
} from '../pages/Admin';
import { ProtectedRoute } from '../components';
import { logVisitEvent } from '../helpers';

logVisitEvent();

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
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: '/products/:id',
            element: <Product />,
          },
        ],
      },
      {
        path: '/checkout',
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/admin',
    errorElement: <ErrorPage />,
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
        children: [
          {
            index: true,
            element: <AdminProducts />,
          },
          {
            path: '/admin/products/:id',
            element: <ProductItem />,
          },
        ],
      },
      {
        path: '/admin/orders',
        children: [
          {
            index: true,
            element: <Orders />,
          },
          {
            path: '/admin/orders/:id',
            element: <OrderItem />,
          },
        ],
      },
      {
        path: '/admin/users',
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: '/admin/users/:id',
            element: <User />,
          },
        ],
      },
      {
        path: '/admin/settings',
        element: <h1>Admin Settings page</h1>,
      },
      {
        path: '*',
        element: <NotFound homeText="Dashboard" homeURL="/admin" />,
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
