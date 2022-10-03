import React, { Fragment, useContext, useEffect } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { usuarioContext } from "../../../..";

function MinhaCorporacao() {

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const { values, setValues } = useContext(usuarioContext);

  useEffect(() => {
    if (!dadosrota.state) {
      navegar(`${process.env.PUBLIC_URL}/home`)
    }
    setValues(dadosrota.state);

  }, [dadosrota])

  console.log(values)

  return (
    <Fragment>

      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Minha Unidade</h2>
          <Breadcrumb>
          <Breadcrumb.Item> Minha Unidade </Breadcrumb.Item>
          <Breadcrumb.Item active >  Integrantes  </Breadcrumb.Item>
        </Breadcrumb>
        </div>

        {/* <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant="white"
              type="button"
              className="white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              variant="white"
              type="button"
              className="white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button
              variant="primary"
              type="button"
              className=" my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div> */}

      </div>


      <Row className="row-sm">
        <Col sm={12} md={6} xl={3}>
          <Card className="custom-card border">
            <Card.Body className="text-center">
              <div className="user-lock text-center">
                <Link to="#">
                  <img
                    alt="avatar"
                    className="rounded-circle"
                  src={require("../../../../assets/img/users/4.jpg")}
                  />
                </Link>
              </div>
              <Link to="#">
                <h4 className=" mb-1 mt-3 main-content-label">
                  Nome de Usuário
                </h4>
              </Link>
              <h5 className="mb-2 mt-2 text-muted tx-14">
                Cargo
              </h5>
              {/* <p className="text-muted text-center mt-1">
                Lorem Ipsum is not simply popular belief
                Contrary.
              </p> */}
            </Card.Body>
          </Card>
        </Col>
        

      </Row>

    </Fragment>
  );
}

MinhaCorporacao.propTypes = {};

MinhaCorporacao.defaultProps = {};

export default MinhaCorporacao;
