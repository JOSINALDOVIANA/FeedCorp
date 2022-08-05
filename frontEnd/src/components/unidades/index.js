import React, { useEffect } from 'react';
import { UseDados } from '../../routes';
import Administrador from './Administador.js'
import Gestor from './Gestor.js'
import Colaborador from './Colaborador.js'
// import { Container } from './styles';

function Unidades() {
  const [values, setValues] = UseDados();


  useEffect(() => {
    // setValues(a=>({...a,[a.user.permissons[0].description]:"gestor"}));
    // console.log(values)
    return (() => (null))

  }, [])


  return (
    <>
      {values.user.permissions[0].description === "administrador" && <Administrador />}
      {values.user.permissions[0].description === "gestor" && <Gestor />}
      {values.user.permissions[0].description === "colaborador" && <Colaborador />}

    </>




  );
}

export default Unidades;