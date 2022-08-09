import React from 'react';
import Adm from './administrador.js';
import {UseDados} from '../../../../routes.js'
export default function Inicio(){
    const [values,setValues]=UseDados();
    console.log(values)
    return(<><h1>inicio</h1></>)
}