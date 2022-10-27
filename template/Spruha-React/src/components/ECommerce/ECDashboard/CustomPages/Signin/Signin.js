import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Container, Form, Button } from "react-bootstrap";
import * as Customswitcherdata from "../../../../../data/Switcherdata/Customswitcherdata";
import api from "../../../../../api";
import { LoginError } from "../../Components/Alerts"

const Signin = () => {
  const [permanecer, setPerm] = React.useState(false);
  const [pass, setPass] = useState(true)
  const [icon, setIcon] = useState(true)
  const navegar = useNavigate();

  React.useEffect(() => {
    if (!!localStorage.getItem("values")) {
      const valores = localStorage.getItem("values");
      const valores2 = JSON.parse(valores);

      navegar(`${process.env.PUBLIC_URL}/`, { state: valores2 });
    }

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(e)

    let obt = {};
    e.target["e-mail"].value.indexOf("@") > 0 ?
      obt = { email: e.target["e-mail"].value, password: e.target["password"].value } :
      obt = { nameuser: e.target["e-mail"].value, password: e.target["password"].value };
    let dadosUser;
    let permissions;
    let unit;
    let status;
    let image = {};
    // let units;
    let company = [];
    let okrscriados = [];
    let cargo;
    await api.post("/user/login", obt).then(r => {
      if (!r.data.status) {
        LoginError()
      } else {
        dadosUser = r.data?.dadosUser;
        permissions = r.data?.permissions[0]?.description;
        unit = r.data?.unit[0];
        status = r.data?.status;
        company = r.data?.company[0];
        cargo = r.data?.cargo;
        // console.log(r.data)   
      }
    });

    if (!!company) {
      company = await api(`/company/get?id=${company.id}`);
      company = company.data.company;
    }
    if (status) {

      await api.get(`/images/listar?nameuser=${e.target["e-mail"].value.includes("@") ? "" : e.target["e-mail"].value}&email=${e.target["e-mail"].value.includes("@") ? e.target["e-mail"].value : ""}`).then(r => { image = r.data.dados });
      // await api.get(`/unit/consult?id_user=${dadosUser.id}`).then(r => { units = r.data });
      if (permanecer) {
        localStorage.setItem("values", JSON.stringify({
           dadosUser, 
           image,
            permissions,
            // units, 
            unit }))
      }
      await api.get(`/okrs/getTwu?id_user=${dadosUser.id}`).then(async r => {
        let okrs = r?.data?.okrs;
        // let k=[].length
        for (const index1 in okrs) {
          let process = 0
          for (const index2 in okrs[index1].keys) {
            process = process + okrs[index1].keys[index2].status;
          }
          let keys = okrs[index1].keys
          okrs[index1].progress = process / keys.length
          // console.log(keys.length)
          if (okrs[index1].progress == 100) {
            okrs[index1].concluded = true
          }
          await api.put(`/okrs/update`, { ...okrs[index1] });
        }
        okrscriados = okrs;

      })

      await navegar(`${process.env.PUBLIC_URL}/`, { state: { 
        dadosUser, 
        image,
         permissions,
        //  units, 
         unit, 
         company,
         okrscriados,
        //  pulsesCreate: [], 
         cargo } });
    }

  };

  return (
    <Fragment>
      {/* <!-- Row --> */}
      <div className="page main-signin-wrapper">

        <div className="d-flex header-setting-icon demo-icon fa-spin" onClick={() => Customswitcherdata.Swicherbutton()}>
          {/* <Link className="nav-link icon" to="#" >
            <i className="fe fe-settings settings-icon "></i>
          </Link> */}
        </div>
        {/* <Row className="signpages text-center" onClick={() => Customswitcherdata.remove()}> */}
        <div className="d-flex justify-content-center">

          <Card border="primary" style={{ width: '35rem', height: '31rem' }}>

            <Card.Header className="d-flex justify-content-center mt-3 pt-3 p-3">

              <img
                src={require("../../../../../assets/img/brand/logo.png")}
                className="header-brand-img mb-2"
                alt="logo"
              />
              {/* <div className="clearfix"></div>
            <h5 className="mt-4 text-white">Junte-se a sua comunidade!</h5>
            <span className="tx-white tx-13 mb-5 mt-xl-0">
                    Engaje-se com seu trabalho!
                  </span> */}

            </Card.Header>

            <Card.Body>

              <div className="clearfix"></div>
              <Form onSubmit={(e) => { handleSubmit(e) }}>
                <h5 className="text-start mb-2">
                  Entre em sua conta!
                </h5>

                <Form.Group className="text-start form-group" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    placeholder="Digite seu email"
                    type="Email"
                    name="e-mail"
                  />
                </Form.Group>

                <Form.Group
                  className="text-start form-group"
                  controlId="formpassword"
                >
                  <Form.Label>Senha</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      placeholder="Digite sua senha"
                      type="password"
                      name="password"
                      id="loginPs"
                    />
                    <Button onClick={() => {
                      setIcon(icon => !icon)
                      setPass(a => !a)
                      document.getElementById('loginPs').setAttribute("type", `${pass ? "text" : "password"}`)
                    }}>
                      <i className={icon ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}></i>
                    </Button>
                  </div>
                </Form.Group>

                <button type="submit" className="btn ripple btn-main-primary btn-block mt-2">
                  Entrar
                </button>

              </Form>

            </Card.Body>

            <Card.Footer>
              <div className="mb-1">
                <Link
                  to={`${process.env.PUBLIC_URL}/esqueceu_senha`}
                > Esqueceu a senha?
                </Link>
              </div>
              <div>
                Não possui conta? Faça um orçamento
                <Link
                  to={`${process.env.PUBLIC_URL}/cadastrar`}
                > aqui</Link>
              </div>
            </Card.Footer>


          </Card>
        </div>

      </div>

      {/* <!-- End Row --> */}
    </Fragment >
  )

};

Signin.propTypes = {};

Signin.defaultProps = {};

export default Signin;
