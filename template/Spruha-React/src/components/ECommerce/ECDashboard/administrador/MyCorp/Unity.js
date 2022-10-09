import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Breadcrumb, Card, Col, Row, Button, Table, Dropdown, Pagination } from "react-bootstrap";
import api from "../../../../../api";

import user1 from "../../../../../assets/img/users/1.jpg";
import user2 from "../../../../../assets/img/users/2.jpg";
import user3 from "../../../../../assets/img/users/3.jpg";
import user4 from "../../../../../assets/img/users/4.jpg";
import user5 from "../../../../../assets/img/users/5.jpg";
import user6 from "../../../../../assets/img/users/6.jpg";
import user7 from "../../../../../assets/img/users/7.jpg";
import user9 from "../../../../../assets/img/users/9.jpg";
import user12 from "../../../../../assets/img/users/12.jpg";
import user11 from "../../../../../assets/img/users/11.jpg";

let UserlistData = [
    {
        id: 1,
        Product1: user1,
        ProductId: "Megan Peters",
        created: "08/06/2022",
        status: "Inactive",
        email: "mila@Kunis.com",
        information: "danger"

    },
    {
        id: 2,
        Product1: user2,
        ProductId: "George Clooney",
        created: "08/06/2022",
        status: "active",
        email: "	marlon@brando.com",
        information: "success"
    },
    {
        id: 3,
        Product1: user3,
        ProductId: "Ryan Gossling	",
        created: "08/06/2022",
        status: "Banned",
        email: "jack@nicholson",
        information: "danger"
    },
    {
        id: 4,
        Product1: user4,
        ProductId: "Emma Watson",
        created: "16/06/2022",
        status: "Pending",
        email: "jack@nicholsonm",
        information: "warning"

    },
    {
        id: 5,
        Product1: user5,
        ProductId: "Mila Kunis",
        created: "18/06/2022",
        status: "active",
        information: "success",
        email: "mila@Kunis.com",
    },

    {
        id: 6,
        Product1: user6,
        ProductId: "	Phil Watsons",
        created: "22/06/2022",
        status: "active",
        email: "	phil@watson.com",
        information: "success",
    },
    {
        id: 7,
        Product1: user7,
        ProductId: "Sonia Robertson",
        created: "25/06/2022",
        status: "active",
        email: "robertson@sonia.com",
        information: "success"
    },
    {
        id: 8,
        Product1: user9,
        ProductId: "Megan Peters",
        created: "28/06/2022",
        status: "Banned",
        email: "amelia23@kunis.com",
        information: "danger"
    },
    {
        id: 9,
        Product1: user11,
        ProductId: "Adam Hamilton",
        created: "30/06/2022",
        status: "pending",
        email: "	morganleah@.com",
        information: "warning"

    },
    {
        id: 10,
        Product1: user12,
        ProductId: "Leah Morgan",
        created: "08/06/2022",
        status: "active",
        email: "mila@Kunis.com",
        information: "success"

    }
];

const Unidade = () => {
    var Delete = (list, user) => {
        let items = values?.selectUnit?.Colaboradores?.filter((userlist, i) => {
            return userlist.id !== list
        })

        api.delete(`/user/delete?password=${user.password}&id=${user.id}&email=${user.email}`).then(r=>{
            if(r.data.status){
            }
        })
        setValues(a =>({...a,selectUnit:{...a.selectUnit,Colaboradores:items}}))
        // setdata(items)
        // console.log(items);
    }
    // const [data, setdata] = useState(UserlistData)

    const dadosrota = useLocation();
    const navegar = useNavigate()
    const [values, setValues] = useState({});

    useEffect(() => {
        if (!dadosrota.state) {
            navegar(`${process.env.PUBLIC_URL}/home`)
        }
        setValues(dadosrota.state);

    }, [dadosrota])

    console.log(values)

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Unidade: {values?.selectUnit?.description} </h2>
                    <Breadcrumb>
                        <Breadcrumb.Item
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/corporacao`, { state: values }) }}
                        >
                            Minha Corporação
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Unidade nome
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Lista de integrantes
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="d-flex">
                    <div className="justify-content-center">
                        <Button variant="primary" type="button" className="my-2 btn-icon-text">
                            <i className="fe fe-download-cloud me-2"></i> Baixar relação
                        </Button>
                    </div>
                </div>
            </div>
            {/* <!-- End Page Header --> */}

            {/* <!--Row--> */}
            <Row className=" row-sm">
                <Col sm={12} md={12} xl={12} lg={12} className="grid-margin">
                    <Card className="custom-card">
                        <Card.Header className="border-bottom-0 pb-0">
                            <label className="main-content-label mb-0 pt-1">Lista de integrantes</label>
                            <p className="tx-12 tx-gray-500 mt-0 mb-2">
                                Lista de todos os integrantes desta unidade
                            </p>
                        </Card.Header>

                        <Card.Body>
                            <div className="table-responsive border userlist-table">
                                <Table responsive className="card-table table-striped table-vcenter text-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th className="wd-lg-20p">
                                                <span>Nome</span>
                                            </th>
                                            <th className="wd-lg-20p">
                                                <span>Membro desde</span>
                                            </th>
                                            {/* <th className="wd-lg-20p">
                                                <span>Situação</span>
                                            </th> */}
                                            <th className="wd-lg-20p">
                                                <span>Email</span>
                                            </th>
                                            <th className="wd-lg-10p">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {values?.selectUnit?.Colaboradores?.map((item, index) => (
                                            <tr key={index}>

                                                <td>
                                                    {item.image &&
                                                        <img
                                                            alt="avatar"
                                                            className="rounded-circle avatar-md me-3"
                                                            src={item.image.url}
                                                        />
                                                    }
                                                    {item.name}
                                                </td>

                                                <td>{item.updated_at}</td>

                                                {/* <td className="text-center">
                                                    <span className={`label text-${item.information} d-flex`}>
                                                        <span className={`dot-label bg-${item.information} me-1- 300`}></span>
                                                        {item.status}
                                                    </span>
                                                </td> */}

                                                <td>
                                                    <Link to="#">{item.email}</Link>
                                                </td>

                                                <td>
                                                    <Link to="#" className="btn btn-sm btn-primary me-1">
                                                        <i className="bi bi-eye-fill"></i>
                                                    </Link>

                                                    <Link to="#" className="btn btn-sm btn-info me-1">
                                                        <i className="fe fe-edit-2"></i>
                                                    </Link>

                                                    <Link to="#" className="btn btn-sm btn-danger me-1" onClick={() => { Delete(item.id, item) }}>
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </td>
                                            </tr>

                                        ))}
                                    </tbody>

                                </Table>
                                {/* <userlist.PositioningActionsColumn/> */}
                            </div>
                            {/* <div className="mt-5">
                                <Pagination className="mb-0 justify-content-end">
                                    <Pagination.Item>Previous</Pagination.Item>
                                    <Pagination.Item className="page-item disabled">
                                        {1}
                                    </Pagination.Item>
                                    <Pagination.Item className="page-item" active>
                                        {2}
                                    </Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Item>{4}</Pagination.Item>
                                    <Pagination.Item>{5}</Pagination.Item>
                                    <Pagination.Item>Next</Pagination.Item>
                                </Pagination>
                            </div> */}
                        </Card.Body>
                    </Card>
                </Col>
                {/* <!-- COL END --> */}
            </Row>
            {/* <!-- row closed  --> */}
        </Fragment>
    )
};

Unidade.propTypes = {};

Unidade.defaultProps = {};

export default Unidade;
