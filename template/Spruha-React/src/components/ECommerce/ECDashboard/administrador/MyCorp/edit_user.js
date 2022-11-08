import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, ListGroup, ProgressBar, Row, Table, InputGroup, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveAlert, errorSaveAlert } from "../../Components/Alerts";
import MultiSelect from "react-select";
import api from "../../../../../api";

function EditUnity() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    let userEdit = values.userselect;
    let user = {
      name: userEdit.name,
      nameuser: userEdit.nameuser,
      email: userEdit.email,
      password: userEdit.password,
      id_image: userEdit.id_image,
      id_company: userEdit.id_company,
      id_creator: userEdit.id_creator,
      id_permission: userEdit.id_permission,
      id_office: userEdit.id_office,
      passwordantigo: userEdit.password,
      id_unit: userEdit.id_unit,
      id: userEdit.id

    }
    // // console.log(user)
    // // console.log(values)
    // // console.log(event)

    // const form = event.currentTarget;
    // // console.log(form)
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);
    api.put(`user/update`, { ...user }).then(r => {
      // // console.log(r)
      if (r.data.status) {
        saveAlert()
        navegar(`${process.env.PUBLIC_URL}/corporacao`, { state: values })
      } else {
        errorSaveAlert()
      }
    })


  };



  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState(dadosrota.state);
  const [carregados, setCarregados] = useState(false)

  useEffect(() => {
    setValues(dadosrota.state)
    api.get(`cargos/get?id_company=${dadosrota.state.company.id}`).then(r => {
      setValues(a => ({ ...a, cargos: r.data.cargo }))
    })
    api.get(`permission/get`).then(r => {
      setValues(a => ({ ...a, permissionscreate: r.data.permissions }))
    })
    api.get(`user_unit/get?id_user=${dadosrota.state.userselect.id}`).then(r => {
      setValues(a => ({ ...a, userselect: { ...a.userselect, unit: r.data.unit } }))
    })

  }, [dadosrota.state])
  // // console.log(values.userselect)

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            Editar Usuário
          </h2>
          <Breadcrumb>
            <Breadcrumb.Item
              onClick={() => {
                navegar(`${process.env.PUBLIC_URL}/unidades`, { state: values })
              }}>
              Unidades
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Editar usuário
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
                navegar(`${process.env.PUBLIC_URL}/unidades`, { state: values })
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
                <h6 className="main-content-label mb-1">Edição de Usuário</h6>
                {/* <p className="text-muted card-sub-title">
                  Crie um usuário e adicione em uma unidade
                </p> */}
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Row>
                  <Form.Group className="col-md-8 form-group" controlid="">
                    <Form.Label>
                      Nome: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      required
                      value={values?.userselect?.name}
                      name="Nome"
                      placeholder="Nome Completo"
                      type="text"
                      onChange={(e) => { setValues(a => ({ ...a, userselect: { ...a.userselect, name: e.target.value } })) }}
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
                        value={values?.userselect?.nameuser}
                        onChange={(e) => { setValues(a => ({ ...a, userselect: { ...a.userselect, nameuser: e.target.value } })) }}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="col-md-12 form-group" controlid="">
                    <Form.Label>
                      Email: <span className="tx-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      required
                      name="Email"
                      placeholder="Email"
                      type="text"
                      value={values?.userselect?.email}
                      onChange={(e) => { setValues(a => ({ ...a, userselect: { ...a.userselect, email: e.target.value } })) }}
                    />
                    <Form.Control.Feedback>Email válido!</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="form-group" controlid="">
                  <Form.Label>
                    Unidade : <span className="tx-danger">*</span>
                  </Form.Label>
                  <div>
                    <MultiSelect noOptionsMessage={""} classNamePrefix="Select2"
                      onChange={(e) => { setValues(a => ({ ...a, userselect: { ...a.userselect, id_unit: e.value } })) }}
                      options={values?.units?.map(und => ({ value: und.id, label: und.initials.toUpperCase() }))} singleSelect displayValue="key" placeholder={values?.userselect?.unit?.initials} />
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
                      onChange={(e) => { setValues(a => ({ ...a, userselect: { ...a.userselect, id_office: e.value } })) }}
                      options={values?.cargos?.map(r => ({ value: r.id, label: r.office }))} singleSelect displayValue="key" placeholder={values?.userselect?.cargo?.office} />
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
                      onChange={(e) => { setValues(a => ({ ...a, userselect: { ...a.userselect, id_permission: e.value } })) }}
                      options={values?.permissionscreate?.map(r => ({ value: r.id, label: r.description }))} singleSelect displayValue="key" placeholder={values?.userselect?.permission} />
                  </div>
                  {/* <Form.Control.Feedback>permisão inválida!</Form.Control.Feedback> */}
                </Form.Group>

                <Button
                  className="btn ripple btn-main-primary btn-block"
                  type="submit"
                >
                  Salvar alterações
                </Button>
              </Form>

            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment >
  );
}

EditUnity.propTypes = {};

EditUnity.defaultProps = {};

export default EditUnity;
