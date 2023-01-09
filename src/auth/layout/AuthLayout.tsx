import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export const AuthLayout = () => {
  return (
    <>
      <main>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          height='calc(100vh - 200px)'
        >
          <Outlet />
        </Box>
      </main>
    </>
  );
};
