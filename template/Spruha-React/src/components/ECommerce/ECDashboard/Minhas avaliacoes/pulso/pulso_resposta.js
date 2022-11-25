import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table, Button, Tab, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { successClimaPulse, dangerClimaPulse } from "../../Components/Alerts"
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rating from "react-rating";

import api from "../../../../../api";

function MeuClimaPulso() {

    const [color, setColor] = useState("primary");

    function labeling({ rate, q }) {
        // // console.log(q)
        let label;
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
        document.getElementById(`${q.id}`).innerHTML = label || "";
    }


    const dadosrota = useLocation();
    const navegar = useNavigate();
    const [values, setValues] = useState({});
    const [controller, setController] = useState(0);

    useEffect(() => {
        if (!dadosrota.state) {
            navegar(`${process.env.PUBLIC_URL}/home`)
        }
        setValues(dadosrota.state);
        setController(dadosrota?.state?.PulseSelect?.questions?.length);


    }, [dadosrota])

    console.log(values)
    console.log(controller)

    return (
        <Fragment>

            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5"> {values?.PulseSelect?.title} </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item> Minha Avaliações </Breadcrumb.Item>
                        <Breadcrumb.Item
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/meus_climas_pulso/`, { state: values }) }}
                        >  Meus Clima Pulsos  </Breadcrumb.Item>
                        <Breadcrumb.Item active >  {values?.PulseSelect?.title}  </Breadcrumb.Item>
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
            <div className="row-sm">
                {/* COMEÇO MAP */}
                {values?.PulseSelect?.questions?.map(q => (

                    <Row key={q.id}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="mt-2 mb-4 d-inline-block">
                                    <label className="main-content-label">{q?.question}</label>
                                </div>

                                <div className="box-body text-center fs-70">
                                    <Rating id={q.id + 3}
                                        // quiet={!!q.resp?true:false}
                                        // readonly={!!q.resp?true:false}
                                        emptySymbol={
                                            <StarOutlineIcon style={{ color: "#aaa", fontSize: 35, margin: 2 }} />
                                        }
                                        fullSymbol={
                                            <StarRateIcon style={{ color: "#36D98D", fontSize: 35, margin: 2 }} />
                                        }
                                        placeholderSymbol={
                                            <StarRateIcon style={{ color: "#36D98D", fontSize: 35, margin: 2 }} />
                                        }
                                        placeholderRating={q?.resp?.answer / 20}
                                        fractions={1}
                                        // value={q?.resp?.answer/20}
                                        onChange={async value => {
                                            // document.getElementById(`${q.id+3}`).placeholderRating=value
                                            setController(a =>(a=a-1))
                                            let pulse = values.PulseSelect;
                                            let questions = pulse.questions.filter(i => i.id != q.id);
                                            let obj = {
                                                id: q?.resp?.id || 0,
                                                id_question: q.id,
                                                id_user: values.dadosUser.id,
                                                answer: value * 20
                                            }
                                            if (!!q.resp) {
                                                api.put(`pulses/answer_user/update`, { ...obj }).then(r => {
                                                    let question = q;
                                                    if (r.data.status) {
                                                        question.resp = { ...r.data.dados }
                                                    }
                                                    questions.push({ ...q });
                                                    pulse.questions = questions;
                                                    setValues(a => ({ ...a, PulseSelect: pulse }))
                                                })
                                            } else {
                                                api.post(`pulses/answer_user/insert`, { ...obj }).then(r => {
                                                    let question = q;
                                                    if (r.data.status) {
                                                        question.resp = { ...r.data.dados }
                                                    }
                                                    questions.push({ ...q });
                                                    pulse.questions = questions;
                                                    setValues(a => ({ ...a, PulseSelect: pulse }))
                                                })
                                            }

                                        }}
                                        onHover={rate => labeling({ rate, q })}

                                    />
                                    <div id={q.id} style={{ height: 20, fontFamily: "Arial" }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>

                ))}
                {/* FINAL MAP */}
                <div className="d-flex justify-content-end mb-2">
                    <Button
                        variant="primary"
                        type="button"
                        className="btn"
                        onClick={() => {
                            if (controller == 0) {
                                successClimaPulse()
                                navegar(`${process.env.PUBLIC_URL}/meus_climas_pulso/`, { state: values })
                            } else {
                                dangerClimaPulse()
                            }
                        }}
                    >
                        Finalizar pesquisa
                    </Button>
                </div>
            </div>

            {/* <!-- End Row --> */}

        </Fragment>
    );
}

MeuClimaPulso.propTypes = {};

MeuClimaPulso.defaultProps = {};

export default MeuClimaPulso;