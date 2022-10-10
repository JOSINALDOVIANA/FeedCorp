import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, ListGroup, ProgressBar, Row, Table, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import api from "../../../../../api";

function EditUser() {

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
            Editar usuários
          </h2>
          <Breadcrumb>
            <Breadcrumb.Item
              onClick={() => {
                navegar(`${process.env.PUBLIC_URL}/configuracoes/`, { state: values })
              }}>
              Administração
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Editar usuários
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex">
          <div className="justify-content-center">
            {/* <Button
              type="button"
              variant="white"
              className=" btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              type="button"
              variant="white"
              className=" btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button> */}
          </div>
        </div>
      </div>

      <Row className="row-sm">



      </Row>

    </Fragment >
  );
}

EditUser.propTypes = {};

EditUser.defaultProps = {};

export default EditUser;
