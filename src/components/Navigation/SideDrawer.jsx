import React, { useEffect, useState } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import {
  Box,
  Collapse,
  List,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import logo from '../../assets/images/logo.png';
import { drawerMenu } from '../../constants/drawerMenu';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  background: theme.palette.common.black,
  color: theme.palette.primary.light,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  background: theme.palette.common.black,
  color: theme.palette.primary.light,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  '& .MuiListItemIcon-root': {
    color: 'inherit',
  },
  '& .MuiDivider-root': {
    backgroundColor: 'currentColor',
    opacity: 0.3,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  width: '100%',
  color: theme.palette.primary.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  '& .MuiButtonBase-root': {
    color: 'inherit',
  },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
  '& .MuiListItemIcon-root': {
    color: 'inherit',
  },
  '& .MuiDivider-root': {
    backgroundColor: 'currentColor',
    opacity: 0.3,
  },
}));

function SideDrawer({ theme, active, handleDrawerClose }) {
  const [drawerList, setDrawerList] = useState([]);
  const [role, setRole] = useState('ADMIN');

  useEffect(() => {
    setDrawerList(
      drawerMenu.filter((drawer) => drawer.visibility.some((x) => x === role))
    );
  }, [role]);

  const handleClick = (id) => {
    if (!active) return;

    const index = drawerList.findIndex((x) => x.id === id);
    setDrawerList((prevValue) => [
      ...prevValue,
      (prevValue[index].isActive = !prevValue[index].isActive),
    ]);
  };
  return (
    <Drawer variant='permanent' open={active}>
      <DrawerHeader>
        {active && (
          <Box sx={{ height: '2rem', '& img': { height: '100%' } }}>
            <img src={logo} alt='invision' />
          </Box>
        )}
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <List>
        <ListItemButton onClick={() => setRole('ADMIN')}>
          <ListItemText primary='admin' />
        </ListItemButton>
        <ListItemButton onClick={() => setRole('SUPERVISOR')}>
          <ListItemText primary='supervisor' />
        </ListItemButton>
        <ListItemButton onClick={() => setRole('REPORTER')}>
          <ListItemText primary='reporter' />
        </ListItemButton>
        <ListItemButton onClick={() => setRole('USER')}>
          <ListItemText primary='user' />
        </ListItemButton>
      </List>
      <List>
        {drawerList.map((drawer, index) => (
          <React.Fragment key={index}>
            <ListItemButton onClick={() => handleClick(drawer.id)}>
              <ListItemIcon>{drawer.icon}</ListItemIcon>
              <ListItemText
                primary={drawer.title}
                primaryTypographyProps={{ style: { whiteSpace: 'normal' } }}
              />
              {drawer.listItems &&
                (drawer.isActive ? <ExpandLess /> : <ExpandMore />)}
              {/* {drawer.isActive ? <ExpandLess /> : <ExpandMore />} */}
            </ListItemButton>
            <Collapse
              in={drawer.isActive && active}
              timeout='auto'
              unmountOnExit
            >
              {drawer?.listItems?.map((list, index) => (
                <List component='div' disablePadding key={index}>
                  <ListItemButton sx={{ pl: 8 }}>
                    <ListItemText
                      primary={list.title}
                      primaryTypographyProps={{
                        style: { whiteSpace: 'normal' },
                      }}
                    />
                  </ListItemButton>
                </List>
              ))}
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default SideDrawer;
