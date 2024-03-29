import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Loader from "./layouts/Loader/Loader";
//Feedbacks da empresa
const FeedbackClientes = React.lazy(() => import("./components/ECommerce/ECDashboard/feedback/feedbackClientes"))
//Link EXTERNO
const FeedbackExterno = React.lazy(() => import("./components/ECommerce/ECDashboard/feedback/feedbackExterno"))
//LandingPage
const Landingpageapp = React.lazy(() => import("./components/Landingpageapp"));
const App = React.lazy(() => import("./components/app"));
const Images = React.lazy(() => import("./images/index.js"));
// Dashboard
const ECDashboard = React.lazy(() => import("./components/ECommerce/ECDashboard/ECDashboard"))
const MinhaCorporação = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/MyCorp/MyCorp"))
const Unidades = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/MyCorp/Unitys"))
const MinhaUnidade = React.lazy(() => import("./components/ECommerce/ECDashboard/MyUnity"))
const EditUser = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/MyCorp/edit_user"));
// ADMIN CONFIG
const AdminConfig = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Configuracoes/Config"))
const CreateUser = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Configuracoes/create_user"));
const AddEditOffice = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Configuracoes/add_edit_office"));
const AddEditUnidade = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Configuracoes/add_edit_unidade"));
//INÍCIO
const FeedRecebidos = React.lazy(() => import("./components/ECommerce/ECDashboard/Cards/FeedRecebidos"))
const FeedFeitos = React.lazy(() => import("./components/ECommerce/ECDashboard/Cards/FeedFeitos"))
const Objetivos = React.lazy(() => import("./components/ECommerce/ECDashboard/Cards/Objetivos"));
const Pesquisas = React.lazy(() => import("./components/ECommerce/ECDashboard/Cards/Pesquisas"));
const NovoFeedback = React.lazy(() => import("./components/ECommerce/ECDashboard/CriarFeedback"));
//OKR ADMIN
const Okr = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/OKR/OKR"))
const CriarOkr = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/OKR/CriarOKR"))
const ProgressoOKR = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/OKR/ProgressoOKR"))
// OKR GESTOR
const OkrGestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/OKR/OKR"))
const CriarOkrGestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/OKR/CriarOKR"))
const ProgressoOkrGestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/OKR/ProgressoOKR"))
//AVPR ADMIN
const Avpr = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/AVPR/AVPR"));
const CriarAvpr = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/AVPR/CriarAvpr"));
const ProgressoAVPR = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/AVPR/ProgressoAVPR"))
//AVPR GESTOR
const AvprGestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/AVPR/AVPR"));
const CriarAvprGestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/AVPR/CriarAvpr"));
const ProgressoAvprGestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/AVPR/ProgressoAVPR"))
//CLIMA PULSO ADMIN
const ClimaPulso = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/ClimaPulso"))
const CriarClima = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/CriarClimaPulso"))
const ConfigurarClima = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/configurarClima"))
const ResultadosClima = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/resultadosClima"))
//CLIMA PULSO GESTOR
const ClimaPulsoGestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/engajamento/climaPulso/ClimaPulso"))
const CriarClimaGestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/engajamento/climaPulso/CriarClimaPulso"))
const ConfigurarClimaGestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/engajamento/climaPulso/configurarClima"))
const ResultadosClimaGestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/engajamento/climaPulso/resultadosClima"))
//MINHAS AVALIAÇÕES
const MinhasOKRs = React.lazy(() => import("./components/ECommerce/ECDashboard/Minhas avaliacoes/OKR/my_okr"))
const OKRresposta = React.lazy(() => import("./components/ECommerce/ECDashboard/Minhas avaliacoes/OKR/okr_resposta"))
const OKRconcluido = React.lazy(() => import("./components/ECommerce/ECDashboard/Minhas avaliacoes/OKR/okr_concluido"))
const MinhasAVPR = React.lazy(() => import("./components/ECommerce/ECDashboard/Minhas avaliacoes/my_avpr/my_avpr"))
const AVPRresposta = React.lazy(() => import("./components/ECommerce/ECDashboard/Minhas avaliacoes/my_avpr/avpr_resposta"))
const AVPRconcluido = React.lazy(() => import("./components/ECommerce/ECDashboard/Minhas avaliacoes/my_avpr/avpr_concluido"))
const MeusPulsos = React.lazy(() => import("./components/ECommerce/ECDashboard/Minhas avaliacoes/pulso/my_pulse"))
const Pulsoresposta = React.lazy(() => import("./components/ECommerce/ECDashboard/Minhas avaliacoes/pulso/pulso_resposta"))
const Pulsoconcluido = React.lazy(() => import("./components/ECommerce/ECDashboard/Minhas avaliacoes/pulso/pulso_concluido"))




