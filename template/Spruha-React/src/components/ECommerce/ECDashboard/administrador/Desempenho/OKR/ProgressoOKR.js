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

    let keys = dadosrota?.state?.okrselect?.keys?.map(key => {
      // let user = key.user
      // user.url=user.url.url;
      return { ...key, user: key.user[0] }
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
          <div className="justify-content-center">

            <Button
              variant="danger"
              type="button"
              className="my-2 me-2 btn-icon"
              onClick={async () => { 
                deleteQuestionAlert().then(async (result) => {
                  if (result.isConfirmed) {
                    await api.delete(`okrs/delete?id=${values?.okrselect?.id}`); 
                    deleteSucessAlert()
                    navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values })   
                  }
                })
              
              }}
            >
              <i className="bi bi-trash2-fill"></i>
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