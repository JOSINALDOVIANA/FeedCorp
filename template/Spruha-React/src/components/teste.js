import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";

// import { Container } from './styles';

const Teste = () => {
  const rotadados=useLocation();
  console.log(rotadados);
  return (
    <Fragment>
      {/* <h1 onClick={()=>{navegar}}>josinaldo</h1> */}
        <Outlet/>
    </Fragment>
  );
}

export default Teste;