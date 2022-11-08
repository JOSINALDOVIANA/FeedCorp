import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button,  Table,  } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import {deleteQuestionAlert, deleteSucessAlert} from "../../../Components/Alerts"
import api from "../../../../../../api";

const ClimaPulso = () => {

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState({});

  useEffect(() => {

    setValues(dadosrota.state);


  }, [dadosrota.state])

  useEffect(() => {
    api.get(`pulses/get?id_user=${dadosrota.state.dadosUser.id}`).then(r => {
      let pulsesDirectUser = r.data.pulsesDirectUser;
      let pulsesCreate = r.data.pulsesCreateUser

      setValues(a => ({ ...a, pulsesCreate, pulsesDirectUser }))
    })
    // return(()=>setValues({}))
  }, [dadosrota.state])
  // // console.log(values)

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
          <h2 className="main-content-title tx-24 mg-b-5">Clima Pulso</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Engajamento</Breadcrumb.Item>
            <Breadcrumb.Item active>Clima Pulso</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex">
          <div className="justify-content-center">

            <Button
              variant="primary"
              type="button"
              className="my-2 me-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/criar_clima_pulso`, { state: values }) }}
            >
              <i className="bi bi-clipboard-plus me-2"></i> Criar
            </Button>

            <Button
              variant="primary"
              type="button"
              className="my-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/configuracoes`, { state: values }) }}
            >
              <i className="bi bi-gear-fill" />
            </Button>
          </div>
        </div>

      </div>
      {/* <!-- End Page Header --> */}


      <div className="card custom-card">

        <div className="card-header border-bottom-0 d-flex justify-content-between">
          <label className="main-content-label my-auto pt-2">Pesquisas da minha unidade</label>
          <span className="d-block tx-12 mt-2 mb-0 text-muted">
            Pulsos criados: {values?.pulsesCreate?.length}
          </span>
        </div>

        <div className="card-body pt-2 pb-0">
          <div className="table-responsive tasks">
            <Table className="table card-table table-vcenter text-nowrap table-bordered">
              <thead>
                <tr>
                  <th className="wd-lg-20p text-center">Nome da pesquisa</th>
                  {/* <th className="wd-lg-20p text-center">Para onde foi direcionado</th> */}
                  <th className="wd-lg-10p text-center">link</th>
                  <th className="wd-lg-10p text-center">data</th>
                  <th className="wd-lg-5p text-center">Ações</th>
                </tr>
              </thead>
              <tbody>

                {values?.pulsesCreate?.map(pulse => (
                  <tr key={pulse.id}>
                    <td className="text-center">
                      {pulse.title}
                    </td>

                    <td className="text-center">
                      <Button variant="link"
                        onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/resultado/`, { state: { ...values, selectPulse: pulse } }) }}
                      >
                        Resultados
                      </Button>
                    </td>
                    <td className="text-center">
                      {formatData(pulse.updated_at)}

                    </td>
                    <td className="d-flex justify-content-center">
                      <Button variant="link" onClick={() => {
                        deleteQuestionAlert()
                        .then((result) => {
                          if (result.isConfirmed) {
                            deleteSucessAlert()
                            api.delete(`pulses/delete?id=${pulse.id}`).then(resp => {
                              if (resp.data.status) {
                                navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/`, { state: values })
                              }
                            })
                          }
                        })
                      }}>
                        <i className="bi bi-trash-fill"></i>
                      </Button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </Table>
          </div>
        </div>
      </div>

    </Fragment>
  )
};

ClimaPulso.propTypes = {};

ClimaPulso.defaultProps = {};

export default ClimaPulso;
