import React from 'react';
import { UseDados } from '../../../../routes';

import { Box, Button, Card, Divider, Grid, Paper } from '@mui/material';
import { FeedBox, MuiBox } from './styles';

function Colaborador() {
  const [values, setValues] = UseDados();
  // // console.log(values)
  return (

    <MuiBox>

      <FeedBox>
        <Button variant='outlined'>Enviar Feedback</Button>
      </FeedBox>
      <Divider />
      <h1>{values?.permissions?.description}</h1>

      {/* TESTANDO - NÃO MEXA */}
      <Grid container spacing={2}>

        <Grid item>
          <Card
            sx={{ width: 350, height: 100, background: '#ff0', borderRadius: 3, textAlign: 'center' }}
          >FEEDBACKS RECEBIDOS
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{ width: 350, height: 100, background: '#ff0', borderRadius: 3, textAlign: 'center' }}
          >FEEDBACKS RECEBIDOS
          </Card>
        </Grid>


      </Grid>

    </MuiBox>

  );
}

export default Colaborador;