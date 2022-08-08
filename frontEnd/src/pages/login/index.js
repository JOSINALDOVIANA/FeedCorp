import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import { makeStyles} from '@mui/styles';
import { styled } from '@mui/system';
import api from '../../api';

const useStyle = makeStyles(() => ({
  LoginBackground: {
    background: '#EAEBEB',
    color: '#0A0A0A',
    borderRadius: '5px'
  },
  colorButton: {
    color: '#fff',
    background: `linear-gradient(45deg, #119 5%, #ff0 70%)`,
    fontWeight: 'bold',
    fontSize: 17,
    '&:hover': {
      background: `linear-gradient(45deg, #11998e 5%, #11998e 70%)`,

    },
  },
}))

export default function SignIn() {
  const classes = useStyle(); // classes

  const [permanecer, setPerm] = React.useState(false);
  const navegar = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("values")) {
      const valores = localStorage.getItem("values");
      const valores2 = JSON.parse(valores);

      navegar("/perfil", { state: valores2 });
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    let obt = {};
    e.target["e-mail"].value.indexOf("@") > 0 ?
      obt = { email: e.target["e-mail"].value, password: e.target["password"].value } :
      obt = { nameuser: e.target["e-mail"].value, password: e.target["password"].value };
    let dadosUser;
    let permissions;
    let unit;
    let status;
    let image;
    let units;
    await api.post("/user/login", obt).then(r => {
      if (!r.data.status) {
        alert(r.data.message)
      } else {
        dadosUser = r.data.dados;
        permissions = r.data.permissions;
        unit = r.data.unit;
        status = r.data.status;
      }
    });
    console.log(permissions)
    if (status) {

      await api.get(`/images/listar?nameuser=${e.target["e-mail"].value.includes("@") ? "" : e.target["e-mail"].value}&email=${e.target["e-mail"].value.includes("@") ? e.target["e-mail"].value : ""}`).then(r => { image = r.data });


      await api.get(`/unit/consult?id_user=${dadosUser.id}`).then(r => { units = r.data });
      if (permanecer) {
        localStorage.setItem("values", JSON.stringify({ dadosUser, image, permissions, units, unit }))
      }

      await navegar("/perfil", { state: { dadosUser, image, permissions, units, unit } });
    }

  };

  const ColorLink = styled(Link)(() => ({
    color: '#11998e ',
    cursor: 'pointer',
    textDecoration: 'none',

    '&:hover': {
    textDecoration: 'none',
    color: '#ff0',
    },
  }));

  // FRONT
  return (
    <Container className={classes.LoginBackground} component="main" maxWidth="xs">

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

        <Box component="form" onSubmit={(e) => { handleSubmit(e) }} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="e-mail"
            autoComplete="email"
            autoFocus
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
            control={<Checkbox onChange={() => setPerm(a => !a)} value="remember" />}
            label="Manter-me conectado"
          />

          <Button
            type="submit"
            variant="contained"
            className={classes.colorButton}
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>

          <Grid container>

            <Grid item xs>
              <ColorLink href='#'>
                Esqueci-me a senha
              </ColorLink>
            </Grid>

            <Grid item>
              <ColorLink>
                Cadastre-se
              </ColorLink>
            </Grid>

          </Grid>

        </Box>
      </Box>




    </Container>


    // </ThemeProvider>
  );
}