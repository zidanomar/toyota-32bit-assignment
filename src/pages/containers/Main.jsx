import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import SideDrawer from '../../components/Navigation/SideDrawer';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function Main({ children, active, handleDrawerClose }) {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <SideDrawer
        theme={theme}
        active={active}
        handleDrawerClose={handleDrawerClose}
      />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default Main;
