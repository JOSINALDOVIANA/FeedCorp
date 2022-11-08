import React, { Fragment,  useEffect, useState } from "react";
import { Row, Col, Card, Breadcrumb, Button, ListGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import { Grid, Divider } from "@mui/material";
import { SelectDBQuestions } from "../../../Components/Selects/SelectDBQuestions"
import api from "../../../../../../api";
import {ClimaQuestionAdd, ClimaQuestionDelete, ClimaQuestionError} from "../../../Components/Alerts"
// import { Container } from './styles';

const ClimaTabelaRealizados = () => {

    const dadosrota = useLocation();
    
    const navegar = useNavigate();
    const [values, setValues] = useState({});
    const [recarregar, setRecarregar] = useState(false);



    useEffect(() => {
        setValues(dadosrota.state)
    }, [dadosrota])

    useEffect(() => {
        api.get(`/questions/category_question/get`).then(r => {

            setValues(a => ({ ...a, CategoryQuestion: r.data.categories,selectQuestionsCat:"",Question:"" }))
        })
    }, [recarregar])

  
    // // console.log(values)
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Configurar Clima Pulso</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Engajamento</Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/`, { state: values }) }}>
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
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/`, { state: values }) }}
                        >
                            <i className="bi bi-clipboard2-data me-2"></i> Lista
                        </Button>

                        <Button
                            variant="primary"
                            type="button"
                            className="my-2 me-2 btn-icon-text"
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/criar_clima_pulso`, { state: values }) }}
                        >
                            <i className="bi bi-clipboard-plus me-2"></i> Criar
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
                                    <h6>Configurações CLIMA PULSO</h6>
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
                                            id="inp"
                                            className="form-control input-description mb-2"
                                            placeholder="Digite sua questão"
                                            onBlur={(e) => {
                                                setValues(a => ({ ...a, Question: e.target.value }));
                                            }}
                                        />
                                    </Col>

                                    <Col sm={12} md={12} lg={6} xl={6} className="mb-2">
                                        <SelectDBQuestions setValues={setValues} />

                                    </Col>

                                    <Col sm={12} md={12} lg={12} xl={12}>
                                        <div className="d-flex justify-content-end mb-2">
                                            <Button
                                                variant="primary"
                                                type="button"
                                                className="btn"
                                                onClick={() => {
                                                    if(String(values.Question)!=="" && String(values.selectQuestionsCat)!==""){
                                                        api.post(`pulses/questions/insert`, { questions: [{ question: values.Question, id_cat: values.selectQuestionsCat }] }).then(r => {
                                                            if (r.data.status) {
                                                                ClimaQuestionAdd()
                                                                setRecarregar(a => !a)
                                                                setValues(a=>({...a,selectQuestionsCat:"",Question:""}))
                                                            }
                                                        })
                                                    }else{
                                                        ClimaQuestionError()
                                                    }
                                                }}
                                            >
                                                Adicionar
                                            </Button>
                                        </div>

                                    </Col>

                                </Row>
                            </Grid>

                            {values?.CategoryQuestion?.map(item => (

                                <ListGroup key={item.id}>

                                    <ListGroup.Item className="tx-semibold">
                                        {item.category}
                                    </ListGroup.Item>
                                    {item?.questions?.map(r => (

                                        <ListGroup.Item
                                            key={r.id}
                                            as="li"
                                            className="d-flex justify-content-betwween align-items-center">
                                            <div className="ms-2 me-auto">{r.question}</div>

                                            <div className="me-2">
                                                <i style={{ cursor: 'pointer' }} className="ti ti-trash"
                                                    onClick={() => {
                                                        api.delete(`/pulses/questions/delete?id=${r.id}`).then(resp => {
                                                            if (resp.data.status) {
                                                                ClimaQuestionDelete()
                                                                setRecarregar(anterior => !anterior);

                                                            }
                                                        })
                                                    }}
                                                >
                                                </i>
                                            </div>
                                        </ListGroup.Item>


                                    ))}

                                    <Divider />

                                </ListGroup>

                            ))}



                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Fragment>
    );
}

export default ClimaTabelaRealizados;