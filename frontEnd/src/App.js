import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled, useTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Muitoolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
}))

const MuitypographyTitle = styled(Typography)(({ theme }) => ({
  color:theme.palette.white,

  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sx')]: {
    textAlign: 'center'
  }


}))


export default function App() {
  const navegar = useNavigate();
  const theme = useTheme();

  return (
    <Box>
      <AppBar elevation={0}
        sx={{
          height: '50px',
          position: 'fixed',
          justifyContent: 'center',
          display: 'flex',
          backgroundColor: theme.palette.white
        }}>
        <Muitoolbar>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Avatar src={"https://imagensjosinaldo.s3.amazonaws.com/fbf3c3a12fc9044b5920b7b55433cb72-opclient_logo.png"} />
            <Typography variant="h6" sx={{ color: theme.palette.cian }}>
              FeedCorp.
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Button sx={{ color: theme.palette.cian }}>
              Preço
            </Button>
            <Button sx={{ color: theme.palette.cian }}>
              Quem Somos
            </Button>
            <Button sx={{ color: theme.palette.cian }}>
              Suporte
            </Button>
          </Box>

          <Button variant='outlined' onClick={() => { navegar('/login') }} sx={{ color: theme.palette.cian }}>
            Login
          </Button>

        </Muitoolbar>
      </AppBar>

      {/* <DrawerHeader /> */}

      <Box sx={{
        backgroundColor: theme.palette.teal,
        height: '35em',
        width: '100%',
        minWidth: '450px',

      }}>
        <Box sx={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '450px',
          height: '30em',
          width: '100%',
          p: '90px',
        }}>

          <MuitypographyTitle variant='h2'>
            FeedCorporation
          </MuitypographyTitle>

          <Typography variant="h5" color={theme.palette.white}>
            A melhor plataforma de todas! RECEBA!
          </Typography>

        </Box>
      </Box>

      {/* <Box sx={{
        backgroundColor: theme.palette.gray,
        // backgroundColor: theme.palette.white2, 
        height: '80vh',
      }}>
      </Box>

      <Box sx={{
        backgroundColor: theme.palette.lightGray,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundColor: theme.palette.white2, 
        height: '80vh',
      }}>

      </Box> */}


    </Box>
  );
}