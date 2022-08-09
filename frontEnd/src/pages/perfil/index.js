import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArticleIcon from '@mui/icons-material/Article';
import QuizIcon from '@mui/icons-material/Quiz';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import Inicio from './páginas/inicio';
import Ferramentas from './páginas/ferramentas/index.js';
import { UseDados } from '../../routes';
import { useLocation } from 'react-router-dom';
import { AppBar, Drawer, DrawerHeader } from './styles';


export default function Perfil() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = UseDados();
  const [page, setPage] = React.useState("Início");
const navegar=useNavigate();
  const rota = useLocation();
  React.useEffect(() => {
    setValues(rota.state)
  }, [])
  console.log(values)
  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Início', 'Unidades', 'Avaliações', 'Ferramentas', 'Mensagens', 'Configurações', 'Sair'].map((text, index) => (
            <ListItem onClick={()=>{
              if (text=="Sair") {
                localStorage.clear();
                navegar('/login');
              }
              setPage(text);
            }} key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? <HomeIcon /> : null}
                  {index === 1 ? <ApartmentIcon /> : null}
                  {index === 2 ? <ArticleIcon /> : null}
                  {index === 3 ? <QuizIcon /> : null}
                  {index === 4 ? <ChatIcon /> : null}
                  {index === 5 ? <SettingsIcon /> : null}
                  {index === 6 ? <LogoutIcon /> : null}

                </ListItemIcon>

                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>


      {/* PÁGINAS */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {page === "Início" && <Inicio />}
        {page == "Ferramentas" && <Ferramentas/>}
      </Box>
    </Box>
  );
}
