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


    }, [dadosrota])

    // console.log(values)

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
                                            <Col md={12} xl={4}>
                                                <Card className="custom-card">

                                                    <Card.Body>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-column align-items-start">
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
                                                        <div className="main-traffic-detail-item">
                                                            <div>
                                                                <span>Progresso</span>
                                                                <span>68%</span>
                                                                {/* <span>{(okr.progress) ? (okr.progress) : 0}%</span> */}
                                                            </div>
                                                            <div className="progress progress-sm mb-1">
                                                                <ProgressBar
                                                                    animated={true}
                                                                    className=" wd-100p"
                                                                    striped
                                                                    variant="primary"
                                                                    now="68"
                                                                    role="progressbar"
                                                                ></ProgressBar>
                                                            </div>
                                                        </div>
                                                        <Button className="btn btn-primary ripple btn-block"
                                                            onClick={() => {
                                                                navegar(`${process.env.PUBLIC_URL}/okr_resposta/`, { state: values })
                                                            }} >
                                                            Responder
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="concluído">
                                        <Row>
                                            <Col md={12} xl={4}>
                                                <Card className="custom-card">
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
