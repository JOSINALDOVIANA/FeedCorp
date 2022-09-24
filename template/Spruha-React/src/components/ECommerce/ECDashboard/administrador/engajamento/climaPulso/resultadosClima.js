import React, { Fragment, useContext, useEffect } from "react";
import { Breadcrumb, Button, Col, Row, Card, Table } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { usuarioContext } from '../../../../../..';
const resultadosClimaPulso = () => {

    const dadosrota = useLocation();
    const location = useLocation();
    const navegar = useNavigate();
    const { values, setValues } = useContext(usuarioContext);
    useEffect(() => {
        setValues(dadosrota.state)
    }, [dadosrota])

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Resultado da pesquisa</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Engajamento</Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/`, { state: values }) }}
                        >Clima Pulso</Breadcrumb.Item>
                        <Breadcrumb.Item active>Resultado</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
            {/* <!-- End Page Header --> */}


            <div className="card custom-card">
                /* It's a placeholder for the content of the card. */
                {/* CONTEUDO */}
            </div>

        </Fragment>
    )
};

resultadosClimaPulso.propTypes = {};

resultadosClimaPulso.defaultProps = {};

export default resultadosClimaPulso;
