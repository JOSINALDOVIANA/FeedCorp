import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Tab, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rating from "react-rating";
import * as rating1 from "../../Components/Rating"
import api from "../../../../../api";

function MeuClimaPulso() {

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
                    <h2 className="main-content-title tx-24 mg-b-5"> Resumo - Titulo pulso </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item> Minha Avaliações </Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/meus_climas_pulso`, { state: values }) }}
                        >  Meus Clima Pulsos  </Breadcrumb.Item>
                        <Breadcrumb.Item active >  titulo pulso  </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>


            <label className="text-muted fs-12">Esta página mostra o seu resultado nessa pesquisa de clima pulso</label>
            {/* <!-- Row --> */}
            <Row className="row-sm">

                <Card className="custom-card">
                    <Card.Body>
                        <div className="mt-2 mb-4 d-inline-block">
                            <label className="main-content-label">Pergunta aqui</label>
                        </div>

                        <div className="box-body text-center fs-70 d-flex justify-content-center mb-3">
                            <rating1.DisabledRating/>
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
