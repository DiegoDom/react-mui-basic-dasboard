import { Navigate, RouteObject } from 'react-router-dom';
import { AuthLayout } from '../layout';
import { LoginPage } from '../pages';

export const authRouter: RouteObject = {
  path: '/auth',
  element: <AuthLayout />,
  children: [
    {
      index: true,
      element: <Navigate to='/auth/login' replace />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '*',
      element: <Navigate to='/auth/login' replace />,
    },
  ],
};
