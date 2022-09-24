import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, ListGroup, Form, FormGroup } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import api from "../../../../../../api";
import { Divider } from "@mui/material";
import { SelectUnitPulso } from "../../../Cards/dataTabelas/Selects/SelectUnit";

const CriarClimaPulso = () => {

  const dadosrota = useLocation();

  const navegar = useNavigate();
  const [values, setValues] = useState({});
  const [units, setUnits] = useState([]);
  const [pulse, setPulse] = useState({});


  useEffect(() => {
    setValues(dadosrota.state)


    api.get(`/unit/consult?id_company=${dadosrota.state.company.id}`).then(r => {
      setPulse(a => ({
        ...a,
        id_company: dadosrota.state.company.id,
        id_user: dadosrota.state.dadosUser.id,
        unitSelect: [],
        checked: true,
        company: false,
        questions: []
      }))
      setUnits(a => ([...a, ...r.data]))

      api.get(`questions/category_question/get`).then(r => {
        setPulse(a => ({ ...a, categorias: r.data.categories }))
      })

    })


  }, [dadosrota.state])
  // console.log(pulse)
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Nova pesquisa de clima pulso</h2>
          <Breadcrumb>
            <Breadcrumb.Item>Engajamento</Breadcrumb.Item>
            <Breadcrumb.Item
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/`, { state: values }) }}>
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
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/`, { state: values }) }}
            >
              <i className="bi bi-clipboard2-data me-2"></i> Lista
            </Button>

            <Button
              variant="primary"
              type="button"
              className="my-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/configuracoes`, { state: values }) }}
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
              <div className="mt-1 mb-4">
                <div>
                  <h2 className="main-content-title tx-20 mg-b-5">Pra quem será direcionada a pesquisa?</h2>
                  <span className="d-flex text-muted tx-13">Escolha entre enviar para todos ou para uma unidade específica</span>
                </div>
              </div>

              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Nome da Pesquisa</Form.Label>
                <Row>
                  <Col sm={12} md={6} lg={6} xl={6}>
                    <input
                      onBlur={(e)=>{setPulse(a=>({...a,title:e.target.value}))}}
                      type="text" className="form-control" placeholder="Pesquisa" />
                  </Col>
                </Row>
              </FormGroup>

              <div>
                <span className="d-flex text-muted tx-13 mb-1">Envie a pesquisa para toda a sua empresa</span>
                <div className="ms-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPulse(a => ({ ...a, company: values.company.id, checked: false }))

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
                  <Col sm={12} md={6} lg={6} xl={6}>
                    <span className="d-flex text-muted tx-13 mt-1 mb-1">Envie a pesquisa para uma unidade específica</span>
                    <SelectUnitPulso units={units} setPulse={setPulse} />
                  </Col>}
              </Row>

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
                      <div className="ms-2 me-auto">{item2.question}</div>

                      <div className="me-2 d-flex align-items-center">
                        <input onChange={(e) => {
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

                <Button onClick={() => {
                  let obj={}
                  obj.questions=pulse.questions.map(item=>(item.question))
                  console.log(obj)
                  console.log(pulse)
                  if(!!pulse.company){
                    console.log("entrou")
                  }
                }}>
                  Criar Pesquisa
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
