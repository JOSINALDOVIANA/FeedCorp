import React, { Fragment } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Customswitcherdata from "../../../../../data/Switcherdata/Customswitcherdata";
const Forgotpassword = () => (
  <Fragment>
    <div className="page main-signin-wrapper" >
      <div className="d-flex header-setting-icon demo-icon fa-spin" onClick={() => Customswitcherdata.Swicherbutton()}>
        <span className="nav-link icon"  >
          <i className="fe fe-settings settings-icon "></i>
        </span>
      </div>
      {/* <!-- Row --> */}
      <Row className="signpages text-center" onClick={() => Customswitcherdata.remove()}  >

            <Card border="primary" className="row-sm login_form ">
              <Col className="login_form">
                <Container fluid>
                  <Row className=" row-sm">
                    <Card.Body className="card-body mt-2 mb-1">
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
                      <h5 className="text-start mb-2">Esqueci minha senha</h5>
                      <p className="mb-4 text-muted tx-13 ms-0 text-start">
                        Se você esqueceu sua senha, digite seu e-mail para recuperar sua conta.
                      </p>
                      <Form>
                        <Form.Group
                          className="text-start"
                          controlId="from email"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            className="form-control"
                            placeholder="Digite seu email"
                            type="text"
                            defaultValue=""
                          />
                        </Form.Group>
                        <button className="btn ripple btn-main-primary btn-block mt-4">
                          Enviar link de recuperação
                        </button>
                      </Form>
                      <div className="card-footer border-top-0 ps-0 mt-3 text-start ">
                        <p className="mb-0">
                        Você lembrou sua senha? Tente fazer
                          <Link
                            to={`${process.env.PUBLIC_URL}/login`}> Login
                          </Link>
                        </p>
                      </div>
                    </Card.Body>
                  </Row>
                </Container>
              </Col>
            </Card>
      </Row>
    </div>

    {/* <!-- End Row --> */}

  </Fragment>
);

Forgotpassword.propTypes = {};

Forgotpassword.defaultProps = {};

export default Forgotpassword;
