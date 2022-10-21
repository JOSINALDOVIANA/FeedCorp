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
                    <h2 className="main-content-title tx-24 mg-b-5"> {values?.avprselect?.title.toUpperCase()} </h2>
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
                                    <label className="main-content-label mb-2">Visão geral de Avaliação por resultados</label>
                                    <span className="d-block tx-12 mb-3 text-muted">
                                        Nesta avaliação você pode atualizar os seus resultados e alcançar as metas
                                        propostas pelo seu gestor.
                                    </span>
                                </div>
                            </Card.Header>

                            <Table responsive hover className="card-table table-vcenter text-nowrap mb-0 border hover">
                                <thead>
                                    <tr>
                                        <th className="wd-lg-30p">Indicador</th>
                                        {/* <th className="wd-lg-20p text-center">Meta</th> */}
                                        <th className="wd-lg-20p text-center">Realizado</th>
                                        <th className="wd-lg-20p text-center">Resultado</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {values?.avprselect?.items?.map(item => (
                                        <tr key={item.id}>
                                            <td className="font-weight-semibold">
                                                <span className="mt-1">{item.indicator}</span>
                                            </td>
                                            {/* <td className="text-center">
                                            25 min
                                        </td> */}
                                            <td className="text-center">
                                                <Form.Control
                                                    size='sm'
                                                    style={{ textAlign: "center" }}
                                                    type="text"
                                                    id="progress"
                                                    disabled={item?.M_resposta?.answer ? true : false}
                                                    placeholder={item?.M_resposta?.answer || "Valor numerico"}
                                                    onBlur={e => {
                                                        let M_resposta = { answer: e.target.value, id_item: item.id, id_user: values.dadosUser.id }
                                                        api.post(`item_answer_user/insert`, { ...M_resposta }).then(r => {

                                                            let item2 = { ...item, M_resposta };
                                                            let avprselect = values.avprselect;

                                                            let items = avprselect.items.filter(i => i.id != item2.id);
                                                            items = [...items, { ...item2 }];
                                                            avprselect.items = items;

                                                            let Myavpr = values.Myavpr.filter(i => i.id != values.avprselect.id);
                                                            Myavpr = [...Myavpr, { ...avprselect }]

                                                            setValues(a => ({ ...a, Myavpr, avprselect }))

                                                        })

                                                    }}
                                                />
                                            </td>
                                            <td className="text-center">
                                                {item?.M_resposta?.answer}
                                            </td>
                                        </tr>
                                    ))}

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
