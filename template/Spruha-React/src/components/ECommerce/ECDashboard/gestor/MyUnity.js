import React, { Fragment, useContext, useEffect } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Image } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { usuarioContext } from "../../../..";
import api from "../../../../api";

function MinhaCorporacao() {

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const { values, setValues } = useContext(usuarioContext);

  useEffect(() => {
    if (!dadosrota.state) {
      navegar(`${process.env.PUBLIC_URL}/home`)
    }
    setValues(dadosrota.state);

    api.get(`unit/getAll?id=${dadosrota?.state?.unit?.id}`).then(r=>{
      setValues(a=>({...a,unit:r.data.units}))
    })

  }, [dadosrota])

  console.log(values)

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

        {/* <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant="white"
              type="button"
              className="white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              variant="white"
              type="button"
              className="white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button
              variant="primary"
              type="button"
              className=" my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div> */}

      </div>


      <Row className="row-sm">
        
        {values?.unit?.users?.map(user=>(
          <Col key={user.id} sm={12} md={6} xl={3}>
          <Card className="custom-card border">
            <Card.Body className="text-center">
              <div className="user-lock text-center">
               {!!user.url &&  <Link to="#">
                {/* <b-avatar 
                variant="primary" 
                text={user?.name}
                src={user?.url}
                >

                </b-avatar> */}
                  <Image
                    alt={user.name}
                    className="rounded-circle"
                  src={user.url}
                  />
                </Link>}
              </div>
              <Link to="#">
                <h4 className=" mb-1 mt-3 main-content-label">
                  {user.name==values.dadosUser.name?"VOCÊ":user.name}
                </h4>
              </Link>
              <h5 className="mb-2 mt-2 text-muted tx-14">
                {user.permission}
              </h5>
              {/* <p className="text-muted text-center mt-1">
                Lorem Ipsum is not simply popular belief
                Contrary.
              </p> */}
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
