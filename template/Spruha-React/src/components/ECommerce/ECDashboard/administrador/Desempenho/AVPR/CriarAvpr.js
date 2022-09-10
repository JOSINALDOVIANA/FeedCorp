import React, { Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormGroup, Row, Form, InputGroup, ListGroup, Badge } from "react-bootstrap";
import * as formelement from "../../../../../../data/Forms/formelement";
import { SingleselectUnidade, SingleselectPessoa } from "./FormDataAVPR";
import { usuarioContext } from "../../../../../..";

import user1 from "../../../../../../assets/img/users/1.jpg";
import { Grid } from "@material-ui/core";
// import { Container } from './styles';

const CriarAvpr = () => {
  const dadosrota = useLocation();
  const location = useLocation();
  const navegar = useNavigate();
  const { values, setValues } = useContext(usuarioContext);
  useEffect(() => {
    setValues(dadosrota.state)
  }, [dadosrota])

  return (
    <Fragment>

      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">

            <div className="page-header mx-4">
              <h2 className="main-content-title tx-24 mg-b-5">Nova avaliação</h2>
              <div>
                <Button to="#"
                  variant="info"
                  className="btn me-1">
                  Criar
                </Button>
                <Button onClick={() => {
                  navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado/`, { state: values })
                }}
                  variant="danger"
                >
                  Cancelar
                </Button>
              </div>
            </div>
            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Nome da avaliação</Form.Label>
                <input type="text" className="form-control" placeholder="Avaliaçao" />
              </FormGroup>

              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Avaliado</Form.Label>
                <input type="text" className="form-control" placeholder="Procure pelo nome" />
              </FormGroup>

              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Validade</Form.Label>

                <InputGroup>
                  <Button
                    variant="light" type="button">
                    <i className="fe fe-calendar lh--9 op-6"></i>
                  </Button>
                  <formelement.Datepicker />
                </InputGroup>
              </FormGroup>

              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">Indicadores</h2>
                  <spam className="d-flex text-muted tx-13">
                    Crie indicadores e suas respectivas metas
                  </spam>
                </div>
              </div>

              <Grid>

                <Row className="my-1">
                  <Col lg={12} xl={12} xxl={12} md={12} className="my-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Indicador"
                      required
                    />
                  </Col>
                  <Col lg={12} xl={12} xxl={12} md={12} className="my-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Meta"
                      required
                    />
                  </Col>
                </Row>

              </Grid>

              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  type="button"
                  className="my-2 btn"
                >
                  Adicionar
                </Button>
              </div>
              <ListGroup>

                <ListGroup.Item action
                  as="li"
                  className="d-flex justify-content-betwween align-items-center"
                >
                  <div className="ms-2 me-auto">Nome do indicador</div>

                  <div className="ms-2 me-auto">Nome da meta</div>

                  <div className="me-2">
                    <i style={{ cursor: 'pointer' }} className="ti ti-trash"></i>
                  </div>

                </ListGroup.Item>

              </ListGroup>


            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment >
  );
}

export default CriarAvpr;
