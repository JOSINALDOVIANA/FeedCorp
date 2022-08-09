import React, { useEffect, useState } from 'react';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Paper from '@mui/material/Paper';
import FolderIcon from '@mui/icons-material/Folder';
import { UseDados } from '../../routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Drawer, DrawerHeader } from './styles';

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}

const cores = ["#7757F9", "#31859D", "#2A76AB", "#FD7549"];

export default function Perfil() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = useState("Início");
  const [values, setValues] = UseDados();
  const navegar = useNavigate();
  const {state}= useLocation();
  const rota = useLocation();
  React.useEffect(() => {
    if (isEmpty(values) && !!state) {
      navegar("/login");

    }

    setValues(rota.state)
  }, [])
  console.log(values)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
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
          </IconButton>
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
            <ListItem key={text} disablePadding sx={{ display: 'block' }}
              onClick={() => {text == "Sair" ? navegar("/login"): setPage(text) }}
            >
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
                  {index === 0 ? <InboxIcon /> : null}
                  {index === 1 ? <MailIcon /> : null}
                  {index === 2 ? <MailIcon /> : null}
                  {index === 3 ? <MailIcon /> : null}
                  {index === 4 ? <MailIcon /> : null}
                  {index === 5 ? <MailIcon /> : null}
                  {index === 6 ? <MailIcon /> : null}

                </ListItemIcon>

                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, pl: 1, pr: 1 }}>
        <DrawerHeader />
        {/* Restante */}
        <Box
          sx={{
            background: "#e02141",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            p: 1
          }}>

          <Divider />

          {/* inicio do grid - unidades */}
          {((page == "Início") && (values?.permissions[0]?.description == "administrador")) &&
            <Box

              sx={{
                marginTop: 1,
                marginBottom: 1,
                width: "auto",
                height: "220px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                gap: 1,
                flexFlow: "wrap",
                overflow: "auto"
              }}
            >
              {isEmpty(values) ? null : values?.units?.map((e, index) => {
                // Esta função JavaScript sempre retorna um número aleatório entre min (incluído) e max (excluído):


                return (
                  <Paper
                    key={e.description}
                    sx={{
                      height: 200,
                      width: 150,
                      backgroundColor: cores[Math.floor(Math.random() * (cores.length - 0) + 0)],
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",

                    }}
                  >
                    <FolderIcon sx={{
                      color: "#fff",
                      width: "40px",
                      height: "31.43px",
                    }}></FolderIcon>
                    <Paper
                      component="div"
                      elevation={0}
                      sx={{
                        width: "132px",
                        height: "88px",
                        left: "68px",
                        top: "74px",
                        background: "transparent",
                        border: 0


                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'Roboto',
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "64px",
                          lineHeight: "75px",
                          textAlign: "center",
                          color: " #FFFFFF",
                        }}
                      >
                        {e.cols}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: 'Roboto',
                          fontStyle: "normal",
                          fontHeight: 700,
                          fontSize: "20px",
                          lineHeight: "23px",
                          textAlign: "center",
                          color: "#FFFFFF",

                        }}
                      >
                        Colaboradores
                      </Typography>
                    </Paper>
                    <Typography
                      sx={{
                        fontFamily: 'Roboto',
                        fontStyle: "normal",
                        fontWeight: 200,
                        fontSize: "16px",
                        lineHeight: "19px",
                        textAlign: "center",

                        color: "#FFFFFF",
                      }}
                    >
                      {e.description.toUpperCase()}
                    </Typography>
                  </Paper>
                )
              })}

            </Box>
          }
          {/* fim do grid */}

          <Divider />

          {/* grafico */}

          {((page == "Início") && (values?.permissions[0].description == "administrador")) &&
            <Paper
              sx={{
                marginTop: theme.spacing(1),
                width: "auto",
                height: "522.5px",
                left: "274px",
                top: "434px",
                background: "#FFFFFF",
                border: "1px solid #F2F2F2",
                borderRadius: "14px",
                padding: theme.spacing(2),
                display: "flex",
                alignItems: "centrer",
                justifyContent: "center",
                flexDirection: "column",
                overflow: "scroll"
              }}
            >

              {/* <Grafico /> */}
            </Paper>
          }
          {page == "Unidades" &&
           <Paper></Paper>
          }



        </Box>

        {/* -----------------------MODAL FOTO--------------------------------- */}
        {/* <Modal
        // open={openF}
        // onClose={handleCloseF}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={AvatarModalStyle}>
          {
            1 - envio as imagens ImagensCarregadas e os dados do proprietario
            2 - envio tambem funções para atualizar estes dados
          }
          <ModalFoto ImagensCarregadas={ImagensCarregadas} setImagens={setImagens} />
        </Box>
      </Modal> */}
        {/* ----------------------------FIM MODAL FOTO----------------------- */}
      </Box>
    </Box>
  );
}
