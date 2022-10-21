import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Image, Tab, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import api from "../../../../../api";

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
                    <h2 className="main-content-title tx-24 mg-b-5"> {values?.okrselect?.objective.toUpperCase()} </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item> Minha Avaliações </Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => {
                                navegar(`${process.env.PUBLIC_URL}/minhas_okrs/`, { state: values })
                            }}
                        >  Minhas OKRs  </Breadcrumb.Item>
                        <Breadcrumb.Item active >  {values?.okrselect?.objective}  </Breadcrumb.Item>
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
                                        Nesta aba tem uma visão geral do OKR que você participou.
                                    </span>
                                </div>
                            </Card.Header>
                            <div className=" tasks">
                                <Row className="row-sm ms-2 ">
                                    <Table responsive hover
                                        className="card-table table-vcenter text-nowrap mb-0
                                        border hover"  >
                                        <thead>
                                            <tr>
                                                <th className="wd-lg-20p">Chaves</th>
                                                <th className="wd-lg-20p">Responsáveis</th>
                                                <th className="wd-lg-10p">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {values?.okrselect?.keys?.map(key => (
                                                <tr key={key.id}>
                                                    <td className="font-weight-semibold">
                                                        <div className="d-flex">
                                                            <span className="mt-1">{key?.description}</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-nowrap">
                                                        {key.name}
                                                    </td>
                                                    <td>
                                                        <span
                                                            className={`badge bg-pill bg-primary-light`}
                                                            >
                                                            {key.status}
                                                            {/* podew ser um select aqui */}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
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
