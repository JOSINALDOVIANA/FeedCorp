import { Accordion, AccordionDetails, AccordionSummary, Avatar, Badge, Container, Divider, Grid, Icon, Modal, Paper, Typography, useTheme } from '@mui/material';
import { Box, display } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddchartIcon from '@mui/icons-material/Addchart';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import FolderIcon from '@mui/icons-material/Folder';
import "./style.css";
import { UseDados } from '../../routes';
import Grafico from './grafico.js';
import { useLocation, useNavigate } from 'react-router-dom';
import ModalFoto from "../../components/Fotos/CarregarFotos.js";
import fileSize from 'filesize';
import api from '../../api';
import Unidades from '../../components/unidades/index.js';
const AvatarModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outlineStyle: 'none',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 20,
  p: 4,
};
const cores = ["#7757F9", "#31859D", "#2A76AB", "#FD7549"];

function Users() {
  const navegar = useNavigate();
  const dadosrota=useLocation();  
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

      
      if (isEmpty(dadosrota.state)||!dadosrota.state) {
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
           
            await api.put("/update", {...userdados,...{permissions:[values.user.permissions[0].id]},...{passwordantigo:userdados.password}});
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
          userdados.user.dados.image=ImagensCarregadas[0];
          const up = {
            ...userdados.user.dados,
            ...{ passwordantigo: userdados.user.dados.password},
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

  return (
    <Container maxWidth="xl" sx={{
      position: "relative",
      background: "#FFFFFF",
      display: "flex",
      justifyContent: "space-around",

    }}>
      {/* box lateral esquerdo */}
      <Paper elevation={0} component="div" sx={{

        width: "256px",
        height: "1024px",
        left: "0px",
        top: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // background: "yellow"

      }}>
        {/* div=> icon e OpClient */}
        <Box component="div" sx={{

          width: "151px",
          height: "32.56px",
          marginTop: "10px",
          // background: "#e02141",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",

        }}>

          <Avatar sx={{

            width: "30px",
            height: "32.56px",


          }}
            alt="OpClient"
            src="https://imagensjosinaldo.s3.amazonaws.com/7b5ed4ee4d02cc8617e4d2eaa538ec7b-opclient.png"
          ></Avatar>

          <Typography sx={{

            width: "108px",
            height: "28.28px",


            fontFamily: 'Roboto',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "33px",

            color: " #333333"
          }}>OpClient</Typography>
        </Box>
        {/* div=> items */}
        <Box component="div" sx={{
          width: "251px",
          height: "952px",
          paddingTop: "10px"
        }}>

          {/* Inicio */}
          <Box onClick={(e) => setPage(`inicio`) } component="div" className="items" sx={{

            width: "100%",
            height: "37.17px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}>
            <Icon>
              <ApartmentIcon></ApartmentIcon>
            </Icon>
            <Typography>
              Início
            </Typography>

          </Box>
          {/* Unidades */}

          <Box onClick={() => { setPage("unidades") }} component="div" className="items" sx={{

            width: "100%",
            height: "37.17px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}>
            <Icon>
              <ApartmentIcon></ApartmentIcon>
            </Icon>
            <Typography>
              Unidades
            </Typography>

          </Box>

          {/* Avaliações */}

          <Box onClick={() => { setPage("avaliacoes") }} component="div" className="items" sx={{

            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}>

            <Accordion sx={{ background: "transparent" }} elevation={0}>
              <AccordionSummary sx={{ flexDirection: "row-reverse", justifyContent: "space-between", marginLeft: "25px" }}
                expandIcon={<Icon>
                  <ContentPasteSearchIcon></ContentPasteSearchIcon>
                </Icon>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ marginLeft: "45px" }}>Avaliações</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", justifyContent: "space-around" }} component="div" className='subitems'>
                  <Icon sx={{ marginRight: "5px" }}>
                    <WorkOutlineIcon sx={{ color: "#000" }}></WorkOutlineIcon>
                  </Icon>
                  <Typography>Aval. por Resultados</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>


          </Box>

          {/* Ferramentas */}

          <Box onClick={() => { setPage("ferramentas") }} component="div" className="items" sx={{

            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}>

            <Accordion sx={{ background: "transparent" }} elevation={0}>
              <AccordionSummary sx={{ flexDirection: "row-reverse", justifyContent: "space-between", marginLeft: "15px" }}
                expandIcon={<Icon>
                  <AddchartIcon></AddchartIcon>
                </Icon>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ marginLeft: "45px" }}>Ferramentas</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", justifyContent: "space-around" }} component="div" className='subitems'>
                  <Icon sx={{ marginRight: "5px" }}>
                    <WorkOutlineIcon sx={{ color: "#000" }}></WorkOutlineIcon>
                  </Icon>
                  <Typography>OKR</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>


          </Box>


          {/* mensagens */}
          <Box onClick={() => { setPage("mensagens") }} component="div" className="items" sx={{

            width: "100%",
            height: "37.17px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}>
            <Icon>
              <MessageIcon></MessageIcon>
            </Icon>
            <Typography>
              Mensagens
            </Typography>

          </Box>
          {/* configurações */}
          <Box onClick={() => { setPage("configurações") }} component="div" className="items" sx={{

            width: "100%",
            height: "37.17px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingLeft: "10px"
          }}>
            <Icon>
              <SettingsIcon />
            </Icon>
            <Typography>
              Configurações
            </Typography>

          </Box>
          {/* Sair */}
          <Box component="div" className="items" sx={{

            width: "100%",
            height: "37.17px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",

          }}
            onClick={() => {
              localStorage.clear();
              setValues({});
              navegar("/login")
            }}
          >
            <Icon>
              <LogoutIcon />
            </Icon>
            <Typography>
              Sair
            </Typography>

          </Box>

        </Box>

      </Paper>

      {/* Restante */}
      <Box
        sx={{
          // background:"#e02141",

          width: "100%",
          height: "1024px",
          display: "flex",
          flexDirection: "column",

        }}>
        {/* cabeçalho */}
        <Paper
          component="div"
          sx={{

            width: "99%",
            height: "68px",
            margin: theme.spacing(1),
            // background: "#e02141"
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
            border: 0,
            // borderBottom:"solid 1px #000",
            // boxShadow: "0 0 0.5em #3F9142",

          }}
          elevation={0}
        >

          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "34px",
              lineHeight: "40px",
            }}>

            {values.user?.permissions[0].description.toUpperCase()}
          </Typography>
          <Box
            component="div"
            sx={{
              width: "auto",
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",

            }}

          >
            <Badge sx={{ marginRight: theme.spacing(3), cursor: "pointer" }} badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
            <Avatar
              onClick={handleOpenF}
              alt={`${values.user?.dados.name}`}
              src={values.user?.dados.image.url}
              sx={{ marginRight: theme.spacing(2), cursor: "pointer" }}
            ></Avatar>

            <Typography>{values.user?.dados.name.toUpperCase()}</Typography>
          </Box>


        </Paper>

        {/* fim cabeçalho */}

        <Divider />

        {/* inicio do grid - unidades */}
        {((page == "inicio") && (values.user?.permissions[0].description=="administrador")) &&
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
            {isEmpty(values)?null:values.user?.units?.map((e, index) => {
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

        {((page == "inicio") && (values.user?.permissions[0].description=="administrador")) &&
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
      <Modal
        open={openF}
        onClose={handleCloseF}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={AvatarModalStyle}>
          {
            /* 1 - envio as imagens ImagensCarregadas e os dados do proprietario
            2 - envio tambem funções para atualizar estes dados */
          }
          <ModalFoto ImagensCarregadas={ImagensCarregadas} setImagens={setImagens} />
        </Box>
      </Modal>
      {/* ----------------------------FIM MODAL FOTO----------------------- */}

    </Container >);
}

export default Users;