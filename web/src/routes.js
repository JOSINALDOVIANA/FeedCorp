import React,{ createContext, useContext,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, useTheme } from "@mui/material";
import Telainicial from "./App";
import Login from './components/login';
import Perfil from './components/perfil';
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
                    mode,
                },
                avd:{
                    color:"#e02140"
                }

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
                                <Route path="/login" element={<Login/>} />
                                <Route path="/perfil" element={<Perfil/>} />
                            </Routes>
                        </BrowserRouter>
                    </UserContextProvider>
                </ThemeProvider>
            </ColorModeContext.Provider>
        
    );

}

export default Rotas;