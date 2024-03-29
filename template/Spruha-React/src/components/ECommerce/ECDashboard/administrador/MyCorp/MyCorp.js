import React, { Fragment, useContext, useEffect, useState } from "react";
import * as chart from "../../../../../data/Chart/chart";
import * as marketcap from "../../../../../data/Cryptodashboard/Marketcap/marketcap";
import { Breadcrumb, Card, Col, Row, Table, Button } from "react-bootstrap";
import { Bar, Pie, Radar, Line, Doughnut, PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../../../../api";

ChartJS.register(...registerables);


function MinhaCorporacao() {


  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState({});

  useEffect(() => {
    if (!dadosrota.state) {
      navegar(`${process.env.PUBLIC_URL}/home`)
    }
    setValues(dadosrota.state);
    api.get(`/unit/consult?id_user=${dadosrota.state.dadosUser.id}`).then(r => { setValues(a => ({ ...a, units: r.data })) });
  }, [dadosrota])

  return (
    <Fragment>

      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Unidades</h2>
          <Breadcrumb>
            <Breadcrumb.Item> Minha corporação </Breadcrumb.Item>
            <Breadcrumb.Item active >  Unidades  </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="justify-content-center">
          <Button variant="primary" type="button" onClick={() => { navegar("/configuracoes/", { state: values }) }} className="my-2 btn-icon-text">
            <i className="fe fe-settings me-2" ></i> Configurações
          </Button>

        </div>
      </div>

      <Row className="row-sm">

        {values?.units?.map(unit => (
          <Col key={unit.id} lg={3} xl={3} xxl={3} md={6}>
            <Card className="custom-card"
              style={{ cursor: "pointer" }}
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/unidades`, { state: { ...values, selectUnit: unit } }) }}
            >
              <Card.Body className="">
                <h5 className="tx-14">Unidade</h5>

                <div className="d-flex justify-content-between">
                  <div className="volume">
                    <h4 className="mb-2">
                      {unit.initials.toUpperCase()}
                    </h4>

                  </div>

                  <h2 className="d-flex flex-row">
                    <span className="font-weight-bold px-1 text-primary">{unit.cols}</span>
                    {/* ICONE */}
                    <i className="bi-people-fill icon-size float-start text-primary"></i>
                  </h2>

                </div>

                <div className="text-muted tx-13">
                  {/* <span className="text-danger me-2 font-weight-bold">{unit.cols}</span> */}
                  {unit.description}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>

      {/* GRÁFICO EM BARRA */}
      {/* <Col lg={12} xl={12} xxl={12} md={12}>
        <Card className="custom-card overflow-hidden">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">OKRs</h6>
              <p className="text-muted  card-sub-title">
                Relação de OKRs
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <Bar
                options={chart.Barchart2}
                data={chart.barchart2data}
                className="barchart"
                height="250"
              />
            </div>
          </Card.Body>
        </Card>
      </Col> */}
      {/* GRÁFICO EM LINHA */}
      {/* <Col lg={12} xl={12} xxl={12} md={12}>
        <Card className="custom-card overflow-hidden">
          <Card.Body className="card-body">
            <div>
              <h6 className="main-content-label mb-1">Clima organizacional</h6>
              <p className="text-muted  card-sub-title">
                Clima da corporação ao longo do ano
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <canvas id="chartLine"></canvas>

              <Line
                options={chart.Linechart}
                data={chart.linechartdata}
                className="barchart"
                height="250"
              />
            </div>
          </Card.Body>
        </Card>
      </Col> */}

    </Fragment>
  );
}

MinhaCorporacao.propTypes = {};

MinhaCorporacao.defaultProps = {};

export default MinhaCorporacao;
