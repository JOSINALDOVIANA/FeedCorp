import React, { useContext } from 'react';
import { usuarioContext } from '../../../../routes';



function Ferramentas() {
  const {values,setValues}=useContext(usuarioContext);
  return (<h1>Ferramentas-{values.permissions.description}</h1>);
}

export default Ferramentas;