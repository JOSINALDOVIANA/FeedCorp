import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { Breadcrumb, Col, Button, Nav, Card, Row, Tab } from "react-bootstrap";

function Settings() {
    const dadosrota = useLocation();
    const navegar = useNavigate()
    const [values, setValues] = useState(dadosrota.state);

    useEffect(() => {
        setValues(dadosrota.state)

    }, [dadosrota.state])
    //console.log(values)

    return (
        <Fragment>
            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Configurações</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#"> Configurações </Breadcrumb.Item>
                        <Breadcrumb.Item active>Administração </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                {/* <div className="d-flex">
                <div className="justify-content-center">
                    <Button variant="white"
                        type="button"
                        className="btn-icon-text my-2 me-2"
                    >
                        <i className="fe fe-download me-2"></i> Import
                    </Button>
                    <Button variant="white"
                        type="button"
                        className="btn-icon-text my-2 me-2"
                    >
                        <i className="fe fe-filter me-2"></i> Filter
                    </Button>
                    <Button variant="primary" type="button" className="my-2 btn-icon-text">
                        <i className="fe fe-download-cloud me-2"></i> Download Report
                    </Button>
                </div>
            </div> */}
            </div>


            <Tab.Container defaultActiveKey='edit'>
                <Row className="row-sm">
                    <Col lg={4} xl={3}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div>
                                    <h3 className="card-title tx-18">
                                        <label className="main-content-label tx-15">Administração</label>
                                    </h3>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="main-content-left main-content-left-mail">
                                    <div className="main-mail-menu">
                                        <Nav className="nav main-nav-column mg-b-20" defaultActiveKey="/edit">

                                            {/* <Nav.Item>
                                                <Nav.Link eventKey="home" className="thumb  mb-2"
                                                    onClick={() => { navegar(`${process.env.PUBLIC_URL}/perfil`, { state: values }) }}>
                                                    <i className="fe fe-user"></i> Minha conta
                                                </Nav.Link>
                                            </Nav.Item> */}

                                            <Nav.Item>
                                                <Nav.Link className="thumb mb-2" eventKey="edit">
                                                    <i className="fe fe-edit-2"></i> Edições
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link className="thumb mb-2" eventKey="corp">
                                                    <i className="bi-building"></i> Corporação
                                                </Nav.Link>
                                            </Nav.Item>

                                            {/* VAI ME SERVIR NO FUTURO */}
                                            {/*<Nav.Item>
                                        <Nav.Link eventKey="Privacy&Security" className="thumb mb-2">
                                            <i className="fe fe-lock"></i> Privacy & Security
                                        </Nav.Link>
                                         */}

                                            {/* <Nav.Item>
                                            <Nav.Link className="thumb mb-2" eventKey="Emails">
                                                <i className="fe fe-mail"></i> Emails
                                            </Nav.Link>
                                        </Nav.Item> */}


                                            {/* <Nav.Item>
                                            <Nav.Link className="thumb mb-2" eventKey="Language">
                                                <i className="fe fe-flag"></i> Language & Region
                                            </Nav.Link>
                                        </Nav.Item> */}


                                            {/* <Nav.Item>
                                            <Nav.Link className="thumb mb-2" eventKey="Notifications">
                                                <i className="fe fe-bell"></i> Notifications
                                            </Nav.Link>
                                        </Nav.Item> */}

                                            {/* <Nav.Item>
                                            <Nav.Link className="thumb mb-2" eventKey="Blog">
                                                <i className="fe fe-settings"></i> Blog
                                            </Nav.Link>
                                        </Nav.Item> */}
                                        </Nav>
                                    </div>
                                </div>
                            </Card.Body>
                            {/* <Card.Footer className="px-4 ">
                            <Button variant="primary" className="w-lg">Save Changes</Button>
                        </Card.Footer> */}
                        </Card>
                    </Col>

                    <Col lg={8} xl={9}>
                        <Tab.Content>
                            <Tab.Pane
                                eventKey='edit'>
                                <Row className="row-sm">
                                    <Col xl={12}>
                                        <Card className="custom-card"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                navegar(`${process.env.PUBLIC_URL}/adm_add_user/`, { state: values })
                                            }}>
                                            <Card.Body>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="d-flex">
                                                            <div className="settings-main-icon me-4 mt-1">
                                                                <div className="avatar avatar-md bg-primary-transparent text-primary">
                                                                    <i className="bi-person-plus fs-18"></i>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h5 className="tx-14 d-flex text-dark tx-uppercase">
                                                                    Criar Usuário
                                                                </h5>
                                                                <p className="tx-13 text-muted mb-0">
                                                                    Crie e adicione usuários em unidades da corporação.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                navegar(`${process.env.PUBLIC_URL}/adm_add_office`, { state: values })
                                            }}>
                                            <Card.Body>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="d-flex">
                                                            <div className="settings-main-icon me-4 mt-1">
                                                                <div className="avatar avatar-md bg-primary-transparent text-primary">
                                                                    <i className="bi-person-lines-fill fs-18"></i>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h5 className="tx-14 d-flex text-dark tx-uppercase">
                                                                    Criar e editar Cargos
                                                                </h5>
                                                                <p className="tx-13 text-muted mb-0">
                                                                    Crie novos cargos para seus usuários.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                navegar(`${process.env.PUBLIC_URL}/adm_add_unidade/`, { state: values })
                                            }}>
                                            <Card.Body>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="d-flex">
                                                            <div className="settings-main-icon me-4 mt-1">
                                                                <div className="avatar avatar-md bg-primary-transparent text-primary">
                                                                    <i className="bi-plus-square fs-18"></i>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h5 className="tx-14 d-flex text-dark tx-uppercase">
                                                                    Criar Unidade
                                                                </h5>
                                                                <p className="tx-13 text-muted mb-0">
                                                                    Crie unidades e adicione usuários
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    {/* <Col xl={6}>
                                        <Card className="custom-card"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                navegar(`${process.env.PUBLIC_URL}/adm_edit_unidade/`, { state: values })
                                            }}>
                                            <Card.Body>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="d-flex">
                                                            <div className="settings-main-icon me-4 mt-1">
                                                                <div className="avatar avatar-md bg-primary-transparent text-primary">
                                                                    <i className="bi-pen fs-18"></i>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h5 className="tx-14 d-flex text-dark tx-uppercase">
                                                                    Editar Unidade
                                                                </h5>
                                                                <p className="tx-13 text-muted mb-0">
                                                                    Edite unidades criadas
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col> */}
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey='corp'>

                                <Card className="custom-card">
                                    <Card.Body>

                                        <div className="d-flex">
                                            <div>
                                                <h5 className="tx-14 d-flex text-dark tx-uppercase">
                                                    Dados de sua empresa
                                                </h5>
                                                <p className="tx-13 text-muted mb-0">
                                                    Aqui ficam os dados gerais de sua empresa.
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="">
                                        <div className="custom-switch float-end mb-0">
                                            <Link
                                                to="#"
                                                className="tx-15 mb-0 me-2"
                                            >
                                                Salvar
                                            </Link>
                                            <Button
                                                eventKey='edit'
                                                onClick={() => { navegar(`${process.env.PUBLIC_URL}/corporacao/`, { state: values }) }}
                                                size='sm'
                                                variant="outline-danger btn-rounded"
                                                className="mb-0"

                                            >
                                                cancelar
                                            </Button>
                                        </div>
                                    </Card.Footer>
                                </Card>

                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Fragment >
    )
};
Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
