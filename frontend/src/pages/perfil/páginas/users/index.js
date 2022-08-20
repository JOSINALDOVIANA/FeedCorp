import React from 'react';
import Adm from './administrador.js';
import {UseDados} from '../../../../routes.js'
import Gestor from './gestor.js';
import Colaborador from './colaborador.js';
export default function Inicio(){
    const [values,setValues]=UseDados();
   
    return(
    <>
    {/* <h1>inicio</h1> */}
    {(values?.permissions?.description=="administrador") &&<Adm></Adm>}
    {(values?.permissions?.description=="gestor") &&<Gestor></Gestor>}
    {(values?.permissions?.description=="colaborador") &&<Colaborador></Colaborador>}
   
    </>
    )
}