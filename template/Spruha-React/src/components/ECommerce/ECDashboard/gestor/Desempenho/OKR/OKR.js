import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, ProgressBar } from 'react-bootstrap';
import {  useLocation, useNavigate } from 'react-router-dom';
import api from "../../../../../../api";

const Okr = () => {

  const dadosrota = useLocation();
  const navegar = useNavigate();
  const [values, setValues] = useState({});
  useEffect(() => {
    setValues(dadosrota.state);
  }, [dadosrota]);

  useEffect(() => {
    api.get(`/okrs/getTwu?id_user=${dadosrota?.state?.dadosUser?.id}`).then(async r => {
      let v = values;
      let okrs = r?.data?.okrs;
      // let k=[].length
      for (const index1 in okrs) {
        let process = 0
        for (const index2 in okrs[index1].keys) {
          process = process + okrs[index1].keys[index2].status;
        }
        let keys = okrs[index1].keys
        okrs[index1].progress = process / keys.length
        // // console.log(keys.length)
        if (okrs[index1].progress >= 100) {
          okrs[index1].concluded = true
        }
        await api.put(`/okrs/update`, { ...okrs[index1] });
      }
      v = { ...v, okrscriados: okrs }
      setValues(a => ({ ...a, okrscriados: okrs }))


      carregarUsersKeys(v)
    })
  }, [dadosrota])

  function carregarUsersKeys(valores) {
    let okrs = valores?.okrscriados;
    let okrs_serial = okrs?.map(okr => {

      let keys = okr.keys.map(key => {
        let user = [];
        api.get(`/user/getAll?id=${key.id_user}`).then(r => {
          // // console.log(r)
          user.push({ ...r?.data?.Users })

        })
        return { ...key, user }
      });
      return { ...okr, keys }
    });

    // // console.log(okrs_serial)
    setValues(a => ({ ...a, okrscriados: okrs_serial }))
  }
  // // console.log(values)



  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">OKR - Objective Key Result</h2>
          <Breadcrumb>
            <Breadcrumb.Item>Desempenho</Breadcrumb.Item>
            <Breadcrumb.Item active>OKR - Unidade</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex">
          <div className="justify-content-center">

            <Button
              variant="primary"
              type="button"
              className="my-2 me-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/okr_unidade/criar_okr/`, { state: values }) }}
            >
              <i className="bi bi-clipboard-plus me-2"></i>
              Novo objetivo
            </Button>
          </div>
        </div>

      </div>
      {/* <!-- End Page Header --> */}


        <div className="border-bottom-0 pb-0 d-flex mb-2">
          <div>
            <h2 className="main-content-title tx-20 mb-1">Ativos em minha unidade</h2>
            <span className="d-block tx-12 mb-2 text-muted">
              Okrs de sua unidade
            </span>
          </div>
        </div>

        <Row className="row-sm">

          {values?.okrscriados?.map(okr => (
            <Col key={okr.id} lg={4} xl={4} xxl={4} md={4} >
              <Card className="custom-card shadow-sm"
                style={{ cursor: 'pointer' }}
                onClick={async () => {

                  navegar(`${process.env.PUBLIC_URL}/okr_unidade/progresso_okr`, { state: { ...values, okrselect: okr } })
                }} P
              >
                <Card.Body className="iconfont text-center">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-start">
                      <h4 className="mb-1" style={{ textTransform: 'capitalize' }}>
                        {okr.objective}
                      </h4>
                      {/* <h6 className="tx-13 tx-inverse tx-semibold mg-b-0 mb-2">
                        Criado por {okr.id_user}
                      </h6> */}
                    </div>

                    <h2 className="d-flex flex-row">
                      <span className="font-weight-bold px-1 text-primary">{okr.keys.length}</span>
                      {/* ICONE */}
                      <i className="bi-people-fill icon-size float-start text-primary"></i>
                    </h2>
                  </div>

                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Progresso</span> <span>{(okr.progress) ? (okr.progress) : 0}%</span>
                    </div>
                    <div className="progress progress-sm mb-1">
                      <ProgressBar
                        animated={true}
                        className=" wd-100p"
                        striped
                        variant="primary"
                        now={okr.progress}
                        role="progressbar"
                      ></ProgressBar>
                    </div>
                  </div>
                  {/* {values?.okrscriados?.keys?.user?.map(img => (
                    <div key={img.id}>
                      <img
                        alt="avatar"
                        className="rounded-circle avatar mx-1"
                        src={img.image.url}
                      //okr.keys[0].users[0].url
                      />
                    </div>
                  ))} */}
                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>

    </Fragment>
  )
};

Okr.propTypes = {};

Okr.defaultProps = {};

export default Okr;
