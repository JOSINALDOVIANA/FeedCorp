import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, ListGroup, Form, FormGroup } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import api from "../../../../../../api";
import { Divider } from "@mui/material";
import { SelectUnitPulso } from "../../../Components/Selects/SelectUnit";
import { successAlert } from "../../../Components/Alerts";
import "./style.css"
const CriarClimaPulso = () => {

  const dadosrota = useLocation();

  const navegar = useNavigate();
  const [values, setValues] = useState({});
  const [units, setUnits] = useState([]);
  const [pulse, setPulse] = useState({});


  useEffect(() => {
    setValues(dadosrota.state)


    api.get(`/unit/consult?id_company=${dadosrota.state.company.id}`).then(r => {
      setPulse({
        id_company: dadosrota.state.company.id,
        id_user: dadosrota.state.dadosUser.id,
        unitSelect: [],
        userSelect: [],
        checked: true,
        company: false,
        questions: []
      })
      setUnits(a => ([...r.data]))

      api.get(`questions/category_question/get`).then(r => {
        setPulse(a => ({ ...a, categorias: r.data.categories }))
      })

    })


  }, [dadosrota.state])
  // console.log(units)
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Nova pesquisa de clima pulso</h2>
          <Breadcrumb>
            <Breadcrumb.Item>Engajamento</Breadcrumb.Item>
            <Breadcrumb.Item
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/`, { state: values }) }}>
              Clima Pulso
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Criar Clima Pulso</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex">
          <div className="justify-content-center">

            <Button
              variant="white"
              type="button"
              className=" btn-icon-text my-2 me-2"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/`, { state: values }) }}
            >
              <i className="bi bi-clipboard2-data me-2"></i> Lista
            </Button>

            <Button
              variant="primary"
              type="button"
              className="my-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/configuracoes`, { state: values }) }}
            >
              <i className="bi bi-gear-fill" />
            </Button>
          </div>
        </div>

      </div>
      {/* <!-- End Page Header --> */}


      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>

              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Nome da Pesquisa</Form.Label>
                <Row>
                  <Col sm={12} md={6} lg={6} xl={6}>
                    <input
                      onBlur={(e) => { setPulse(a => ({ ...a, title: e.target.value })) }}
                      type="text" className="form-control" placeholder="Pesquisa" />
                  </Col>
                </Row>
              </FormGroup>

              {/* <div className="mb-2">
                <span className="d-flex text-muted tx-13 mb-1">Envie a pesquisa para toda a sua empresa</span>
                <div className="ms-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPulse(a => ({ ...a, company: values.company.id, checked: false, unitSelect: [] }))

                      } else {
                        setPulse(a => ({ ...a, company: false, checked: true }))

                      }
                    }}
                  />
                  <span>Enviar para todos os colaboradores?</span>
                </div>
              </div>

              <Row>
                {pulse.checked &&
                  <Col>
                    <span className="d-flex text-muted tx-13 mt-1 mb-3">Envie a pesquisa para uma unidade específica</span>
                 
                    <Row>
                      {units.map(unit => (
                        <Col key={unit.initials} className="my-1 mx-1">
                          <Button
                            size="sm"
                            className="unt outline"
                            id={`${unit.id}-link`}

                            onClick={(e) => {

                              if (pulse.unitSelect.indexOf(unit.id) < 0) {
                                const i = document.getElementById(`${unit.id}-link`);
                                // console.log(i)
                                i.classList.add("activeUNIT");
                                setPulse(a => ({ ...a, unitSelect: [...a.unitSelect, unit.id] }));

                              } else {
                                let selectedunit = pulse.unitSelect;
                                selectedunit = selectedunit.filter((item, i) => selectedunit.indexOf(unit.id) != i)
                                setPulse(a => ({ ...a, unitSelect: selectedunit }))
                                const i = document.getElementById(`${unit.id}-link`);
                                i.classList.remove("activeUNIT");
                                console.log(pulse)
                              }

                            }}>{unit.initials}</Button>
                        </Col>
                      ))}
                    </Row>
                  </Col>}
              </Row> */}

              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-20 mg-b-5">Selecione as perguntas</h2>
                  <span className="d-flex text-muted tx-13">
                    Aqui você pode escolher as perguntas cadastradas previamente no banco de perguntas (Cadastre novas perguntas em configurações de clima pulso)
                  </span>
                </div>
              </div>

              {/* Rodar Map inicio */}
              {pulse?.categorias?.map(item =>
                <ListGroup key={item.id}>
                  <ListGroup.Item className="tx-semibold">
                    {item.category}
                  </ListGroup.Item>

                  {item?.questions?.map(item2 =>
                    <ListGroup.Item key={item2.id}
                      as="li"
                      className="d-flex justify-content-betwween align-items-center">
                      <label style={{cursor:"pointer"}} htmlFor={item2.id} className="ms-2 me-auto ">{item2.question}</label>

                      <div className="me-2 d-flex align-items-center ">
                        <input id={item2.id} onChange={(e) => {
                          if (e.target.checked) {
                            setPulse(a => ({ ...a, questions: [...a.questions, item2] }))
                          }
                          else {
                            let questions = pulse.questions;
                            questions = questions.filter(i => i.id != item2.id)
                            setPulse(a => ({ ...a, questions }));

                          }
                        }} className="form-check-input" type="checkbox" />
                      </div>
                    </ListGroup.Item>
                  )}

                  <Divider />
                </ListGroup>
              )}
              {/* Rodar Map final */}


              <div className=" mt-4 d-flex justify-content-end">

                <Button className="me-2" onClick={() => {

                  let obj = {}
                  obj.title = pulse.title
                  obj.id_user = pulse.id_user
                  obj.id_company = pulse.id_company
                  obj.questions = pulse.questions.map(item => (item.question))
                  // for (const iterator of checkeds) {
                  //   iterator.setAttribute("type", "text")
                  // }

                  if (!!pulse.company) {
                    obj.company = pulse.company
                  }
                  // console.log(selectedunit.length)
                  if (pulse.unitSelect.length > 0) {
                    obj.units = pulse.unitSelect.map(item => (item));
                  }
                  if (pulse.userSelect.length > 0) {
                    obj.users = pulse.userSelect.map(item => (item.id));
                  }
                  setPulse(a => ({
                    id_company: values.company.id,
                    id_user: values.dadosUser.id,
                    unitSelect: [],
                    userSelect: [],
                    checked: true,
                    company: false,
                    questions: []
                  }))
                  // console.log(obj)
                  // console.log(pulse)
                  api.post("pulses/insert", { ...obj }).then(r => {
                    if (r.status) {
                      successAlert()
                      navegar(`${process.env.PUBLIC_URL}/climapulso_unidade`, { state: { ...values } })
                    } else {
                      alert("Desculpe, algo deu errado check as informações e tente novamente")
                    }
                  });


                }}>
                  Criar Pesquisa
                </Button>

                <Button variant="danger"
                  onClick={() => navegar(`${process.env.PUBLIC_URL}/climapulso_unidade`, { state: { ...values } })}
                >
                  Cancelar
                </Button>
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
};




export default CriarClimaPulso;
