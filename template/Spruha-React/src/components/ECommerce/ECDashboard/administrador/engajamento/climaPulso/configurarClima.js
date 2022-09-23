import React, { Fragment, useContext, useEffect, useState } from "react";
import { Row, Col, Card, Accordion, Form, FormGroup, Collapse, Breadcrumb, Button, ListGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../../../../../..";
import {Grid, Divider} from "@mui/material";
import { SelectDBQuestions } from "../../../Cards/dataTabelas/SelectDBQuestions"

// import { Container } from './styles';

const ClimaTabelaRealizados = () => {

    const dadosrota = useLocation();
    const location = useLocation();
    const navegar = useNavigate();
    const { values, setValues } = useContext(usuarioContext);
    useEffect(() => {
        setValues(dadosrota.state)
    }, [dadosrota])

    const [Accordion1, setAccordion1] = useState(false);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Configurar Clima Pulso</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Engajamento</Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/`, { state: values }) }}>
                            Clima Pulso
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Configurar Clima Pulso</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div className="d-flex">
                    <div className="justify-content-center">

                        <Button
                            variant="white"
                            type="button"
                            className=" btn-icon-text my-2 me-2"
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/`, { state: values }) }}
                        >
                            <i className="bi bi-clipboard2-data me-2"></i> Lista
                        </Button>

                        <Button
                            variant="primary"
                            type="button"
                            className="my-2 me-2 btn-icon-text"
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/criar`, { state: values }) }}
                        >
                            <i className="bi bi-clipboard-plus me-2"></i> Criar
                        </Button>

                        <Button
                            variant="primary"
                            type="button"
                            className="my-2 btn-icon-text"
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/configuracoes`, { state: values }) }}
                        >
                            <i className="bi bi-gear-fill" />
                        </Button>
                    </div>
                </div>

            </div>
            {/* <!-- End Page Header --> */}

            <Row className="row-sm">
                <Col lg={12} md={12}>
                    <Card className="custom-card">
                        <Card.Header className="d-sm-flex justify-content-between align-items-center">
                            <div>
                                <Card.Title className="main-content-label mb-1">
                                    <h6>Configurações OKR</h6>
                                </Card.Title>
                                <Card.Subtitle className="text-muted card-sub-title">
                                    <p>Crie perguntas para cada categoria</p>
                                </Card.Subtitle>
                            </div>
                            {/* <Form.Check className="mb-3 mb-sm-0"
                                    aria-controls="example-collapse-text"
                                    onClick={() => setAccordion1(!Accordion1)}
                                    type="switch"
                                    label="ShowCode"
                                /> */}
                        </Card.Header>
                        <Card.Body>
                            <Grid id="keys">
                                <Row>
                                    <Col sm={12} md={12} lg={6} xl={6}>

                                        <input
                                            type="text"
                                            className="form-control input-description mb-2"
                                            placeholder="Digite sua questão"

                                        />
                                    </Col>

                                    <Col sm={12} md={12} lg={6} xl={6} className="mb-2">
                                        <SelectDBQuestions />

                                    </Col>

                                    <Col sm={12} md={12} lg={12} xl={12}>
                                        <div className="d-flex justify-content-end mb-2">
                                            <Button
                                                variant="primary"
                                                type="button"
                                                className="btn"
                                            >
                                                Adicionar
                                            </Button>
                                        </div>

                                    </Col>

                                </Row>
                            </Grid>

                            <ListGroup>

                                <ListGroup.Item className="tx-semibold">
                                    Categoria 1
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-betwween align-items-center" border="primary">
                                    <div className="ms-2 me-auto">Perguntas</div>

                                    <div className="me-2">
                                        <i
                                            // onClick={} 
                                            style={{ cursor: 'pointer' }} className="ti ti-trash"></i>
                                    </div>
                                </ListGroup.Item>

                                <Divider/>

                                <ListGroup.Item className="tx-semibold">
                                    Categoria 2
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-betwween align-items-center">
                                    <div className="ms-2 me-auto">Perguntas</div>

                                    <div className="me-2">
                                        <i
                                            // onClick={} 
                                            style={{ cursor: 'pointer' }} className="ti ti-trash"></i>
                                    </div>
                                </ListGroup.Item>

                                <Divider/>

                                <ListGroup.Item className="tx-semibold">
                                    Categoria 3
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-betwween align-items-center">
                                    <div className="ms-2 me-auto">Perguntas</div>

                                    <div className="me-2">
                                        <i
                                            // onClick={} 
                                            style={{ cursor: 'pointer' }} className="ti ti-trash"></i>
                                    </div>
                                </ListGroup.Item>

                            </ListGroup>



                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Fragment>
    );
}

export default ClimaTabelaRealizados;