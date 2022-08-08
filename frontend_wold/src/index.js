import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import './index.css';
import Rotas from './routes.js';
import { createTheme, ThemeProvider} from '@mui/material/styles';
// import { ThemeProvider } from '@mui/styles';


const useTheme = createTheme({
 
  palette: {
    primary: {
      //VERSÃO ESCURA
      // main: '#252626', //appbar e drawer
      // backAndPaper: '#1e1e1e', //fundo e card
      // light: '#38F29B', //botões, componentes
      // light2: '#27a96c',
      // light_dark: '#34735C',
      // white: '#fff',//letras
      // paperDark: '#191b1a',
      // disabled: '#FFBE0B',

      // VERSÃO CLARA
      main: '#E0E1E1', //appbar e drawer
      backAndPaper: '#EBEBEB', //fundo e card
      light: '#0DD377', //botões, componentes
      light2: '#27a96c',
      light_dark: '#34735C',
      white: '#0A0A0A',//letras
      paperDark: '#EAEBEB',
      disabled: '#E0A500',
      text1:'#FFFF'

    },
    secondary:{
      main: '#fff', //appbar e drawer

    },
  }
})

ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={useTheme}>
      <Rotas theme={useTheme} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


