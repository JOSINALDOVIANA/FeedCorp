import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { UseDados } from '../../routes';
import {
  Box, Toolbar, List,
  CssBaseline, Typography, Divider, IconButton,
  ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar
} from '@mui/material';

// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArticleIcon from '@mui/icons-material/Article';
import QuizIcon from '@mui/icons-material/Quiz';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Drawer, DrawerHeader } from './styles';

import Inicio from './páginas/inicio';
import Ferramentas from './páginas/ferramentas/index.js';


export default function Perfil() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const [values, setValues] = UseDados();
  const [page, setPage] = React.useState("Início");
  const navegar = useNavigate();
  const rota = useLocation();

  React.useEffect(() => {
    setValues(rota.state)
  }, [])
  console.log(values)


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        {/* BARRA SUPERIOR */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              //...(open && { display: 'none' }),
            }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>

          <Box flexGrow='1'></Box>

          <Typography>
            {values?.dadosUser?.name.toUpperCase()}
          </Typography>
          <Avatar
            sx={{
              mr: theme.spacing(1),
              cursor: 'pointer'
            }}
            alt={`${values?.dados?.name}`}
            src={values?.image?.dados.url}
          >
          </Avatar>

        </Toolbar>
      </AppBar>
      {/* BARRA LATERAL */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: 'flex', justifyContent: 'center' }}>
          <MenuIcon />
          <Typography
            variant="h7"
            noWrap
            onClick={() => {
              navegar('/')
            }}
            sx={{
              //display: { xs: 'none', md: 'flex' },
              cursor: 'pointer',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FeedCorporate
          </Typography>
        </DrawerHeader>

        <List>
          {['Início', 'Unidades', 'Avaliações', 'Ferramentas', 'Mensagens', 'Configurações', 'Sair'].map((text, index) => (
            <ListItem
              onClick={(e) => {

                if (text == "Sair") {
                  localStorage.clear();
                  navegar('/login');
                }
                setPage(text);
              }}
              key={text}
              disablePadding
              sx={{
                display: 'block',
                "& :hover": { background: "#36D98D" },

              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                selected={page == text ? true : false}
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

                <ListItemText primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                />

              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>


      {/* PÁGINAS */}
      <Box component="main" sx={{ flexGrow: 1, pl: 3, pr: 1 }}>
        <DrawerHeader />
        {page === "Início" && <Inicio />}
        {page == "Ferramentas" && <Ferramentas />}
      </Box>
    </Box>
  );
}
