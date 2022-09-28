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
                    <h2 className="main-content-title tx-24 mg-b-5">Resultado da pesquisa de clima pulso</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Engajamento</Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/`, { state: values }) }}
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
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/`, { state: values }) }}
                        >
                            <i className="bi bi-clipboard2-data me-2"></i> Lista
                        </Button>

                        <Button
                            variant="primary"
                            type="button"
                            className="my-2 me-2 btn-icon-text"
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/criar_clima_pulso`, { state: values }) }}
                        >
                            <i className="bi bi-clipboard-plus me-2"></i> Criar
                        </Button>

                        <Button
                            variant="primary"
                            type="button"
                            className="my-2 btn-icon-text"
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/climapulso/configuracoes`, { state: values }) }}
                        >
                            <i className="bi bi-gear-fill" />
                        </Button>
                    </div>
                </div>

            </div>
            {/* <!-- End Page Header --> */}


            <div className="card custom-card">
                    <h1>titulo: {values.selectPulse.title}</h1>
                 <span>
                    {values?.selectPulse?.questions?.length} - perguntas                                        
                 </span>
                 <span>a media geral deste Pulso é de: {values.selectPulse.media}</span>
                 {values?.selectPulse?.questions.map((q,i)=>(
                    <div>

                        <h5>questão {i+1}: {q.question}</h5>
                        <span>{q.users_resp.length} pessoas responderam esta pergunta</span>
                        <span>a média das respostas é de {q.media}</span>

                    </div>
                    ))}
            </div>



        </Fragment>
    )
};

ClimaResultado.propTypes = {};

ClimaResultado.defaultProps = {};

export default ClimaResultado;
