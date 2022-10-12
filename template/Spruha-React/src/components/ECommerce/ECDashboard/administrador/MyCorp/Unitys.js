import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Breadcrumb, Card, Col, Row, Button, Table, Dropdown, Pagination } from "react-bootstrap";
import * as Modal from "../../Components/Modal"
import api from "../../../../../api";

const Unidade = () => {
   
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

    let Delete = (list, user) => {
        let items = values?.selectUnit?.Colaboradores?.filter((userlist, i) => {
            return userlist.id !== list
        })

        api.delete(`/user/delete?password=${user.password}&id=${user.id}&email=${user.email}`).then(r => {
            if (r.data.status) {
            }
        })
        setValues(a => ({ ...a, selectUnit: { ...a.selectUnit, Colaboradores: items } }))
        // setdata(items)
        // console.log(items);
    }
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
                        <Button variant="primary" type="button" className="my-2 btn-icon-text"
                            onClick={() => {
                                navegar(`${process.env.PUBLIC_URL}/adm_edit_unidade/`, { state: values })
                            }}>
                            <i className="bi bi-box-seam me-2"></i> Editar unidade
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

                                                    <Modal.AdminProfileUnity userUnity={item} />

                                                    <label
                                                        onClick={() => {
                                                            navegar(`${process.env.PUBLIC_URL}/adm_edit_user`, { state: values })
                                                        }}
                                                        className="btn btn-sm btn-info me-1 mt-2">
                                                        <i className="fe fe-edit-2"></i>
                                                    </label>

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
