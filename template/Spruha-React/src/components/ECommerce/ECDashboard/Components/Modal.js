import { Avatar } from "@material-ui/core";
import React, { useState, Fragment, useEffect } from "react";
import { Modal, Button, Table, Image, Form } from "react-bootstrap";
import api from "../../../../api";

export function AlertProfileUnity({ userSelect }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(userSelect)
    return (
        <Fragment>
            <label className="btn ripple btn-primary btn-sm border mt-3 tx-bold" onClick={handleShow}>
                Ver perfil
            </label>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center mb-3">
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

export function AdminProfileUnity({ userUnity }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(userUnity)
    return (
        <Fragment>
            <label className="btn btn-sm btn-primary me-1 mt-2" onClick={handleShow}>
                <i className="bi bi-eye-fill"></i>
            </label>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center mb-3">
                        <Avatar
                            alt={userUnity.name}
                            style={{ width: 200, height: 200 }}
                            className="rounded-circle"
                            src={userUnity?.image?.url}
                        />
                    </div>
                    <Table className="table text-nowrap text-md-nowrap table-bordered mg-b-0 ">
                        <tbody>
                            <tr>
                                <th>Nome</th>
                                <th style={{ textTransform: 'capitalize' }}>{userUnity?.name}</th>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <th>{userUnity?.email}</th>
                            </tr>
                            <tr>
                                <th>Permissão</th>
                                <th>
                                    {!!userUnity?.permission ? userUnity?.permission : 'Não definido'}
                                </th>
                            </tr>
                            <tr>
                                <th>Cargo</th>
                                <th>
                                    {!!userUnity?.id_office ? userUnity?.cargo?.office : 'Sem cargo'}
                                </th>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export function OfficeChanges({cargo,setValues}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cargoEdit,setCargo]=useState({});
    useEffect(()=>{setCargo(cargo)},[])
    // console.log(cargoEdit)
    return (
        <Fragment>

            <label className="btn btn-sm btn-primary me-1 mt-2" onClick={handleShow}>
                <i className="fe fe-edit-2"></i>
            </label>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Alterar informações</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-muted card-sub-title'>Altere informações deste cargo</p>

                    <Form.Group className="form-group" controlid="">
                        <Form.Label>
                            Editar nome: <span className="tx-danger">*</span>
                        </Form.Label>
                        <Form.Control
                            required
                            name="Nome"
                            placeholder={cargoEdit.office}
                            type="text"
                            onChange={(e)=>{setCargo(a=>({...a,office:e.target.value}))}}
                        />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        api.put(`cargos/update`,{id:cargoEdit.id,office:cargoEdit.office}).then(r=>{
                            if(r.data.status){
                                setValues(a=>{
                                    let cargos=a.cargos
                                    cargos=cargos.filter(cargo=>cargo.id!=cargoEdit.id)
                                    cargos=[...cargos,{...cargoEdit}];
                                    return({...a,cargos})
                                })
                                handleClose()
                            }

                        });
                        
                    }}>
                        Salvar alterações
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export function UnityChanges(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [unitEdit, setunitEdit] = useState({});
    useEffect(()=>{
        setunitEdit(props.unidade)
    },[])
    console.log(unitEdit)
    return (
        <Fragment>

            <label className="btn btn-sm btn-primary me-1 mt-2" onClick={handleShow}>
                <i className="fe fe-edit-2"></i>
            </label>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Alterar informações</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-muted card-sub-title'>Altere informações deste cargo</p>

                    <Form.Group className="form-group" controlid="">
                        <Form.Label>
                            Sigla: <span className="tx-danger">*</span>
                        </Form.Label>
                        <Form.Control
                            required
                            name="sigla"
                            value={unitEdit.initials}
                            placeholder={unitEdit.initials}
                            type="text"
                            onChange={e=>{setunitEdit(a=>({...a,initials:e.target.value}))}}
                        />
                        <Form.Label className="text-muted card-sub-title">
                            Obs: Sigla da unidade
                        </Form.Label>
                    </Form.Group>

                    <Form.Group className="form-group" controlid="">
                        <Form.Label>
                            Nome: <span className="tx-danger">*</span>
                        </Form.Label>
                        <Form.Control
                            required
                            name="Nome"
                            value={unitEdit.description}
                            placeholder={unitEdit.description}
                            type="text"
                            onChange={e=>{setunitEdit(a=>({...a,description:e.target.value}))}}
                        />
                        <Form.Label className="text-muted card-sub-title">
                            Obs: Nome por extenso da unidade
                        </Form.Label>
                    </Form.Group>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        api.put(`unit/update`,{...unitEdit}).then(r=>{
                            if(r.data.status){
                                props.recarregarUnits()
                                // pode por outro alerta de sucesso aqui :
                                handleClose()
                            }else{
                                // pode por um alerte aqui
                            }
                        })
                    }}>
                        Salvar alterações
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}