import React, { Fragment, useContext, useEffect, useState } from "react";
import { Row, Col, Tab, Nav, Breadcrumb, Card, Button, ListGroup, Form, Table } from "react-bootstrap";
import Searchable from "react-searchable-dropdown";
import { Link } from "react-router-dom";
import api from "../../../../../api"
import { uniqueId } from "lodash"
import { partial } from 'filesize'
import { useLocation, useNavigate } from "react-router-dom";
import { saveAlert } from "../../Components/Alerts"

function Profile() {

  const dadosrota = useLocation();
  const [ImagensCarregadas, setImagens] = useState([]);
  const navegar = useNavigate()
  const [values, setValues] = useState(dadosrota.state);
  const [newValues, setNvalues] = useState({})
  const [pass, setPass] = useState(true)
  const [icon, setIcon] = useState(true)
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
      "id_permission": values?.dadosUser?.id_permission
    })
  }, [values])
  // console.log(values)
  // -----------------------MODAL UPLOAD FOTO-----------------------------


  // const [openF, setOpenF] = useState(false);
  // const size=partial({base: 2, standard: "jedec"})
  //ao abrir o modal
  const handleOpenF = () => {
    // estou carregando os dados da imagem atual do perfil
    const dados = {
      id: dadosrota.state.image.id,
      idfoto: dadosrota.state.image.id,
      name: dadosrota.state.image.name,
      readableSize: dadosrota.state.image.size,
      preview: dadosrota.state.image.url,
      progress: 100,
      uploaded: true,
      error: false,
      url: dadosrota.state.image.url,
      key: dadosrota.state.image.key
    }
    setImagens([dados]);// atualizando ImagensCarregadas ja que ela é usada na listagem e futuramente para ser apagada

    // setOpenF(true);// abrindo o modal de fotos

  };

  const handleCloseF = () => {

    try {
      api.delete(`/images/deletar?id_foto=${values.image.id}&key=${values.image.key}`).then(r => {

        // setImagens(a => [a[1]]);// setando ImagensCarregadas com apenas a nova imagem;
        
        setValues(a => ({ ...a, dadosUser: { ...a.dadosUser, id_image: ImagensCarregadas[0].idfoto }, image: { ...ImagensCarregadas[0],id:ImagensCarregadas[0].idfoto } }));


      })





    } catch (error) {
      console.log(error)
      alert("não é possivel apagar ")// caso de algum error por segurança não sera mostrado no console

    }
    // setando a variavel proprietario com os novos dados


  }



  // ----------------------------------FIM MODAL FOTO------------------------------

  function processUploaded(file) {
    // 1 - estou criando um formulario com os dados para enviar para a api
    const data = new FormData();
    data.append('file', file.file, file.name);// estou passando um item com nome file,o priprio arquivo imagem,o nome do arquivo
    api.post('images/salvar', data, {
      //o axios me permite saber o andamento do processo de envio
      onUploadProgress: e => {
        //transformando este processo que vem porcentagem para um numero inteiro
        let progress = parseInt(Math.round((e.loaded * 100) / e.total));
        AtualizaArquivo(file.id, { progress });//agora vamos atualizar o progress que ja esta salvo em ImagensCarregadas em proprietario/index.js
      }
    }).then(r => {
      // quando finalizo o envio preciso novamente setar ImagensCarregadas com informações vindas da API
      AtualizaArquivo(file.id, {
        uploaded: true,
        // id: r.data.id,
        idfoto: r.data.id,
        url: r.data.url,
        key: r.data.key,
        name: r.data.name,
        size: r.data.size,

      })
      // note que passei novamente um id e um objeto com cados à função AtualizaArquivo que realizara o que foi programada para fazer
    }).catch(() => {
      //e claro caso haja erro neste envio preciso reportar 
      AtualizaArquivo(file.id, {
        error: true,// isso informa um erro ao front
      })
    });
  }



  function AtualizaArquivo(id, data) {
    // 1 - usnando a função que veio nas props para atualizar os dados
    setImagens(a => {
      //as funções do useState nos fornecem os dados anteriores sempre que as evocamos
      // em "a" tem todos os dados de ImagensCarregadas anteriormente
      // logo preciso apenas localizar qual arquivo possui o id recebido e anexar data a ele
      let b = a.map(el => (el.id === id ? { ...el, ...data } : el));// observe que se não for o elemento desejado não modifico 
      return b;// no return eu estou atualizando ImagensCarregadas com "b" que possui tudo atualizado
    })
  }

  function el(e) {
    handleOpenF()
    const files = e.target.files;
    let uploadedFiles = [];
    console.log(files)
    for (const iterator of files) {
      uploadedFiles.push(
        {
          "file": iterator,
          "id": uniqueId(),//definindo um id unico 
          "name": iterator.name,
          "readableSize": iterator.size,
          preview: URL.createObjectURL(iterator), // criando um link para preview da foto carregada
          progress: 0,//sera modificado conforme o upload para a api
          uploaded: false,//quando finalizar o upload vai mudar para true para que possa ser mostrado os links de exclusao e preview
          error: false,//se for true no processo de upload sera exibido um aviso no front
          url: null,// sera usado para setar a variavel img no proprietario/index.js
        }
      )

    }
    setImagens(a => ([...uploadedFiles]));
    uploadedFiles.forEach(processUploaded)
    // console.log(ImagensCarregadas) 
    handleCloseF();
    // api.put(`/user/update`, { ...newValues }).then(r => {
    //   if (r.data.status) {
    //     saveAlert()
    //     navegar(`/perfil/`, { state: { ...values, dadosUser: newValues } })
    //   }
    // })
    console.log(values);
  }
 
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
                      src={values?.image?.url ? values?.image?.url : null}
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
                        src={values?.image?.url ? values?.image?.url : null}
                        className="img rounded-circle avatar-xl"
                        alt="user1"
                      />
                      <div className="ps-sm-4 ps-2" id="img-section">
                        <b>Foto de perfil</b>
                        <p className="mb-1">
                          Aceito arquivo tipo .png. Menos de 1MB
                        </p>


                        <input onChange={(e) => {
                          el(e)

                        }} type="file" accept="image/*">
                          {/* <Button
                          variant="primary" className="btn button border btn-sm me-1">
                        </Button> */}
                        </input>
                        {/* <b>{values?.image?.name}</b> */}

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
                          <Form.Label>Permissão de Usuário</Form.Label>
                          <Form.Label>{values?.permissions}</Form.Label>
                        </div>

                        {/* <div className="col-md-6 pb-3">
                          <Form.Label>Minha Unidade</Form.Label>
                          <Form.Label>{values?.unit?.description}</Form.Label>
                        </div> */}

                        <div className="col-md-6 pb-3">
                          <Form.Label>Minha Empresa</Form.Label>
                          <Form.Label>{values?.company?.namefantasy}</Form.Label>
                        </div>

                        <div className="col-md-6 pb-3">
                          <Form.Label>CNPJ</Form.Label>
                          <Form.Label>{values?.company?.cnpj}</Form.Label>
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
                      api.put(`/user/update`, { ...newValues }).then(r => {
                        if (r.data.status) {
                          navegar(`/perfil/`, { state: { ...values, dadosUser: newValues } })
                          saveAlert()
                        }
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
