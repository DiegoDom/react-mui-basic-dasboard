import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import { useAppDispatch } from '~/hooks';
import { toggleMenu } from '~/store/slices/ui';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = () => {
  const dispatch = useAppDispatch();

  const onToggleMenu = () => dispatch(toggleMenu());

  return (
    <AppBar>
      <Toolbar>
        <Link component={RouterLink} display='flex' alignItems='center' to='/'>
          <Typography variant='h6'>FG |</Typography>
          <Typography sx={{ ml: 0.5 }}>Dashboard</Typography>
        </Link>
        <Box flex={1} />
        <Button onClick={onToggleMenu}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
