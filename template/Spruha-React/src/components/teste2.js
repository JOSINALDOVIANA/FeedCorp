import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

// import { Container } from './styles';

const Teste = () => {
  const rotadados=useLocation();
  console.log(rotadados);
  return (
    <Fragment>
        <h1>Receba esse template</h1>

    </Fragment>
  );
}

export default Teste;