import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Container, Form } from "react-bootstrap";
import * as Customswitcherdata from "../../../data/Switcherdata/Customswitcherdata";
import api from "../../../api";
const Signin = () => {
  const [permanecer, setPerm] = React.useState(false);
  
  const navegar = useNavigate();
 
  React.useEffect(() => {
    if (localStorage.getItem("values")) {
      const valores = localStorage.getItem("values");
      const valores2 = JSON.parse(valores);

      navegar(`${process.env.PUBLIC_URL}/`, { state: valores2 });
    }

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    let obt = {};
    e.target["e-mail"].value.indexOf("@") > 0 ?
      obt = { email: e.target["e-mail"].value, password: e.target["password"].value } :
      obt = { nameuser: e.target["e-mail"].value, password: e.target["password"].value };
    let dadosUser;
    let permissions;
    let unit;
    let status;
    let image={};
    let units;
    let company=[];
    let okrscriados=[];
    await api.post("/user/login", obt).then(r => {
      if (!r.data.status) {
        alert(r.data.message)
      } else {
        dadosUser = r.data?.dadosUser;
        permissions = r.data?.permissions[0]?.description;
        unit = r.data?.unit[0];
        status = r.data?.status;
        company=r.data?.company[0];    
        // console.log(r.data)   
      }
    });
   
    if(!!company){
      company= await api(`/company/get?id=${company.id}`);
      company=company.data.company;
    }
    if (status) {

      await api.get(`/images/listar?nameuser=${e.target["e-mail"].value.includes("@") ? "" : e.target["e-mail"].value}&email=${e.target["e-mail"].value.includes("@") ? e.target["e-mail"].value : ""}`).then(r => { image = r.data.dados });     
      await api.get(`/unit/consult?id_user=${dadosUser.id}`).then(r => { units = r.data });
      if (permanecer) {
        localStorage.setItem("values", JSON.stringify({ dadosUser, image, permissions, units, unit }))
      }
      await  api.get(`/okrs/getTwu?id_user=${dadosUser.id}`).then(r=>{okrscriados=r?.data?.okrs})
      await navegar(`${process.env.PUBLIC_URL}/`, { state: { dadosUser, image, permissions, units, unit,company,okrscriados } });
    }

  };

  return(
    <Fragment>
    {/* <!-- Row --> */}
    <div className="page main-signin-wrapper"
    >
      <div className="d-flex header-setting-icon demo-icon fa-spin" onClick={() => Customswitcherdata.Swicherbutton()}>
        <Link className="nav-link icon" to="#" >
          <i className="fe fe-settings settings-icon "></i>
        </Link>
      </div>
      <Row className="signpages text-center" onClick={() => Customswitcherdata.remove()}>
        <Col md={12}>
          <Card>
            <Row className="row-sm">
              <Col
                lg={6}
                xl={5}
                className="d-none d-lg-block text-center bg-primary details"
              >
                <div className="mt-5 pt-5 p-2 pos-relative">
                  <img
                    src={require("../../../assets/img/brand/logo-light.png")}
                    className="header-brand-img mb-4"
                    alt="logo-light"
                  />
                  <div className="clearfix"></div>
                  {/* <img
                    src={require("../../../assets/img/svgs/user.svg").default}
                    className="ht-100 mb-0"
                    alt="user"
                  /> */}
                  <h5 className="mt-4 text-white">Junte-se a sua comunidade!</h5>
                  {/* <span className="tx-white tx-13 mb-5 mt-xl-0">
                    Engaje-se com seu trabalho!
                  </span> */}
                </div>
              </Col>
              <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                <Container fluid>
                  <Row className="row-sm">
                    <Card.Body className="mt-2 mb-2">
                      <img
                        src={require("../../../assets/img/brand/logo.png")}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                        alt="logo"
                      />
                      <img
                        src={require("../../../assets/img/brand/logo-light.png")}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                        alt="logo"
                      />
                      <div className="clearfix"></div>
                      <Form onSubmit={(e)=>{handleSubmit(e)}}>
                        <h5 className="text-start mb-2">
                          Entre em sua conta!
                        </h5>
                        {/* <p className="mb-4 text-muted tx-13 ms-0 text-start">
                          Signin to create, discover and connect with the global
                          community
                        </p> */}
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
                          <Form.Control
                            placeholder="Digite sua senha"
                            type="password"
                            name="password"
                          />
                        </Form.Group>
                        <button type="submit"  className="btn ripple btn-main-primary btn-block mt-2">
                          Entrar
                        </button>
                      </Form>
                      <div className="text-start mt-5 ms-0">
                        <div className="mb-1">
                          <Link
                            to={`${process.env.PUBLIC_URL}/esqueceuasenha`}
                          > Esqueceu a senha? 
                          </Link>
                        </div>
                        <div>
                          Não possui conta? Faça um orçamento
                          <Link
                            to={`${process.env.PUBLIC_URL}/cadastrar`}
                          > aqui</Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>

    {/* <!-- End Row --> */}
  </Fragment>
  )

};

Signin.propTypes = {};

Signin.defaultProps = {};

export default Signin;
