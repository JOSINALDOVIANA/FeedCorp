import { useTheme } from '@mui/material';
import React,{useEffect,useState,useContext} from 'react';
import { useNavigate} from 'react-router-dom';

import { UseDados, usuarioContext } from '../../routes';

// import { Container } from './styles';

function Perfil() {
const theme=useTheme();
const navegar=useNavigate();
const [values,setValues]=UseDados();

useEffect(()=>{
  if(values.user){
           return
       }
       else{
       if(localStorage.getItem("values")){
        const valores= localStorage.getItem("values");
        const valores2=JSON.parse(valores);
        setValues(valores2);       
       }else{
           navegar("/")
       }
       }
},[])
  return (<div>{values.user.nome}</div>);
}

export default Perfil;