import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormGroup, Row, Form, InputGroup, ListGroup, Badge, Breadcrumb } from "react-bootstrap";
import * as formelement from "../../../../../../data/Forms/formelement";
import { SingleselectUnidade, SingleselectPessoa } from "./FormDataAVPR";
import "./style.css"
import { Grid } from "@material-ui/core";
import { Datepicker } from "../../../Components/DataPicker"
import { forEach, uniqueId } from "lodash";
import api from "../../../../../../api";

const CriarAvpr = () => {
  const dadosrota = useLocation();
  const location = useLocation();
  const navegar = useNavigate();
  const [values, setValues] = useState({});
  const [Itemsalvo, setItem] = useState([]);
  const [enabled, setEna] = useState(true);
  const [selectdata, setData] = useState(new Date());
  const [avpr, setAVPR] = useState({ id_user: dadosrota.state.dadosUser.id, idItems: "", items: [], direction: { company: [], units: [dadosrota.state.unit.id], users: [] }, checkcompany: false, checkunits: true, checkusers: false })
  
  useEffect(() => {
    setValues(dadosrota.state)
  }, [dadosrota])
  console.log(avpr)

  // useEffect(()=>{
  //   if(document.querySelectorAll(".activeUNIT").length>0){

  //   }
  // },[avpr])
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Criar avaliação por resultado</h2>
          <Breadcrumb>
            <Breadcrumb.Item>Desempenho</Breadcrumb.Item>
            <Breadcrumb.Item
              onClick={() => {

                navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/`, { state: values })
              }}
            >Avaliação por Resultados
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Criar AvPR</Breadcrumb.Item>
          </Breadcrumb>
        </div>

      </div>
      {/* <!-- End Page Header --> */}

      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">

            <Card.Header>
              <div className="mb-2">
                <h2 className="main-content-title tx-24 mg-b-5">Nova avaliação para minha unidade</h2>
                <span className="d-flex text-muted tx-13">
                  Crie uma nova avaliação por resultados
                </span>
              </div>
            </Card.Header>
            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Nome da avaliação</Form.Label>
                <input type="text" className="form-control" placeholder="Avaliaçao" onBlur={(e) => { setAVPR(a => ({ ...a, title: e.target.value })) }} />
                <span className="d-flex text-muted tx-13">
                  exemplo: "Avaliação semestral"
                </span>
              </FormGroup>

              {/* NÃO PRECISA ESCOLHER UNIDADE OU EMPRESA PQ É O GESTOR DA UNIDADE, TEM Q FAZER ELE SER AUTOMÁTICO */}
              {/* <FormGroup className="form-group">
                <Form.Label className="tx-medium">Avaliados (as)</Form.Label>
                {(avpr?.checkunits == false && avpr?.checkusers == false) &&

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={(e) => {

                        if (e.target.checked) {
                          setAVPR(a => ({ ...a, direction: { ...a.direction, company: [values.company.id] }, checkcompany: true }))

                        } else {
                          setAVPR(a => ({ ...a, direction: { ...a.direction, company: [] }, checkcompany: false }))

                        }
                      }}
                    />
                    <label className="d-flex text-muted tx-13">
                      Marque para enviar a todos da companhia ( {values?.company?.namefantasy} )
                    </label>
                  </div>


                }


                <Row>
                  {avpr.checkcompany == false && <>
                    <Form.Label className="tx-medium mt-3">Também pode escolher enviar a uma ou mais UNDADE</Form.Label>

                    {values?.units?.map(unit => (
                      <Col key={unit.initials} className="my-1 mx-1">
                        <i
                          size="sm"

                          className="untavpr outline btn "
                          id={`${unit.id}-link2`}

                          onClick={(e) => {
                            let u = avpr.direction.units;
                            if (u.indexOf(unit.id) < 0) {
                              const i = document.getElementById(`${unit.id}-link2`);
                              // console.log(i)
                              i.classList.add("activeUNITavpr");
                              setAVPR(a => ({ ...a, direction: { ...a.direction, units: [...a.direction.units, unit.id] } }));

                            } else {
                              setAVPR(a => {
                                let units = a.direction.units;
                                units = units.filter((item, i) => units.indexOf(unit.id) != i);
                                return ({ ...a, direction: { ...a.direction, units } });
                              })

                              const i = document.getElementById(`${unit.id}-link2`);
                              i.classList.remove("activeUNITavpr");

                            }

                            if (document.querySelectorAll(".activeUNITavpr").length == 0) {
                              setAVPR(a => ({ ...a, checkunits: false }))
                            }
                            if (document.querySelectorAll(".activeUNITavpr").length > 0) {
                              setAVPR(a => ({ ...a, checkunits: true }))
                            }

                          }}>{unit.initials}</i>
                      </Col>
                    ))}
                  </>}
                </Row>

              </FormGroup> */}

              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Validade</Form.Label>

                <InputGroup>
                  <Button
                    variant="light" type="button" disabled>
                    <i className="fe fe-calendar lh--9 op-6"></i>
                  </Button>
                  {/* <formelement.Datepicker onChange={e=>{console.log(e)}}/> */}
                  <Datepicker
                    selected={selectdata}
                    minDate={selectdata}
                    onChange={(date) => { setData(date); setAVPR(a => ({ ...a, validity: date })) }}
                  />
                </InputGroup>
              </FormGroup>

              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">Indicadores</h2>
                  <span className="d-flex text-muted tx-13">
                    Crie indicadores e suas respectivas metas
                  </span>
                </div>
              </div>

              <Grid>

                <Row className="my-1">
                  <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="my-1">
                    <input
                      type="text"
                      className="form-control nt"
                      placeholder="Indicador"
                      required
                      onBlur={e => {
                        let index = avpr?.items.length;
                        let items = avpr?.items;
                        let id = uniqueId();
                        items[index] = { "indicator": e.target.value, id, "id_physicalUnity": null, "id_ebr": "", "validity": avpr.validity };
                        setAVPR(a => ({ ...a, items, idItems: id }));
                      }}
                    />
                  </Col>
                  <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="my-1">
                    <input
                      type="text"
                      className="form-control nt"
                      placeholder="Meta (NUMERO)"
                      required
                      onBlur={e => {

                        let items = avpr?.items;

                        setAVPR(a => {
                          let items = a.items;
                          items = items.map(item => (item.id == a.idItems ? { ...item, goal: e.target.value } : item))
                          return ({ ...a, items })
                        })

                      }}
                    />
                  </Col>
                </Row>
              </Grid>

              {avpr?.idItems != "" &&
                <Col className="form-group">
                  <div>
                    <span className="d-flex text-muted tx-13">
                      Informe se esta meta é uma medida Minima ou Maxima
                    </span>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input checkmed"
                      type="checkbox"
                      onChange={(e) => {

                        if (e.target.checked) {
                          setAVPR(a => {
                            let items = a.items;
                            items = items.map(item => (item.id == a.idItems ? { ...item, min: true } : item))
                            return ({ ...a, items });
                          })
                          setEna(false)

                        } else {
                          setAVPR(a => {
                            let items = a.items;
                            let index = 0
                            items.map((item, i) => (item.id == a.idItems ? index = i : item))
                            delete items[index]["min"];
                            return ({ ...a, items });
                          })
                          setEna(true)
                        }
                      }}
                    />
                    <label className="d-flex text-muted tx-13 form-check-label">
                      Minima
                    </label>

                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input checkmed "
                      type="checkbox"
                      onChange={(e) => {

                        if (e.target.checked) {
                          setAVPR(a => {
                            let items = a.items;
                            items = items.map(item => (item.id == a.idItems ? { ...item, max: true } : item))
                            return ({ ...a, items });
                          })
                          setEna(false)

                        } else {
                          setAVPR(a => {
                            let items = a.items;
                            let index = 0
                            items.map((item, i) => (item.id == a.idItems ? index = i : item))
                            delete items[index]["max"];
                            return ({ ...a, items });
                          })
                          setEna(true)

                        }
                      }}
                    />
                    <label className="d-flex text-muted tx-13">
                      Máxima
                    </label>

                  </div>
                </Col>
              }

              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  type="button"
                  className="my-2 btn"
                  disabled={enabled}
                  onClick={() => {
                    const inputs = document.getElementsByClassName("nt");
                    const checks = document.getElementsByClassName("checkmed")
                    for (const element of inputs) {
                      element.value = ""
                    }
                    for (const element of checks) {
                      element.setAttribute("checked", false)
                    }
                    setAVPR(a => ({ ...a, idItems: "" }));
                    setItem(a => ([...a, ...avpr.items]))
                    setEna(true);
                  }}
                >
                  Adicionar
                </Button>
              </div>
              <ListGroup>

                <ListGroup.Item action as="li">
                  <Grid>
                    <Row>
                      <Col xs={4} md={4} lg={4} xl={4} xxl={4}>
                        <span>Nome do indicador</span>
                      </Col>

                      <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-end">
                        <span>Meta</span>
                      </Col>

                      {/* <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-end align-items-center">
                        <div>
                          <i style={{ cursor: 'pointer' }} className="ti ti-trash me-3"></i>
                        </div>
                      </Col> */}
                    </Row>
                  </Grid>
                </ListGroup.Item>

                {Itemsalvo?.map(item => (
                  <ListGroup.Item key={item.id} action as="li">
                    <Grid>
                      <Row>
                        <Col xs={4} md={4} lg={4} xl={4} xxl={4}>
                          <span>{item.indicator}</span>
                        </Col>

                        <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-end">
                          <span>{item.goal}</span>
                        </Col>

                        <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-end align-items-center">
                          <div>
                            <i style={{ cursor: 'pointer' }} className="ti ti-trash me-3"
                              onClick={() => {
                                setAVPR(a => {
                                  let items = a.items;
                                  items = items.filter((goal, i) => goal.id != item.id)
                                  return ({ ...a, items })
                                })
                                setItem(a => {
                                  let items = a
                                  items = items.filter((goal, i) => goal.id != item.id)
                                  return (items)
                                })
                              }}
                            ></i>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </ListGroup.Item>
                ))}

              </ListGroup>


            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-end">
                <Button onClick={() => {
                  let items = Itemsalvo;
                  for (const key in items) {

                    delete items[key]["id"];

                  }
                  // navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado/`, { state: values })
                  let obj = {
                    "id_user": avpr.id_user, "title": avpr.title, "validity": avpr.validity,
                    "items": items,
                    "direction": avpr.direction
                  }
                  api.post(`/avpr/insert`, { ...obj }).then(r => {
                    console.log(r)
                    if (r.data.status) {
                      navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/`, { state: values })
                    }
                  })
                }}
                  variant="primary"
                  className="btn me-1">
                  Criar
                </Button>
                <Button
                  onClick={() => {
                    navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/`, { state: values })
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

export default CriarAvpr;
