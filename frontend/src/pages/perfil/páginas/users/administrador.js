import React from 'react';
import { UseDados } from '../../../../routes';

import { Box, Button, Card, CardContent, Divider, Grid, Paper, Typography } from '@mui/material';
import { FeedBox, MuiBox, FeedPaper } from './styles';
import { useTheme } from '@mui/material/styles';

import FeedbackIcon from '@mui/icons-material/Feedback';

function Administrador() {
  const theme = useTheme();
  const [values, setValues] = UseDados();
  // console.log(values)
  return (

    <MuiBox>

      <FeedBox>
        <Button variant='outlined'>Enviar Feedback</Button>
      </FeedBox>
      <Divider />
      <h1>{values?.permissions?.description}</h1>
      {/* TESTANDO - NÃO MEXA */}
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>

      {/* maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 }, */}
        <Grid item xs={12} sm={6}>
          <FeedPaper variant='outlined' sx={{ background: theme.palette.card1 }}>
          <Box sx={{ display: 'flex', pl: 2 }}>
              <FeedbackIcon sx={{ alignSelf: 'center', fontSize: 40 }} />
              <CardContent sx={{ pl: 2 }}>
                <Typography sx={{ fontSize: 15 }} gutterBottom>
                  Feedbacks
                </Typography>
                <Typography variant="h5">
                  20 realizados
                </Typography>
              </CardContent>
            </Box>
          </FeedPaper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FeedPaper variant='outlined' sx={{ background: theme.palette.card2 }}>
          <Box sx={{ display: 'flex', pl: 2 }}>
              <FeedbackIcon sx={{ alignSelf: 'center', fontSize: 40 }} />
              <CardContent sx={{ pl: 2 }}>
                <Typography sx={{ fontSize: 15 }} gutterBottom>
                  Feedback
                </Typography>
                <Typography variant="h5">
                  5 recebidos
                </Typography>
              </CardContent>
            </Box>
          </FeedPaper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FeedPaper variant='outlined' sx={{ background: theme.palette.card3 }}>
            <Box sx={{ display: 'flex', pl: 2 }}>
              <FeedbackIcon sx={{ alignSelf: 'center', fontSize: 40 }} />
              <CardContent sx={{ pl: 2 }}>
                <Typography sx={{ fontSize: 15 }} gutterBottom>
                  Objetivos
                </Typography>
                <Typography variant="h5">
                  3 Ativos
                </Typography>
              </CardContent>
            </Box>
          </FeedPaper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FeedPaper variant='outlined' sx={{ background: theme.palette.card4 }}>
          <Box sx={{ display: 'flex', pl: 2 }}>
              <FeedbackIcon sx={{ alignSelf: 'center', fontSize: 40 }} />
              <CardContent sx={{ pl: 2 }}>
                <Typography sx={{ fontSize: 15 }} gutterBottom>
                  Pesquisas
                </Typography>
                <Typography variant="h5">
                  40 realizadas
                </Typography>
              </CardContent>
            </Box>
          </FeedPaper>
        </Grid>


      </Grid>

    </MuiBox>

  );
}

export default Administrador;