import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormGroup, Row, Form, ListGroup, Breadcrumb } from "react-bootstrap";


import api from "../../../api";
import { SelectUsers } from "./Cards/dataTabelas/SelectUser";
import { SelectUnit } from "./Cards/dataTabelas/SelectUnit";
import { SelecTypes } from "./Cards/dataTabelas/SelectTypes";
import { Grid } from "@mui/material";



// import { Container } from './styles';

const CriarFeed = () => {
  const dadosrota = useLocation();

  const navegar = useNavigate();
  const [values, setValues] = useState({});
  const [feedback, setFeedback] = useState({});
  const [recarregar, setRecarregar] = useState(false);

  useEffect(() => {
    setValues(dadosrota.state);

    // function carregarUsers() {

    //   api.get(`/user/getAll?id_company=${dadosrota?.state?.company.id}`).then(r => {
    //     // console.log(dadosrota.state)
    //     setFeedback(a => ({
    //       ...a,
    //       // users: r.data.Users,
          
    //     }));
    //   });


    // }
    function carregarUnits() {
      api.get(`/unit/consult?id_company=${dadosrota.state.company.id}`).then(r => {
        setFeedback(a => ({ 
          ...a, 
          units: r.data ,
          id_company: dadosrota.state.company?.id,
          id_user: dadosrota.state.dadosUser?.id,
          name: dadosrota.state.dadosUser.name,
        }))
      })
    }
    // carregarUsers()
    carregarUnits()
  }, [dadosrota.state,recarregar]);



  // console.log(values)
  console.log(feedback)

  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Novo Feedback</h2>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => {
              navegar(`${process.env.PUBLIC_URL}/dashboard`, { state: values })
            }}>Meu Painel
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Feedback</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">

            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Descrição do Feedback</Form.Label>
                <textarea
                  onChange={(e) => { setFeedback(a => ({ ...a, feedback: e.target.value })) }} value={feedback.feedback}
                  rows="5"
                  className="form-control"
                />
              </FormGroup>

              <Form.Check 
              type="checkbox"
              label="Feedback Anônimo?"
              onChange={(e)=>{setFeedback(a=>({...a,anonymous:e.target.checked}))}}
              />


              {/* ----------------------------------------------------------------------- */}
              <Grid>
                <Row>
                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-20 mg-b-5">Unidade</h2>
                        <span className="d-flex text-muted tx-13">
                          Escolha uma unidade
                        </span>
                      </div>
                    </div>

                    <SelectUnit units={feedback.units} setFeedback={setFeedback} />

                  </Col>
                  {/* ------------------------------------------------------------------ */}
                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-20 mg-b-5">Destinatário</h2>
                        <span className="d-flex text-muted tx-13">
                          Escolha para quem você quer mandar este feedback
                        </span>
                      </div>
                    </div>

                    <SelectUsers users={feedback.users} setFeedback={setFeedback} />

                  </Col>
                  {/* ----------------------------------------------------------------------- */}
                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-20 mg-b-5">Categoria</h2>
                        <span className="d-flex text-muted tx-13">
                          Escolha uma categoria para seu Feedback
                        </span>
                      </div>
                    </div>

                    <SelecTypes values={values} setFeedback={setFeedback} />

                  </Col>

                </Row>
              </Grid>

            </Card.Body>

            <div className="page-header mx-4">
              <h2 className="main-content-title tx-24 mg-b-5"></h2>
              <div>
                <Button to="#"
                  variant="info"
                  className="btn me-1"
                  onClick={async () => {
                    const { data } = await api.post(`/feedback/insert`, { ...feedback })
                    if (data?.status) {
                      alert("agrademos sua colaboração!!");
                      setValues(a=>({...a,sendfeedbacks:[...a.sendfeedbacks,{...feedback}]}))
                      navegar(`${process.env.PUBLIC_URL}/dashboard/`, { state: values })

                    }
                    
                  }}
                >
                  Enviar
                </Button>
                
                <Button onClick={() => {
                  navegar(`${process.env.PUBLIC_URL}/dashboard/`, { state: values })
                }}
                  variant="danger"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

    </Fragment>
  );
}

export default CriarFeed;
