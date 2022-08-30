import React, { Fragment, useContext, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../../../..";

// import { Container } from './styles';

const FeedRecebidos = () => {

    const dadosrota = useLocation();
    const location = useLocation();
    const navegar = useNavigate();
    const { values, setValues } = useContext(usuarioContext);
    useEffect(() => {
        setValues(dadosrota.state)
    }, [dadosrota])

    return (
        <Fragment>

            <div className="card custom-card">

                <div className="card-header border-bottom-0 d-flex justify-content-between">

                    <label className="main-content-label my-auto pt-2">Objetivos Ativos</label>


                    <div className="d-flex align-items-center">
                        <Button
                            type="button"
                            variant="primary"
                            className="btn-icon-text"
                            onClick={() => { navegar(`${process.env.PUBLIC_URL}/dashboard`, { state: values }) }}
                        >
                        <i className="fe fe-x me-2"></i>
                            Fechar
                        </Button>
                    </div>
                </div>

                <div className="card-body pt-2 pb-0">
                    <div className="table-responsive tasks">
                        <Table className="table card-table table-vcenter text-nowrap border" borderless>
                            <thead>
                                <tr>
                                    <th className="wd-lg-10p text-center">Nome do Objetivo</th>
                                    <th className="wd-lg-20p text-center">Unidade</th>
                                    {/* <th className="wd-lg-20p text-center">Change</th>
                                    <th className="wd-lg-20p text-center">Date</th> */}
                                    <th className="wd-lg-40p text-center">Participantes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {TRADINGACTIVITIES.map((list, index) => (
                    <tr key={index} data-index={index}>
                      <td className="text-center">{list.id}</td>
                      <td className="coin_icon d-flex">
                        <div className="cryp-icon bg-primary me-2">
                          <i className={`cf cf-${list.icon} text-center`} />
                        </div>
                        <span className=" my-auto text-center">
                          {list.name} <b>{list.title}</b>
                        </span>
                      </td>
                      <td className="text-center">{list.price}</td>
                      <td className="text-center">
                        <span className={`text-${list.changeStatus} `}>{list.change}</span>
                      </td>
                      <td className="text-center">{list.date}</td>
                      <td className="text-center">
                        <Link to="#" className={`text-${list.status}`}>
                          {list.statusText}
                        </Link>
                      </td>
                    </tr>
                  ))} */}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default FeedRecebidos;