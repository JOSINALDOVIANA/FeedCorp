import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import ApartmentIcon from '@mui/icons-material/Apartment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddchartIcon from '@mui/icons-material/Addchart';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import FolderIcon from '@mui/icons-material/Folder';

const drawerWidth = 240;

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
  const dadosrota = useLocation();
  const [page, setPage] = useState("inicio");
  const [values, setValues] = UseDados();
  const theme = useTheme();
  const [coresSelected, setCores] = React.useState([]);
  console.log(dadosrota.state)
  // carrega os dados do usuario logado
  useEffect(() => {

    if (isEmpty(values)) {
      // if (localStorage.getItem("values")) {
      //   const valores = localStorage.getItem("values");
      //   const valores2 = JSON.parse(valores);
      //   setValues(a=>({...a,...valores2}));

      // } else {
      //   navegar("/");
      // }

      if (isEmpty(dadosrota.state) || !dadosrota.state) {
        navegar("/login");
      }
      setValues(dadosrota.state);
    }
  }, []);

  // -----------------------MODAL UPLOAD FOTO-----------------------------
  const [ImagensCarregadas, setImagens] = React.useState([]);
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
    let image_atual = values.user.dados.image;
    let dados;
    if (isEmpty(values.user.dados.image)) {

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
  const handleCloseF = async () => {
    // estou verificando se ha dois imagens em ImagensCarregadas
    if (ImagensCarregadas.length >= 1) {
      // console.log(ImagensCarregadas)
      try {

        if (ImagensCarregadas.length > 1) {
          const img = await api.delete(`/images/deletar?key=${ImagensCarregadas[0].key}&id=${ImagensCarregadas[0].id}`)
          if (!img.data.mensagem) {// se error retornar false ele sai
            alert("error ao apagar!")
            return;
          } else {
            let userdados = values.user.dados;
            userdados.id_image = ImagensCarregadas[1].id;

            await api.put("/update", { ...userdados, ...{ permissions: [values.user.permissions[0].id] }, ...{ passwordantigo: userdados.password } });
            let d = values;
            d.user.dados = userdados;
            d.user.dados.image = ImagensCarregadas[1];
            setValues(d);
            // localStorage.setItem("values", JSON.stringify(d));
            setImagens([]);

            alert("imagem anterior apagada!");


          }
        }
        else {
          let userdados = values;
          userdados.user.dados.id_image = ImagensCarregadas[0].id;
          userdados.user.dados.image = ImagensCarregadas[0];
          const up = {
            ...userdados.user.dados,
            ...{ passwordantigo: userdados.user.dados.password },
            ...{ permissions: [values.user.permissions[0].id] }
          }

          const upend = await api.put("/update", up);
          // console.log(upend)
          userdados.user.dados.image = ImagensCarregadas[0];


          setValues(userdados);
          // localStorage.setItem("values", JSON.stringify(userdados));
          setImagens([]);
        }






      } catch (error) {
        // console.log(error)
        alert("Erro ao trocar sua imagem")// caso de algum error por segurança não sera mostrado no console

      }





    }

    setOpenF(false);
  };
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

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {values.user?.permissions[0].description.toUpperCase()}
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
              alt={`${values.user?.dados.name}`}
              src={values.user?.dados.image.url}
              sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
            ></Avatar>

            <Typography sx={{
              display: 'flex',
              alignSelf: 'center'
            }}>
              {values.user?.dados.name.toUpperCase()}
            </Typography>
          </Box>

        </Toolbar>
      </AppBar>

      {/* MENU LATERAL */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        {/* ÍNICIO */}
        <ListItem onClick={(e) => setPage(`inicio`)} component="div" className="items"
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

        <Accordion 
        onClick={() => { setPage("unidades") }} 
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
              Unidades
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
        </Accordion>



        {/* <Accordion onClick={() => { setPage("avaliacoes") }}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
  
          }}
          elevation={0}
        >

          <AccordionSummary
            sx={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          
          
            >
            <Icon 
             sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}>
              <ContentPasteSearchIcon></ContentPasteSearchIcon>
            </Icon>
            <Typography sx={{ opacity: open ? 1 : 0 }}>Avaliações</Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ display: "flex", minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center', }} component="div" className='subitems'>
     
              <Icon sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
                <WorkOutlineIcon sx={{ color: "#000" }}></WorkOutlineIcon>
              </Icon>
              <Typography sx={{ opacity: open ? 1 : 0 }}>Aval. por Resultados</Typography>
         
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

      <Box component="main" sx={{ flexGrow: 1, pl: 2}}>
      <DrawerHeader />
        {/* Restante */}
        <Box
          sx={{
            //background: "#e02141",
            width: "100%",
            height: "1024px",
            display: "flex",
            flexDirection: "column",

          }}>

          <Divider />

          {/* inicio do grid - unidades */}
          {((page == "inicio") && (values.user?.permissions[0].description == "administrador")) &&
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
              {isEmpty(values) ? null : values.user?.units?.map((e, index) => {
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

          {((page == "inicio") && (values.user?.permissions[0].description == "administrador")) &&
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
