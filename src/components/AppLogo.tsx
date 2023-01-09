import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const AppLogo = () => {
  return (
    <Link component={RouterLink} display='flex' alignItems='center' to='/'>
      <Typography variant='h6'>TS |</Typography>
      <Typography sx={{ ml: 0.5 }}>Dashboard</Typography>
    </Link>
  );
};
