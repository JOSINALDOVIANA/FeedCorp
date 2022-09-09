import React, { Fragment, useContext, useEffect, useState } from "react";
import { Card, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../../../..";
import { Basicdatatable } from "./dataTabelas/FeedRecebidosDataTabela";

// import { Container } from './styles';

const FeedRecebidos = () => {

  
  const location = useLocation();
  const navegar = useNavigate();
  const [ values, setValues ] = useState({});
  useEffect(() => {
    setValues(location.state)
  }, [location.state])

  return (
    <Fragment>

      <div className="card custom-card">

        <Row className=" row-sm">
          <Col md={12} lg={12} xl={12}>
            <Card className=" custom-card transcation-crypto">

              <div className="card-header border-bottom-0 d-flex justify-content-between">

                <label className="main-content-label my-auto pt-2">Feedback das pessoas</label>


                <div className="d-flex align-items-center">
                  <Button
                    type="button"
                    variant="primary"
                    className="btn-icon-text"
                    onClick={() => { navegar(`${process.env.PUBLIC_URL}/dashboard`, { state: values }) }}
                  >
                    <i className="fe fe-x me-2"></i>
                    Fechar
                  </Button>
                </div>
              </div>

              <Card.Body className="card-body">

                <Basicdatatable values={values} />

              </Card.Body>
            </Card>

            {/* <!-- Row End --> */}
          </Col>
        </Row>




      </div>

    </Fragment>
  );
}

export default FeedRecebidos;