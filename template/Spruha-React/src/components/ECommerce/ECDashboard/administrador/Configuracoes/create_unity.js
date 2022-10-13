import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Form, Col, Row, Table, InputGroup } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteQuestionAlert, deleteSucessAlert, deleteErrorAlert, deleteUnityAlert } from "../../Components/Alerts";
import * as Modal from "../../Components/Modal"
import api from "../../../../../api";

function CreateUnity() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();


    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    api.post(`unit/insert`, {
      units: [{ description: event.target['Nome'].value.toUpperCase(), initials: event.target["Sigla"].value.toUpperCase() }],
      id_user: values.dadosUser.id,
      id_company: values.company.id
    }).then(r => {
      if (r.data.status) {
        recarregarUnits();
      }
    })

    setValidated(true);
  };

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState({});
  const [carregados, setCarregados] = useState(false)
  // const [unit, setUnit] = useState({});
  const [units, setUnits] = useState([]);
  useEffect(() => {
    setValues(dadosrota.state)
    recarregarUnits()
  }, [dadosrota.state])
  console.log(values)
  function recarregarUnits() {
    api.get(`unit/consult?id_user=${dadosrota.state?.dadosUser?.id}`).then(r => {
      setUnits(r.data)
      setValues(a => ({ ...a, units: r.data }));
    })
  }
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
              <label className="main-content-label mb-0 pt-1">Lista de Unidades</label>
              <p className="tx-12 tx-gray-500 mt-0 mb-2">
                Lista de todos as unidades da corporação
              </p>
            </Card.Header>

            <Card.Body>
              <div className="table-responsive border userlist-table">
                <Table responsive className="card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="wd-lg-20p">
                        <span>Unidade</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Sigla</span>
                      </th>
                      <th className="wd-lg-10p">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {values?.units?.map(und => (
                      <tr
                        key={und.id}
                      >

                        <td>
                          {und.description.toUpperCase()}
                        </td>

                        <td>
                          {und.initials.toUpperCase()}
                        </td>

                        <td>

                          <Modal.UnityChanges unidade={und} recarregarUnits={recarregarUnits} dadosrota={dadosrota} values={values} setValues={setValues} setUnits={setUnits} />

                          <label onClick={() => {
                            deleteQuestionAlert().then((result) => {
                              if (result.isConfirmed) {
                                if(und?.Colaboradores.length>0){
                                  deleteUnityAlert()
                                }else{
                                  api.delete(`unit/delete?id=${und.id}&id_user=${values.dadosUser.id}`).then(r => {
                                    
                                    if (r.data.status) {
                                      deleteSucessAlert()
                                      recarregarUnits()
                                      navegar(`${process.env.PUBLIC_URL}/adm_add_edit_unidade/`, { state: values })
                                    }
                                  })
                                }
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
                <h6 className="main-content-label mb-1">Nova unidade</h6>
                <p className="text-muted card-sub-title">
                  Crie uma unidade para sua corporação
                </p>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group className="form-group" controlid="">
                  <Form.Label>
                    Sigla: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="Sigla"
                    placeholder="Sigla da unidade"
                    type="text"

                  />
                </Form.Group>

                <Form.Group className="form-group" controlid="">
                  <Form.Label>
                    Nome: <span className="tx-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="Nome"
                    placeholder="Nome por extenso da unidade"
                    type="text"
                  />
                </Form.Group>


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
      </Row>

    </Fragment >
  );
}

CreateUnity.propTypes = {};

CreateUnity.defaultProps = {};

export default CreateUnity;
