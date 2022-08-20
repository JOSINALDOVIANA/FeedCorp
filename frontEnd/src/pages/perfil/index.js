import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { UseDados, usuarioContext } from '../../routes';
import {
  Box, Toolbar, List,
  CssBaseline, Typography, Divider, IconButton, Badge,
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
import NotificationsIcon from '@mui/icons-material/Notifications'

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Drawer, DrawerHeader } from './styles';

import Inicio from './páginas/users';
import Ferramentas from './páginas/ferramentas/index.js';


export default function Perfil() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);


  const { values, setValues } = React.useContext(usuarioContext);
  const [page, setPage] = React.useState("Meu Painel");
  const navegar = useNavigate();
  const rota = useLocation();

  React.useEffect(() => {
    setValues(rota.state);
  }, [])
console.log(values)
  const items = {
    "administrador": ['Meu Painel', 'Corporação', 'Avaliações', 'Ferramentas', 'Mensagens', 'Configurações', 'Sair'],
    "gestor": ['Meu Painel', 'Minha Unidade', 'Avaliações', 'Ferramentas', 'Mensagens', 'Configurações', 'Sair'],
    "colaborador": ['Meu Painel', 'Feedbacks', 'Meu desempenho', 'Mensagens', 'Configurações', 'Sair'],
  }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={2} open={open}>
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

          <Badge sx={{
            marginRight: theme.spacing(3),
            cursor: "pointer",
            alignSelf: 'center'
          }}
            badgeContent={17}
            color="error"
          >
            <NotificationsIcon />
          </Badge>

          <Typography>
            {values?.dadosUser?.name.toUpperCase()}
          </Typography>

          <Avatar
            sx={{
              ml: theme.spacing(2),
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

        {/* LOGO */}
        <DrawerHeader sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar src={"https://imagensjosinaldo.s3.amazonaws.com/fbf3c3a12fc9044b5920b7b55433cb72-opclient_logo.png"} />
          <Typography
            variant="h7"
            noWrap
            onClick={() => {
              navegar('/')
            }}
            sx={{
              //display: { xs: 'none', md: 'flex' },
              cursor: 'pointer',
              fontFamily: 'roboto',
              fontWeight: 700,
              fontSize: 25,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FeedCorp.
          </Typography>
        </DrawerHeader>

        {/* ITENS */}
        <List>
          {items[`${values?.permissions?.description}`]?.map((text, index) => (

            <ListItem
              // sx={{
              //   "& :hover": { background: theme.palette.lightGreen},
              // }}
              key={text}
              disablePadding
              onClick={(e) => {
                if (text == "Sair") {
                  localStorage.clear();
                  navegar('/login');
                }
                setPage(text);
              }}
            >
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>

                {
                values?.permissions?.description=="administrador"?
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                    {index === 0 ? <HomeIcon /> : null}
                    {index === 1 ? <ApartmentIcon /> : null}
                    {index === 2 ? <ArticleIcon /> : null}
                    {index === 3 ? <QuizIcon /> : null}
                    {index === 4 ? <ChatIcon /> : null}
                    {index === 5 ? <SettingsIcon /> : null}
                    {index === 6 ? <LogoutIcon /> : null}
                  </ListItemIcon>
                  : 
                  values?.permissions?.description=="gestor"?
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                    {index === 0 ? <HomeIcon /> : null}
                    {index === 1 ? <ApartmentIcon /> : null}
                    {index === 2 ? <ArticleIcon /> : null}
                    {index === 3 ? <QuizIcon /> : null}
                    {index === 4 ? <ChatIcon /> : null}
                    {index === 5 ? <SettingsIcon /> : null}
                    {index === 6 ? <LogoutIcon /> : null}
                  </ListItemIcon> 
                  : 
                  values?.permissions?.description=="colaborador"?
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                    {index === 0 ? <HomeIcon /> : null}
                    {index === 1 ? <ArticleIcon /> : null}
                    {index === 2 ? <QuizIcon /> : null}
                    {index === 3 ? <ChatIcon /> : null}
                    {index === 4 ? <SettingsIcon /> : null}
                    {index === 5 ? <LogoutIcon /> : null}
                  </ListItemIcon>
                  : null
                  }

                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />

              </ListItemButton>
            </ListItem>
          ))}

        </List>

      </Drawer>


      {/* PÁGINAS */}
      <Box component="main" sx={{ flexGrow: 1, pl: 3, pr: 1, background: theme.palette.lightGray }}>
        <DrawerHeader />
        {page === "Meu Painel" && <Inicio />}
        {page == "Ferramentas" && <Ferramentas />}
      </Box>

    </Box>
  );
}
