import React, { Fragment, useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, ListGroup, ProgressBar, Row, Table, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate, Outlet, useParams } from "react-router-dom";
import api from "../../../../api";



function FeedbackCliente() {

    const { company } = useParams();
    const navegar = useNavigate()
    const [values, setValues] = useState({});
    const [carregados, setCarregados] = useState(false)

    useEffect(() => {
        api.get(`unit/getAll?id_company=${company}`).then(r => {
            if (r.data.status) {
                setValues(a => ({ ...a, units: r.data.units, company: r.data.company }))
            }
        })
    }, [])
    console.log(values)


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
                        {/* <Button
                        type="button"
                        variant="white"
                        className=" btn-icon-text my-2 me-2"
                        >
                        <i className="fe fe-download me-2"></i> Import
                        </Button>
                        <Button
                        type="button"
                        variant="white"
                        className=" btn-icon-text my-2 me-2"
                        >
                        <i className="fe fe-filter me-2"></i> Filter
                        </Button> */}
                        {/* <Button
                            type="button"
                            variant="primary"
                            className=" my-2 btn-icon-text"
                            // onClick={}
                        >
                            <i className="fe fe-download-cloud me-2"></i>
                            a
                        </Button> */}

                    </div>
                </div>
            </div>


            <Row className="row-sm">
                <h2>TESTE</h2>
            </Row>


        </Fragment >
    );
}

FeedbackCliente.propTypes = {};

FeedbackCliente.defaultProps = {};

export default FeedbackCliente;
