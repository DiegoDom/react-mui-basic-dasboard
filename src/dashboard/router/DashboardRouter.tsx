import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../pages';

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
