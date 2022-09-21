import React, { Fragment, useContext, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../../../..";
import api from "../../../../api";

// import { Container } from './styles';

export default  () => {

  const dadosrota = useLocation();

  const navegar = useNavigate();
  const [values, setValues] = useState({})
  const [avprcreate, setAvpc] = useState([])
  useEffect(() => {
    setValues(dadosrota.state)
  }, [dadosrota])
  useEffect(() => {
    api.get(`/avpr/gettwu?id_user=${dadosrota.state.dadosUser.id}`).then(r => {
      // console.log(r.data);
      // setAvpc()
      let avpr = r.data.avaliações;
      for (const index in avpr) {
        api.get(`/avpr/getone?id=${avpr[index].id}`).then(r2 => {
          avpr[index] = r2.data.avaliação;
        })
      }


      setAvpc(avpr);
      setValues(a => ({ ...a, avprcreate }))
    })

  }, [dadosrota])
  function formatData(data){
   const dat=new Date(data);
   const meses=["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]
    // return `${dat.getDate()} / ${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1} / ${dat.getFullYear()}`
    return `${dat.getDate()} de ${meses[dat.getMonth()]} de ${dat.getFullYear()}`
  }
  return (
    <Fragment>

      <div className="card custom-card">

        <div className="card-header border-bottom-0 d-flex justify-content-between">

          <label className="main-content-label my-auto pt-2">Pesquisas feitas</label>


          <div className="d-flex align-items-center">
            <Button
              type="button"
              variant="primary"
              className="btn-icon-text"
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/dashboard`, { state: values }) }}
            >
              <i className="fe fe-x"></i>
            </Button>
          </div>
        </div>

        <div className="card-body pt-2 pb-0">
          <div className="table-responsive tasks">
            <Table className="table card-table table-vcenter text-nowrap border" borderless>
              <thead>
                <tr>
                  <th className="wd-lg-10p text-center">Título</th>
                  <th className="wd-lg-10p text-center">Data de realização</th>
                  
                  {/* <th className="wd-lg-20p text-center">Change</th>
                                    <th className="wd-lg-20p text-center">Date</th> */}
                  {/* <th className="wd-lg-40p text-center">Comentário</th> */}
                </tr>
              </thead>
              <tbody>
                {avprcreate.map((avpr, index) => (
                    <tr key={index} data-index={index}>
                      {/* <td className="text-center">{avpr.id}</td> */}
                      
                      <td className="text-center">{avpr.title}</td>
                      <td className="text-center">{formatData(avpr.updated_at)}</td>
                      <td className="text-center">
                        <Link to="#" className={`text-${""}`}>
                          algo
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

