import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import { ThemeProvider, makeStyles, useTheme } from '@mui/styles';
import { styled } from '@mui/system';

import api from '../../api.js';
import { useNavigate } from 'react-router-dom';
import { UseDados } from '../../routes.js';

// ##################classes##############
const useStyle = makeStyles((theme) => ({
  LoginBackground: {
    background: theme.palette.primary.paperDark,
    color: theme.palette.primary.white,
    borderRadius: '5px'
  },

}))


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        OPCLIENT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignIn() {
  const [link, setLink] = React.useState('https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg');
  const [image, setImage] = React.useState({});

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [permanecer, setPerm] = React.useState(false);

  const navegar = useNavigate();
  const [values, setValues] = UseDados();

  const theme = useTheme(); // tema
  const classes = useStyle(); // classes

  // ##### CONTROLE MODAL ##############
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  React.useEffect(() => {
    if (localStorage.getItem("values")) {
      const valores = localStorage.getItem("values");
      const valores2 = JSON.parse(valores);
      setValues(valores2);
      navegar("/perfil");
    }

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    let obt = {};
    e.target["e-mail"].value.indexOf("@") > 0 ?
      obt = { email: e.target["e-mail"].value, password: e.target["password"].value } :
      obt = { nameuser: e.target["e-mail"].value, password: e.target["password"].value };
    const dados = await api.post("/user/login", obt);

    if (!dados.data.status) {
      alert(dados.data.message)
    } else {
      let d = { ...dados.data.dados, ...image ? { image } : null };
      let units = await api.get(`/unit/consult?id_user=${d.id}`);

      if (permanecer) {
        localStorage.setItem("values", JSON.stringify({ dados: d, permissions: dados.data.permissions, units: units.data, unit: dados.data.unit }))
      }


      navegar("/perfil", { state: { dados: d, permissions: dados.data.permissions, units: units.data, unit: dados.data.unit } });
    }

  };

  // ESTILOS
  // ########## MODAL ###########
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    outlineStyle: 'none',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '8px',
    p: 4,
  };

  // ################ BOTOES ####################
  const ColorButton = styled(Button)(() => ({
    color: '#fff',
    background: `linear-gradient(45deg, #11998e 20%, ${theme.palette.primary.light} 80%)`,

    fontWeight: 'bold',
    fontSize: 17,
    '&:hover': {
      background: `linear-gradient(45deg, #11998e 5%, ${theme.palette.primary.light} 70%)`,

    },
  }));

  // ################ INPUTS ###################
  const CssTextField = styled(TextField)(() => ({
    '& label': { //label dentro do textfield
      color: theme.palette.primary.white,
    },
    '& label.Mui-focused': { //label fora do textfield -> focado
      color: theme.palette.primary.white,
    },
    '& .MuiInput-underline:after': {//sem efeito
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      color: theme.palette.primary.white, //cor do texto ao digitar

      '& fieldset': {//borda quando não focado
        borderColor: theme.palette.primary.white,
      },
      '&:hover fieldset': { //borda ao passar o mouse por cima
        borderColor: theme.palette.primary.light2,
      },
      '&.Mui-focused fieldset': { //borda focada
        borderColor: theme.palette.primary.light,
      },
    },
  }));

  // ################ LINKS ###################
  const ColorLink = styled(Link)(() => ({
    textDecoration: 'none',
    cursor: 'pointer',

    color: theme.palette.primary.light,
    '&:hover': {
      color: theme.palette.primary.light2,
    },
  }));

  return (
    // <ThemeProvider theme={useTheme}>
      <Container className={classes.LoginBackground} component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src={"https://imagensjosinaldo.s3.amazonaws.com/fbf3c3a12fc9044b5920b7b55433cb72-opclient_logo.png"} sx={{ m: 1 }} />

          <Typography component="h1" variant="h5" color='inherit'>
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="e-mail"
              autoComplete="email"
              autoFocus

              onChange={async (event) => {
                const valor = event.target.value;
                // Trocar o valor da variavel
                // através do React e avise quem precisa
                // setUsername(valor)
                try {
                  let d = await api.get(`/images/listar?nameuser=${valor.includes("@") ? "" : valor}&email=${valor.includes("@") ? valor : ""}`);
                  return
                } catch (error) {
                  return
                }
              }}
            />

            <CssTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <FormControlLabel
              control={<Checkbox onChange={() => setPerm(a => !a)} value="remember"
                sx={{
                  color: theme.palette.primary.light,
                  '&.Mui-checked': {
                    color: theme.palette.primary.light,
                  },
                }} />}
              label="Manter-me conectado"
            />

            <ColorButton
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </ColorButton>

            <Grid container>

              <Grid item xs>
                <ColorLink onClick={() => { handleOpen() }} variant="body2">
                  Esqueci-me a senha
                </ColorLink>
              </Grid>

              <Grid item>
                <ColorLink onClick={() => navegar('/')} variant="body2">
                  {"Cadastre-se"}
                </ColorLink>
              </Grid>

            </Grid>

          </Box>
        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ÁREA EM DESENVOLVIMENTO!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Agradeçemos pela compreensão, este recurso estará disponivel nas próximas atualizações.
          </Typography>
        </Box>
      </Modal>
      </Container>


    // </ThemeProvider>
  );
}