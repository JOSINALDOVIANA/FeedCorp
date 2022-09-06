import React, { Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormGroup, Row, Form, ListGroup, Breadcrumb } from "react-bootstrap";
import { SingleselectUnidade, SingleselectPessoa } from "./administrador/Desempenho/OKR/FormDataOKR";
import { usuarioContext } from "../../..";



// import { Container } from './styles';

const CriarFeed = () => {
  const dadosrota = useLocation();
  const location = useLocation();
  const navegar = useNavigate();
  const { values, setValues } = useContext(usuarioContext);
  useEffect(() => {
    setValues(dadosrota.state)
  }, [dadosrota])
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

            <div className="page-header mx-4">
              <h2 className="main-content-title tx-24 mg-b-5">Feedback</h2>
              <div>
                <Button to="#"
                  variant="info"
                  className="btn me-1">
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
            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Descrição</Form.Label>
                <textarea className="form-control" />
              </FormGroup>


              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">Destinatário</h2>
                  <spam className="d-flex text-muted tx-13">
                    Escolha pra quem você quer mandar este feedback
                  </spam>
                </div>
              </div>

              <div className="page-header">

                <Col lg={8} xl={8} xxl={8} md={12} className="my-1">
                  <SingleselectPessoa />
                </Col>

                <div className="d-flex justify-content-end mx-3">
                  <Button
                    variant="primary"
                    type="button"
                    className="my-2 btn"
                  >
                    Adicionar
                  </Button>
                </div>

              </div>


            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  );
}

export default CriarFeed;
