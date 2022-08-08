import React from 'react';
import {useLocation} from "react-router-dom"


function Perfil() {
  const dados=useLocation();
  console.log(dados.state)


  return (<h1>perfil</h1>);
}

export default Perfil;