import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Breadcrumb, Col, Button, Nav, Card, Row, Tab, Form } from "react-bootstrap";
import * as InputMask from "../../Components/Masks";

function Settings() {
    const dadosrota = useLocation();
    const navegar = useNavigate()
    const [values, setValues] = useState(dadosrota.state);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();


        setValidated(true);
    };

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
                                        </Nav>
                                    </div>
                                </div>
                            </Card.Body>
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
                                                navegar(`${process.env.PUBLIC_URL}/adm_add_edit_unidade/`, { state: values })
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
                                                                    Criar e editar Unidades
                                                                </h5>
                                                                <p className="tx-13 text-muted mb-0">
                                                                    Crie, edite e apague unidades
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey='corp'>

                                <Card className="custom-card">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Card.Body>

                                            <div className="d-flex mb-2">
                                                <div>
                                                    <h5 className="tx-14 d-flex text-dark tx-uppercase">
                                                        Dados de sua empresa
                                                    </h5>
                                                    <p className="tx-13 text-muted mb-0">
                                                        Aqui ficam os dados gerais de sua empresa.
                                                    </p>
                                                </div>
                                            </div>


                                            <Form.Group className="form-group" controlid="">
                                                <Form.Label>
                                                    Nome fantasia: <span className="tx-danger">*</span>
                                                </Form.Label>
                                                <Form.Control
                                                    required
                                                    name="Nome Fantasia"
                                                    placeholder="Nome fantasia"
                                                    type="text"

                                                />
                                            </Form.Group>

                                            <Form.Group className="form-group" controlid="">
                                                <Form.Label>
                                                    CNPJ: <span className="tx-danger">*</span>
                                                </Form.Label>
                                                <Form.Control
                                                    required
                                                    name="cnpj"
                                                    placeholder="cnpj da empresa"
                                                    type="text"
                                                />
                                            </Form.Group>

                                            <Row>
                                                <Col>
                                                    <Form.Group className="form-group" controlid="">
                                                        <Form.Label>
                                                            Cidade: <span className="tx-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            name="cidade"
                                                            placeholder="cidade onde situa a empresa"
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="form-group" controlid="">
                                                        <Form.Label>
                                                            Estado: <span className="tx-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            name="estado"
                                                            placeholder="estado onde situa a empresa"
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <Form.Group className="form-group" controlid="">
                                                        <Form.Label>
                                                            País: <span className="tx-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            name="país"
                                                            placeholder="País onde situa a empresa"
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="form-group" controlid="">
                                                        <Form.Label>
                                                            CEP: <span className="tx-danger">*</span>
                                                        </Form.Label>

                                                        <InputMask.Cepformat />

                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                        </Card.Body>

                                        <Card.Footer className="">
                                            <div className="custom-switch float-end mb-2">
                                                <Button
                                                    type="submit"
                                                    size='sm'
                                                    // onClick={}
                                                    className="mb-0 me-2"
                                                >
                                                    Salvar
                                                </Button>
                                                <Button
                                                    onClick={() => { navegar(`${process.env.PUBLIC_URL}/corporacao/`, { state: values }) }}
                                                    size='sm'
                                                    variant="outline-danger btn-rounded"
                                                    className="mb-0"
                                                >
                                                    cancelar
                                                </Button>
                                            </div>
                                        </Card.Footer>
                                    </Form>
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
