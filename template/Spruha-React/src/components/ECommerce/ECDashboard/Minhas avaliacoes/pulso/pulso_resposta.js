import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Tab, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import * as rating1 from "../../Components/Rating"
import api from "../../../../../api";

function MeuClimaPulso() {

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
                    <h2 className="main-content-title tx-24 mg-b-5"> Titulo pulso </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item> Minha Avaliações </Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/meus_climas_pulso/`, { state: values }) }}
                        >  Meus Clima Pulsos  </Breadcrumb.Item>
                        <Breadcrumb.Item active >  titulo pulso  </Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div className="d-flex">
                    <div className="justify-content-center">
                        <Button
                            type="button"
                            variant="white"
                            className=" btn-icon-text my-2"
                            onClick={() => {
                                navegar(`${process.env.PUBLIC_URL}/meus_climas_pulso/`, { state: values })
                            }}
                        >
                            <i className="bi bi-caret-left-fill"></i>
                        </Button>
                    </div>
                </div>
            </div>

            {/* <!-- Row --> */}
            <Row className="row-sm">
                <Col sm={6} md={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <h6 className="card-title">
                                <label className="main-content-label"> Radio Group Rating</label>
                            </h6>
                        </Card.Header>
                        <Card.Body>
                            <div className="box  box-example-1to10">
                                <div className="box-body  text-center fs-30">
                                    <rating1.RadioGroupRating />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <h6 className="card-title">
                                <label className="main-content-label"> Hover Feedback Rating</label>
                            </h6>
                        </Card.Header>
                        <Card.Body>
                            <div className="box box-large box-example-horizontal">
                                <div className="box-body text-center">
                                    <rating1.CustomizedRating5 />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End Row --> */}

            {/* <!-- Row --> */}
            <Row className="row-sm">
                <Col sm={6} md={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <h6 className="card-title">
                                <label className="main-content-label"> Circle rating</label>
                            </h6>
                        </Card.Header>
                        <Card.Body>
                            <div className="box  box-example-1to10">
                                <div className="box box-example-square">
                                    <div className="box-body text-center">
                                        <rating1.CustomizedRating />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Fragment>
    );
}

MeuClimaPulso.propTypes = {};

MeuClimaPulso.defaultProps = {};

export default MeuClimaPulso;
