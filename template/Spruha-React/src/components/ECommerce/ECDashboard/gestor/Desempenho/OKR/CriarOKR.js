import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormGroup, Row, Form, InputGroup, Table, Image, Breadcrumb } from "react-bootstrap";
import { Datepicker } from "../../../Components/DataPicker"
import { SelectPessoaUnidade } from "./data/FormDataOKR";
import { successAlert, dangerAlert } from '../../../Components/Alerts';
import { Grid } from "@mui/material";
import Okr from "./OKR";
import api from "../../../../../../api";


const CriarOKR = () => {
  const dadosrota = useLocation();

  const navegar = useNavigate();
  const [values, setValues] = useState({})
  const [okr, setOkr] = useState({})
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setValues(dadosrota.state)
    setOkr({ keys: [], id_user: dadosrota.state.dadosUser.id, description: "" })
  }, [dadosrota])
  // console.log(values)
  // console.log(okr)

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Criar OKR para unidade</h2>
          <Breadcrumb>
            <Breadcrumb.Item>Desempenho</Breadcrumb.Item>
            <Breadcrumb.Item
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/okr_unidade/`, { state: values }) }}
            >OKR</Breadcrumb.Item>
            <Breadcrumb.Item active>Novo objetivo</Breadcrumb.Item>
          </Breadcrumb>
        </div>

      </div>
      {/* <!-- End Page Header --> */}

      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">

            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Nome do Objetivo</Form.Label>
                <input onChange={(e) => { setOkr(a => ({ ...a, objective: e.target.value })) }} value={Okr.objective} type="text" className="form-control" placeholder="Objetivo" />
              </FormGroup>

              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Validade</Form.Label>

                <InputGroup>
                  <Button
                    variant="light" type="button">
                    <i className="fe fe-calendar lh--9 op-6"></i>
                  </Button>
                  <Datepicker
                    className="form-control"
                    selected={startDate}
                    minDate={startDate}
                    onChange={(date) => { setStartDate(date); setOkr(a => ({ ...a, validity: date })) }}
                    //FORMATO DATA
                    dateFormat="dd/MM/yyyy"
                  />
                </InputGroup>
              </FormGroup>

              <Grid id="keys">

                <Row >
                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-24 mg-b-5">Key Results</h2>
                        <span className="d-flex text-muted tx-13">
                          Adicione o nome da sua Key result a cada um dos integrantes de sua unidade
                        </span>
                      </div>
                    </div>

                    <input
                      type="text"
                      className="form-control input-description"
                      placeholder="Key Result"
                      value={okr.description}
                      onChange={(e) => { setOkr(a => ({ ...a, description: e.target.value })) }}
                    />
                  </Col>

                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-24 mg-b-5">Integrantes</h2>
                        <span className="d-flex text-muted tx-13">
                          Escolha o integrante para essa Key
                        </span>
                      </div>
                    </div>

                    <SelectPessoaUnidade className="select-user" unit_select={values.unit} setOkr={setOkr} />

                  </Col>

                </Row>

                <div className="d-flex justify-content-end">
                  <Button
                    variant="primary"
                    type="button"
                    className="my-2 btn mt-2"

                    onClick={async () => {
                      let user = okr.user[0];
                      console.log(user)
                      // console.log(user);
                      // await api.get(`/images/listar?email=${user.email}`).then(r => { user.image = r.data.dados });

                      setOkr(a => ({
                        ...a, keys: [...a.keys,
                        {
                          description: a.description,
                          id_user: user.id,
                          status: 0,
                          id_okr: null,
                          user
                        }]
                      }))
                      setOkr(a => ({ ...a, description: "", unit: [], user: [] }))
                    }}
                  >
                    Adicionar
                  </Button>
                </div>

              </Grid>


              <Table responsive className="card-table table-striped table-vcenter text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="wd-lg-40p">
                      <span>Key</span>
                    </th>
                    <th className="wd-20p">
                      <span>Usuário</span>
                    </th>
                    <th className="wd-lg-10p">
                      <span>Ações</span>
                    </th>
                  </tr>
                </thead>
                {okr?.keys?.map((key, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>
                        <div className="ms-2 me-auto">{key.description}</div>
                      </td>

                      <td>
                        <div className="d-flex align-items-center mb-2 me-4">
                          {key.user.url &&
                            <Image
                              alt="avatar"
                              className="wd-30 rounded-circle mg-r-15"
                              src={key?.user?.url}
                            />}
                          <div>
                            <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                              {key.user.name}
                            </h6>

                          </div>
                        </div>
                      </td>

                      <td>
                        <i onClick={() => {
                          let keys = []
                          for (const i in okr.keys) {
                            if (i != index) {
                              keys.push(okr.keys[i]);
                            }
                          }
                          setOkr(a => ({ ...a, keys }))
                        }} style={{ cursor: 'pointer' }} className="ti ti-trash"></i>
                      </td>
                    </tr>
                  </tbody>
                ))}

              </Table>



            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-end">
                <Button to="#"
                  variant="primary"
                  className="btn me-1"
                  onClick={async (e) => {

                    await api.post(`/okrs/insert`, {
                      process: 0,
                      keys: okr.keys,
                      objective: okr.objective,
                      id_user: okr.id_user,
                      validity: okr.validity
                    }).then(r => {
                      let okrscriados = values.okrscriados;
                      if (r.data.status) {
                        okrscriados.push(okr)
                        setValues(a => ({ ...a, okrscriados: okrscriados }));
                        successAlert()
                        navegar(`${process.env.PUBLIC_URL}/okr_unidade/`, { state: values })
                        // {{<MyVerticallyCenteredModal />}}
                      }
                    }).catch(
                      dangerAlert()
                    )
                  }}
                >
                  Criar
                </Button>

                <Button onClick={() => {
                  navegar(`${process.env.PUBLIC_URL}/okr_unidade/`, { state: values })
                }}
                  variant="danger"
                >
                  Cancelar
                </Button>

              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

    </Fragment >
  );
}

export default CriarOKR;
