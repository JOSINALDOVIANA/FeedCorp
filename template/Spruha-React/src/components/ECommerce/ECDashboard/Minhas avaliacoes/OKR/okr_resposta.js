import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Image, Tab, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import api from "../../../../../api";
import user1 from "../../../../../assets/img/users/1.jpg";
import user2 from "../../../../../assets/img/users/2.jpg";
import user3 from "../../../../../assets/img/users/3.jpg";
import user4 from "../../../../../assets/img/users/4.jpg";
const TASKS = [
    {
        Task: "Evaluating the design",
        TeamMember1: user1,
        TeamMember2: user2,
        TeamMember3: user3,
        TeamMember4: user4,
        OpenTask: "37",
        TaskProfit: "High",
        Profittext: "primary",
        Status: "pendente",
        Statustext: "info",
    },
];

function OKR_resposta() {

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
                    <h2 className="main-content-title tx-24 mg-b-5"> Título do OKR </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item> Minha Avaliações </Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => {
                                navegar(`${process.env.PUBLIC_URL}/minhas_okrs/`, { state: values })
                            }}
                        >  Minhas OKRs  </Breadcrumb.Item>
                        <Breadcrumb.Item active >  Título do OKR  </Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div className="d-flex">
                    <div className="justify-content-center">
                        <Button
                            type="button"
                            variant="white"
                            className=" btn-icon-text my-2"
                            onClick={() => {
                                navegar(`${process.env.PUBLIC_URL}/minhas_okrs/`, { state: values })
                            }}
                        >
                            <i className="bi bi-caret-left-fill"></i>
                        </Button>
                    </div>
                </div>
            </div>




            <Row className="row-sm">
                <Col lg={12}>
                    <Card className="custom-card mg-b-20">
                        <Card.Body>
                            <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                                <div>
                                    <label className="main-content-label mb-2">Visão geral do OKR</label>
                                    <span className="d-block tx-12 mb-3 text-muted">
                                        Nesta aba você tem uma visão geral do OKR que está participando, bem como
                                        seu progresso.
                                    </span>
                                </div>
                            </Card.Header>
                            <div className=" tasks">
                                <Row className="row-sm ms-2 panel panel-primary tabs-style-2 ">
                                    <div className="tab-menu-heading">
                                        <div className="tabs-menu1">
                                            <Tab.Container id="tabela_okr" defaultActiveKey="minhaChave">
                                                <Nav variant="pills" className="nav panel-tabs main-nav-line">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="minhaChave">Minha chave</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="todasChaves">Todas as chaves</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>

                                                <Tab.Content>
                                                    <Tab.Pane eventKey="minhaChave">
                                                        <Table responsive hover
                                                            className="card-table table-vcenter text-nowrap mb-0
                                                            border hover"  >
                                                            <thead>
                                                                <tr>
                                                                    <th className="wd-lg-30p">Sua chave</th>
                                                                    <th className="wd-lg-10p">Responsável</th>
                                                                    <th className="wd-lg-20p text-center">Seu progresso</th>
                                                                    <th className="wd-lg-20p">Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {TASKS.map((items, index) => (
                                                                    <tr key={index} data-index={index}>
                                                                        <td className="font-weight-semibold">
                                                                            <div className="d-flex">
                                                                                <label className="ckbox my-auto me-4">
                                                                                    <input readOnly="" type="checkbox" />
                                                                                    <span></span>
                                                                                </label>
                                                                                <span className="mt-1">Key</span>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-nowrap">
                                                                            USUÁRIO<i className=""></i>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            37<i className=""></i>
                                                                        </td>
                                                                        <td>
                                                                            <span
                                                                                className={`badge bg-pill bg-${items.Statustext}-light`}
                                                                            >
                                                                                {items.Status}
                                                                                {/* podew ser um select aqui, n sei */}
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="todasChaves">
                                                        <Table responsive hover
                                                            className="card-table table-vcenter text-nowrap mb-0
                                                            border hover"  >
                                                            <thead>
                                                                <tr>
                                                                    <th className="wd-lg-30p">Chaves de objetivo</th>
                                                                    <th className="wd-lg-10p">Responsável</th>
                                                                    <th className="wd-lg-20p text-center">Progressos</th>
                                                                    <th className="wd-lg-20p">Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {TASKS.map((items, index) => (
                                                                    <tr key={index} data-index={index}>
                                                                        <td className="font-weight-semibold">
                                                                            <span className="mt-1">key</span>
                                                                        </td>
                                                                        <td className="text-nowrap">
                                                                            USUÁRIO<i className=""></i>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            67<i className=""></i>
                                                                        </td>
                                                                        <td>
                                                                            <span
                                                                                className={`badge bg-pill bg-${items.Statustext}-light`}
                                                                            >
                                                                                {items.Status}
                                                                                {/* pode ser um select aqui */}
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Tab.Container>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Fragment>
    );
}

OKR_resposta.propTypes = {};

OKR_resposta.defaultProps = {};

export default OKR_resposta;
