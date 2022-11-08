import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Image } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import * as Modal from "./Components/Modal"
import api from "../../../api";

function MinhaCorporacao() {

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState({});

  useEffect(() => {
    if (!dadosrota.state) {
      navegar(`${process.env.PUBLIC_URL}/home`)
    }
    setValues(dadosrota.state);

    api.get(`unit/getAll?id=${dadosrota?.state?.unit?.id}`).then(r => {
      setValues(a => ({ ...a, unit: r.data.units }))
    })

  }, [dadosrota])

  // // console.log(values)

  return (
    <Fragment>

      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Minha Unidade: {values?.unit?.initials}</h2>
          <Breadcrumb>
            <Breadcrumb.Item> Minha Unidade </Breadcrumb.Item>
            <Breadcrumb.Item active >  Integrantes  </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>


      <Row className="row-sm">

        {values?.unit?.users?.map(user => (
          <Col key={user.id} md={6} sm={6} xl={3}>
            <Card className="card custom-card our-team">
              <Card.Body className="user-card text-center">
                <div className="picture avatar-lg online text-center">
                {!!user.url &&
                    <img
                      alt={user.name}
                      className="rounded-circle"
                      src={user.url}
                    />
                  }
                </div>
                <div className="text-center mt-3" style={{ textTransform: 'capitalize' }}>
                  <h5 className="pro-user-username text-dark mt-2 mb-0">
                    {user.name == values.dadosUser.name ? "VOCÊ" : user.name}
                  </h5>
                  <p className="pro-user-desc text-muted mb-1">
                    {user.cargo?.office}
                  </p>
                </div>
                <Modal.AlertProfileUnity userSelect={user} />
              </Card.Body>
            </Card>
          </Col>
        ))}


      </Row>

    </Fragment>
  );
}

MinhaCorporacao.propTypes = {};

MinhaCorporacao.defaultProps = {};

export default MinhaCorporacao;
