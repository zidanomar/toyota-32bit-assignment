import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Menu, MenuItem, Toolbar, IconButton } from '@mui/material';

import logo from '../../assets/images/logo.png';

const drawerWidth = 240;

const Header = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.primary.light,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBar({ active, handleDrawerOpen }) {
  // eslint-disable-next-line
  const [auth, setAuth] = React.useState(true); // change this line to global state later
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Header
      position='fixed'
      open={active}
      elevation={0}
      sx={{ display: 'flex' }}
    >
      <Toolbar>
        {auth && (
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(active && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: active ? 'flex-end' : 'space-between',
            alignItems: 'center',
          }}
        >
          {!active && (
            <Box sx={{ height: '2rem', '& img': { height: '100%' } }}>
              <img src={logo} alt='invision' />
            </Box>
          )}
          {auth && (
            <Box sx={{ justifySelf: 'end' }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <PersonIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Toolbar>
    </Header>
  );
}
