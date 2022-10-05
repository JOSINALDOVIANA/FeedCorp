import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Card, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import api from "../../../../../../api";

const ClimaResultado = () => {

    const dadosrota = useLocation();
    const navegar = useNavigate()
    const [values, setValues] = useState({});

    useEffect(() => {

        setValues(dadosrota.state);


    }, [dadosrota.state])

    // useEffect(() => {
    //     api.get(`pulses/get?id_user=${dadosrota.state.dadosUser.id}`).then(r => {
    //         let pulsesDirectUser = r.data.pulsesDirectUser;
    //         let pulsesCreate = r.data.pulsesCreateUser



    //         setValues(a => ({ ...a, pulsesCreate, pulsesDirectUser }))

    //     })
    //     // return(()=>setValues({}))
    // }, [dadosrota.state])
    console.log(values)
    function formatData(data) {
        const dat = new Date(data);
        const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
        // return `${dat.getDate()} / ${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1} / ${dat.getFullYear()}`
        return `${dat.getDate()} de ${meses[dat.getMonth()]} de ${dat.getFullYear()}`
    }
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Resultados da pesquisa de clima pulso</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Engajamento</Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/`, { state: values }) }}
                        >Clima Pulso</Breadcrumb.Item>
                        <Breadcrumb.Item active>Resultado</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div className="d-flex">
                    <div className="justify-content-center">

                        <Button
                            variant="white"
                            type="button"
                            className=" btn-icon-text my-2 me-2"
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/`, { state: values }) }}
                        >
                            <i className="bi bi-clipboard2-data me-2"></i> Lista
                        </Button>

                        <Button
                            variant="primary"
                            type="button"
                            className="my-2 me-2 btn-icon-text"
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/criar_clima_pulso`, { state: values }) }}
                        >
                            <i className="bi bi-clipboard-plus me-2"></i> Criar
                        </Button>

                        <Button
                            variant="primary"
                            type="button"
                            className="my-2 btn-icon-text"
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso_unidade/configuracoes`, { state: values }) }}
                        >
                            <i className="bi bi-gear-fill" />
                        </Button>
                    </div>
                </div>

            </div>
            {/* <!-- End Page Header --> */}


            <Card className="card custom-card">
                <Card.Header className="pt-3 px-3 pb-2 fs-4 fw-bolder my-auto tx-white bg-primary">
                    {values?.selectPulse?.title}
                    <h5 className="tx-14 fw-semibold">
                        Número de questões desta pesquisa: {values?.selectPulse?.questions?.length}
                    </h5>
                </Card.Header>

                <Card.Body>
                    <h5 className="tx-14 mb-2">Média geral deste Pulso: {values?.selectPulse?.media}</h5>

                    {values?.selectPulse?.questions?.map((q, i) => (
                        <div key={q.id}>

                            <h5>{i + 1} - {q?.question}</h5>

                            <h5 className="text-muted tx-14">
                                {q.users_resp.length} pessoas responderam esta pergunta
                            </h5>

                            <h5 className="text-muted card-sub-title">
                                A média das respostas é de {q?.media}
                            </h5>
                        </div>
                    ))}
                </Card.Body>
            </Card>



        </Fragment>
    )
};

ClimaResultado.propTypes = {};

ClimaResultado.defaultProps = {};

export default ClimaResultado;
