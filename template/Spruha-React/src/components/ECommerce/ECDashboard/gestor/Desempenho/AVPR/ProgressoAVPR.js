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

 async function save(answer){
  await api.put(`item_answer_user/update`,{...answer})
  }

  function formatData(data) {
    const dat = new Date(data);
    const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
    // return `${dat.getDate()} / ${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1} / ${dat.getFullYear()}`
    return `${dat.getDate()} de ${meses[dat.getMonth()]} de ${dat.getFullYear()}`
  }
 function resposta(resp){
  let answer=resp;
  // console.log(answer)
  if(resp.min){

    let por=Math.round((resp.resposta.answer/resp.goal)*100,-1);
    // if(100-por<0){
      
      //   // console.log(answer)
      //   return(
        //   <div  className="text-danger">
        //     <i className="bi bi-arrow-up"></i>
        //     <span >{por}</span>
        //   </div>)
        // }
      if(por<100){
        answer.resposta.result=por;
        save(answer.resposta);
        return (
          <div  className="text-danger">
          <i className="bi bi-arrow-up"></i>
          <span >{por}</span>
         </div>
        )        
      }
      if(por>=100){
        answer.resposta.result=100;
        save(answer.resposta);
        return (
          <div  className="text-success">
          {100==por?<i className="bi bi-arrow-right-short"></i>:<i className="bi bi-arrow-up"></i>}
          <span >{por}</span>
         </div>)
      }
      // return (
      //   <div  className="text-success">
      //   <i className="bi bi-arrow-right-short text-success"></i>
      //   <span >{por}</span>
      //  </div>
      // )
       
  }
  if(resp.max){
    
    let por=Math.round((resp.resposta.answer/resp.goal)*100,-1);
    // console.log(por)
    if(100<por||por==100){
      answer.resposta.result=100<por?100-(por-100):por;
        save(answer.resposta);
      return(
      <div  className={por==100?"text-success":"text-danger"}>
        { por==100? <i className="bi bi-arrow-right-short "></i>:<i className="bi bi-arrow-up "></i>}
        <span  >{por}</span>
      </div>)
    }

      if(por<100){
        answer.resposta.result=por;
        save(answer.resposta);
        return (
          <div  className="text-success">
          <i className="bi bi-arrow-up "></i>
          <span >{por}</span>
         </div>
        )
      }
     

    
  }
}
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">{values?.AVPRselect?.title}</h2>

          <Breadcrumb>
            <Breadcrumb.Item>Desempenho</Breadcrumb.Item>
            <Breadcrumb.Item
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/`, { state: values }) }}
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
              className="my-2 me-2 btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/`, { state: values }) }}
            >
              <i className="bi bi-caret-left-fill"></i>
            </Button>

          </div>
        </div>

      </div>
      {/* <!-- End Page Header --> */}

      {values?.AVPRselect?.paraquem?.map(user => (
        <div key={user.id} className="card custom-card">

          <div className="card-header border-bottom-0 d-flex flex-column">

            <label className="main-content-label my-auto pt-2">Avaliado: {user.name} </label>
            <label className="main-content-label my-auto pt-2">Ciclo de avaliação: {formatData(values?.AVPRselect?.updated_at
            )} à {formatData(values?.AVPRselect?.validity)}</label>

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

                  {user?.respostas?.map((resp, index) => (
                    <tr key={index} data-index={index}>
                      <td className="text-center">{resp.indicator}</td>
                      <td className="text-center">{resp.goal} ({resp.max?"MÁXIMO":"MÍNIMO"})</td>
                      <td className="text-center">{resp.resposta.answer}</td>
                      <td className="text-center">{resposta(resp)}%</td>
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
