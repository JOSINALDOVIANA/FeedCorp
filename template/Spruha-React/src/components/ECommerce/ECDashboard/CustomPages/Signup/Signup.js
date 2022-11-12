import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Container, Form } from "react-bootstrap";
import * as Customswitcherdata from "../../../../../data/Switcherdata/Customswitcherdata";
const Signup = () => (
  <Fragment>
    <div className="page main-signin-wrapper" >
      <div className="d-flex header-setting-icon demo-icon fa-spin" onClick={() => Customswitcherdata.Swicherbutton()}>
        {/* <Link className="nav-link icon" to="#" >
          <i className="fe fe-settings settings-icon "></i>
        </Link> */}
      </div>
      {/* <Row className="signpages text-center" onClick={() => Customswitcherdata.remove()} > */}
      <div className="d-flex justify-content-center">


        <Card>
          <Card.Header className="d-flex justify-content-center mt-3 pt-3 p-3">
            <img
              src={require("../../../../../assets/img/brand/logo.png")}
              className="header-brand-img mb-2"
              alt="logo"
            />

          </Card.Header>




          <Card.Body className="mt-2 mb-2">
            <div className="clearfix"></div>
            <h5 className="text-start mb-2">Solicite um orçamento gratuito e sem compromisso</h5>

            <p className="mb-3 text-muted tx-13 ms-0 text-start">
              Para Administradores/Gestores RH que precisam otimizar o desempenho de sua empresa
            </p>
            <Form>
              <Form.Group className="text-start form-group" controlId="fromName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  placeholder="Digite seu nome"
                  type="text"
                />
              </Form.Group>

              <Form.Group className="text-start form-group" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Digite seu email"
                  type="email"
                />
              </Form.Group>

              <Form.Group
                className="text-start form-group"
                controlId="formCorporation"
              >
                <Form.Label>Corporação</Form.Label>
                <Form.Control
                  placeholder="Digite o nome de sua corporação"
                  type="text"
                />
              </Form.Group>

              <p className="mb-4 text-muted tx-13 ms-0 text-start">
                Ao informar meus dados, eu aceito a Política de Privacidade
              </p>

              <button className="btn ripple btn-main-primary btn-block mt-2">
                Solicitar Orçamento
              </button>
            </Form>
            <div className="text-start mt-5 ms-0">
              <p className="mb-0">
                Já possui conta com a gente?
                <Link
                  to={`${process.env.PUBLIC_URL}/login`}> login
                </Link>
              </p>
            </div>
          </Card.Body>

        </Card>



      </div>
      {/* </Row> */}
    </div>

  </Fragment>
);

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
