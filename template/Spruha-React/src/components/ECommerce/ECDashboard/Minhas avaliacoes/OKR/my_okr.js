import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Image, Tab, Nav, ProgressBar } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import api from "../../../../../api";

function MinhaOKR() {

    const dadosrota = useLocation();
    const navegar = useNavigate()
    const [values, setValues] = useState({});

    useEffect(() => {
        if (!dadosrota.state) {
            navegar(`${process.env.PUBLIC_URL}/home`)
        }
        setValues(dadosrota.state);
        api.get(`keys/getOne?id_user=${dadosrota.state.dadosUser.id}`).then( r => {
            
            setValues(a => ({ ...a, keysDirect: r.data.key }))
            CarregarOkrs(r.data.key)
        })

    }, [dadosrota])

    async function CarregarOkrs(keys){
    //    console.log(keys)
        let okrs =[];
       
        for(let key of keys){
         await    api.get(`okrs/getOne?id=${key.id_okr}`).then(r=>{
                okrs.push({...r.data.okr})
                // console.log(r.data.okr)
                
            })
        }
        // okrs=okrs.filter((item,index)=>item.id!=okrs[index].id)
        console.log(okrs)
       setValues(a=>({...a,okrs}))
       FiltrarOkrs(okrs)
    }

   async function FiltrarOkrs(okrs){
        let array=[]
        let okrs2= okrs?.filter((item,index)=>{
           if(array.indexOf(item.id)<0){
            array.push(item.id)
            return item
           }
        });
        
        
        // let k=[].length
        for (const index1 in okrs2) {
          let process = 0
          for (const index2 in okrs2[index1].keys) {
            process = process + okrs2[index1].keys[index2].status;
          }
          let keys = okrs2[index1]?.keys
          okrs2[index1].progress = keys?.length>0? process / keys?.length:0
          // console.log(keys.length)
          if (okrs2[index1].progress == 100) {
            okrs2[index1].concluded = true
          }
          await api.put(`/okrs/update`, { ...okrs[index1] });
        }
        

        setValues(a=>{
            
            return ({...a,okrs:okrs2})

        })
    }
    
    
    console.log(values)

    return (
        <Fragment>

            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Minhas OKR's </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item> Minha Avaliações </Breadcrumb.Item>
                        <Breadcrumb.Item active >  Minhas OKRs  </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>




            <Row className="row-sm ms-2 panel panel-primary tabs-style-2 ">
                <div className="tab-menu-heading">
                    <div className="tabs-menu1">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="pendente" >
                            <Row>
                                <Nav variant="pills" className="nav panel-tabs main-nav-line">
                                    <Nav.Item>
                                        <Nav.Link eventKey="pendente">Pendentes</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="concluído">Concluídos</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="pendente">
                                        <Row>
                                            {values?.okrs?.filter(item => item.progress < 100)?.map(okr => (
                                                <Col md={12} xl={4}>
                                                    <Card key={okr.id} className="custom-card">

                                                        <Card.Body>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-column align-items-start">
                                                                    <h6>{okr?.objective?.toUpperCase()}</h6>
                                                                </div>

                                                                <h2 className="d-flex flex-row">
                                                                    <span className="font-weight-bold px-1 text-primary">
                                                                        {okr?.keys?.length}
                                                                    </span>
                                                                    {/* ICONE */}
                                                                    <i className="bi-people-fill icon-size float-start text-primary"></i>
                                                                </h2>
                                                            </div>
                                                            <div className="main-traffic-detail-item">
                                                                {/* <div>
                                                                    <span>Seu Progresso</span>
                                                                    <span>{key?.okr?.progress}%</span>
                                                                    <span>{(okr.progress) ? (okr.progress) : 0}%</span>
                                                                </div> */}
                                                                <div className="progress progress-sm mb-1">
                                                                    <ProgressBar
                                                                        animated={true}
                                                                        className=" wd-100p"
                                                                        striped
                                                                        variant="primary"
                                                                        now={okr?.progress}
                                                                        role="progressbar"
                                                                    ></ProgressBar>
                                                                </div>
                                                            </div>
                                                            <Button className="btn btn-primary ripple btn-block"
                                                                onClick={() => {
                                                                    navegar(`${process.env.PUBLIC_URL}/okr_resposta/`, { state:{...values,okrselect:okr }})
                                                                }} >
                                                                Visualizar
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="concluído">
                                        <Row>
                                            {values?.okrs?.filter(item => item.progress >= 100)?.map(okr => (

                                                <Col md={12} xl={4}>
                                                    <Card key={okr.id} className="custom-card">
                                                        <Card.Body>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-column justify-content-center">
                                                                    <h6>Título do OKR</h6>
                                                                </div>

                                                                <h2 className="d-flex flex-row">
                                                                    <span className="font-weight-bold px-1 text-primary">
                                                                        {4}
                                                                    </span>
                                                                    {/* ICONE */}
                                                                    <i className="bi-people-fill icon-size float-start text-primary"></i>
                                                                </h2>
                                                            </div>
                                                            <Button onClick={() => {
                                                                navegar(`${process.env.PUBLIC_URL}/okr_concluido/`, { state: values })
                                                            }} className="btn btn-primary ripple btn-block">
                                                                Visualizar
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>

            </Row>


        </Fragment>
    );
}

MinhaOKR.propTypes = {};

MinhaOKR.defaultProps = {};

export default MinhaOKR;
