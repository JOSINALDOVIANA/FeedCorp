import { Divider } from "@mui/material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, ProgressBar, Table } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { usuarioContext } from "../../../../../..";
import api from "../../../../../../api";

import user1 from "../../../../../../assets/img/users/1.jpg";

const ProgressoOKR = () => {

  const dadosrota = useLocation();

  const navegar = useNavigate();

  const [values, setValues] = useState({});

  useEffect(() => {


    setValues(dadosrota.state);

  }, [dadosrota.state]);

  // console.log(values)





  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Nome da Avaliação</h2>

          <Breadcrumb>
            <Breadcrumb.Item>Desempenho</Breadcrumb.Item>
            <Breadcrumb.Item
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado/`, { state: values }) }}
            >Avaliação por Resultados
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
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado/`, { state: values }) }}
            >
              <i className="bi bi-caret-left-fill"></i>
            </Button>

          </div>
        </div>

      </div>
      {/* <!-- End Page Header --> */}

      <div className="card custom-card">

        <div className="card-header border-bottom-0 d-flex flex-column">

          <label className="main-content-label my-auto pt-2">Avaliado: </label>
          <label className="main-content-label my-auto pt-2">Ciclo de avaliação: </label>

        </div>

        <div className="card-body pt-2 pb-0">
          <div className="table-responsive tasks">
            <Table className="table card-table table-vcenter text-nowrap border" borderless>
              <thead>
                <tr>
                  <th className="wd-lg-10p text-center">Indicador</th>
                  <th className="wd-lg-10p text-center">Meta</th>
                  <th className="wd-lg-10p text-center">Realizado</th>
                  <th className="wd-lg-20p text-center">Resultado</th>
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

ProgressoOKR.propTypes = {};

ProgressoOKR.defaultProps = {};

export default ProgressoOKR;
