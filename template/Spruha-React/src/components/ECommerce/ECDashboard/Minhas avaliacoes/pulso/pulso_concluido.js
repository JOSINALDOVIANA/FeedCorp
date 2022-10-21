import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Tab, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
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


            <div className="card custom-card">


            </div>

        </Fragment>
    );
}

MeuClimaPulso.propTypes = {};

MeuClimaPulso.defaultProps = {};

export default MeuClimaPulso;
