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

        // console.log(dadosrota.state)

    }, [dadosrota])
    // useEffect(() => {
    //     let paraquem = dadosrota.state.AVPRselect?.paraquem
    //     let paraquem_serial = []
    //     let items = dadosrota.state.AVPRselect?.items


    //     for (let user of paraquem) {
    //         let items_serial = []
    //         for (let item of items) {
    //             for (const resposta of item.resposta) {
    //                 if (resposta.id_user == user.id) {
    //                     items_serial.push({ ...item, resposta });
    //                 }
    //             }
    //         }
    //         paraquem_serial.push({ ...user, respostas: items_serial })
    //     }

    //     paraquem = paraquem_serial

    //     // // console.log(items)
    //     // // console.log(paraquem)
    //     setValues(a => ({ ...a, AVPRselect: { ...a.AVPRselect, paraquem } }))
    // }, [dadosrota])

    //O que foi feito lá em progressoAVPR tem que está aqui

    function resposta(resp) {
        if (resp.resp) {

            // let answer=resp.resp;
            // // console.log(answer)
            if (resp.item.min) {

                let por = resp.resp.result ? resp.resp.result : Math.round((resp?.resp?.answer / resp?.item?.goal) * 100, -1);
                // console.log(por)
                if (por < 100) {
                    //   answer.resposta.result=por;
                    //   save(answer.resposta);
                    return (
                        <div className="text-danger">
                            <i className="bi bi-arrow-up"></i>
                            <span >{por}</span>
                        </div>
                    )
                }
                if (por >= 100) {
                    //   answer.resposta.result=100;
                    //   save(answer.resposta);
                    return (
                        <div className="text-success">
                            {100 == por ? <i className="bi bi-arrow-right-short"></i> : <i className="bi bi-arrow-up"></i>}
                            <span >{por}</span>
                        </div>)
                }


            }
            if (resp.item.max) {

                let por = resp.resp.result ? resp.resp.result : Math.round((resp?.resp?.answer / resp?.item?.goal) * 100, -1);
                // // console.log(por)
                if (100 < por || por == 100 || por < 0) {
                    // answer.resposta.result=100<por?100-(por-100):por;
                    //   save(answer.resposta);
                    return (
                        <div className={por == 100 ? "text-success" : "text-danger"}>
                            {por == 100 ? <i className="bi bi-arrow-right-short "></i> : <i className="bi bi-arrow-up "></i>}
                            <span  >{por}</span>
                        </div>)
                }

                if (por < 100 && por > 0) {
                    //   answer.resposta.result=por;
                    //   save(answer.resposta);
                    return (
                        <div className="text-success">
                            <i className="bi bi-arrow-up "></i>
                            <span >{por}</span>
                        </div>
                    )
                }



            }
        }
        return ""
        // // console.log(resp)
    }
    // // console.log(values)

    return (
        <Fragment>

            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5"> {values?.AVPRselect?.title.toUpperCase()} </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item> Minha Avaliações </Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => {
                                navegar(`${process.env.PUBLIC_URL}/minhas_av_resultados/`, { state: values })
                            }}
                        >  Meus AVPRs  </Breadcrumb.Item>
                        <Breadcrumb.Item active >  {values?.AVPRselect?.title}  </Breadcrumb.Item>
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

            {values?.AVPRselect?.paraquem?.map(user => (
                <Row key={user.id} className="row-sm">
                    <Col lg={12}>
                        <Card className="custom-card mg-b-20">
                            <Card.Body>
                                <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                                    <div>
                                        <label className="main-content-label mb-2">Resumo de {user?.name}</label>
                                        <span className="d-block tx-12 mb-3 text-muted">
                                            Estes são os resultados de avaliação por resultados desse usuário.
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
                                        {user?.respostas?.map((resp, index) => (
                                            <tr key={index} data-index={index}>
                                                <td className="font-weight-semibold">
                                                    <span className="mt-1">{resp?.item?.indicator}</span>
                                                </td>
                                                <td className="text-center">
                                                    {resp?.item?.goal} ({resp?.item?.max ? "MÁXIMO" : "MÍNIMO"})
                                                </td>
                                                <td className="text-center">
                                                    {resp?.resp?.answer}
                                                </td>
                                                <td className="text-center">
                                                    {resposta(resp)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}

        </Fragment>
    );
}

AVPR_resposta.propTypes = {};

AVPR_resposta.defaultProps = {};

export default AVPR_resposta;
