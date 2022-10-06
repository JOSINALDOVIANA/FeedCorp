import React, { Fragment, useContext, useEffect, useState } from "react";
import { Row, Col, Tab, Nav, Breadcrumb, Card, Button, ListGroup, Form, Table } from "react-bootstrap";
import Searchable from "react-searchable-dropdown";
import { Link } from "react-router-dom";
import api from "../../../../../api"
import { set, uniqueId } from "lodash"
import { partial } from 'filesize'
import { useLocation, useNavigate } from "react-router-dom";
import { saveAlert } from "../../Components/Alerts"
import { filesize } from "filesize";
function Profile() {

  const dadosrota = useLocation();
  const navegar = useNavigate()
  const [values, setValues] = useState(dadosrota.state);
  const [newImage, setNimage] = useState(dadosrota.state.image)
  const [newValues, setNvalues] = useState({})
  const [trocImage, setTrocImage] = useState(false)
  const [pass, setPass] = useState(true)
  const [icon, setIcon] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!dadosrota.state) {
      navegar(`${process.env.PUBLIC_URL}/home`)
    }

  }, [dadosrota])

  useEffect(() => {
    setNvalues({
      "id": values?.dadosUser?.id,
      "name": values?.dadosUser?.name,
      "nameuser": values?.dadosUser?.nameuser,
      "email": values?.dadosUser?.email,
      "password": values?.dadosUser?.password,
      "id_image": values?.image?.id,
      "updated_at": new Date(),
      "passwordantigo": values?.dadosUser?.password,
      "id_creator": values?.dadosUser?.id_creator,
      "id_company": values?.company?.id,
      "id_permission": values?.dadosUser?.id_permission,
      "id_office": values?.dadosUser?.id_office
    })
  }, [values])



  console.log(values)

  return (
    <Fragment>

      {/* <!-- Row --> */}
      <Tab.Container defaultActiveKey="profile">
        <Row className="row row-sm mt-4">
          <Col xl={3} lg={6} md={6} >
            <Card className="custom-card">
              <Card.Header>
                <h3 className="main-content-Form.Label">Minha conta</h3>
              </Card.Header>
              <Card.Body className=" text-center item-user">
                <div className="profile-pic">
                  <div className="profile-pic-img">
                    <span
                      className="bg-success dots"
                      title="online"
                    ></span>
                    <img
                      id="imgtroc1"
                      src={values?.image?.url}
                      className="rounded-circle" alt="user" />
                  </div>
                  <div className="text-dark">
                    <h5 className="mt-3 mb-0 font-weight-semibold">
                      {values?.dadosUser?.name.toUpperCase()}
                    </h5>
                  </div>
                </div>
              </Card.Body>
              <Nav variant="pills" className="item1-links flex-column mb-0">

                <Nav.Item as="li">
                  <Nav.Link eventKey="profile" role="tablist">
                    <i className="ti-credit-card icon1"></i> Meu perfil
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="security" role="tablist" >
                    <i className="ti-lock icon1"></i> Segurança
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link onClick={() => { navegar(`${process.env.PUBLIC_URL}/login/`) }} >
                    <i className="ti-power-off icon1"></i> Sair
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </Col>
          <Col xl={9} lg={6} md={6}>
            <Card className="custom-card">
              <Card.Body>
                <Tab.Content className="tab-content">
                  {/* PAINEL MEU PERFIL */}
                  <Tab.Pane
                    eventKey="profile"
                    className="tab-pane "
                    id="profile"
                    role="tabpanel">
                    {/* FOTO DE PERFIL UPLOAD */}
                    <div className="d-flex align-items-start pb-3 border-bottom">
                      <img
                        id="imgtroc"
                        src={values?.image?.url}
                        className="img rounded-circle avatar-xl"
                        alt="user1"
                      />
                      <div className="ps-sm-4 ps-2" id="img-section">
                        <b>Foto de perfil</b>
                        <p className="mb-1">
                          Aceito arquivo tipo .png. Menos de 1MB
                        </p>
                        <div className="progress mb-1">
                          <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
                        </div>

                        <div>
                          <label htmlFor="arquivo" className="btn button border btn-sm tx-bold">Trocar foto de perfil</label>
                          <input
                            name="arquivo"
                            type="file"
                            onChange={(ee) => {


                              const files = ee.target.files;
                              let uploadedFiles = []

                              for (const iterator of files) {

                                uploadedFiles.push(
                                  {
                                    "file": iterator,
                                    "id": uniqueId(),//definindo um id unico 
                                    "name": iterator.name,
                                    "readableSize": iterator.size,
                                    preview: URL.createObjectURL(iterator), // criando um link para preview da foto carregada
                                    url: URL.createObjectURL(iterator),// sera usado para setar a variavel img no proprietario/index.js
                                  }
                                )
                              }

                              // SETANDO O LOCAL ONDE APARECE IMAGEM 
                              document.getElementById("imgtroc1").setAttribute("src", uploadedFiles[0].preview);
                              document.getElementById("imgtroc").setAttribute("src", uploadedFiles[0].preview);
                              document.getElementById("imgheader").setAttribute("src", uploadedFiles[0].preview);

                              // DELETANDO:
                              try {
                                api.delete(`/images/deletar?key=${values?.image?.key}&id=${values?.image?.id}`).then(r => {
                                  console.log(r)
                                });
                              } catch (error) {

                              }




                              // CRIANDO UM DATAFORM
                              const data = new FormData();
                              data.append('file', uploadedFiles[0].file, uploadedFiles[0].name);

                              // SALVANDO NOVA IMAGEM
                              let val = values;
                              try {
                                api.post(`images/salvar?id_user=${values.dadosUser.id}`, data, {
                                  onUploadProgress: e => {
                                    let progress = parseInt(Math.round((e.loaded * 100) / e.total));
                                    setProgress(a => a + progress)
                                  }
                                }).then(r => {
                                  const resposta = r.data;
                                  setValues(a => ({ ...a, image: resposta }));
                                })

                              } catch (error) {

                              }



                            }}
                            id="arquivo"
                            accept="image/*"
                            style={{ display: 'none' }}
                          />


                          {/* <b>{values?.image?.name}</b> */}
                        </div>

                      </div>
                    </div>

                    <div className="py-2">
                      <div className="row py-2">
                        <div className="col-md-6 pb-3">
                          <Form.Label id="username">Nome de usuário</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Seu nome"
                            defaultValue={values?.dadosUser?.name}
                            onBlur={(e) => {
                              setNvalues(a => ({ ...a, name: e.target.value }))

                            }}
                          />
                        </div>

                        <div className="col-md-6 pb-3">
                          <Form.Label id="emailid">Email</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Seu email"
                            defaultValue={values?.dadosUser?.email}
                            onBlur={(e) => {
                              setNvalues(a => ({ ...a, email: e.target.value }))

                            }}
                          />
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-md-6 pb-3">
                          <Form.Label>Minha Unidade</Form.Label>
                          <Form.Label>{values?.unit?.description}</Form.Label>
                        </div>

                        <div className="col-md-6 pb-3">
                          <Form.Label>Cargo</Form.Label>
                          <Form.Label>{!!values?.dadosUser?.id_office ? values?.cargo?.office : 'Não definido'}</Form.Label>
                        </div>


                        <div className="col-md-6 pb-3">
                          <Form.Label>Minha Empresa</Form.Label>
                          <Form.Label>{values?.company?.namefantasy}</Form.Label>
                        </div>

                        <div className="col-md-6 pb-3">
                          <Form.Label>CNPJ</Form.Label>
                          <Form.Label>{values?.company?.cnpj}</Form.Label>
                        </div>

                        <div className="col-md-6 pb-3">
                          <Form.Label>Permissão de Usuário</Form.Label>
                          <Form.Label>{values?.permissions}</Form.Label>
                        </div>

                      </div>

                    </div>

                  </Tab.Pane>

                  {/* PAINEL SEGURANÇA */}
                  <Tab.Pane
                    eventKey="security"
                    className="tab-pane "
                    id="security"
                    role="tabpanel">

                    <div className="py-2">

                      <div className="row py-2">
                        <div className="col-md-6 pb-3">
                          <Form.Label id="username">Senha Anterior</Form.Label>
                          <div className="input-group">
                            <Form.Control
                              type="password"
                              id="ps"
                              placeholder="Senha antiga"
                              disabled
                              defaultValue={values?.dadosUser?.password}
                            />

                            <Button onClick={() => {
                              setIcon(icon => !icon)
                              setPass(a => !a)
                              document.getElementById('ps').setAttribute("type", `${pass ? "text" : "password"}`)

                              // console.log(pass)
                              // console.log(icon)

                            }}>
                              <i className={icon ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}></i>
                            </Button>

                          </div>

                        </div>

                        <div className="col-md-6 pb-3">
                          <Form.Label id="username">Nova Senha</Form.Label>
                          <div className="input-group">
                            <Form.Control
                              type="password"
                              id="oldPs"
                              placeholder="Senha Nova "
                              onBlur={(e) => {
                                setNvalues(a => ({ ...a, password: e.target.value }))

                              }}
                            />
                            <Button onClick={() => {
                              setIcon(icon => !icon)
                              setPass(a => !a)
                              document.getElementById('oldPs').setAttribute("type", `${pass ? "text" : "password"}`)
                            }}>
                              <i className={icon ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}></i>
                            </Button>
                          </div>
                        </div>
                      </div>


                    </div>
                  </Tab.Pane>

                </Tab.Content>
              </Card.Body>

              {/* UM BOTÃO PARA SALVAR TODAS AS ALTERAÇÕES NO PERFIL */}
              <Card.Footer>
                <div className="d-flex justify-content-end">
                  <Button
                    onClick={() => {
                      saveAlert()
                      api.put(`user/update`, { ...newValues }).then(r => {
                        navegar(`${process.env.PUBLIC_URL}/perfil/`, { state: { ...values, dadosUser: newValues } })
                      })
                    }}
                  >
                    Salvar Alterações
                  </Button>
                </div>
              </Card.Footer>

            </Card>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  )
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
