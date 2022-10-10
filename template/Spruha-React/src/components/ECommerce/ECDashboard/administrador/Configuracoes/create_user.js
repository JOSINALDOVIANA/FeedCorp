import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Form, Col, Row, Table, InputGroup } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../../../../../api";

function CreateUser() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState(dadosrota.state);
  const [carregados, setCarregados] = useState(false)

  useEffect(() => {
    setValues(dadosrota.state)

  }, [dadosrota.state])
  // console.log(values)

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            Adicionar Usuário
          </h2>
          <Breadcrumb>
            <Breadcrumb.Item
              onClick={() => {
                navegar(`${process.env.PUBLIC_URL}/configuracoes/`, { state: values })
              }}>
              Administração
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Criar Usuário
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex">
          <div className="justify-content-center">
            {/* <Button
              type="button"
              variant="white"
              className=" btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              type="button"
              variant="white"
              className=" btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button> */}
          </div>
        </div>
      </div>

      <Row className="row-sm">
        <Col sm={12} lg={9} xl={9}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Novo Usuário</h6>
                <p className="text-muted card-sub-title">
                  Crie um usuário e adicione em uma unidade
                </p>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Row>
                  <Form.Group className="col-md-8 form-group" controlid="">
                    <Form.Label>
                      Nome: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      required
                      name="Nome"
                      placeholder="Nome Completo"
                      type="text"
                    />
                    <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="col-md-4 form-group" controlid=""
                  >
                    <Form.Label className="form-label">Username</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend3">@</InputGroup.Text>
                      <Form.Control
                        type="text"
                        aria-describedby="inputGroupPrepend3"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Form.Group className="form-group" controlid="">
                  <Form.Label>
                    Email: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="Email"
                    placeholder="Email"
                    type="text"
                  />
                  <Form.Control.Feedback>Email válido!</Form.Control.Feedback>
                </Form.Group>

                <Button
                  className="btn ripple btn-main-primary btn-block"
                  type="submit"
                >
                  Adicionar Usuário
                </Button>
              </Form>

            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={3} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <p className="text-muted card-sub-title ms-2">
                  Navegação
                </p>
              </div>

              <div>
                <Button onClick={() => { navegar(`${process.env.PUBLIC_URL}/adm_add_unidade/`, { state: values }) }}
                  className="tx-14 mb-0"
                  variant="outline"
                  size='sm'>
                  Criar Unidade
                </Button>
              </div>

              <div>
                <Button onClick={() => { navegar(`${process.env.PUBLIC_URL}/adm_edit_unidade/`, { state: values }) }}
                  className="tx-14 mb-0"
                  variant="outline"
                  size='sm'>
                  Editar Unidade
                </Button>
              </div>

              <div>
                <Button onClick={() => { navegar(`${process.env.PUBLIC_URL}/adm_edit_user/`, { state: values }) }}
                  className="tx-14 mb-0"
                  variant="outline"
                  size='sm'>
                  Editar Usuário
                </Button>
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment >
  );
}

CreateUser.propTypes = {};

CreateUser.defaultProps = {};

export default CreateUser;
