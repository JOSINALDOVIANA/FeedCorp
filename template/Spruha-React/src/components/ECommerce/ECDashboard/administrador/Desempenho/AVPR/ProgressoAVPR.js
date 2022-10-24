import { Divider } from "@mui/material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, ProgressBar, Table } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { deleteQuestionAlert, deleteSucessAlert } from "../../../Components/Alerts"
import api from "../../../../../../api";


const ProgressoOKR = () => {

  const dadosrota = useLocation();
  const navegar = useNavigate();
  const [values, setValues] = useState({});

  useEffect(() => {

    setValues(dadosrota.state);

  }, [dadosrota.state]);

  useEffect(() => {
    let paraquem = dadosrota.state.AVPRselect?.paraquem
    let paraquem_serial = []
    let items = dadosrota.state.AVPRselect?.items


    for (let user of paraquem) {
      let items_serial = []
      for (let item of items) {
        for (const resposta of item.resposta) {
          if (resposta.id_user == user.id) {
            items_serial.push({ ...item, resposta });
          }
        }
      }
      paraquem_serial.push({ ...user, respostas: items_serial })
    }

    paraquem = paraquem_serial

    // console.log(items)
    // console.log(paraquem)
    setValues(a => ({ ...a, AVPRselect: { ...a.AVPRselect, paraquem } }))
  }, [dadosrota])

  console.log(values)
  function formatData(data) {
    const dat = new Date(data);
    const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
    // return `${dat.getDate()} / ${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1} / ${dat.getFullYear()}`
    return `${dat.getDate()} de ${meses[dat.getMonth()]} de ${dat.getFullYear()}`
  }

  //DPS REPLICAR EM AVPR_CONCLUIDO
  function resposta(resp) {
    // console.log(resp)
    if (resp.min) {
      let por = Math.round((resp.resposta.answer / resp.goal) * 100, -1);
      if (100 - por < 0) {
        return (
          <div className="text-success">
            <i className="bi bi-arrow-up text-success"></i>
            <span >{(100 - por) * (-1)}</span> %
          </div>)
      } else {
        if (por < 100) {
          return (
            <div className="text-danger tx-15">
              <i className="bi bi-arrow-down"></i>
              <span>{por}</span> %
            </div>
          )
        }
        return (
          <div className="text-success tx-15">
            <i className="bi bi-arrow-right"></i>
            <span >{por}</span> %
          </div>
        )
      }


    }
    return ("em desenvolvimento")
  }

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">{values?.AVPRselect?.title.toUpperCase()}</h2>

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

      {values?.AVPRselect?.paraquem?.map(user => (


        <div key={user.id} className="card custom-card">

          <Card.Header className="border-bottom-0 d-flex justify-content-between">

            <div className="d-flex flex-column">
              <label className="main-content-label my-auto pt-2">Avaliado: {user.name} </label>
              <label className="main-content-label my-auto pt-2">
                Ciclo de avaliação: {formatData(values?.AVPRselect?.updated_at)} à {formatData(values?.AVPRselect?.validity)}</label>
            </div>

          </Card.Header>

          <div className="card-body pt-2 pb-4">
            <div className="table-responsive tasks">
              <Table responsive hover className="card-table table-vcenter text-nowrap mb-0 border hover" >
                <thead>
                  <tr>
                    <th className="wd-lg-15p text-center">Indicador</th>
                    <th className="wd-lg-10p text-center">Meta</th>
                    <th className="wd-lg-10p text-center">Realizado</th>
                    <th className="wd-lg-10p text-center">Resultado</th>
                    <th className="wd-lg-10p text-center">Deletar</th>

                  </tr>
                </thead>
                <tbody>
                  {user?.respostas?.map((resp, index) => (
                    <tr key={index} data-index={index}>
                      <td className="text-center">{resp.indicator}</td>
                      <td className="text-center">{resp.goal}</td>
                      <td className="text-center">{resp.resposta.answer}</td>
                      <td className="text-center">{resposta(resp)}</td>
                      <td className="text-center">
                        <Button variant="link"
                          onClick={() => {
                            deleteQuestionAlert().then(async (result) => {
                              if (result.isConfirmed) {
                                await api.delete(`item_answer_user/delete?id=${resp.resposta.id}`).then(r => {
                                  console.log(r)
                                  if (r.data.status) {
                                    deleteSucessAlert()
                                    navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado/`, { state: values })
                                  }
                                })
                              }
                            })
                          }}
                        >
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


      ))}
    </Fragment>
  )
};

ProgressoOKR.propTypes = {};

ProgressoOKR.defaultProps = {};

export default ProgressoOKR;
