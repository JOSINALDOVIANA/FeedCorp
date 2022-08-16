import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, Box, Checkbox, Grid, Typography, useTheme, Container } from '@mui/material'
import { MuiBox, MuiButton, MuiLink, MuiTextField, MuiFormControlLabel } from './styles';
import api from '../../api';
export default function SignIn() {

  const [permanecer, setPerm] = React.useState(false);
  const theme = useTheme();
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
    let company;
    await api.post("/user/login", obt).then(r => {
      if (!r.data.status) {
        alert(r.data.message)
      } else {
        dadosUser = r.data.dadosUser;
        permissions = r.data.permissions[0];
        unit = r.data.unit;
        status = r.data.status;
        company=r.data.company;
      }
    });

    if (status) {

      await api.get(`/images/listar?nameuser=${e.target["e-mail"].value.includes("@") ? "" : e.target["e-mail"].value}&email=${e.target["e-mail"].value.includes("@") ? e.target["e-mail"].value : ""}`).then(r => { image = r.data });


      await api.get(`/unit/consult?id_user=${dadosUser.id}`).then(r => { units = r.data });
      if (permanecer) {
        localStorage.setItem("values", JSON.stringify({ dadosUser, image, permissions, units, unit }))
      }

      await navegar("/perfil", { state: { dadosUser, image, permissions, units, unit,company } });
    }

  };

  return (

    <Container component='main' maxWidth="xs">

      <MuiBox>
        <Avatar src={"https://imagensjosinaldo.s3.amazonaws.com/fbf3c3a12fc9044b5920b7b55433cb72-opclient_logo.png"}
          sx={{ m: 1 }}
        />

        <Typography component="h1" variant="h5" color='inherit'>
          Login
        </Typography>

        <Box component="form" onSubmit={(e) => { handleSubmit(e) }} noValidate sx={{ mt: 1 }}>
          <MuiTextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="e-mail"
            autoComplete="email"
            autoFocus
          />

          <MuiTextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <MuiFormControlLabel
            control={<Checkbox onChange={() => setPerm(a => !a)} value="remember" />}
            label="Manter-me conectado"
          />

          <MuiButton
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </MuiButton>

          <MuiBox>

            
              <MuiLink href='#'>
                Esqueceu sua senha?
              </MuiLink>
           

        
              <MuiLink sx={{mt:2}} onClick={()=>{ navegar('/cadastro')}}>
                Ainda não tem conta? Cadastre-se
              </MuiLink>
       

          </MuiBox>

        </Box>
      </MuiBox>




    </Container>


    // </ThemeProvider>
  );
}