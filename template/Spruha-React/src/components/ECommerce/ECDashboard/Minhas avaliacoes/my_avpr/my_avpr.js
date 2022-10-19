import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Tab, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import api from "../../../../../api";

function MinhasAvPr() {

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
                    <h2 className="main-content-title tx-24 mg-b-5">Minha Unidade: </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item> Minha Avaliações </Breadcrumb.Item>
                        <Breadcrumb.Item active >  Minhas av. por resultados  </Breadcrumb.Item>
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
                                                        <div className="card-item-body">
                                                            <div className="card-item-stat">
                                                                <small className="tx-12 text-primary font-weight-semibold">
                                                                    19 de OUT de 2022
                                                                </small>
                                                                <h5 className=" mt-2">Titulo avpr</h5>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <h6>{"Metas: 3"}</h6>
                                                            </div>
                                                        </div>


                                                        <Button className="btn btn-primary ripple btn-block"
                                                            onClick={() => {
                                                                navegar(`${process.env.PUBLIC_URL}/avpr_resposta/`, { state: values })
                                                            }} >
                                                            Visualizar
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="concluído">
                                        <Row>

                                            <Col md={12} xl={4}>
                                                <Card className="custom-card bg-primary tx-white">

                                                    <Card.Body>
                                                        <div className="card-item-body">
                                                            <div className="card-item-stat">
                                                                <small className="tx-12 font-weight-semibold text-light">
                                                                    19 de OUT de 2022
                                                                </small>
                                                                <h5 className=" mt-2">Titulo avpr</h5>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <h6>{"Concluído"}</h6>
                                                            </div>
                                                        </div>


                                                        <Button className="btn ripple btn-block" variant="light btn-rounded"
                                                            onClick={() => {
                                                                navegar(`${process.env.PUBLIC_URL}/avpr_concluido/`, { state: values })
                                                            }} >
                                                            Resumo
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

MinhasAvPr.propTypes = {};

MinhasAvPr.defaultProps = {};

export default MinhasAvPr;
