import React, { Fragment, useContext, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Card } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { usuarioContext } from "../../../../../..";

const Okr = () => {

  const dadosrota = useLocation();
  const location = useLocation();
  const navegar = useNavigate();
  const { values, setValues } = useContext(usuarioContext);
  useEffect(() => {
    setValues(dadosrota.state)
  }, [dadosrota])

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">OKR</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Desempenho</Breadcrumb.Item>
            <Breadcrumb.Item active>OKR</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex">
          <div className="justify-content-center">

            <Button
              variant="primary"
              type="button"
              className="my-2 me-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/okr/criar_okr`, { state: values }) }}
            >
              <i className="bi bi-clipboard-plus me-2"></i> 
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

          {values?.units.map(unit => (
            <Col key={unit.id} lg={12} xl={12} xxl={12} md={6} >
              <Card className="custom-card"
                style={{ cursor: 'pointer' }}
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

                  <div className="d-flex text-muted tx-13">
                    {/* <span className="text-danger me-2 font-weight-bold">{unit.cols}</span> */}
                    {unit.description}
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

Okr.propTypes = {};

Okr.defaultProps = {};

export default Okr;
