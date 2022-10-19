import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Form, Tab, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import api from "../../../../../api";


function AVPR_resposta() {

    const dadosrota = useLocation();
    const navegar = useNavigate()
    const [values, setValues] = useState({});

    useEffect(() => {
        if (!dadosrota.state) {
            navegar(`${process.env.PUBLIC_URL}/home`)
        }
        setValues(dadosrota.state);


    }, [dadosrota])

    console.log(values)

    return (
        <Fragment>

            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5"> Título da AVPR </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item> Minha Avaliações </Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => {
                                navegar(`${process.env.PUBLIC_URL}/minhas_av_resultados/`, { state: values })
                            }}
                        >  Meus AVPRs  </Breadcrumb.Item>
                        <Breadcrumb.Item active >  Título da AVPR  </Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div className="d-flex">
                    <div className="justify-content-center">
                        <Button
                            type="button"
                            variant="white"
                            className=" btn-icon-text my-2"
                            onClick={() => {
                                navegar(`${process.env.PUBLIC_URL}/minhas_av_resultados/`, { state: values })
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
                                    <label className="main-content-label mb-2">Resumo de Avaliação por resultados</label>
                                    <span className="d-block tx-12 mb-3 text-muted">
                                        Estes são os seus resultados dessa avaliação por resultados.
                                    </span>
                                </div>
                            </Card.Header>

                            <Table responsive hover className="card-table table-vcenter text-nowrap mb-0 border hover">
                                <thead>
                                    <tr>
                                        <th className="wd-lg-20p">Indicador</th>
                                        <th className="wd-lg-10p text-center">Meta</th>
                                        <th className="wd-lg-20p text-center">Realizado</th>
                                        <th className="wd-lg-10p text-center">Resultado</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td className="font-weight-semibold">
                                            <span className="mt-1">Atender clientes</span>
                                        </td>
                                        <td className="text-center">
                                            1 min
                                        </td>
                                        <td className="text-center">
                                            2 min
                                        </td>
                                        <td className="text-center">
                                            3%
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Fragment>
    );
}

AVPR_resposta.propTypes = {};

AVPR_resposta.defaultProps = {};

export default AVPR_resposta;
