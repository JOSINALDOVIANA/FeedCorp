import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UseDados } from '../../routes';
import api from '../../api';
import "./style.css";

import Grafico from './grafico.js';
import ModalFoto from "../../components/Fotos/CarregarFotos.js";
import fileSize from 'filesize';
import Unidades from '../../components/unidades/index.js';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
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
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArticleIcon from '@mui/icons-material/Article';
import QuizIcon from '@mui/icons-material/Quiz';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import NotificationsIcon from '@mui/icons-material/Notifications';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddchartIcon from '@mui/icons-material/Addchart';

import FolderIcon from '@mui/icons-material/Folder';
import AdbIcon from '@mui/icons-material/Adb';

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
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
  }),
);

const cores = ["#7757F9", "#31859D", "#2A76AB", "#FD7549"];

export default function Users() {
  const navegar = useNavigate();
  const {state}= useLocation();
  const [page, setPage] = useState("inicio");
  const [values,setValues]=UseDados();
  
  
  const theme = useTheme();
  const [coresSelected, setCores] = React.useState([]);
  
  // carrega os dados do usuario logado
  
  useEffect(() => {

    if (isEmpty(values) && !!state) {     

      
        navegar("/login");
      
    
    }
    setValues(state)
    
    console.log(values);
  }, []);
 



  // -----------------------MODAL UPLOAD FOTO-----------------------------
  const [ImagensCarregadas, setImagens] = useState([]);
  const [openF, setOpenF] = React.useState(false);

  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

  //ao abrir o modal
  const handleOpenF = () => {
    // estou carregando os dados da imagem atual do perfil
    {/*
       values
           user
             dados
                image
             permissions
    */}
    let image_atual = values.dados.image;
    let dados;
    if (isEmpty(values.dados.image)) {

      setImagens([])

    } else {
      dados = {
        id: image_atual.id,
        name: image_atual.name,
        readableSize: fileSize(image_atual.size),
        preview: image_atual.url,
        progress: 100,
        uploaded: true,
        error: false,
        url: image_atual.url,
        key: image_atual.key

      }
      setImagens([dados]);// atualizando ImagensCarregadas ja que ela é usada na listagem e futuramente para ser apagada
    }
    setOpenF(true);// abrindo o modal de fotos

  };
  //ao fechar o modal
  // const handleCloseF = async () => {
  //   // estou verificando se ha dois imagens em ImagensCarregadas
  //   if (ImagensCarregadas.length >= 1) {
     
  //     try {

  //       if (ImagensCarregadas.length > 1) {
  //         const img = await api.delete(`/images/deletar?key=${ImagensCarregadas[0].key}&id=${ImagensCarregadas[0].id}`)
  //         if (!img.data.mensagem) {// se error retornar false ele sai
  //           alert("error ao apagar!")
  //           return;
  //         } else {
  //           let userdados = values.dados;
  //           userdados.id_image = ImagensCarregadas[1].id;

  //           await api.put("/update", { ...userdados, ...{ permissions: [values.permissions[0].id] }, ...{ passwordantigo: userdados.password } });
  //           let d = values;
  //           d.dados = userdados;
  //           d.dados.image = ImagensCarregadas[1];
  //           setValues(d);
  //           // localStorage.setItem("values", JSON.stringify(d));
  //           setImagens([]);

  //           alert("imagem anterior apagada!");

  //         }
  //       }
  //       else {
  //         let userdados = values;
  //         userdados.dados.id_image = ImagensCarregadas[0].id;
  //         userdados.dados.image = ImagensCarregadas[0];
  //         const up = {
  //           ...userdados.dados,
  //           ...{ passwordantigo: userdados.dados.password },
  //           ...{ permissions: [values.permissions[0].id] }
  //         }

  //         const upend = await api.put("/user/update", up);
          
  //         userdados.dados.image = ImagensCarregadas[0];


  //         setValues(userdados);
  //         // localStorage.setItem("values", JSON.stringify(userdados));
  //         setImagens([]);
  //       }

  //     } catch (error) {
       
  //       alert("Erro ao trocar sua imagem")// caso de algum error por segurança não sera mostrado no console

  //     }
  //   }

  //   setOpenF(false);
  // };
  // ----------------------------------FIM MODAL FOTO------------------------------

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* BARRA SUPERIOR */}
      <AppBar position="fixed" open={open}>
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              // ...(open && { display: 'none' }),
            }}
          >
            {open ? < ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {values?.permissions[0]?.description?.toUpperCase()}
          </Typography>

          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>

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

            <Avatar
              onClick={handleOpenF}
              alt={`${values?.dados?.name}`}
              src={values?.dados?.image.url}
              sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
            ></Avatar>

            <Typography sx={{
              display: 'flex',
              alignSelf: 'center'
            }}>
              {values?.dados?.name.toUpperCase()}
            </Typography>
          </Box>

        </Toolbar>
      </AppBar>

      {/* MENU LATERAL */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: 'flex', justifyContent: 'center' }}>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            OPCLIENT
          </Typography>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> */}
        </DrawerHeader>

        {/* <Divider /> */}

        {/* ÍNICIO */}
        <ListItem onClick={() => { setPage("inicio") }} component="div" className="items"
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}>
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText sx={{ opacity: open ? 1 : 0 }}>
            Início
          </ListItemText>

        </ListItem>

        {/* UNIDADES */}
        <ListItem onClick={() => { setPage("unidades") }} component="div" className="items"
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}>

          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}>
            <ApartmentIcon />
          </ListItemIcon>

          <ListItemText sx={{ opacity: open ? 1 : 0 }}>
            Unidades
          </ListItemText>

        </ListItem>
            {/* AVALIAÇOES */}
        <ListItem onClick={() => { setPage("avaliacoes") }} component="div" className="items"
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}>

          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}>
            <ArticleIcon />
          </ListItemIcon>

          <ListItemText sx={{ opacity: open ? 1 : 0 }}>
            Avaliações
          </ListItemText>

        </ListItem>
            {/* FERRAMENTAS */}
        <ListItem onClick={() => { setPage("ferramentas") }} component="div" className="items"
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}>

          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}>
            <QuizIcon />
          </ListItemIcon>

          <ListItemText sx={{ opacity: open ? 1 : 0 }}>
            Ferramentas
          </ListItemText>

        </ListItem>
            {/* MENSAGENS */}
        <ListItem onClick={() => { setPage("mensagens") }} component="div" className="items"
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}>

          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}>
            <ChatIcon />
          </ListItemIcon>

          <ListItemText sx={{ opacity: open ? 1 : 0 }}>
            Mensagens
          </ListItemText>

        </ListItem>
            {/* CONFIGURAÇÕES */}
        <ListItem onClick={() => { setPage("configurações") }} component="div" className="items"
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}>

          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText sx={{ opacity: open ? 1 : 0 }}>
            Configurações
          </ListItemText>

        </ListItem>

        <ListItem
          onClick={() => {
            localStorage.clear();
            // setValues({});
            navegar("/login")
          }} component="div" className="items"
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}>

          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}>
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText sx={{ opacity: open ? 1 : 0 }}>
            Sair
          </ListItemText>

        </ListItem>

        {/* <Accordion 
        onClick={() => { setPage("avaliacoes") }} 
        component="div" 
        className="items" 
        // disabled = {!open} 
        expanded = {open ? setOpen : false}>
          <AccordionSummary
              
            sx={{
              flexDirection: "row-reverse",
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                ml: open ? 'auto' : 8,
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
              <ApartmentIcon />
            </ListItemIcon>

            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
              Avaliações
            </ListItemText>
          </AccordionSummary>

          <AccordionDetails
          sx={{
            ...(!open && { display: 'none' }),
            opacity: open ? 1 : 0
          }}>
            <ListItemText>
              aaaaa
            </ListItemText>
          </AccordionDetails>
        </Accordion> */}

        <Divider />

        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
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
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, pl: 1, pr:1 }}>
        <DrawerHeader/>
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
          {((page == "inicio") && (values?.permissions[0]?.description == "administrador")) &&
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

          {((page == "inicio") && (values?.permissions[0].description == "administrador")) &&
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

              <Grafico />
            </Paper>
          }
          {page == "unidades" &&
            <Unidades />
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
