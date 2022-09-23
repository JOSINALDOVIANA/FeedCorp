import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormGroup, Row, Form, InputGroup, ListGroup, Image } from "react-bootstrap";
import * as formelement from "../../../../../../data/Forms/formelement";
import { SingleselectUnidade, SingleselectPessoa } from "./FormDataOKR";
// import {MyVerticallyCenteredModal} from "./modalmethods";

import { Grid } from "@mui/material";
import Okr from ".";
import api from "../../../../../../api";

// import { Container } from './styles';

const CriarOKR = () => {
  const dadosrota = useLocation();

  const navegar = useNavigate();
  const [values, setValues] = useState({})
  const [okr, setOkr] = useState({})
  useEffect(() => {
    setValues(dadosrota.state)
    setOkr(a => ({ ...a, keys: [], id_user: dadosrota.state.dadosUser.id }))
  }, [dadosrota])
  // console.log(values)
  // console.log(okr)
  return (
    <Fragment>

      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">

            <div className="page-header mx-4">
              <h2 className="main-content-title tx-24 mg-b-5">Novo Objetivo</h2>
              <div>
                <Button to="#"
                  variant="info"
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
                        navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values })
                        // {{<MyVerticallyCenteredModal />}}
                      }
                    })
                  }}
                >
                  Criar
                </Button>
                <Button onClick={() => {
                  navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values })
                }}
                  variant="danger"
                >
                  Cancelar
                </Button>
              </div>
            </div>

            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Nome do Objetivo</Form.Label>
                <input onChange={(e) => { setOkr(a => ({ ...a, objective: e.target.value })) }} value={Okr.objective} type="text" className="form-control" placeholder="Objetivo" />
              </FormGroup>

              {/* <FormGroup className="form-group">
                <Form.Label className="tx-medium">Descrição</Form.Label>
                <textarea className="form-control" />
              </FormGroup> */}

              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Validade</Form.Label>

                <InputGroup>
                  <Button
                    variant="light" type="button">
                    <i className="fe fe-calendar lh--9 op-6"></i>
                  </Button>
                  <formelement.Datepicker setOkr={setOkr} />
                </InputGroup>
              </FormGroup>

              <Grid id="keys">

                <Row >
                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-24 mg-b-5">Key Results</h2>
                        <spam className="d-flex text-muted tx-13">
                         Adicione o nome da sua Key result
                        </spam>
                      </div>
                    </div>

                    <input
                      type="text"
                      className="form-control input-description"
                      placeholder="Key Result"
                      value={okr?.description}
                      onChange={(e) => { setOkr(a => ({ ...a, description: e.target.value })) }}
                    />
                  </Col>

                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-24 mg-b-5">Unidade</h2>
                        <spam className="d-flex text-muted tx-13">
                          Escolha a unidade onde o colaborador se encontra
                        </spam>
                      </div>
                    </div>

                    <SingleselectUnidade className="select-unit" units={values.units} setOkr={setOkr} />

                  </Col>

                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-24 mg-b-5">Integrantes</h2>
                        <spam className="d-flex text-muted tx-13">
                          Escolha o integrante para essa Key
                        </spam>
                      </div>
                    </div>

                    <SingleselectPessoa className="select-user" unit_select={okr.unit} setOkr={setOkr} />

                  </Col>

                </Row>

                <div className="d-flex justify-content-end">
                  <Button
                    variant="primary"
                    type="button"
                    className="my-2 btn"

                    onClick={async () => {
                      let user = okr.user[0];
                      // console.log(user);
                      await api.get(`/images/listar?email=${user.email}`).then(r => { user.image = r.data.dados });

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
              <ListGroup>

                {okr?.keys?.map((key, index) => (
                  <ListGroup.Item key={index} action
                    as="li"
                    className="d-flex justify-content-betwween align-items-center"
                  >
                    <div className="ms-2 me-auto">{key.description}</div>

                    <div className="d-flex align-items-center mb-2 me-4">
                      <Image
                        alt="avatar"
                        className="wd-30 rounded-circle mg-r-15"
                        src={key?.user.image.url}
                      />
                      <div>
                        <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                          {key.user.name}
                        </h6>
                        {/* <span className="d-block tx-11 text-muted">
                      ()
                    </span> */}
                      </div>
                    </div>

                    <div className="me-2">
                      <i onClick={(index) => {
                        let keys = []
                        for (const i in okr.keys) {
                          if (i == index) {
                            keys.push(okr.keys[i]);
                          }
                        }
                        setOkr(a => ({ ...a, keys: keys }))
                      }} style={{ cursor: 'pointer' }} className="ti ti-trash"></i>
                    </div>

                  </ListGroup.Item>
                ))}

              </ListGroup>


            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment >
  );
}

export default CriarOKR;
