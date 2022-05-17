import React, { useContext, useEffect, useState, li } from 'react';
import api from '../../api';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { UseDados, usuarioContext } from '../../routes';
import { useNavigate } from 'react-router-dom';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        AVD
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignIn() {
  const theme = useTheme();
  const [carregar, setCarregar] = useState(false);
  const [local, setLocal] = useState(false);
  const [permanecer, setPerm] = useState(false);
  const [ values, setValues ] = UseDados();
  const navegar = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("values")) {
      const valores = localStorage.getItem("values");
      const valores2 = JSON.parse(valores);
      setValues(valores2);
      setCarregar(true);
      setLocal(true)

    }
    else {
      setValues({});
      setCarregar(true)
    }
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    try {
      let d = await api.post("/login", { "email": data.get("email"), "password": data.get("password") });
      if (d.data.login == false) {
        alert("erro ao logar, tente novamente!!")
      } else {
        if(!permanecer){
         d.data.password=""
        }
        setValues(a => ({ ...a, ...{ user: d.data} }));
        localStorage.setItem("values", JSON.stringify({ ...values, ...{ user: d.data } }));
        navegar("/perfil");
      }
    } catch (error) {
      alert("desculpe serviço indisponivel")
      console.log(error)
      return;
    }
  };

  return (

    carregar && <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          LOGIN
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue={local ? values.user.email : ""}

          />
          <TextField
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
            control={<Checkbox onClick={()=>{setPerm(a=>!a)}} name="checkbox" value="remember" color="primary" />}
            label="manter-me conectado"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
           Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Não tem conta? Inscreva-se"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>

  );
}