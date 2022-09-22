import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Container, Form } from "react-bootstrap";
import * as Customswitcherdata from "../../../../../data/Switcherdata/Customswitcherdata";
const Signup = () => (
  <Fragment>
    <div className="page main-signin-wrapper" >
      <div className="d-flex header-setting-icon demo-icon fa-spin" onClick={() => Customswitcherdata.Swicherbutton()}>
        <Link className="nav-link icon" to="#" >
          <i className="fe fe-settings settings-icon "></i>
        </Link>
      </div>
      <Row className="signpages text-center" onClick={() => Customswitcherdata.remove()} >
        <Col md={12} className="col-md-12">
          <Card>
            <Row className="row-sm">
              <Col
                className="text-center bg-primary"
              >
                <div className="mt-5 pt-5 p-2">
                  <img
                    src={require("../../../../../assets/img/brand/logo-light.png")}
                    className="header-brand-img mb-4"
                    alt="logo"
                  />
                                 
                  <h5 className="mt-4 text-white">Solicite um orçamento</h5>
                  
                  <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                   Gratuito e sem compromisso
                  </span>
                </div>
              </Col>

              <Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
                <Container fluid>
                  <Row className=" row-sm">
                    <Card.Body className="mt-2 mb-2">
                      <img
                        src={require("../../../../../assets/img/brand/logo.png")}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                        alt="logo"
                      />
                      <img
                        src={require("../../../../../assets/img/brand/logo-light.png")}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                        alt="logo"
                      />
                      <div className="clearfix"></div>
                      <h5 className="text-start mb-2">Preencha o formulário abaixo</h5>
                      <p className="mb-4 text-muted tx-13 ms-0 text-start">
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
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>

  </Fragment>
);

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
