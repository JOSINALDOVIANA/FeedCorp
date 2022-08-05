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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import api from '../../api.js';
import { useNavigate } from 'react-router-dom';
import { UseDados } from '../../routes.js';
import { border } from '@mui/system';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignIn() {
  const [link, setLink] = React.useState('https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [image, setImage] = React.useState({});
  const navegar = useNavigate();
  const [values,setValues]=UseDados();
  
  const [permanecer, setPerm] = React.useState(false);
  const theme=useTheme();




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
              }else{
              let d={...dados.data.dados,...image?{image}:null};
              let units=await api.get(`/unit/consult?id_user=${d.id}`);
              
              if (permanecer) {
                localStorage.setItem("values", JSON.stringify({ user: {dados:d,permissions:dados.data.permissions,units:units.data,unit:dados.data.unit} }))
              }
            
              
               navegar("/perfil",{state:{ user: {dados:d,permissions:dados.data.permissions,units:units.data,unit:dados.data.unit} }});
              }
              
  };

  return (
    <ThemeProvider theme={theme}>
      <Container  component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src={link}  sx={{ m: 1, bgcolor: 'secondary.main' }}/>            
         
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              sx={{color:"#e02140"}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="e-mail"
              autoComplete="email"
              autoFocus
              onChange={async (event)=>{
                const valor = event.target.value;
                // Trocar o valor da variavel
                // através do React e avise quem precisa
                // setUsername(valor)
                try {
                  let d = await api.get(`/images/listar?nameuser=${valor.includes("@")?"":valor}&email=${valor.includes("@")?valor:""}`);

                               
                 if(d.data.mensagem){
                  setLink(d.data.dados.url);
                  setImage(d.data.dados)
                }else{
                  setLink("https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg");
                 }
                  return
                } catch (error) {
                  return
                }
              }}
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
              control={<Checkbox onChange={()=>setPerm(a=>!a)} value="remember" color="primary" />}
              label="Manter-me conectado"
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
                  Esqueci-me a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não tem conta? entre em contato!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}