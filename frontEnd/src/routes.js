import React, { createContext, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { createTheme, ThemeProvider, useTheme } from '@material-ui/core';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'

import Telainicial from "./App";
import Login from './pages/login';
import Cadastro from './pages/cadastro'
// import Test from './components/test/index.js'
import Perfil from './pages/perfil';
export const usuarioContext = createContext();
export const ColorModeContext = createContext({ toggleColorMode: () => { } });




function UserContextProvider({ children }) {
    const [values, setValues] = React.useState({});

    return (
        <usuarioContext.Provider value={{ values, setValues }}>
            {children}
        </usuarioContext.Provider>
    );
}

export function UseDados() {

    const { values, setValues } = useContext(usuarioContext);

    return [values, setValues];
}

function Rotas() {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    white: "#f4f4f2 ",
                    gray: "#d4cdc5 ",
                    lightGray: "#F5F5F5 ",
                    black: "#191013",
                    black2: '#252525',
                    blueMarine: '#031634',
                    darkGreen: '#2e946f',
                    lightGreen: '#54ca93',
                    cian: "#11998e",
                    darkCian: '##036564',
                    teal: '#033649',
                    purple: '#6930C3',
                    lightBege: '#e8ddcb',
                    bege: '#cdb380',

                    card1: '#3AB4F2',
                    card2: '#FBCB0A',
                    card3: '#FEB139',
                    card4: '#D9534F',


                },
            }),
        [mode],
    );
    return (

        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <UserContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Telainicial />} />
                            <Route path="/login" element={<Login />} />
                            <Route path='/cadastro' element={<Cadastro />} />
                            <Route path="/perfil" element={<Perfil />} />
                            {/* <Route path="/test" element={<Test/>} />                                */}
                        </Routes>
                    </BrowserRouter>
                </UserContextProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>

    );

}

export default Rotas;