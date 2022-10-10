import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import { lightTheme } from './themes';
import { AppRouter } from '~/router/AppRouter';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};
