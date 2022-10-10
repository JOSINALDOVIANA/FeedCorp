import React, { Fragment, createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUnity from "./components/ECommerce/ECDashboard/administrador/MyCorp/create_unity";
import CreateUser from "./components/ECommerce/ECDashboard/administrador/MyCorp/create_user";
import "./index.scss";
import Loader from "./layouts/Loader/Loader";
//LandingPage
const Landingpageapp = React.lazy(() => import("./components/Landingpageapp"));
const App = React.lazy(() => import("./components/app"));
const Images = React.lazy(() => import("./images/index.js"));
// Dashboard
const ECDashboard = React.lazy(() => import("./components/ECommerce/ECDashboard/ECDashboard"))
const MinhaCorporação = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/MyCorp/MyCorp"))
const Unidades = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/MyCorp/Unity"))
const AdminConfig = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Configuracoes/Config"))
const MinhaUnidade = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/MyUnity"))
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
const Okr_gestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/OKR/OKR"))
const CriarOkr_gestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/OKR/CriarOKR"))
const ProgressoOKR_gestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/OKR/ProgressoOKR"))
//AVPR ADMIN
const Avpr = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/AVPR/AVPR"));
const CriarAvpr = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/AVPR/CriarAvpr"));
const ProgressoAVPR = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/AVPR/ProgressoAVPR"))
//AVPR GESTOR
const Avpr_gestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/AVPR/AVPR"));
const CriarAvpr_gestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/AVPR/CriarAvpr"));
const ProgressoAVPR_gestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/Desempenho/AVPR/ProgressoAVPR"))
//CLIMA PULSO ADMIN
const ClimaPulso = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/ClimaPulso"))
const CriarClima = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/CriarClimaPulso"))
const ConfigurarClima = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/configurarClima"))
const ResultadosClima = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/resultadosClima"))
//CLIMA PULSO GESTOR
const ClimaPulso_gestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/engajamento/climaPulso/ClimaPulso"))
const CriarClima_gestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/engajamento/climaPulso/CriarClimaPulso"))
const ConfigurarClima_gestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/engajamento/climaPulso/configurarClima"))
const ResultadosClima_gestor = React.lazy(() => import("./components/ECommerce/ECDashboard/gestor/engajamento/climaPulso/resultadosClima"))



const Error404 = React.lazy(() => import("./components/Custompages/Error1-404/Error-404"))
const Signin = React.lazy(() => import("./components/ECommerce/ECDashboard/CustomPages/Signin/Signin"))
const Signup = React.lazy(() => import("./components/ECommerce/ECDashboard/CustomPages/Signup/Signup"))
const Profile = React.lazy(() => import("./components/ECommerce/ECDashboard/CustomPages/profile/Profile"))
// const Lockscreen = React.lazy(() => import("./components/Custompages/Lockscreen/Lockscreen"))
// const Resetpassword = React.lazy(() => import("./components/Custompages/Resetpassword/Resetpassword"))
const Forgotpassword = React.lazy(() => import("./components/Custompages/Forgotpassword/Forgotpassword"))
// const AddProduct = React.lazy(() => import("./components/ECommerce/AddProduct/Addproduct"))
// const Custompage = React.lazy(() => import("./components/Custompage"))
// const Underconstructionpage = React.lazy(() => import("./components/UnderConstruction"))
// const LazyCurrencyExchange = React.lazy(() => import("./components/Cryptocurrencies/CurrencyExchange/CurrencyExchange"));
// const LazyCryptoDashboard = React.lazy(() => import("./components/Cryptocurrencies/Dashboard/Dashboard"));
export const usuarioContext = createContext();
const Root = () => {
  function UserContextProvider({ children }) {
    const [values, setValues] = React.useState();

    return (
      <usuarioContext.Provider value={{ values, setValues }}>
        {children}
      </usuarioContext.Provider>
    );
  }

  return (
    <Fragment>

      <BrowserRouter>

        <React.Suspense fallback={<Loader />}>
          <Routes>
            {/* rotas nivel 1 */}
            <Route path={`${process.env.PUBLIC_URL}/home`} element={<Landingpageapp />} />
            <Route path={`${process.env.PUBLIC_URL}/login`} element={<Signin />} />
            <Route path={`${process.env.PUBLIC_URL}/cadastro`} element={<Signup />} />
            <Route path={`${process.env.PUBLIC_URL}/esqueceu_senha`} element={<Forgotpassword />} />
            <Route path={`${process.env.PUBLIC_URL}/images`} element={<Images />} />

            {/* rota nivel 1 aninhada */}
            <Route path={`${process.env.PUBLIC_URL}/`} element={<App />} >
              <Route index element={<ECDashboard />} />

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
              <Route path={`${process.env.PUBLIC_URL}/adm_add_unidade`} element={<CreateUnity />} />
              <Route path={`${process.env.PUBLIC_URL}/adm_add_user`} element={<CreateUser />} />

              <Route path={`${process.env.PUBLIC_URL}/configuracoes`} element={<AdminConfig />} />
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
                element={<Okr_gestor />} >
              </Route>

              <Route
                path={`${process.env.PUBLIC_URL}/okr_unidade/criar_okr`}
                element={<CriarOkr_gestor />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/okr_unidade/progresso_okr`}
                element={<ProgressoOKR_gestor />}
              />
              {/* OKR final */}
              {/* AVPR GESTOR */}
              <Route
                path={`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/`}
                element={<Avpr_gestor />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/criar_avpr`}
                element={<CriarAvpr_gestor />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade/progressoAVPR`}
                element={<ProgressoAVPR_gestor />}
              />
              {/* AVPR FINAL */}
              {/*CLIMA PULSO GESTOR */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso_unidade`}
                  element={<ClimaPulso_gestor />}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso_unidade/criar_clima_pulso/`}
                  element={<CriarClima_gestor />}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso_unidade/configuracoes/`}
                  element={<ConfigurarClima_gestor />}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/climapulso_unidade/resultado/`}
                  element={<ResultadosClima_gestor />}
                />

              </Route>


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




