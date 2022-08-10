import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';

export default function Cadastro(){
    const navegar = useNavigate();
    
    return(
        <h1>Cadastro</h1>
    );
}