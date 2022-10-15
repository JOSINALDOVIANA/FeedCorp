import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, ListGroup, ProgressBar, Row, Table, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import * as Modal from "../../Components/Modal"
import { deleteQuestionAlert, deleteSucessAlert, deleteErrorAlert } from "../../Components/Alerts";
import api from "../../../../../api";

function EditUser() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    //  console.log(event.target['office'].value)
    let obj = {
      office: event.target['office'].value,
      id_company: values.company.id,
      id_user: values.dadosUser.id
    }
    //  console.log(obj)

    api.post(`cargos/insert`, { ...obj }).then(r => {
      if (r.data.status) {
        obj = r.data.cargo
        obj.users = [];
        setValues(a => ({ ...a, cargos: [...a.cargos, { ...obj }] }));
        document.getElementById("cargo_form").value=''
      }
    })
    
    setValidated(false);

  };

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState({});
  const [carregados, setCarregados] = useState(false)

  useEffect(() => {
    setValues(dadosrota.state)
    api.get(`cargos/get?id_company=${dadosrota.state.company.id}`).then(r => {
      setValues(a => ({ ...a, cargos: r.data.cargo }));
    })
  }, [dadosrota.state])
  console.log(values)

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            Criar novos cargos
          </h2>
          <Breadcrumb>
            <Breadcrumb.Item
              onClick={() => {
                navegar(`${process.env.PUBLIC_URL}/configuracoes/`, { state: values })
              }}>
              Administração
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              novo cargo
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
        <Col sm={12} lg={12} xl={8} className="grid-margin">
          <Card className="custom-card">
            <Card.Header className="border-bottom-0 pb-0">
              <label className="main-content-label mb-0 pt-1">Lista de cargos</label>
              <p className="tx-12 tx-gray-500 mt-0 mb-2">
                Lista de todos os cargos da corporação
              </p>
            </Card.Header>

            <Card.Body>
              <div className="table-responsive border userlist-table">
                <Table responsive className="card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="wd-lg-20p">
                        <span>Cargos</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Usuários nesse cargo</span>
                      </th>
                      <th className="wd-lg-10p">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {values?.cargos?.map(cargo => (
                      <tr
                        key={cargo.id}
                      >

                        <td>
                          {cargo.office}
                        </td>

                        <td>
                          {cargo.users.length}
                        </td>

                        <td>

                          <Modal.OfficeChanges cargo={cargo} setValues={setValues} />

                          <label onClick={() => {
                            deleteQuestionAlert().then((result) => {
                              if (result.isConfirmed) {
                                api.delete(`cargos/del?id=${cargo.id}`).then(r => {
                                  if (r.data.status) {
                                    setValues(a => {
                                      let cargos = a.cargos
                                      cargos = cargos.filter(car => car.id != cargo.ig)
                                      return ({ ...a, cargos })
                                    });
                                    deleteSucessAlert()
                                    navegar(`${process.env.PUBLIC_URL}/adm_add_office`, { state: values })
                                  }
                                })
                              }
                            })
                          }} className="btn btn-sm btn-danger me-1 mt-2">
                            <i className="fe fe-trash"></i>
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={12} xl={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Novo cargo</h6>
                <p className="text-muted card-sub-title">
                  Crie cargos para sua corporação
                </p>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>


                <Form.Group className="form-group">
                  <Form.Label>
                    Cargo: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    id="cargo_form"
                    required
                    name="office"
                    placeholder="Novo cargo"
                    type="text"
                  />
                </Form.Group>

                <Button
                  className="btn ripple btn-main-primary btn-block"
                  type="submit"
                >
                  Criar cargo
                </Button>
              </Form>

            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment >
  );
}

EditUser.propTypes = {};

EditUser.defaultProps = {};

export default EditUser;
