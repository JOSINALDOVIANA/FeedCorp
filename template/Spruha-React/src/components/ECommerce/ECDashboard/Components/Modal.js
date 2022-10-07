import { Avatar } from "@material-ui/core";
import React, { useState, Fragment } from "react";
import { Modal, Button, Table, Image } from "react-bootstrap";

export function AlertProfileUnity({ userSelect }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(userSelect)
    return (
        <Fragment>
            <label className="btn button border btn-sm tx-bold" onClick={handleShow}>
                Ver perfil
            </label>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>PERFIL DE {userSelect?.name.toUpperCase()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"d-flex justify-content-center"}>
                        <Avatar
                            alt={userSelect.name}
                            style={{ width: 200, height: 200 }}
                            className="rounded-circle"
                            src={userSelect.url}
                        />
                    </div>
                    <Table className="table text-nowrap text-md-nowrap table-bordered mg-b-0 ">
                        <tbody>
                            <tr>
                                <th>Nome</th>
                                <th style={{ textTransform: 'capitalize' }}>{userSelect?.name}</th>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <th>{userSelect?.email}</th>
                            </tr>
                            <tr>
                                <th>Permissão</th>
                                <th style={{ textTransform: 'capitalize' }}>{userSelect?.permission}</th>
                            </tr>
                            <tr>
                                <th>Cargo</th>
                                <th style={{ textTransform: 'capitalize' }}>
                                    {!!userSelect?.id_office ? userSelect?.cargo?.office : 'Não definido'}
                                </th>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}