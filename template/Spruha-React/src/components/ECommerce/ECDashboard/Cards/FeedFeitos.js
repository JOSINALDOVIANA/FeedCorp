import React, { Fragment, useEffect, useState } from "react";
import { Card, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../../../..";
import { Basicdatatable } from "./dataTabelas/FeedFeitosDataTabela.js";
import api from "../../../../api.js"

// import { Container } from './styles';

export default function FeedFeitos() {

  const dadosrota = useLocation();

  const navegar = useNavigate();
  const [values, setValues] = useState(dadosrota?.state)
  const [feitos, setfeitos] = useState(dadosrota?.state?.sendfeedbacks)
  const [data, setData] = useState([]);
  useEffect(() => {

    async function getData() {
      let L = []
      for (let index = 0; index < feitos.length; index++) {
        const iterator = array[index];
        let obj = {};
        await api.get(`/user/getAll?id=${iterator?.id_direction}`).then(r1 => {
          const d = r1?.data?.Users[0]
          console.log(d)
          obj.destinatário = d["name"];
        })
        await api.get(`/unit/getAll?id=${iterator?.id_unity}`).then(r2 => {
          const u = r2?.data?.units[0]
          obj.unidade = u?.initials;
        })
        obj.comentario = iterator.feedback;
        obj.data = formatData(iterator.updated_at);

        L.push(obj)

      }
      setData(L)
    }

    getData()






  }, [])
  console.log(feitos)
  console.log(data)

  function formatData(d) {
    const dat = new Date(d);
    const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
    // return `${dat.getDate()} / ${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1} / ${dat.getFullYear()}`
    return `${dat.getDate()} de ${meses[dat.getMonth()]} de ${dat.getFullYear()}`
  }

  return (
    <Fragment>

      <div className="card custom-card">


        <Row className=" row-sm">
          <Col md={12} lg={12} xl={12}>
            <Card className=" custom-card">

              <div className="card-header border-bottom-0 d-flex justify-content-between">

                <label className="main-content-label my-auto pt-2">Seus Feedbacks</label>


                <div className="d-flex align-items-center">
                  <Button
                    type="button"
                    variant="primary"
                    className="btn-icon-text"
                    onClick={() => { navegar(`${process.env.PUBLIC_URL}/dashboard`, { state: dadosrota.state }) }}
                  >
                    <i className="fe fe-x"></i>
                  </Button>
                </div>
              </div>

              <Card.Body className="card-body">


                {/* <Basicdatatable data={data} /> */}
              </Card.Body>
            </Card>

            {/* <!-- Row End --> */}
          </Col>
        </Row>
      </div>

    </Fragment>
  );
}