const Error404 = React.lazy(() => import("./components/Custompages/Error1-404/Error-404"))
const Signin = React.lazy(() => import("./components/ECommerce/ECDashboard/CustomPages/Signin/Signin"))
const Signup = React.lazy(() => import("./components/ECommerce/ECDashboard/CustomPages/Signup/Signup"))
const Profile = React.lazy(() => import("./components/ECommerce/ECDashboard/CustomPages/profile/Profile"))
const Forgotpassword = React.lazy(() => import("./components/ECommerce/ECDashboard/CustomPages/Forgotpassword/Forgotpassword"))
// const Lockscreen = React.lazy(() => import("./components/Custompages/Lockscreen/Lockscreen"))
// const Resetpassword = React.lazy(() => import("./components/Custompages/Resetpassword/Resetpassword"))


const Root = () => {
  

  return (
    <Fragment>

      <BrowserRouter>

        <React.Suspense fallback={<Loader />}>
          <Routes>
            {/* rotas nivel 0 */}
            <Route path={`${process.env.PUBLIC_URL}/home`} element={<Landingpageapp />} />
            <Route path={`${process.env.PUBLIC_URL}/login`} element={<Signin />} />
            <Route path={`${process.env.PUBLIC_URL}/cadastro`} element={<Signup />} />
            <Route path={`${process.env.PUBLIC_URL}/esqueceu_senha`} element={<Forgotpassword />} />
            <Route path={`${process.env.PUBLIC_URL}/images`} element={<Images />} />
            {/* TEU LINK JOSINALDO!! */}
            <Route path={`${process.env.PUBLIC_URL}/feedbacks/:company`} element={<FeedbackExterno />} />

            {/* rota nivel 1 aninhada */}
            <Route path={`${process.env.PUBLIC_URL}/`} element={<App />} >
              <Route index element={<ECDashboard />} />

              {/* FEEDBACK DOS CLIENTES PARA OS PERFIS VISUALIZAREM - NÃO MEXER!!! */}
              <Route>
                <Route path={`${process.env.PUBLIC_URL}/feedback_cliente`} element={<FeedbackClientes />} />
              </Route>

              <Route>
                <Route path={`${process.env.PUBLIC_URL}/perfil`} element={<Profile />} />
              </Route>

              {/* rota nivel 2 aninhada */}

              <Route path={`${process.env.PUBLIC_URL}/dashboard/`} element={<ECDashboard />} >
                <Route index element={<Fragment />} />

                <Route
                  path={`${process.env.PUBLIC_URL}/dashboard/recebidos`}
                  element={<FeedRecebidos />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/dashboard/feitos`}
                  element={<FeedFeitos />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/dashboard/objetivos`}
                  element={<Objetivos />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/dashboard/pesquisas`}
                  element={<Pesquisas />}
                />

              </Route>

              <Route>
                <Route path={`${process.env.PUBLIC_URL}/dashboard/novo_feedback`} element={<NovoFeedback />} />
              </Route>

              {/* ------------------------------CORPORAÇÃO------------------------------------------ */}
              <Route path={`${process.env.PUBLIC_URL}/corporacao`} element={<MinhaCorporação />} />
              <Route path={`${process.env.PUBLIC_URL}/unidades`} element={<Unidades />} />
              <Route path={`${process.env.PUBLIC_URL}/adm_edit_user`} element={<EditUser />} />

              {/* <Route path='/totem/:idloja/:idprop' component={Totem} /> */}

              <Route path={`${process.env.PUBLIC_URL}/configuracoes`} element={<AdminConfig />} />
              <Route path={`${process.env.PUBLIC_URL}/adm_add_edit_unidade`} element={<AddEditUnidade />} />
              <Route path={`${process.env.PUBLIC_URL}/adm_add_office`} element={<AddEditOffice />} />
              <Route path={`${process.env.PUBLIC_URL}/adm_add_user`} element={<CreateUser />} />

              {/* ------------------------------MINHAS AVALIAÇÕES------------------------------------------ */}
              <Route path={`${process.env.PUBLIC_URL}/minhas_okrs`} element={<MinhasOKRs />} />
              <Route path={`${process.env.PUBLIC_URL}/okr_resposta`} element={<OKRresposta />} />
              <Route path={`${process.env.PUBLIC_URL}/okr_concluido`} element={<OKRconcluido />} />
              <Route path={`${process.env.PUBLIC_URL}/minhas_av_resultados`} element={<MinhasAVPR />} />
              <Route path={`${process.env.PUBLIC_URL}/avpr_resposta`} element={<AVPRresposta />} />
              <Route path={`${process.env.PUBLIC_URL}/avpr_concluido`} element={<AVPRconcluido />} />
              <Route path={`${process.env.PUBLIC_URL}/meus_climas_pulso`} element={<MeusPulsos />} />
              <Route path={`${process.env.PUBLIC_URL}/pulso_resposta`} element={<Pulsoresposta />} />
              <Route path={`${process.env.PUBLIC_URL}/pulso_concluido`} element={<Pulsoconcluido />} />

              {/* ------------------------------OKR------------------------------------------ */}

              <Route path={`${process.env.PUBLIC_URL}/okr`} element={<Okr />} >
                <Route index element={<Fragment />} />
              </Route>
              {/* LADO DE FORA PRA ABRIR EM UMA NOVA PÁGINA */}
              <Route
                path={`${process.env.PUBLIC_URL}/okr/criar_okr`}
                element={<CriarOkr />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/okr/progresso_okr`}
                element={<ProgressoOKR />}
              />

              {/* ------------------------------AVR------------------------------------------ */}

              <Route path={`${process.env.PUBLIC_URL}/avaliacao_por_resultado/`} element={<Avpr />} >
                <Route index element={<Fragment />} />
              </Route>

              {/* LADO DE FORA PRA ABRIR EM UMA NOVA PÁGINA */}
              <Route
                path={`${process.env.PUBLIC_URL}/avaliacao_por_resultado/criar_avpr`}
                element={<CriarAvpr />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/avaliacao_por_resultado/progressoAVPR`}
                element={<ProgressoAVPR />}
              />
              {/* ------------------------------CLIMA PULSO------------------------------------------ */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso`}
                  element={<ClimaPulso />} >
                </Route>

                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso/criar_clima_pulso/`}
                  element={<CriarClima />}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso/configuracoes/`}
                  element={<ConfigurarClima />}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso/resultado/`}
                  element={<ResultadosClima />}
                />

              </Route>

              {/* ------------------------------GESTOR PÁGINAS-------------------------------- */}
              <Route path={`${process.env.PUBLIC_URL}/minha_unidade`} element={<MinhaUnidade />} />

              {/* OKR GESTOR */}
              <Route
                path={`${process.env.PUBLIC_URL}/okr_unidade`}
                element={<OkrGestor />} >
              </Route>

              <Route
                path={`${process.env.PUBLIC_URL}/okr_unidade/criar_okr`}
                element={<CriarOkrGestor />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/okr_unidade/progresso_okr`}
                element={<ProgressoOkrGestor />}
              />
              {/* OKR final */}

              {/* AVPR GESTOR */}
              <Route
                path={`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/`}
                element={<AvprGestor />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/criar_avpr`}
                element={<CriarAvprGestor />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/progressoAVPR`}
                element={<ProgressoAvprGestor />}
              />
              {/* AVPR FINAL */}

              {/*CLIMA PULSO GESTOR */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso_unidade`}
                  element={<ClimaPulsoGestor />}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso_unidade/criar_clima_pulso/`}
                  element={<CriarClimaGestor />}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso_unidade/configuracoes/`}
                  element={<ConfigurarClimaGestor />}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso_unidade/resultado/`}
                  element={<ResultadosClimaGestor />}
                />
              </Route>

              {/* ------------------------------COLABORADOR PÁGINAS-------------------------------- */}
              <Route path={`${process.env.PUBLIC_URL}/okr_colaborador`} element={<MinhaUnidade />} />


            </Route>


            {/* ........................................Errorpage............................................... */}
            <Route path="*" element={<Error404 />} />
          </Routes>


        </React.Suspense>

      </BrowserRouter>

    </Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);




