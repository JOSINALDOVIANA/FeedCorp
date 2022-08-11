import React from 'react';
import { UseDados } from '../../../../routes';

import { Box, Button, Divider, Paper } from '@mui/material';
import { FeedBox, MuiBox } from './styles';

function Administrador() {
  const [values,setValues]=UseDados();
  // console.log(values)
  return(

    <MuiBox>

      <FeedBox>
      <Button variant='outlined'>Enviar Feedback</Button>
      </FeedBox>
      <Divider/>
      <h1>{values?.permissions?.description}</h1>
      
    </MuiBox>

  );
}

export default Administrador;