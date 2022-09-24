import React, { Fragment, useContext, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Card, Table } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { usuarioContext } from '../../../../../..';
const ClimaPulso = () => {

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

          <label className="main-content-label my-auto pt-2">Lista das pesquisas de Clima Pulso</label>


          {/* <div className="d-flex align-items-center">
            <Button
              type="button"
              variant="primary"
              className="btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso`, { state: values }) }}
            >
              <i className="fe fe-x me-2"></i>
              Fechar
            </Button>
          </div> */}
        </div>

        <div className="card-body pt-2 pb-0">
          <div className="table-responsive tasks">
            <Table className="table card-table table-vcenter text-nowrap border" borderless>
              <thead>
                <tr>
                  <th className="wd-lg-10p text-center">Nome da pesquisa</th>
                  <th className="wd-lg-40p text-center">Para quem foi direcionado</th>
                  <th className="wd-lg-10p text-center">Link da pesquisa</th>
                </tr>
              </thead>
              <tbody>
                {/* {TRADINGACTIVITIES.map((list, index) => (
                    <tr key={index} data-index={index}>
                      <td className="text-center">{list.id}</td>
                      <td className="coin_icon d-flex">
                        <div className="cryp-icon bg-primary me-2">
                          <i className={`cf cf-${list.icon} text-center`} />
                        </div>
                        <span className=" my-auto text-center">
                          {list.name} <b>{list.title}</b>
                        </span>
                      </td>
                      <td className="text-center">{list.price}</td>
                      <td className="text-center">
                        <span className={`text-${list.changeStatus} `}>{list.change}</span>
                      </td>
                      <td className="text-center">{list.date}</td>
                      <td className="text-center">
                        <Link to="#" className={`text-${list.status}`}>
                          {list.statusText}
                        </Link>
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
