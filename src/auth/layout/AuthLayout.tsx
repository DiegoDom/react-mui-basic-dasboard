import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
  children: ReactNode;
}

export const AuthLayout: FC<Props> = ({ children }) => {
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
          {children}
        </Box>
      </main>
    </>
  );
};
