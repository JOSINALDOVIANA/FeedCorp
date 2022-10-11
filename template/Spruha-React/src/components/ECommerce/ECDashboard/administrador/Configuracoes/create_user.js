import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Form, Col, Row, Table, InputGroup } from "react-bootstrap";
import MultiSelect from "react-select";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../../../../../api";

function CreateUser() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(values)
    console.log(event)

    // const form = event.currentTarget;
    // console.log(form)
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    setValidated(true);
    api.post(`user/insert`, { ...values.usercreate }).then(r => {
      if (r.data.status) {
        alert("dados salvos")
        setValues(a => ({ ...a, usercreate: reset() }))
      }
    })
  };

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState(dadosrota.state);


  useEffect(() => {
    setValues({ ...dadosrota.state, usercreate: reset() })

    api.get(`cargos/get?id_user=${dadosrota.state.dadosUser.id}`).then(r => {
      setValues(a => ({ ...a, cargos: r.data.cargo }))
    })
    api.get(`permission/get`).then(r => {
      setValues(a => ({ ...a, permissionscreate: r.data.permissions }))
    })

  }, [dadosrota.state])
  console.log(values)
  function reset() {
    return ({
      "name": "",
      "nameuser": "",
      "email": "",
      "password": "",
      "id_image": null,
      "id_permission": "",
      "id_unit": "",
      "id_company": dadosrota.state.company.id,
      "id_creator": dadosrota.state.dadosUser.id,
      "id_office": null
    })
  }
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

                <Row>
                  <Form.Group className="col-md-8 form-group" controlid="">
                    <Form.Label>
                      Nome: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      required
                      value={values?.usercreate?.name}
                      name="Nome"
                      placeholder="Nome Completo"
                      type="text"
                      onChange={(e) => { setValues(a => ({ ...a, usercreate: { ...a.usercreate, name: e.target.value } })) }}
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
                        value={values?.usercreate?.nameuser}
                        onChange={(e) => { setValues(a => ({ ...a, usercreate: { ...a.usercreate, nameuser: e.target.value } })) }}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="col-md-6 form-group" controlid="">
                    <Form.Label>
                      Email: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      required
                      name="Email"
                      placeholder="Email"
                      type="text"
                      value={values?.usercreate?.email}
                      onChange={(e) => { setValues(a => ({ ...a, usercreate: { ...a.usercreate, email: e.target.value } })) }}
                    />
                    <Form.Control.Feedback>Email válido!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="col-md-6 form-group" controlid="">
                    <Form.Label>
                      Senha: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      required
                      name="password"
                      placeholder="nova senha"
                      type="password"
                      value={values?.usercreate?.password}
                      onChange={(e) => { setValues(a => ({ ...a, usercreate: { ...a.usercreate, password: e.target.value } })) }}
                    />
                    <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="form-group" controlid="">
                  <Form.Label>
                    Unidade : <span className="tx-danger">*</span>
                  </Form.Label>
                  <div>
                    <MultiSelect noOptionsMessage={() => 'Sem opções'} classNamePrefix="Select2"
                      onChange={(e) => { setValues(a => ({ ...a, usercreate: { ...a.usercreate, id_unit: e.value } })) }}
                      options={values?.units?.map(und => ({ value: und.id, label: und.initials.toUpperCase() }))} singleSelect displayValue="key" placeholder="Escolha uma unidade" />
                  </div>
                  {/* <Form.Control.Feedback>Unidade inválida!</Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group className="form-group" controlid="">
                  <Form.Label>
                    Cargo: <span className="tx-danger">*</span>
                  </Form.Label>
                  <div>
                    <MultiSelect noOptionsMessage={() => 'Sem opções'} classNamePrefix="Select2"
                      // onChange={(e) => { setOkr(a => ({ ...a, user: unit?.users?.filter(col => col.id == e.value) })) }}
                      onChange={(e) => { setValues(a => ({ ...a, usercreate: { ...a.usercreate, id_office: e.value } })) }}
                      options={values?.cargos?.map(r => ({ value: r.id, label: r.office }))} singleSelect displayValue="key" placeholder="Escolha um cargo" />
                  </div>
                  {/* <Form.Control.Feedback>Cargo invalido!</Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group className="form-group" controlid="">
                  <Form.Label>
                    Permissões: <span className="tx-danger">*</span>
                  </Form.Label>
                  <div>
                    <MultiSelect noOptionsMessage={() => 'Sem opções'} classNamePrefix="Select2"
                      // onChange={(e) => { setOkr(a => ({ ...a, user: unit?.users?.filter(col => col.id == e.value) })) }}
                      onChange={(e) => { setValues(a => ({ ...a, usercreate: { ...a.usercreate, id_permission: e.value } })) }}
                      options={values?.permissionscreate?.map(r => ({ value: r.id, label: r.description }))} singleSelect displayValue="key" placeholder="Escolha uma permissão" />
                  </div>
                  {/* <Form.Control.Feedback>permisão inválida!</Form.Control.Feedback> */}
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
        {/* <Col sm={12} lg={3} xl={3}>
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
        </Col> */}
      </Row>

    </Fragment >
  );
}

CreateUser.propTypes = {};

CreateUser.defaultProps = {};

export default CreateUser;
