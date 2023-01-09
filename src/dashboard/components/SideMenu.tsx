import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListItemButton,
} from '@mui/material';
import LoginOutlined from '@mui/icons-material/LoginOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { toggleMenu } from '~/store/slices/ui';

export const SideMenu = () => {
  const { menuOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onToggleMenu = () => dispatch(toggleMenu());

  const navigateTo = (url: string) => {
    onToggleMenu();
    navigate(url);
  };

  return (
    <Drawer
      open={menuOpen}
      anchor='left'
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
      onClose={onToggleMenu}
    >
      <Box sx={{ width: 250 }}>
        <List>
          <ListSubheader>Bienvenido Diego Dominguez</ListSubheader>
          <Divider />
          <ListItemButton onClick={() => navigateTo('/')}>
            <ListItemIcon>
              <DashboardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Dashboard'} />
          </ListItemButton>
          <ListItemButton onClick={() => navigateTo('/tables')}>
            <ListItemIcon>
              <ViewListOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Tablas'} />
          </ListItemButton>
        </List>
      </Box>
      <Box flex={1} />
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <Divider />
          <ListItemButton onClick={() => navigateTo('/auth/login')}>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={'Cerrar sesión'} />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};
