import React, { useEffect } from 'react';
import { UseDados } from '../../routes';
import Administrador from './Administador.js'
import Gestor from './Gestor.js'
import Colaborador from './Colaborador.js'
// import { Container } from './styles';

function Unidades() {
  const [values, setValues] = UseDados();





  return (
    <>
      {values.permissions[0].description === "administrador" && <Administrador />}
      {values.permissions[0].description === "gestor" && <Gestor />}
      {values.permissions[0].description === "colaborador" && <Colaborador />}

    </>




  );
}

export default Unidades;