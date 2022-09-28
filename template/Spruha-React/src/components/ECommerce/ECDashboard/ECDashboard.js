import React, { Fragment, useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import ReactApexChart from "react-apexcharts";
import * as edashboard from "../../../data/Ecommerce/E-dashboard/edashboard";
import { Breadcrumb, Button, Card, Col, ListGroup, ProgressBar, Row, Table, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import api from "../../../api";
import { any } from "prop-types";

function ECDashboard() {

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState({});


  useEffect(() => {
    setValues(dadosrota.state)
    api.get(`/feedback/get?id_direction=${dadosrota.state.dadosUser?.id}`).then(r => {


      setValues(a => ({ ...a, receivedfeedbacksPessoais: r.data.feedbacks }))

    })
    api.get(`/feedback/get?id_user=${dadosrota.state.dadosUser?.id}`).then(r => {


      setValues(a => ({ ...a, sendfeedbacks: r.data.feedbacks }))

    })
  }, [dadosrota])




  // console.log(values)

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            Bem vindo a FeedCorp
          </h2>
          {/* <Breadcrumb>
            <Breadcrumb.Item href="#">
              Ecommerce
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Dashboard
            </Breadcrumb.Item>
          </Breadcrumb> */}
        </div>

        <div className="d-flex">
          <div className="justify-content-center">
            {/* <Button
              type="button"
              variant="white"
              className=" btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              type="button"
              variant="white"
              className=" btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button> */}
            <Button
              type="button"
              variant="primary"
              className=" my-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/dashboard/novo_feedback/`, { state: values }) }}
            >
              <i className="fe fe-download-cloud me-2"></i>
              Enviar Feedback
            </Button>

          </div>
        </div>
      </div>

      <Row className="row-sm">

        <Col sm={12} md={6} lg={6} xl={4}>
          <Card className="custom-card"
            style={{ cursor: 'pointer' }}
            onClick={() => { navegar(`${process.env.PUBLIC_URL}/dashboard/recebidos`, { state: values }) }}
          >
            <Card.Body>
              <div className="card-order ">
                {/* TITULO */}
                <label className="main-content-label mb-3 pt-1" style={{ cursor: 'pointer' }}>
                  Feedbacks Recebidos
                </label>
                <h2 className="text-end card-item-icon card-icon">
                  {/* ICONE */}
                  <i className="bi-person-hearts icon-size float-start text-primary"></i>
                  {/* VALOR VARIAVEL */}
                  <span className="font-weight-bold">{values?.receivedfeedbacksPessoais?.length}</span>
                </h2>
                {/* <p className="mb-0 mt-4 text-muted">
                  Monthly users<span className="float-end">50%</span>
                </p> */}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={6} xl={4}>
          <Card className="custom-card"
            style={{ cursor: 'pointer' }}
            onClick={() => { navegar(`${process.env.PUBLIC_URL}/dashboard/feitos`, { state: values }) }}
          >
            <Card.Body>
              <div className="card-order">
                {/* TITULO */}
                <label className="main-content-label mb-3 pt-1" style={{ cursor: 'pointer' }}>
                  Feedbacks Enviados
                </label>
                <h2 className="text-end">
                  {/* ICONE */}
                  <i className="bi-pencil-fill icon-size float-start text-primary"></i>
                  {/* VALOR VARIAVEL */}
                  <span className="font-weight-bold">{values?.sendfeedbacks?.length}</span>
                </h2>
                {/* <p className="mb-0 mt-4 text-muted">
                  Monthly Income<span className="float-end">$7,893</span>
                </p> */}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={12} xl={4}>
          <Card className="custom-card"
            style={{ cursor: 'pointer' }}
            onClick={() => { navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values }) }}
          >
            <Card.Body>
              <div className="card-order">
                {/* TITULO */}
                <label className="main-content-label mb-3 pt-1" style={{ cursor: 'pointer' }}>
                  Objetivos
                </label>
                <h2 className="text-end">
                  {/* ICONE */}
                  <i className="bi-check2-circle icon-size float-start text-primary"></i>
                  {/* VALOR VARIAVEL */}
                  <span className="font-weight-bold">{values?.okrscriados?.map(item => (item.progress < 100 ? item : false)).length}</span>
                </h2>
                {/* <p className="mb-0 mt-4 text-muted">
                  Monthly Profit<span className="float-end">$4,678</span>
                </p> */}
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card"
            style={{ cursor: 'pointer' }}
            onClick={() => { navegar(`${process.env.PUBLIC_URL}/dashboard/pesquisas`, { state: values }) }}
          >
            <Card.Body>
              <div className="card-order">
                
                <label className="main-content-label mb-3 pt-1" style={{ cursor: 'pointer' }}>
                  Pesquisas
                </label>
                <h2 className="text-end">
                  
                  <i className="bi-clipboard2-data-fill icon-size float-start text-primary"></i>
                  
                  <span className="font-weight-bold">4</span>
                </h2>
               
              </div>
            </Card.Body>
          </Card>
        </Col> */}

      </Row>
      {/* FRAGMENTO QUE ABRE AO CLICAR NO CARD */}
      <Outlet />

      <Row className="row-sm">
        {/* GRAFICO */}
        <Col xxl={12} xl={12} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0">
              <label className="main-content-label my-auto pt-2">
                Desempenho da empresa
              </label>
              <span className="d-block tx-12 mb-0 mt-1 text-muted">
                Gráfico de desempenho geral da corporação.
              </span>
            </Card.Header>
            <Card.Body>
              <div className="chart-wrapper">
                <Line
                  options={edashboard.Dashboard1}
                  data={edashboard.dashboard1}
                  className="barchart"
                  height="270"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </Fragment >
  );
}

ECDashboard.propTypes = {};

ECDashboard.defaultProps = {};

export default ECDashboard;
