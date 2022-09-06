import React, { Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../../../../../..";


// import { Container } from './styles';

const Responder = () => {
  const dadosrota=useLocation();
  const location=useLocation();
  const navegar=useNavigate();
  const {values,setValues}=useContext(usuarioContext);
  useEffect(()=>{
setValues(dadosrota.state)
  },[dadosrota])
  return (
    <Fragment>
        <h1 onClick={()=>{navegar(`${process.env.PUBLIC_URL}/avr`,{state:values})}} >
        {location.pathname} [voltar]
          </h1>

    </Fragment>
  );
}

export default Responder;