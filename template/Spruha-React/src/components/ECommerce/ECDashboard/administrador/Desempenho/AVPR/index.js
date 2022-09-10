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
    carregarUsersKeys(dadosrota.state)
  }, [dadosrota.state]);

  function carregarUsersKeys(valores) {
    let okrs = valores.okrscriados;
    let okrs_serial = okrs.map(okr => {

      let keys = okr.keys.map(key => {
        let user = [];
        api.get(`/user/getAll?id=${key.id_user}`).then(r => {
          user.push({ ...r.data.Users[0] })
        })
        return { ...key, user }
      });
      return { ...okr, keys }
    });

    // console.log(okrs_serial)
    setValues(a => ({ ...a, okrscriados: okrs_serial }))
  }
  //  console.log(values)



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
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado/criar_avpr/`, { state: values }) }}
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
        <h2 className="main-content-title tx-20 mx-2">Ativos</h2>
        <Row className="row-sm">

          {/* {values?.okrscriados?.map(okr => ( */}
          <Col
            // key={okr.id}
            lg={4} xl={4} xxl={4} md={6} >
            <Card className="custom-card"
              style={{ cursor: 'pointer' }}
            // onClick={async () => {

            //   navegar(`${process.env.PUBLIC_URL}/okr/progresso`, { state: { ...values, okrselect:okr } })
            // }}
            >
              <Card.Body className="iconfont text-center">
                <div className="d-flex justify-content-between">

                  <div className="d-flex flex-column align-items-start">
                    <h4 className="mb-1">
                      Atendimento do mês
                    </h4>
                    <h6 className="tx-16 tx-inverse tx-semibold mg-b-0 mb-2">
                      Avaliado: Fulano
                    </h6>
                    <h6 className="tx-13 tx-inverse text-muted mg-b-0 mb-2">
                      Validade: 01/01/2022
                    </h6>
                  </div>

                  <h2 className="d-flex flex-row">
                    
                    <i className="bi-bar-chart-fill icon-size float-start text-primary"></i>
                  </h2>
                </div>

              </Card.Body>
            </Card>
          </Col>
          {/* ))} */}

        </Row>
      </div>
    </Fragment>
  )
};

AvPorResultados.propTypes = {};

AvPorResultados.defaultProps = {};

export default AvPorResultados;
