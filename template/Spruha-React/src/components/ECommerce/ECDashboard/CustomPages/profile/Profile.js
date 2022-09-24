import React, { Fragment, useContext, useEffect, useState } from "react";
import { Row, Col, Tab, Nav, Breadcrumb, Card, Button, ListGroup, Form, Table } from "react-bootstrap";
import Searchable from "react-searchable-dropdown";
import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";

function Profile() {

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState({});

  useEffect(() => {
    if (dadosrota.state) {
      setValues(dadosrota.state);
    } else {
      navegar(`${process.env.PUBLIC_URL}/home`)
    }

  }, [dadosrota])
  console.log(values)

  return (
    <Fragment>

      {/* <!-- Row --> */}
      <Tab.Container defaultActiveKey="profile">
        <Row className="row row-sm mt-4">
          <Col xl={3} lg={6} md={6} >
            <Card className="custom-card">
              <Card.Header>
                <h3 className="main-content-Form.Label">My Account</h3>
              </Card.Header>
              <Card.Body className=" text-center item-user">
                <div className="profile-pic">
                  <div className="profile-pic-img">
                    <span
                      className="bg-success dots"
                      title="online"
                    ></span>
                    <img
                      src={values?.image?.url ? values?.image?.url : null}
                      className="rounded-circle" alt="user" />
                  </div>
                  <div className="text-dark">
                    <h5 className="mt-3 mb-0 font-weight-semibold">
                      {values?.dadosUser?.name}
                    </h5>
                  </div>
                </div>
              </Card.Body>
              <Nav variant="pills" className="item1-links flex-column mb-0">

                <Nav.Item as="li">
                  <Nav.Link eventKey="profile" role="tablist">
                    <i className="ti-credit-card icon1"></i> Meu perfil
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="security" role="tablist" >
                    <i className="ti-power-off icon1"></i> Segurança
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link onClick={() => { navegar(`${process.env.PUBLIC_URL}/login/`) }} >
                    <i className="ti-power-off icon1"></i> Sair
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </Col>
          <Col xl={9} lg={6} md={6}>
            <Card className="custom-card">
              <Card.Body>
                <Tab.Content className="tab-content">
                  <Tab.Pane
                    eventKey="profile"
                    className="tab-pane "
                    id="profile"
                    role="tabpanel">
                    <div className="d-flex align-items-start pb-3 border-bottom">
                      <img
                        src={values?.image?.url ? values?.image?.url : null}
                        className="img rounded-circle avatar-xl"
                        alt="user1"
                      />
                      <div className="ps-sm-4 ps-2" id="img-section">
                        <b>Foto de perfil</b>
                        <p className="mb-1">
                          Aceito arquivo tipo .png. Menos de 1MB
                        </p>

                        <Button
                          variant="default" className="btn button border btn-sm">
                          <b>Upload</b>
                        </Button>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="row py-2">
                        <div className="col-md-6 pb-3">
                          <Form.Label id="username">Nome de usuário</Form.Label>
                          <Form.Control
                            type="text"
                            // placeholder="Steve"
                            defaultValue={values?.dadosUser?.name}
                          />
                        </div>

                        <div className="col-md-6 pb-3">
                          <Form.Label id="emailid">Email</Form.Label>
                          <Form.Control
                            type="text"
                            // placeholder="steve_@email.com"
                            defaultValue={values?.dadosUser?.email}
                          />
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-md-6 pb-3">
                          <Form.Label>Permissão de Usuário</Form.Label>
                          <span>{values?.permissions}</span>
                        </div>
                        <div className="col-md-6 pb-3">
                          <Form.Label>Minha Unidade</Form.Label>
                          <span>{values?.unit?.description}</span>
                        </div>
                      </div>

                    </div>
                  </Tab.Pane>

                  <Tab.Pane
                    eventKey="security"
                    className="tab-pane "
                    id="security"
                    role="tabpanel">
                    <div className="d-flex align-items-start pb-3 border-bottom">
                      <img
                        src={values?.image?.url ? values?.image?.url : null}
                        className="img rounded-circle avatar-xl"
                        alt="user1"
                      />
                      <div className="ps-sm-4 ps-2" id="img-section">
                        <b>Foto de perfil</b>
                        <p className="mb-1">
                          Aceito arquivo tipo .png. Menos de 1MB
                        </p>

                        <Button
                          variant="default" className="btn button border btn-sm">
                          <b>Upload</b>
                        </Button>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="row py-2">
                        <div className="col-md-6 pb-3">
                          <Form.Label id="username">Nome de usuário</Form.Label>
                          <Form.Control
                            type="text"
                            // placeholder="Steve"
                            defaultValue={values?.dadosUser?.name}
                          />
                        </div>

                        <div className="col-md-6 pb-3">
                          <Form.Label id="emailid">Email</Form.Label>
                          <Form.Control
                            type="text"
                            // placeholder="steve_@email.com"
                            defaultValue={values?.dadosUser?.email}
                          />
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-md-6 pb-3">
                          <Form.Label>Permissão de Usuário</Form.Label>
                          <span>{values?.permissions}</span>
                        </div>
                        <div className="col-md-6 pb-3">
                          <Form.Label>Minha Unidade</Form.Label>
                          <span>{values?.unit?.description}</span>
                        </div>
                      </div>

                    </div>
                  </Tab.Pane>

                </Tab.Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  )
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
