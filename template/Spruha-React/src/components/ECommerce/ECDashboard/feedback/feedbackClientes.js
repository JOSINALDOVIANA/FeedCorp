import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Card,  Row, Image } from "react-bootstrap";
import {  useLocation, useNavigate,  } from "react-router-dom";
import api from "../../../../api";



function FeedbackCliente() {

    const dadosrota = useLocation();
    const navegar = useNavigate()
    const [values, setValues] = useState({});


    useEffect(() => {
        api.get(`feedback/get?id_company=${dadosrota.state.company.id}`).then(r => {
            if (r.data.status) {
                setValues(a => ({ ...dadosrota.state, companyFeed: r?.data?.feedbacks?.filter(item=>item.ext) }))
            }
        })
    }, [])
    

    function formatData(data) {
        const dat = new Date(data);
        const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
        // return `${dat.getDate()} / ${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1} / ${dat.getFullYear()}`
        return `${dat.getDate()} de ${meses[dat.getMonth()]} de ${dat.getFullYear()}`
    }
    return (
        <Fragment>
            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">
                        Feedback de seus clientes
                    </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">
                            Feedback
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Feedback dos clientes
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div className="d-flex">
                    <div className="justify-content-center">
                        <Button
                            type="button"
                            variant="primary"
                            className=" my-2 btn-icon-text"
                        onClick={() => { navegar(`${process.env.PUBLIC_URL}/feedbacks/${values.company.id}`, { state: values }) }}
                        >
                            <i className="fe fe-download-cloud me-2"></i>
                            ver página de feedback
                        </Button>

                    </div>
                </div>
            </div>


            <Row className="row-sm">
                <Card className=" custom-card">
                    <Card.Body>

                        <div>
                            <h6 className="main-content-label mb-3">Comentários</h6>
                        </div>

                        <div className="text-wrap">

                            {/* MAP INICIO */}
                            {values?.companyFeed?.map(feed => (
                                <div key={feed.id} className="example mt-1">
                                    <div className="d-sm-flex comment-section">
                                        <div className="d-flex me-3">
                                            <Image className="main-avatar avatar" alt="img" src={"https://imagensjosinaldo.s3.amazonaws.com/fbf3c3a12fc9044b5920b7b55433cb72-opclient_logo.png"} />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1 font-weight-semibold"> {feed.anonymous ? "Anônimo" : feed.name}
                                                <span className="tx-14 mx-2"><i className="fe fe-check-circle text-success tx-12"></i></span>
                                                <span className="tx-12 text-muted">{formatData(feed.updated_at)}</span>
                                            </h5>
                                            <p className="font-13  mb-2 mt-2">
                                                {feed.feedback}
                                            </p>
                                            {/* Pode colocar uma condição aqui pra aparecer pra cada tipo de comentário */}
                                            {feed.type == "Criticas" && <span className="badge bg-success-light mt-1">elogio</span>}
                                            {feed.type == "Sugestões" && <span className="badge bg-info-light mt-1">sugestão</span>}
                                            {feed.type == "Elogios" && <span className="badge bg-warning-light mt-1">crítica</span>}
                                        </div>
                                    </div>
                                </div>

                            ))}
                            {/* MAP FINAL*/}


                        </div>

                    </Card.Body>
                </Card>
            </Row>


        </Fragment >
    );
}

FeedbackCliente.propTypes = {};

FeedbackCliente.defaultProps = {};

export default FeedbackCliente;
