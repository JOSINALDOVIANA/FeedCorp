import React, { Fragment, useContext, useEffect, useState } from "react";
import { Row, Col, Card, Accordion, Form, Collapse } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../../../../../..";


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

            <div className="card custom-card">

                <Row className="row-sm">
                    <Col lg={12}>
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

                                <Accordion
                                // defaultActiveKey="0"
                                >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Bem Estar</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">Você consegue dedicar bastante tempo e atenção à sua família?</span>
                                                <p className="onoffswitch2 mx-2">
                                                    <input
                                                        type="radio"
                                                        name="onoffswitch7"
                                                        id="myonoffswitch20"
                                                        // onClick={() => Switcherdata.LtrtoRtl()}
                                                        className="onoffswitch2-checkbox"
                                                    />
                                                    <label
                                                        htmlFor="myonoffswitch20"
                                                        className="onoffswitch2-label"
                                                    ></label>
                                                </p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Produtividade</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">O trabalho causa ansiedades indesejadas em sua vida pessoal?</span>
                                                <p className="onoffswitch2 mx-2">
                                                    <input
                                                        type="radio"
                                                        name="onoffswitch7"
                                                        id="myonoffswitch20"
                                                        // onClick={() => Switcherdata.LtrtoRtl()}
                                                        className="onoffswitch2-checkbox"
                                                    />
                                                    <label
                                                        htmlFor="myonoffswitch20"
                                                        className="onoffswitch2-label"
                                                    ></label>
                                                </p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Conectividade com líderes e colegas</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">Seu gestor é profissional e gentil ao se comunicar com você?</span>
                                                <p className="onoffswitch2 mx-2">
                                                    <input
                                                        type="radio"
                                                        name="onoffswitch7"
                                                        id="myonoffswitch20"
                                                        // onClick={() => Switcherdata.LtrtoRtl()}
                                                        className="onoffswitch2-checkbox"
                                                    />
                                                    <label
                                                        htmlFor="myonoffswitch20"
                                                        className="onoffswitch2-label"
                                                    ></label>
                                                </p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <br />
                                {/* <Collapse in={Accordion1}>
                                    <pre>
                                        <code>
                                            {
                                                `<Accordion defaultActiveKey="0">
                                                    <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Making a Beautiful CSS3 Button Set</Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                                        mollit anim id est laborum.
                                                    </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Horizontal Navigation Menu Fold Animation</Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                                        mollit anim id est laborum.
                                                    </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Creating CSS3 Button with Rounded Corners</Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                                        mollit anim id est laborum.
                                                    </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>

                                                            `
                                            }

                                        </code>
                                    </pre>
                                </Collapse> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </Fragment>
    );
}

export default ClimaTabelaRealizados;