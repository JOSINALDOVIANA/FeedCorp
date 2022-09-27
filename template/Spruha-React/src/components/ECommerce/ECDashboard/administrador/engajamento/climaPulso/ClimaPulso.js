import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
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
      let pulsesCreate = !!values.pulsesCreate ? [...values.pulsesCreate, ...r.data.pulsesCreateUser] : [...r.data.pulsesCreateUser]

      let pulsesCreate_serial = []
      let ids = [];
      for (const iterator of pulsesCreate) {
        if (!ids.indexOf(iterator.id) >= 0) {
          pulsesCreate_serial.push(iterator)
        }
      }

      pulsesCreate = pulsesCreate_serial;

      setValues(a => ({ ...a, pulsesCreate, pulsesDirectUser }))

    })
    // return(()=>setValues({}))
  }, [dadosrota.state])
  console.log(values)

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
              variant="white"
              type="button"
              className=" btn-icon-text my-2 me-2"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/`, { state: values }) }}
            >
              <i className="bi bi-clipboard2-data me-2"></i> Lista
            </Button>

            <Button
              variant="primary"
              type="button"
              className="my-2 me-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/criar_clima_pulso`, { state: values }) }}
            >
              <i className="bi bi-clipboard-plus me-2"></i> Criar
            </Button>

            <Button
              variant="primary"
              type="button"
              className="my-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/configuracoes`, { state: values }) }}
            >
              <i className="bi bi-gear-fill" />
            </Button>
          </div>
        </div>

      </div>
      {/* <!-- End Page Header --> */}


      <div className="card custom-card">

        <div className="card-header border-bottom-0 d-flex justify-content-between">
          <label className="main-content-label my-auto pt-2">Lista de pesquisas</label>
          <span className="d-block tx-12 mt-2 mb-0 text-muted">
            Pulsos criados: {values?.pulsesCreate?.length}
          </span>
        </div>

        <div className="card-body pt-2 pb-0">
          <div className="table-responsive tasks">
            <Table className="table card-table table-vcenter text-nowrap border" borderless>
              <thead>
                <tr>
                  <th className="wd-lg-10p text-center">Nome da pesquisa</th>
                  <th className="wd-lg-40p text-center">Para onde foi direcionado</th>
                  <th className="wd-lg-10p text-center">Link da pesquisa</th>
                  <th className="wd-lg-10p text-center">Data da pesquisa</th>
                </tr>
              </thead>
              <tbody>

                {/* {values?.pulsesCreate?.map(pulse => (
                  <tr key={pulse.id}>
                    <td className="text-center">
                      {pulse.title}
                    </td>
                    <td className="text-center">

                    </td>

                    <td className="text-center">

                    </td>
                    <td className="text-center">
                      {pulse.updated_at}
                    </td>
                  </tr>
                ))} */}

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
