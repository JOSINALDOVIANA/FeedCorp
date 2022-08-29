import React, { Fragment, useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../..";

// import { Container } from './styles';

const Index = () => {
  const dadosrota=useLocation();
  const navegar=useNavigate()
  const {values,setValues}=useContext(usuarioContext);
  useEffect(()=>{
setValues(dadosrota.state)
  },[dadosrota])
  return (
    <Fragment>
      
      <h1 onClick={()=>{navegar(`${process.env.PUBLIC_URL}/avr/responder`,{state:values})}}>responder</h1>
      <h1 onClick={()=>{navegar(`${process.env.PUBLIC_URL}/avr/criar`,{state:values})}}>criar</h1>
        <Outlet/>
    </Fragment>
  );
}

export default Index;