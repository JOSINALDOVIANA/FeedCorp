import React, { Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormGroup, Row, Form, InputGroup, ListGroup } from "react-bootstrap";
import * as formelement from "../../../../../../data/Forms/formelement";
import { usuarioContext } from "../../../../../..";


// import { Container } from './styles';

const Criar = () => {
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
              <h2 className="main-content-title tx-24 mg-b-5">Novo Objetivo</h2>
              <div>
                <Button to="#"
                  variant="info"
                  className="btn me-1">
                  Criar
                </Button>
                <Button onClick={() => {
                  navegar(`${process.env.PUBLIC_URL}/okr`, { state: values })
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
                <input type="text" className="form-control" placeholder="Objetivo" />
              </FormGroup>

              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Descrição</Form.Label>
                <textarea className="form-control" />
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
                  <h2 className="main-content-title tx-24 mg-b-5">Chaves</h2>
                  <spam className="d-flex text-muted tx-13">
                    Crie Chaves para o seu objetivo
                  </spam>
                </div>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-end-0 browse-file"
                  placeholder="Chave"
                  required
                />
                <label className="input-group-btn">
                  <span className="btn btn-primary">
                    Adicionar
                    <input
                      // type="file"
                      style={{ display: "none" }}
                      multiple=""
                    />
                  </span>
                </label>
              </div>

              <ListGroup>
                <ListGroup.Item>Chave 1</ListGroup.Item>
                <ListGroup.Item
                //active
                >
                  Chave 2
                </ListGroup.Item>
                <ListGroup.Item>Chave 3</ListGroup.Item>
                <ListGroup.Item>Chave 4</ListGroup.Item>
              </ListGroup>

              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">Partipantes</h2>
                  <spam className="d-flex text-muted tx-13">
                    Escolha os integrantes que farão parte deste objetivo
                  </spam>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control border-end-0 browse-file"
                  placeholder="Pesquisar pessoa"
                  required
                />
                <label className="input-group-btn">
                  <span className="btn btn-primary">
                    Adicionar
                    <input
                      // type="file"
                      style={{ display: "none" }}
                      multiple=""
                    />
                  </span>
                </label>
              </div>


            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  );
}

export default Criar;
