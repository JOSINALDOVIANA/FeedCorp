import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Form, Tab, Nav } from "react-bootstrap";
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

    // useEffect(() => {
    //     api.get(`keys/getOne?id_user=${dadosrota.state.dadosUser.id}`).then(r => {
    //         setValues(a => ({ ...a, keysDirect: r.data.key }))
    //     })
    // }, [])

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
                                                        <span className="d-block tx-12 mb-3 text-muted">
                                                            Aqui você pode editar o progresso de sua(s) key(s) deste OKR.
                                                        </span>
                                                        <Table responsive hover
                                                            className="card-table table-vcenter text-nowrap mb-0
                                                            border hover"  >
                                                            <thead>
                                                                <tr>
                                                                    <th className="wd-lg-30p">Sua chave</th>
                                                                    <th className="wd-lg-20p text-center">Seu progresso</th>
                                                                    <th className="wd-lg-20p">Atualizar progresso</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {values?.okrselect?.keys?.filter(item => item.id_user == values?.dadosUser?.id)?.map(key => (
                                                                    <tr key={key.id}>
                                                                        <td className="font-weight-semibold">
                                                                            <div className="d-flex">
                                                                                <span className="mt-1">{key?.description}</span>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            {key?.status}%
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <Form.Control
                                                                                size='sm'
                                                                                type="text"
                                                                                id="progress"
                                                                                placeholder="Adicione seu progresso"
                                                                                onBlur={async e => {
                                                                                    // console.log(key)
                                                                                    let up = key;
                                                                                    up.status = e.target.value;

                                                                                    setValues(a => {
                                                                                        let keys = a.okrselect.keys.filter(item => item.id != key.id);
                                                                                        let k = key;
                                                                                        k.status = e.target.value;
                                                                                        keys.push({ ...k })
                                                                                        return ({ ...a, okrselect: { ...a.okrselect, keys } })

                                                                                    })
                                                                                    await api.put(`keys/update`, { keys: [{ ...up }] })

                                                                                }}
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="todasChaves">
                                                        <span className="d-block tx-12 mb-3 text-muted">
                                                            Aqui você pode visualizar o progresso geral de seus colegas neste OKR
                                                        </span>
                                                        <Table responsive hover
                                                            className="card-table table-vcenter text-nowrap mb-0
                                                            border hover"  >
                                                            <thead>
                                                                <tr>
                                                                    <th className="wd-lg-30p">Chaves de objetivo</th>
                                                                    <th className="wd-lg-10p">Responsáveis</th>
                                                                    <th className="wd-lg-20p text-center">Progressos</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/* Ve como faz esse map aqui */}
                                                                {values?.okrselect?.keys?.map(key => (
                                                                    <tr key={key.id}>
                                                                        <td className="font-weight-semibold">
                                                                            <span className="mt-1">{key.description}</span>
                                                                        </td>
                                                                        <td className="text-nowrap">
                                                                            {key.name}
                                                                            {/* <i className=""></i> */}
                                                                        </td>
                                                                        <td className="text-center">
                                                                            {key.status}
                                                                            {/* <i className=""></i> */}
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
