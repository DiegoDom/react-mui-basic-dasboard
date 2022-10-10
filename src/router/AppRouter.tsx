import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRouter } from '~/auth/router';
import { DashboardRouter } from '~/dashboard/router';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<DashboardRouter />} />
      <Route path='/auth/*' element={<AuthRouter />} />
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
