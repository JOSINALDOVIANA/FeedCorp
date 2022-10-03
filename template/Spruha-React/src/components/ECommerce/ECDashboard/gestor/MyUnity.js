import React, { Fragment, useContext, useEffect } from "react";
import * as chart from "../../../../data/Chart/chart";
import * as marketcap from "../../../../data/Cryptodashboard/Marketcap/marketcap";
import { Breadcrumb, Card, Col, Row, Table, Button } from "react-bootstrap";
import { Bar, Pie, Radar, Line, Doughnut, PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { usuarioContext } from "../../../..";
ChartJS.register(...registerables);


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

  return (
    <Fragment>

      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Minha Unidade</h2>
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
            <Card.Body className=" text-center">
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
              <p className="mb-2 mt-1 tx-muted">
                Cargo
              </p>
              <p className="text-muted text-center mt-1">
                Lorem Ipsum is not simply popular belief
                Contrary.
              </p>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      <Row className="row-sm">

        {values?.units.map(unit => (
          <Col key={unit.id} lg={3} xl={3} xxl={3} md={6} >
            <Card className="custom-card">
              <Card.Body className="">
                <h5 className="tx-14">Unidade</h5>

                <div className="d-flex justify-content-between">
                  <div className="volume">
                    <h4 className="mb-2">
                      {unit.initials}
                    </h4>

                  </div>

                  <h2 className="d-flex flex-row">
                    <span className="font-weight-bold px-1 text-primary">{unit.cols}</span>
                    {/* ICONE */}
                    <i className="bi-people-fill icon-size float-start text-primary"></i>
                  </h2>

                </div>

                <div className="d-flex text-muted tx-13">
                  {/* <span className="text-danger me-2 font-weight-bold">{unit.cols}</span> */}
                  {unit.description}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>

    </Fragment>
  );
}

MinhaCorporacao.propTypes = {};

MinhaCorporacao.defaultProps = {};

export default MinhaCorporacao;
