import { DashboardLayout } from '../layout/DashboardLayout';
import Typography from '@mui/material/Typography';

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Typography variant='h1' component='h1'>
        Dashboard
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Estadisticas generales de la aplicación
      </Typography>
    </DashboardLayout>
  );
};
