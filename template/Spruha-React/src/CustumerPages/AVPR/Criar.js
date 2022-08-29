import React, { Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../..";

// import { Container } from './styles';

const Criar = () => {
  const dadosrota=useLocation();
  const location=useLocation();
  const navegar=useNavigate();
  const {values,setValues}=useContext(usuarioContext);
  useEffect(()=>{
setValues(dadosrota.state)
  },[dadosrota])
  return (
    <Fragment>
        <h1 onClick={()=>{
            
            // exemplo de como alterar os dados de values

            // let v=values; //primeiro pego tudo que ha dentro e ponho em algo que nao seja uma const
            // values.dadosUser.name="marlete"; //altero apenas o dados que preciso
            // setValues(v) // atualizo novamente values com os dados

            navegar(`${process.env.PUBLIC_URL}/avr`,{state:values})
            }}>{location.pathname} [voltar]</h1>

    </Fragment>
  );
}

export default Criar;