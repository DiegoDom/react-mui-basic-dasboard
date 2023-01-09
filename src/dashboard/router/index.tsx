import { Navigate, RouteObject } from 'react-router-dom';
import { DashboardLayout } from '../layout';
import { DashboardPage, TablesPage } from '../pages';

export const DashboardRouter = () => {
  const publicDashboardRoutes: RouteObject[] = [
    {
      index: true,
      element: <DashboardPage />,
    },
    {
      path: 'tables',
      element: <TablesPage />,
    },
    {
      path: '*',
      element: <Navigate to='/' replace />,
    },
  ];

  const dashboardRouter: RouteObject = {
    path: '/',
    element: <DashboardLayout />,
    children: publicDashboardRoutes,
  };

  return {
    dashboardRouter,
  };
};
