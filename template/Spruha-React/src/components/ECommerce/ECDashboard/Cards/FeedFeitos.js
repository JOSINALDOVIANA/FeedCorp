import React, { Fragment, useState } from "react";
import { Card, Row, Col,  Button} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Basicdatatable } from "./dataTables/FeedFeitosData.js";


// import { Container } from './styles';

export default function FeedFeitos() {

  const dadosrota = useLocation();

  const navegar = useNavigate();
  const [values] = useState(dadosrota?.state)
  const [feitos] = useState(dadosrota?.state?.sendfeedbacks)
  
  console.log(feitos)
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
                    onClick={() => { navegar(`${process.env.PUBLIC_URL}/dashboard`, { state: dadosrota.state }) }}
                  >
                    <i className="fe fe-x"></i>
                  </Button>
                </div>
              </div>

              <Card.Body className="card-body">

                {!!values.sendfeedbacks && <Basicdatatable feitos={feitos} />}

              </Card.Body>
            </Card>

            {/* <!-- Row End --> */}
          </Col>
        </Row>
      </div>

    </Fragment>
  );
}

