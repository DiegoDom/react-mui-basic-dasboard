import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { authRouter } from '~/auth/router';
import { DashboardRouter } from '~/dashboard/router';

export const useRouter = () => {
  const { dashboardRouter: dashRoutes } = DashboardRouter();

  const mainRouter = useMemo(() => createBrowserRouter([dashRoutes, authRouter]), [dashRoutes]);

  return {
    router: mainRouter,
  };
};
