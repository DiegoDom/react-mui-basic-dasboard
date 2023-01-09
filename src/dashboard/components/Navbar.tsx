import { AppBar, Box, Button, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useAppDispatch } from '~/hooks';
import { toggleMenu } from '~/store/slices/ui';
import { AppLogo } from '~/components';
import Typography from '@mui/material/Typography';

export const Navbar = () => {
  const dispatch = useAppDispatch();

  const onToggleMenu = () => dispatch(toggleMenu());

  return (
    <AppBar>
      <Toolbar>
        <Button onClick={onToggleMenu}>
          <MenuIcon />
        </Button>
        <AppLogo />
        <Box flex={1} />
        <Typography>HELLO</Typography>
      </Toolbar>
    </AppBar>
  );
};
