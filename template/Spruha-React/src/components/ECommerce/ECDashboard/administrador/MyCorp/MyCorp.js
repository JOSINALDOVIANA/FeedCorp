import React, { Fragment, useContext, useEffect, useState } from "react";
import * as chart from "../../../../../data/Chart/chart";
import * as marketcap from "../../../../../data/Cryptodashboard/Marketcap/marketcap";
import { Breadcrumb, Card, Col, Row, Table, Button } from "react-bootstrap";
import { Bar, Pie, Radar, Line, Doughnut, PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useLocation, useNavigate } from "react-router-dom";

ChartJS.register(...registerables);


function MinhaCorporacao() {


  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [ values, setValues ] = useState({});

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
          <h2 className="main-content-title tx-24 mg-b-5">Unidades</h2>
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

        {values?.units?.map(unit => (
          <Col key={unit.id} lg={3} xl={3} xxl={3} md={6} >
            <Card className="custom-card" 
            style={{cursor: "pointer"}}
            onClick={() => { navegar(`${process.env.PUBLIC_URL}/unidades`, { state: values }) }}
            >
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
      <Col lg={12} xl={12} xxl={12} md={12}>
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
      </Col>
      {/* GRÁFICO EM LINHA */}
      <Col lg={12} xl={12} xxl={12} md={12}>
        <Card className="custom-card overflow-hidden">
          <Card.Body className="card-body">
            <div>
              <h6 className="main-content-label mb-1">Clima organizacional</h6>
              <p className="text-muted  card-sub-title">
                Clima da corporação ao longo do ano
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              {/* <canvas id="chartLine"></canvas> */}

              <Line
                options={chart.Linechart}
                data={chart.linechartdata}
                className="barchart"
                height="250"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>


      {/* <Row>
        <Col xl={12} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0"><label className="main-content-label my-auto">Crypt Marketing Values</label></Card.Header>
            <Card.Body>

              <Table hover responsive className="table text-nowrap border">
                <thead className="table border-bottom">
                  <tr>
                    <th className="bg-transparent">No</th>
                    <th className="bg-transparent">Name</th>
                    <th className="bg-transparent">Last Price</th>
                    <th className="bg-transparent">Market Cap</th>
                    <th className="bg-transparent">Change(24h)</th>
                    <th className="bg-transparent"></th>
                  </tr>
                </thead>
                <tbody>
                  {CryptMarketingValues.map((items, index) => (
                    <tr key={index} data-index={index}>
                      <td>{items.ID}</td>
                      <td><img src={items.IMAGES} className="wd-30 ht-30 me-3" alt="img" />{items.Name} <b>{items.crypt}</b></td>
                      <td>{items.MarkerCap}</td>
                      <td>{items.lastprice}</td>
                      <td><span className={`text-${items.Change}`}>+3.49%</span></td>
                      <td><b className="btn btn-outline-primary btn-sm">{items.platform}</b></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

    </Fragment>
  );
}

MinhaCorporacao.propTypes = {};

MinhaCorporacao.defaultProps = {};

export default MinhaCorporacao;
