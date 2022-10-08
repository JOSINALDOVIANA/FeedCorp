import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, ProgressBar } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { usuarioContext } from "../../../../../..";
import api from "../../../../../../api";

const AvPorResultados = () => {

  const dadosrota = useLocation();
  const navegar = useNavigate();
  const [values, setValues] = useState({});
  useEffect(() => {
    setValues(dadosrota.state);

    api.get(`avpr/getAll?id_user=${dadosrota.state.dadosUser.id}`).then(r => {
      setValues(a => ({ ...a, createAVPR: r?.data?.avaliacoes }))
    })
  }, [dadosrota.state]);


  console.log(values)

  function formatData(data) {
    const dat = new Date(data);
    const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
    // return `${dat.getDate()} / ${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1} / ${dat.getFullYear()}`
    return `${dat.getDate()} de ${meses[dat.getMonth()]} de ${dat.getFullYear()}`
  }

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Avaliação por resultados</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Desempenho</Breadcrumb.Item>
            <Breadcrumb.Item active>Avaliação por Resultados</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex">
          <div className="justify-content-center">

            <Button
              variant="primary"
              type="button"
              className="my-2 me-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/criar_avpr/`, { state: values }) }}
            >
              <i className="bi bi-clipboard-data-fill me-2"></i>
              Novo
            </Button>
          </div>
        </div>

      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Outlet />
      {/* <!-- End Row --> */}
      <div>
        <h2 className="main-content-title tx-20 mx-2">Ativos em minha unidade</h2>
        <Row className="row-sm">


          {values?.createAVPR?.map(avpr => (
            <Col lg={4} xl={4} xxl={4} md={6} >
              <Card key={avpr.id} className="custom-card"
                style={{ cursor: 'pointer' }}
                onClick={() => {

                  navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/progressoAVPR`, { state: { ...values, AVPRselect: avpr } })
                }}
              >
                <Card.Body className="iconfont text-center">
                  <div className="d-flex justify-content-between">

                    <div className="d-flex flex-column align-items-start">
                      <h4 className="mb-1" style={{textTransform: 'capitalize'}}>
                        {avpr.title}
                      </h4>
                      <h6 className="tx-16 tx-inverse tx-semibold mg-b-0 mb-2">
                        Avaliados(as): {avpr.paraquem.length} pessoas
                      </h6>
                      <h6 className={`tx-13 tx-inverse text-${(new Date(avpr.validity) - new Date()) / (1000 * 60 * 60 * 24) < 5 ? "danger" : "success"} mg-b-0 mb-2`} >
                        Validade: {formatData(avpr.validity)}
                        {/* {(new Date(avpr.validity)-new Date())/(1000 * 60 * 60 * 24)>5?"danger":"success"} */}
                      </h6>
                    </div>

                    <h2 className="d-flex flex-row">

                      <i className="bi-bar-chart-fill icon-size float-start text-primary"></i>
                    </h2>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
      </div>
    </Fragment>
  )
};

AvPorResultados.propTypes = {};

AvPorResultados.defaultProps = {};

export default AvPorResultados;
