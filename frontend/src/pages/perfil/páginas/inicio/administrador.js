import React from 'react';
import { UseDados } from '../../../../routes';

// import { Container } from './styles';

function Administrador() {
  const [values,setValues]=UseDados();
  // console.log(values)
  return(
    <h1>{values?.permissions?.description}</h1>
  );
}

export default Administrador;