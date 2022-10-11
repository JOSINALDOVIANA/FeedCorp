import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, ListGroup, ProgressBar, Row, Table, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import api from "../../../../../api";

function EditUnity() {

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState(dadosrota.state);
  const [carregados, setCarregados] = useState(false)

  useEffect(() => {
    setValues(dadosrota.state)

  }, [dadosrota.state])
  // console.log(values)

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            Editar Unidade
          </h2>
          <Breadcrumb>
            <Breadcrumb.Item
              onClick={() => {
                navegar(`${process.env.PUBLIC_URL}/unidades`, { state: values })
              }}>
              Unidades
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Editar Unidade
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex">
          <div className="justify-content-center">  
            <Button
              type="button"
              variant="white"
              className=" btn-icon-text my-2"
              onClick={() => {
                navegar(`${process.env.PUBLIC_URL}/unidades`, { state: values })
              }}
            >
              <i className="bi bi-caret-left-fill"></i>
            </Button>
          </div>
        </div>
      </div>

      <Row className="row-sm">



      </Row>

    </Fragment >
  );
}

EditUnity.propTypes = {};

EditUnity.defaultProps = {};

export default EditUnity;
