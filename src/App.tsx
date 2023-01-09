import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { lightTheme } from '~/themes';
import { useRouter } from '~/hooks';

export const App = () => {
  const queryClient = new QueryClient();

  const { router } = useRouter();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools panelPosition='right' position='bottom-right' />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
