import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Card, Container, Form } from "react-bootstrap";
import * as Customswitcherdata from "../../../../../data/Switcherdata/Customswitcherdata";
import { Selects } from "./select";
import api from "../../../../../api";

function Signup() {
  const dadosrota = useLocation();
  const [values, setValues] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [Plans, setPlans] = useState([]);

//   useEffect(() => {
//     setValues(dadosrota.state)
//     api.get(`city/get?id_state=${dadosrota.state.company.id_state}`).then(r => {
//         if (r.data.status) {
//             let ct = []
//             for (let iterator of r.data.cities) {
//                 iterator = { value: iterator.id, label: iterator.city };
//                 ct.push(iterator)
//             }
//             setCities(ct)
//         }

//     })
//     api.get(`state/get?id_country=${dadosrota.state.company.id_country}`).then(r => {
//         if (r.data.status) {
//             let st = []
//             for (let iterator of r.data.states) {
//                 iterator = { value: iterator.id, label: iterator.state };
//                 st.push(iterator)
//             }
//             setStates(st)
//         }
//     })

// }, [dadosrota.state])

// console.log(values)



// function CarregarCidades(id_state) {
//     // // console.log(id_state)
//     api.get(`city/get?id_state=${id_state}`).then(r => {
//         if (r.data.status) {
//             let ct = []
//             for (let iterator of r.data.cities) {
//                 iterator = { value: iterator.id, label: iterator.city };
//                 ct.push(iterator)
//             }
//             setCities(ct)
//         }

//     })

// }

return(
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
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="text-start form-group" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      placeholder="Digite seu email"
                      type="email"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="text-start form-group" controlId="formContato">
                    <Form.Label>Contato</Form.Label>
                    <Form.Control
                      placeholder="Digite seu contato"
                      type="phone"
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
                      placeholder="Endereço da corporação"
                      type="text"
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
                    // onChange={(e) => {
                    //   setValues(a => ({ ...a, company: { ...a.company, id_state: e.value } }))
                    //   CarregarCidades(e.value)
                    // }}
                    // options={states}
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
                    // onChange={(e) => {
                    //   setValues(a => ({ ...a, company: { ...a.company, id_state: e.value } }))
                    //   CarregarCidades(e.value)
                    // }}
                    // options={states}
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
                    // onChange={(e) => {
                    //   setValues(a => ({ ...a, company: { ...a.company, id_state: e.value } }))
                    //   CarregarCidades(e.value)
                    // }}
                    // options={states}
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

            <button className="btn ripple btn-main-primary btn-block mt-2">
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
