import { Divider } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, ProgressBar, Image } from 'react-bootstrap';
import {Grid} from "@mui/material";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


const Okr = () => {

  const dadosrota = useLocation();

  const navegar = useNavigate();

  const [values, setValues] = useState({});

  useEffect(() => {


    setValues(dadosrota.state);

  }, [dadosrota.state]);

  console.log(values)

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">{values?.okrselect?.objective}</h2>

          <Breadcrumb>
            <Breadcrumb.Item>Desempenho</Breadcrumb.Item>
            <Breadcrumb.Item
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/okr`, { state: values }) }}
            >OKR
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Progresso</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex">
          <div className="justify-content-center">

            <Button
              variant="primary"
              type="button"
              className="my-2 me-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values }) }}
            >
              Voltar
            </Button>

          </div>
        </div>

      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Outlet />
      {/* <!-- End Row --> */}
      <Col sm={12} md={12} lg={12} xl={12}>
        <Card className="custom-card top-inquiries">
          <Card.Header className="border-bottom-0 pb-0">
            <div>
              <div className="d-flex">
                <label className="main-content-label my-auto pt-2">
                  Chaves
                </label>
              </div>
              <span className="d-block tx-12 mt-2 mb-0 text-muted">
                Chaves do objetivo em andamento
              </span>
            </div>
          </Card.Header>
          <Card.Body>

            {values?.okrselect?.keys?.map(chave => (
              <Grid key={chave.id}>

                <Row className="d-flex justify-content-between align-items-center mt-3">
                  <Col xs={4} md={4} lg={4}>
                    <span >{chave.description}</span>
                  </Col>

                  <Col xs={4} md={5} lg={5}>
                    <ProgressBar
                      variant="info"
                      className="progress ht-6 my-auto"
                      animated={true}
                      min={0}
                      max={100}
                      now={chave.status}
                    >
                    </ProgressBar>

                    <span className="tx-13">
                      <b>{chave.status + "%"}</b>
                    </span>
                  </Col>

                  <Col xs={4} md={3} lg={3}
                  className="d-flex justify-content-center align-items-center mb-2">
                    <img
                      alt="avatar"
                      className="rounded-circle avatar mx-1"
                      src={chave.user[0].url}
                    />
                    {/* <Image src={chave.}></Image> */}
                    <div>
                      <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                        {chave.user[0].name}
                      </h6>
                    </div>
                  </Col>

                </Row>
                <Divider className="mt-1" />
              </Grid>
            ))}

          </Card.Body>

        </Card>
      </Col>
    </Fragment>
  )
};

Okr.propTypes = {};

Okr.defaultProps = {};

export default Okr;



{/* <Row
              // style={{ cursor: 'pointer' }}
              className="mt-3"
            // onClick={() => { navegar(`${process.env.PUBLIC_URL}/okr`, { state: values }) }}
            >
              <Col sm={5} className="main-content-label">
                <span>Chave 1</span>
              </Col>

              <Col sm={6} className="col-4 my-auto">
                <ProgressBar
                  className="progress ht-6 my-auto"
                  now={90}
                ></ProgressBar>
              </Col>
              <Col sm={1} className="col-4">
                <div className="d-flex">
                  <span className="tx-13">
                    <b>90%</b>
                  </span>
                </div>
              </Col>
            </Row> */}

{/* NÃO MEXE */ }
{/* <div class="d-flex justify-content-between mt-3 mx-2">
              <span>SubChave 1</span>
              <Col sm={6} className="col-4 my-auto">
                <ProgressBar
                  className="progress ht-6 my-auto"
                  now={50}
                ></ProgressBar>
                <span className="tx-13">
                  <b>50%</b>
                </span>
              </Col>
              <div>
                <img
                  alt="avatar"
                  className="rounded-circle avatar-md me-1"
                  src={user1}
                />
                <span>Nome</span>
              </div>
            </div>

            <Divider className="mt-2 mb-4" /> */}