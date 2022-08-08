import React,{ createContext, useContext,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Telainicial from "./App";
import Login from "./pages/login/index.js"
import Perfil from "./pages/perfil/index.js"
import Teste from "./teste.js"
function Rotas() {
   
    return (
        
           
                        <BrowserRouter>
                            <Routes>
                                <Route exact path="/" element={<Telainicial />} />
                                <Route path="/login" element={<Login/>} />
                                <Route path="/perfil" element={<Perfil/>} />
                                <Route path="/teste" element={<Teste/>} />
                                {/* <Route path="/login" element={<Login/>} />
                                <Route path="/test" element={<Test/>} />                               
                                <Route path="/perfil" element={<Perfil/>} /> */}
                            </Routes>
                        </BrowserRouter>
                    
        
    );

}

export default Rotas;