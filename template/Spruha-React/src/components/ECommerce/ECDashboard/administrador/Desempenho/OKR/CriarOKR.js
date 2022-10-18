import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormGroup, Row, Form, InputGroup, ListGroup, Image, Breadcrumb, Table } from "react-bootstrap";
import { Datepicker } from "../../../Components/DataPicker"
import { SingleselectUnidade, SingleselectPessoa } from "./FormDataOKR";
import { successAlert } from "../../../Components/Alerts"
import { Grid } from "@mui/material";
import Okr from "./OKR";
import api from "../../../../../../api";
import {Selectstate} from "../../Configuracoes/select.js"
import {uniqueId} from 'lodash';


const CriarOKR = () => {
  const dadosrota = useLocation();

  const navegar = useNavigate();
  const [values, setValues] = useState({})
  const [okr, setOkr] = useState({})
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setValues(dadosrota.state)
    setOkr({ keys: [], id_user: dadosrota.state.dadosUser.id })
    api.get(`/unit/consult?id_user=${dadosrota.state.dadosUser.id}`).then(r => { setValues(a => ({ ...a, units: r.data })) });
  }, [dadosrota])
  // console.log(values)
  console.log(okr)
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Criar Objective Key Result (OKR)</h2>
          <Breadcrumb>
            <Breadcrumb.Item>Desempenho</Breadcrumb.Item>
            <Breadcrumb.Item
              onClick={() => { navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values }) }}
            >OKR</Breadcrumb.Item>
            <Breadcrumb.Item active>Criar OKR</Breadcrumb.Item>
          </Breadcrumb>
        </div>

      </div>
      {/* <!-- End Page Header --> */}

      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">

            <Card.Header className="page-header mx-4">
              <h2 className="main-content-title tx-24 mg-b-5">Novo Objetivo</h2>
              <div>
                <Button to="#"
                  variant="primary"
                  className="btn me-1"
                  onClick={async (e) => {
                    let keys_serial=[]
                    for(let iterator of okr?.keys){
                      delete iterator["id"];
                      keys_serial.push(iterator)
                    }
                    setOkr(a=>({...a,keys:keys_serial}));

                    await api.post(`/okrs/insert`, {
                      process: 0,
                      keys: okr.keys,
                      objective: okr.objective,
                      id_user: okr.id_user,
                      validity: okr.validity
                    }).then(r => {
                      let okrscriados = values.okrscriados;
                      if (r.data.status) {
                        okrscriados.push(okr)
                        setValues(a => ({ ...a, okrscriados: okrscriados }));
                        successAlert()
                        navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values })
                        // {{<MyVerticallyCenteredModal />}}
                      }
                    })
                  }}
                >
                  Criar
                </Button>

                <Button onClick={() => {
                  navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values })
                }}
                  variant="danger"
                >
                  Cancelar
                </Button>

              </div>
            </Card.Header>

            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Nome do Objetivo</Form.Label>
                <input onChange={(e) => { setOkr(a => ({ ...a, objective: e.target.value })) }} value={Okr.objective} type="text" className="form-control" placeholder="Objetivo" />
              </FormGroup>

              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Validade</Form.Label>

                <InputGroup>
                  <Button
                    variant="light" type="button">
                    <i className="fe fe-calendar lh--9 op-6"></i>
                  </Button>
                  <Datepicker
                    className="form-control"
                    selected={startDate}
                    minDate={startDate}
                    onChange={(date) => { setStartDate(date); setOkr(a => ({ ...a, validity: date })) }}
                    
                  />
                </InputGroup>
              </FormGroup>

              <Grid id="keys">

                <Row >
                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-24 mg-b-5">Key Results</h2>
                        <span className="d-flex text-muted tx-13">
                          Adicione o nome da sua Key result
                        </span>
                      </div>
                    </div>

                    <input
                      type="text"
                      className="form-control input-description"
                      placeholder="Key Result"
                      value={okr?.description}
                      onChange={(e) => { setOkr(a => ({ ...a, description: e.target.value })) }}
                    />
                  </Col>

                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-24 mg-b-5">Unidade</h2>
                        <span className="d-flex text-muted tx-13">
                          Escolha a unidade onde o colaborador se encontra
                        </span>
                      </div>
                    </div>
                    <Selectstate
                     id="selecUnit" 
                     classNamePrefix="Select2"
                     onChange={(e)=>{setOkr(a=>({...a,unit:values.units.filter(und=>und.id==e.value)[0]}))}} 
                     options={values?.units?.map(und=>({value:und.id,label:und.initials}))} 
                     singleSelect
                    //  displayValue="key" 
                     placeholder="Unidade"                    
                    ></Selectstate>

                    {/* <SingleselectUnidade className="select-unit" units={values.units} setOkr={setOkr} /> */}

                  </Col>

                  <Col>
                    <div className="page-header">
                      <div>
                        <h2 className="main-content-title tx-24 mg-b-5">Integrantes</h2>
                        <span className="d-flex text-muted tx-13">
                          Escolha o integrante para essa Key
                        </span>
                      </div>
                    </div>
                    <Selectstate
                    id="selectUser" 
                    classNamePrefix="Select2" 
                    onChange={(e)=>{setOkr(a=>({...a,user:okr.unit.Colaboradores.filter(col=>col.id==e.value)}))}} 
                    options={okr?.unit?.Colaboradores?.map(col=>({value:col.id,label:col.name}))} 
                    singleSelect 
                    // displayValue="key" 
                    placeholder="Integrante"
                    ></Selectstate>


                    {/* <SingleselectPessoa noOptionsMessage={() => 'Sem opções'} className="select-user" unit_select={okr.unit} setOkr={setOkr} /> */}

                  </Col>

                </Row>

                <div className="d-flex justify-content-end">
                  <Button
                    variant="primary"
                    type="button"
                    className="my-2 btn mt-2"

                    onClick={ () => {
                    // let va=values;
                   
                    
                    //  it.setAttribute("placeholder","Integrante")
                      let user = okr.user[0];
                      // console.log(user);
                       api.get(`/images/listar?email=${user.email}`).then(r => { user.image = r.data.dados });

                      setOkr(a => ({
                        ...a, keys: [...a.keys,
                        {
                          description: a.description,
                          id_user: user.id,
                          status: 0,
                          id_okr: null,
                          user,
                          id:uniqueId()

                        }]
                      }))
                      // setOkr(a => ({ ...a, description: "", unit: [], user: [] }))
                      // setValues(va);
                    }}
                  >
                    Adicionar
                  </Button>
                </div>

              </Grid>


              <Table responsive className="card-table table-striped table-vcenter text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="wd-lg-40p">
                      <span>Key</span>
                    </th>
                    <th className="wd-20p">
                      <span>Usuário</span>
                    </th>
                    <th className="wd-lg-10p">
                      <span>Ações</span>
                    </th>
                  </tr>
                </thead>
                {okr?.keys?.map((key, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>
                        <div className="ms-2 me-auto">{key.description}</div>
                      </td>

                      <td>
                        <div className="d-flex align-items-center mb-2 me-4">
                          {!!key.user.image && <Image
                            alt="avatar"
                            className="wd-30 rounded-circle mg-r-15"
                            src={key?.user?.image?.url}
                          />}
                          
                          <div>
                            <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                              {key.user.name}
                            </h6>

                          </div>
                        </div>
                      </td>

                      <td>
                        <i onClick={() => {
                          let keys =okr?.keys?.filter(key2=>key2.id!=key.id)
                         
                          setOkr(a => ({ ...a, keys: keys }))
                        }} style={{ cursor: 'pointer' }} className="ti ti-trash"></i>
                      </td>
                    </tr>
                  </tbody>
                ))}

              </Table>

            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment >
  );
}

export default CriarOKR;
