import { Divider } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, ProgressBar } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteQuestionAlert, deleteSucessAlert } from "../../../Components/Alerts"
import api from "../../../../../../api";


const Okr = () => {

  const dadosrota = useLocation();

  const navegar = useNavigate();

  const [values, setValues] = useState({});

  useEffect(() => {


    setValues(dadosrota.state);


    let keys = dadosrota.state.okrselect.keys.map(key => {
      let user = key.user[0]
      // user.url=user.url.url;
      return { ...key, user }
    })

    setValues(a => ({ ...a, okrselect: { ...a.okrselect, keys } }));
  }, [dadosrota.state]);

  console.log(values)

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            {values?.okrselect?.objective?.toUpperCase()}
          </h2>

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
              className="my-2 me-2 btn-icon"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values }) }}
            >
              <i className="bi bi-caret-left-fill"></i>
            </Button>

          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      <Card>
        <Card.Header className="card-header ms-1">
          <div className="d-flex justify-content-between">

            <div>
              <h2 className="main-content-title tx-20 mb-1">Objetivos</h2>
              <h4 className="tx-12 text-muted">
                Chaves do objetivo em andamento
              </h4>
            </div>

            <div className="mb-1">
              <Button
                variant="danger"
                type="button"
                className="me-2 btn-icon"
                onClick={() => {
                  deleteQuestionAlert().then((result) => {
                    if (result.isConfirmed) {
                      api.delete(`okrs/delete?id=${values?.okrselect?.id}`).then(r => {
                        if (r.data.status) {
                          deleteSucessAlert()
                          navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values })
                        }
                      })
                    }
                  })
                  // navegar(`${process.env.PUBLIC_URL}/okr_unidade/`, { state: values }) 
                }}
              >
                <i class="bi bi-trash2-fill"></i>
              </Button>
            </div>
          </div>
        </Card.Header>

        <Card.Body>

          {values?.okrselect?.keys?.map(chave => (
            <div key={chave.id}>

              <table className="table table-hover m-b-0 transcations mt-2">
                <tbody>
                  <tr>
                    <td className="wd-5p">
                      <div className="main-img-user avatar-md">
                        {chave.user.url && <img
                          alt="avatar"
                          className="rounded-circle avatar mx-1"
                          src={chave?.user?.url?.url}
                        />}
                        
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-middle ms-3">
                        <div className="d-inline-block">
                          <h6 className="tx-13 tx-inverse tx-semibold mg-b-0" >
                            {chave?.user?.name?.toUpperCase()}
                          </h6>
                          <span className="mb-0 text-muted">{chave.description}</span>
                        </div>
                      </div>
                    </td>
                    <td className="wd-40p">

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

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}

        </Card.Body>

      </Card>

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