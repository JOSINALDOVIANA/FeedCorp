import React, { Fragment, useEffect, useState } from "react";
import { Card, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../../../..";
import { Basicdatatable } from "./dataTabelas/FeedFeitosDataTabela";


// import { Container } from './styles';

const FeedFeitos = () => {

  const dadosrota = useLocation();

  const navegar = useNavigate();
  const [values, setValues] = useState({})
  useEffect(() => {
    setValues(dadosrota.state)
  }, [dadosrota.state])
  console.log(values)

  
  return (
    <Fragment>

      <div className="card custom-card">


        <Row className=" row-sm">
          <Col md={12} lg={12} xl={12}>
            <Card className=" custom-card">

              <div className="card-header border-bottom-0 d-flex justify-content-between">

                <label className="main-content-label my-auto pt-2">Seus Feedbacks</label>


                <div className="d-flex align-items-center">
                  <Button
                    type="button"
                    variant="primary"
                    className="btn-icon-text"
                    onClick={() => { navegar(`${process.env.PUBLIC_URL}/dashboard`, { state: values }) }}
                  >
                    <i className="fe fe-x"></i>
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

export default FeedFeitos;