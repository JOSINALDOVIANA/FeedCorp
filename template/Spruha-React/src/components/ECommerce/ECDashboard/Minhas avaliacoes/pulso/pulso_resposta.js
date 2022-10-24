import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Tab, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import * as rating1 from "../../Components/Rating"
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rating from "react-rating";
import api from "../../../../../api";

function MeuClimaPulso() {

    const [color, setColor] = useState("primary");

    function labeling(rate) {
        let label;
        if (rate <= 0.5) {
            label = "Horrível";
        }
        if (rate > 0.5 && rate < 2) {
            label = "Muito ruim";
        }
        if (rate > 1 && rate <= 2) {
            label = "Ruim";
        }
        if (rate > 2 && rate <= 3) {
            label = "Normal";
        }
        if (rate > 3 && rate <= 4.5) {
            label = "Bom";
        }
        if (rate > 4.5) {
            label = "Excelente";
        }
        document.getElementById("label-onrate").innerHTML = label || "";
    }


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

                <Card className="custom-card">
                    <Card.Header>
                        <h6 className="card-title">
                            <label className="main-content-label"> Rating funcionando dentro da página</label>
                        </h6>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <label className="main-content-label">Qual seu nível de satisfação e blá blá blá</label>
                        </div>

                        <div className="box-body text-center fs-70">
                            <Rating
                                emptySymbol={
                                    <StarOutlineIcon style={{ color: "#aaa", fontSize: 25, margin: 2 }} />
                                }
                                fullSymbol={
                                    <StarRateIcon style={{ color: "#36D98D", fontSize: 25, margin: 2 }} />
                                }
                                placeholderSymbol={
                                    <StarRateIcon style={{ color: "#36D98D", fontSize: 25, margin: 2 }} />
                                }
                                placeholderRating={0}
                                fractions={1}
                                onChange={value => alert(value)}
                                onHover={rate => labeling(rate)}
                            />
                            <div id="label-onrate" style={{ height: 20, fontFamily: "Arial" }} />
                        </div>
                    </Card.Body>
                </Card>

            </Row>
            {/* <!-- End Row --> */}

            {/* <!-- Row --> */}
            <Row className="row-sm">

                <Card className="custom-card">
                    <Card.Header>
                        <h6 className="card-title">
                            <label className="main-content-label"> Rating componente funcionando fora da página</label>
                        </h6>
                    </Card.Header>
                    <Card.Body>
                        <div className="box  box-example-1to10">
                            <div className="box-body  text-center fs-30">
                                <rating1.MarcusRating />
                            </div>
                        </div>
                    </Card.Body>
                </Card>

            </Row>
            {/* <!-- End Row --> */}

            {/* <!-- Row --> */}
            <Row className="row-sm">

                <Card className="custom-card">
                    <Card.Header>
                        <h6 className="card-title">
                            <label className="main-content-label"> Rating MUI pra te ver o bug ao passar o mouse</label>
                            <label className="main-content-label"> O problema é a margin entre eles q eu n consegui tirar via styled, sx, className, style, NADA</label>
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

            </Row>
            {/* <!-- End Row --> */}



        </Fragment>
    );
}

MeuClimaPulso.propTypes = {};

MeuClimaPulso.defaultProps = {};

export default MeuClimaPulso;