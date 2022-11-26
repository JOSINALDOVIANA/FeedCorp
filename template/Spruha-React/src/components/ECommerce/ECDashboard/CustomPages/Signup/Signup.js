import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Card, Form } from "react-bootstrap";
import * as Customswitcherdata from "../../../../../data/Switcherdata/Customswitcherdata";
import { Selects } from "./select";
import api from "../../../../../api";


function Signup() {
  const dadosrota = useLocation();
  const navegator=useNavigate()
  const [values, setValues] = useState({

    "name_user": "",
    "surname_user": "",
    "email_user": "",
    "phone_user": "",
    "name_companie": "",
    "cnpj_companie": "",
    "postcard_companie": "",
    "address_companie": "",
    "phone_companie": "",
    "district_companie": "",
    "id_state": "",
    "id_country": "",
    "id_city": "",
    "id_plan": "",



  });
  const [cities, setCities] = useState([])
  const [states, setStates] = useState([])
  const [statesSelect, setStatesSelect] = useState(0)
  const [countries, setCountries] = useState({})
  const [plans, setPlans] = useState([])

  useEffect(() => {
    api.get("country/get").then(r => {
      setValues(a => ({ ...a, id_country: r.data.country[0].id }))
      setCountries(r.data.country[0])
    })

  }, [])
  useEffect(() => {
    api.get(`plans/get`).then(r => {
      setPlans(r.data.plans)
    })
  }, [])

  useEffect(() => {
    api.get(`state/get?id_country=${countries.id}`).then(r => {
      setStates(r.data.states)
    })
  }, [countries])

  useEffect(() => {
    api.get(`city/get?id_state=${statesSelect}`).then(r => {
      setCities(r.data.cities)
    })
  }, [statesSelect])

  console.log(values)



  return (
    <Fragment>
      <div className="page main-signin-wrapper" >
        <div className="d-flex header-setting-icon demo-icon fa-spin" onClick={() => Customswitcherdata.Swicherbutton()}>
          {/* <Link className="nav-link icon" to="#" >
        <i className="fe fe-settings settings-icon "></i>
      </Link> */}
        </div>
        {/* <Row className="signpages text-center" onClick={() => Customswitcherdata.remove()} > */}
        <div className="d-flex justify-content-center">


          <Card>
            <Card.Header className="d-flex justify-content-center mt-3 pt-3 p-3">
              <img
                src={require("../../../../../assets/img/brand/logo.png")}
                className="header-brand-img mb-2"
                alt="logo"
              />

            </Card.Header>




            <Card.Body className="mt-2 mb-2">
              <div className="clearfix"></div>
              <h5 className="text-start mb-2">Solicite um orçamento gratuito e sem compromisso</h5>

              <p className="mb-3 text-muted tx-13 ms-0 text-start">
                Para Administradores/Gestores RH que precisam otimizar o desempenho de sua empresa
              </p>
              <Form>
                <div className="form-group">
                  <p className="mb-3 text-muted tx-13 ms-0 text-start">
                    Dados pessoais
                  </p>
                  <Row className="row-sm">
                    <Col>
                      <Form.Group className="text-start form-group" controlId="fromName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                          placeholder="Digite seu nome"
                          type="text"
                          value={values.name_user}
                          onChange={e => setValues(a => ({ ...a, name_user: e.target.value }))}

                        />
                      </Form.Group>
                      <Form.Group className="text-start form-group" controlId="fromName">
                        <Form.Label>Digite uma forma de Tratamento</Form.Label>
                        <Form.Control
                          placeholder="exemplo Sr° Marcus"
                          type="text"
                          value={values.surname_user}
                          onChange={e => setValues(a => ({ ...a, surname_user: e.target.value }))}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="text-start form-group" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          placeholder="Digite seu email"
                          type="email"
                          value={values.email_user}
                          onChange={e => setValues(a => ({ ...a, email_user: e.target.value }))}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="text-start form-group" controlId="formContato">
                        <Form.Label>Contato</Form.Label>
                        <Form.Control
                          placeholder="Digite seu contato"
                          type="phone"
                          value={values.phone_user}
                          onChange={e => setValues(a => ({ ...a, phone_user: e.target.value }))}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <p className="mb-3 text-muted tx-13 ms-0 text-start">
                    Dados da empresa
                  </p>

                  <Row className="row-sm">
                    <Col>
                      <Form.Group
                        className="text-start form-group"
                        controlId="formCorporation"
                      >
                        <Form.Label>Corporação</Form.Label>
                        <Form.Control
                          placeholder="Nome de sua corporação"
                          type="text"
                          value={values.name_companie}
                          onChange={e => setValues(a => ({ ...a, name_companie: e.target.value }))}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group
                        className="text-start form-group"
                        controlId="formCnpj"
                      >
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Control
                          placeholder="CNPJ da corporação"
                          type="text"
                          value={values.cnpj_companie}
                          onChange={e => setValues(a => ({ ...a, cnpj_companie: e.target.value }))}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group
                        className="text-start form-group"
                        controlId="formCep"
                      >
                        <Form.Label>CEP</Form.Label>
                        <Form.Control
                          placeholder="CEP da corporação"
                          type="text"
                          value={values.postcard_companie}
                          onChange={e => setValues(a => ({ ...a, postcard_companie: e.target.value }))}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group
                        className="text-start form-group"
                        controlId="formEndereco"
                      >
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                          placeholder="Rua e numero"
                          type="text"
                          value={values.address_companie}
                          onChange={e => setValues(a => ({ ...a, address_companie: e.target.value }))}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="text-start form-group"
                        controlId="formEndereco"
                      >
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                          placeholder="Bairro"
                          type="text"
                          value={values.district_companie}
                          onChange={e => setValues(a => ({ ...a, district_companie: e.target.value }))}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group
                        className="text-start form-group"
                        controlId="formContatoEmpresarial"
                      >
                        <Form.Label>Contato empresarial</Form.Label>
                        <Form.Control
                          placeholder="Contato da corporação"
                          type="text"
                          value={values.phone_companie}
                          onChange={e => setValues(a => ({ ...a, phone_companie: e.target.value }))}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <p className="mb-3 text-muted tx-13 ms-0 text-start">
                    Localização empresarial
                  </p>

                  <Row>
                    <Col>
                      <Form.Label>
                        Estado: <span className="tx-danger">*</span>
                      </Form.Label>

                      <Selects
                        classNamePrefix="Select"
                        onChange={(e) => {
                          setValues(a => ({ ...a, id_state: e.value }))
                          setStatesSelect(e.value)
                        }}
                        options={states.map(item => ({ label: item.state, value: item.id }))}
                        singleSelect
                        displayValue="key"
                      // placeholder={values?.company?.state.state}
                      >

                      </Selects>
                    </Col>

                    <Col>
                      <Form.Label>
                        Cidade: <span className="tx-danger">*</span>
                      </Form.Label>

                      <Selects
                        classNamePrefix="Select"
                        onChange={(e) => {
                          setValues(a => ({ ...a, id_city: e.value }))

                        }}
                        options={cities.map(item => ({ label: item.city, value: item.id }))}
                        singleSelect
                        displayValue="key"
                      // placeholder={values?.company?.state.state}
                      >

                      </Selects>
                    </Col>

                  </Row>
                  <Row className="row-sm mt-2">
                    <Col>
                      <Form.Label>
                        Plano empresarial: <span className="tx-danger">*</span>
                      </Form.Label>

                      <Selects
                        classNamePrefix="Select"
                        onChange={(e) => {
                          setValues(a => ({ ...a, id_plan: e.value }))

                        }}
                        options={plans.map(item => ({ label: item.plan, value: item.id }))}
                        singleSelect
                        displayValue="key"
                      // placeholder={values?.company?.state.state}
                      >

                      </Selects>
                    </Col>
                  </Row>

                </div>





                <p className="mb-4 text-muted tx-13 ms-0 text-start">
                  Ao informar meus dados, eu aceito a Política de Privacidade
                </p>

                <button className="btn ripple btn-main-primary btn-block mt-2"
                  onClick={(e) => {
                    e.preventDefault()
                    api.post("/contact",{...values}).then(r=>{
                      if(r.data.status){
                        alert("entraremos em contato bremente aguarde!!")
                        navegator("/home")
                      }else{
                        alert("desculpe estamos enfrentando alguns problemas tente mais tarde!!")
                        navegator("/home")
                      }
                    })
                  }}
                >
                  Solicitar Orçamento
                </button>
              </Form>
              <div className="text-start mt-5 ms-0">
                <p className="mb-0">
                  Já possui conta com a gente?
                  <Link
                    to={`${process.env.PUBLIC_URL}/login`}> login
                  </Link>
                </p>
              </div>
            </Card.Body>

          </Card>



        </div>
        {/* </Row> */}
      </div>

    </Fragment>
  )
};

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
