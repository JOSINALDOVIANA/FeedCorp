import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import './App.css';
import useStyles from './styles';
import DrawerHeader from './pages/components/DrawerHeader';

export default function App() {
  const navegar = useNavigate();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="absolute">
        <Toolbar className={classes.root}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <Typography variant="h6" component="div" className={classes.Typography}>
            OPCLIENT
          </Typography>

          <Button onClick={() => navegar("/login")} color="inherit">Login</Button>

        </Toolbar>
      </AppBar>
      <DrawerHeader />
      <h1>OLÁ PESSOAS</h1>

    </Box>
  );
}
