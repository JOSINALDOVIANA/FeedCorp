import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Form, Col, Row, Table, InputGroup } from "react-bootstrap";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import api from "../../../../../api";

function CreateUnity() {

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
            Adicionar Unidade
          </h2>
          <Breadcrumb>
            <Breadcrumb.Item
              onClick={() => {
                navegar(`${process.env.PUBLIC_URL}/configuracoes/`, { state: values })
              }}>
              Administração
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Criar Unidade
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
            </Button> */}
            <Button
              type="button"
              variant="white"
              className=" btn-icon-text my-2"
              onClick={() => {
                navegar(`${process.env.PUBLIC_URL}/configuracoes/`, { state: values })
              }}
            >
              <i className="bi bi-caret-left-fill"></i>
            </Button>
          </div>
        </div>
      </div>

      <Row className="row-sm">
        <Col sm={12} lg={12} xl={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Novo Usuário</h6>
                <p className="text-muted card-sub-title">
                  Crie um usuário e adicione em uma unidade
                </p>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>


                <Form.Group className="form-group" controlid="">
                  <Form.Label>
                    Unidade: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="Nome"
                    placeholder="Nome Unidade"
                    type="text"
                  />
                  <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
                </Form.Group>

                {/* <Form.Group className="form-group" controlid="">
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
                </Form.Group> */}

                <Button
                  className="btn ripple btn-main-primary btn-block"
                  type="submit"
                >
                  Criar unidade
                </Button>
              </Form>

            </Card.Body>
          </Card>
        </Col>
        {/* <Col sm={12} lg={3} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <p className="text-muted card-sub-title ms-2">
                  Navegação
                </p>
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
                <Button onClick={() => { navegar(`${process.env.PUBLIC_URL}/adm_add_user/`, { state: values }) }}
                  className="tx-14 mb-0"
                  variant="outline"
                  size='sm'>
                  Criar Usuário
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
        </Col> */}
      </Row>

    </Fragment >
  );
}

CreateUnity.propTypes = {};

CreateUnity.defaultProps = {};

export default CreateUnity;
