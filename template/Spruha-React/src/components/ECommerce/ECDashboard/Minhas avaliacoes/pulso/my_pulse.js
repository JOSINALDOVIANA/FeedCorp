import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Tab, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import api from "../../../../../api";

function MeuClimaPulso() {

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
                    <h2 className="main-content-title tx-24 mg-b-5">Minhas pesquisas de pulso </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item> Minha Avaliações </Breadcrumb.Item>
                        <Breadcrumb.Item active >  Meus Clima Pulsos  </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>


            <div className="card custom-card">

                <div className="panel panel-primary tabs-style-3 py-0">
                    <div className="tab-menu-heading pt-0">
                        <div className="tabs-menu">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="aberto" >
                                <Row>
                                    <Nav variant="pills" className="panel-body tabs-menu-body">
                                        <Nav.Item>
                                            <Nav.Link eventKey="aberto">Em aberto</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="respondidos">Respondidos</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="aberto">
                                            <Table responsive hover className="table card-table table-vcenter text-nowrap table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="wd-lg-15p text-center">Nome da pesquisa</th>
                                                        <th className="wd-lg-15p text-center">Data</th>
                                                        <th className="wd-lg-10p text-center">Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="main-content-label">
                                                            Nome pesquisa
                                                        </td>
                                                        <td className="tx-center font-weight-bold">
                                                            21 de OUT de 2022
                                                        </td>
                                                        <td className="tx-center d-grid">
                                                            <Button variant="warning"
                                                                onClick={() => { navegar(`${process.env.PUBLIC_URL}/pulso_resposta`, { state: values }) }}
                                                            >
                                                                Responder
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="respondidos">
                                            <Table hover responsive
                                                className="table card-table table-vcenter text-nowrap table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="wd-lg-15p text-center">Nome da pesquisa</th>
                                                        <th className="wd-lg-15p text-center">Data</th>
                                                        <th className="wd-lg-10p text-center">Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="main-content-label">
                                                            Nome pesquisa
                                                        </td>
                                                        <td className="tx-center font-weight-bold font-italic">
                                                            21 de OUT de 2022
                                                        </td>
                                                        <td className="tx-center d-grid">
                                                            <Button variant="info btn-rounded"
                                                                onClick={() => { navegar(`${process.env.PUBLIC_URL}/pulso_concluido`, { state: values }) }}
                                                            >
                                                                Resumo
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Row>
                            </Tab.Container>
                        </div>
                    </div>

                </div>
            </div>

        </Fragment>
    );
}

MeuClimaPulso.propTypes = {};

MeuClimaPulso.defaultProps = {};

export default MeuClimaPulso;
