import React, { Fragment, useContext, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Card, Table, Form } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { usuarioContext } from '../../../../../..' 

const CriarClimaPulso = () => {

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
          <h2 className="main-content-title tx-24 mg-b-5">NoCriarlCma puPso</h2>
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
              className="my-2 me-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/criar`, { state: values }) }}
            >
              <i className="bi bi-clipboard-plus me-2"></i> Criar
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
             <Form.Check
              type="checkbox"
              label="Enviar para todos os colaboradores?"
            // onChange={}
            />
           </Card.Body>
          </Card>
        </Col>
      </Row>

        </Fragment>
  )
};




export default CriarClimaPulso;
