
import React, { Fragment, createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Loader from "./layouts/Loader/Loader";
//INÍCIO
import FeedRecebidos from "./components/ECommerce/ECDashboard/tabelaCards/FeedRecebidos"
import FeedFeitos from "./components/ECommerce/ECDashboard/tabelaCards/FeedFeitos"
import Objetivos from "./components/ECommerce/ECDashboard/tabelaCards/Objetivos"
import Pesquisas from "./components/ECommerce/ECDashboard/tabelaCards/Pesquisas"
const NovoFeedback = React.lazy(() => import("./components/ECommerce/ECDashboard/CriarFeedback"))
//OKR
const Okr = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/OKR/Okr"))
const CriarOkr = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/OKR/CriarOKR"))
const ProgressoOKR = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/OKR/ProgressoOKR"))
//CLIMA PULSO
const TabelaClima = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/ClimaTabelaRealizados"))
const CriarClima = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/CriarClimaPulso"))
const ConfigurarClima = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/configurarClima"))


// Dashboard
const ECDashboard = React.lazy(() => import("./components/ECommerce/ECDashboard/ECDashboard"))
const MinhaCorporação = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/MyCorp"))
const ClimaPulso = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/engajamento/climaPulso/ClimaPulso"))

const Avpr = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/AVPR"));
const Criar = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/AVPR/Criar"));
const Responder = React.lazy(() => import("./components/ECommerce/ECDashboard/administrador/Desempenho/AVPR/Responder"))
//LandingPage
const Landingpageapp = React.lazy(() => import("./components/Landingpageapp"));
const App = React.lazy(() => import("./components/app"));
// const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"))
// AdvanceUi
// const Themepage = React.lazy(() => import('./components/Themepage'))
// const Calendar = React.lazy(() => import("./components/AdvanceUI/Calendar/Calendar"))
// const Cards = React.lazy(() => import("./components/AdvanceUI/Cards/Cards"))
// const Chat = React.lazy(() => import("./components/AdvanceUI/Chat/Chat"))
// const Contacts = React.lazy(() => import("./components/AdvanceUI/Contacts/Contacts"))
// const Carousels = React.lazy(() => import("./components/AdvanceUI/Carousels/Carousels"))
// const Collapse = React.lazy(() => import("./components/AdvanceUI/Collapse/Collapse"))
// const Modals = React.lazy(() => import("./components/AdvanceUI/Modals/Modals"))
// const Notifications = React.lazy(() => import("./components/AdvanceUI/Notifications/Notifications"))
// const Rating = React.lazy(() => import("./components/AdvanceUI/Rating/Rating"))
// const Search = React.lazy(() => import("./components/AdvanceUI/Search/Search"))
// const Sweetalert = React.lazy(() => import("./components/AdvanceUI/Sweetalert/Sweetalert"))
// const Timeline = React.lazy(() => import("./components/AdvanceUI/Timeline/Timeline"))
// const Treeview = React.lazy(() => import("./components/AdvanceUI/Treeview/Treeview"))
// const UserList = React.lazy(() => import("./components/AdvanceUI/UserList/UserList"))
// // Apps
// const Widgets = React.lazy(() => import("./components/Apps/Widgets/Widgets"))
// const Filedetails = React.lazy(() => import("./components/Apps/File/Filedetails/Filedetails"))
// const FileManagerlist = React.lazy(() => import("./components/Apps/File/FileManagerlist/FileManagerlist"))
// const FileManager = React.lazy(() => import("./components/Apps/File/FileManager/FileManager"))
// const FileAttachements = React.lazy(() => import("./components/Apps/File/FileAttachements/FileAttachements"))
// const Mailinbox = React.lazy(() => import("./components/Apps/Mail/Mailinbox/Mailinbox"))
// const ViewMail = React.lazy(() => import("./components/Apps/Mail/ViewMail/ViewMail"))
// const Mailcomposed = React.lazy(() => import("./components/Apps/Mail/Mailcomposed/Mailcomposed"))
// const Leafletmaps = React.lazy(() => import("./components/Apps/Maps/Leafletmaps/Leafletmaps"))
// const Blog = React.lazy(() => import("./components/Apps/Blog/Blog/Blog"))
// const Blogdetails = React.lazy(() => import("./components/Apps/Blog/Blogdetails/Blogdetails"))
// const Blogpost = React.lazy(() => import("./components/Apps/Blog/Blogpost/Blogpost"))
// const Rsmmaps = React.lazy(() => import("./components/Apps/Maps/Rsmmaps/Rsmmaps"));
// const Reactbasicables = React.lazy(() => import("./components/Apps/Tables/Reactbasictables/Reacrbasictables"));
//const Reactdatatables = React.lazy(() => import("./components/Apps/Tables/Reactdatatables/Reactdatatables"));
// Charts
// const ChartJs = React.lazy(() => import("./components/Charts/ChartJs/ChartJs"))
// const Echart = React.lazy(() => import("./components/Charts/Echart/Echart"))
// const Nvd3Charts = React.lazy(() => import("./components/Charts/Nvd3Charts/nvd3charts"))
// const Piacharts = React.lazy(() => import("./components/Charts/Piacharts/Piacharts"))
// const C3barcharts = React.lazy(() => import("./components/Charts/C3barcharts/c3barcharts"))
//Cryptocurrencies
// const Buysell = React.lazy(() => import("./components/Cryptocurrencies/Buysell/Buysell"))
// const MarketCap = React.lazy(() => import("./components/Cryptocurrencies/MarketCap/MarketCap"))
// const Transcations = React.lazy(() => import("./components/Cryptocurrencies/Transcations/Transcations"))
// const Wallet = React.lazy(() => import("./components/Cryptocurrencies/Wallet/Wallet"))
// E-commerce
// const Account = React.lazy(() => import("./components/ECommerce/Account/Account"))
// const ECCart = React.lazy(() => import("./components/ECommerce/ECCart/ECCart"))
// const Checkout = React.lazy(() => import("./components/ECommerce/Checkout/Checkout"))
// const Order = React.lazy(() => import("./components/ECommerce/Orders/Orders"))
// const Productdeatils = React.lazy(() => import("./components/ECommerce/Productdeatils/Productdeatils"))
// const Products = React.lazy(() => import("./components/ECommerce/Products/Products"))
// const Wishlist = React.lazy(() => import("./components/ECommerce/Wishlist/Wishlist"))
// Elements
// const Alerts = React.lazy(() => import("./components/Elements/Alerts/Alerts"))
// const Avatars = React.lazy(() => import("./components/Elements/Avatars/Avatars"))
//const LazyAccordions = React.lazy(() => import("./components/Elements/Accordions/Accordions"));
// const Badges = React.lazy(() => import("./components/Elements/Badges/Badges"))
// const Breadcrumbs = React.lazy(() => import("./components/Elements/Breadcrumbs/Breadcrumbs"))
// const Buttons = React.lazy(() => import("./components/Elements/Buttons/Buttons"))
// const DropDowns = React.lazy(() => import("./components/Elements/DropDowns/DropDowns"))
// const ListGroups = React.lazy(() => import("./components/Elements/ListGroups/ListGroups"))
// const MediaObjects = React.lazy(() => import("./components/Elements/MediaObjects/MediaObjects"))
// const Navigation = React.lazy(() => import("./components/Elements/Navigation/Navigation"))
// const Paginations = React.lazy(() => import("./components/Elements/Paginations/Paginations"))
// const Popovers = React.lazy(() => import("./components/Elements/Popovers/Popovers"))
// const Progress = React.lazy(() => import("./components/Elements/Progress/Progress"))
// const Spinners = React.lazy(() => import("./components/Elements/Spinners/Spinners"))
// const Tags = React.lazy(() => import("./components/Elements/Tags/Tags"))
// const Thumbnails = React.lazy(() => import("./components/Elements/Thumbnails/Thumbnails"))
// const Toasts = React.lazy(() => import("./components/Elements/Toasts/Toasts"))
// const Tooltips = React.lazy(() => import("./components/Elements/Tooltips/Tooltips"))
// const Tabs = React.lazy(() => import("./components/Elements/Tabs/Tabs"))
// const Typographys = React.lazy(() => import("./components/Elements/Typographys/Typographys"))
// Forms
// const AdvancedForms = React.lazy(() => import("./components/Forms/AdvancedForms/AdvancedForms"))
// const FormEditor = React.lazy(() => import("./components/Forms/FormEditor/FormEditor"))
// const FormElements = React.lazy(() => import("./components/Forms/FormElements/FormElements"))
// const FormlementsSizes = React.lazy(() => import("./components/Forms/FormElementsSizes/FormElementsSizes"))
// const FormLayouts = React.lazy(() => import("./components/Forms/FormLayouts/FormLayouts"))
// const FormValidation = React.lazy(() => import("./components/Forms/FormValidation/FormValidation"))
// const Formwizard = React.lazy(() => import("./components/Forms/Formwizard/Formwizard"))
// icons
// const Bootstrapicons = React.lazy(() => import("./components/Apps/Icons/Bootstrapicons/Bootstrapicons"))
// const Feathericons = React.lazy(() => import("./components/Apps/Icons/FeatherIcons/Feathericons"))
// const Flagsicons = React.lazy(() => import("./components/Apps/Icons/Flagsicons/Flagsicons"))
// const Ionicicons = React.lazy(() => import("./components/Apps/Icons/Ionicicons/Ionicicons"))
// const MaterialDesignicons = React.lazy(() => import("./components/Apps/Icons/MaterialDesignicons/MaterialDesignicons"))
// const Materialicons = React.lazy(() => import("./components/Apps/Icons/Materialicons/Materialicons"))
// const Pe7icons = React.lazy(() => import("./components/Apps/Icons/Pe7icons/Pe7icons"))
// const SimpleLineicons = React.lazy(() => import("./components/Apps/Icons/Simplelineicons/Simplelineicons"))
// const Themifyicons = React.lazy(() => import("./components/Apps/Icons/Themifyicons/Themifyicons"))
// const Typiconsicons = React.lazy(() => import("./components/Apps/Icons/Typiconsicons/Typiconsicons"))
// const Weathericons = React.lazy(() => import("./components/Apps/Icons/Weathericons/Weathericons"))
// const FontAwesome = React.lazy(() => import("./components/Apps/Icons/FontAwesome/FontAwesome"))
// Pages
// const EmptyPage = React.lazy(() => import("./components/Pages/EmptyPage/EmptyPage"))
// const Faq = React.lazy(() => import("./components/Pages/Faq/Faq"))
// const Gallery = React.lazy(() => import("./components/Pages/Gallery/Gallery"))
// const NotificationList = React.lazy(() => import("./components/Pages/NotificationList/NotificationList"))
// const Invoice = React.lazy(() => import("./components/Pages/Invoice/Invoice"))
// const MessageDanger = React.lazy(() => import("./components/Pages/MessageDanger/MessageDanger"))
// const MessageWarning = React.lazy(() => import("./components/Pages/MessageWarning/MessageWarning"))
// const Messagesuccess = React.lazy(() => import("./components/Pages/Messagesuccess/Messagesuccess"))
// const PricingTables = React.lazy(() => import("./components/Pages/PricingTables/PricingTables"))
// const Profile = React.lazy(() => import("./components/Pages/Profile/Profile"))
// const Aboutus = React.lazy(() => import("./components/Pages/Aboutus/Aboutus"))
// const Settings = React.lazy(() => import("./components/Pages/Settings/settings"))
//  Utilities
// const Background = React.lazy(() => import("./components/Utilities/Background/Background"))
// const Border = React.lazy(() => import("./components/Utilities/Border/Border"))
// const Display = React.lazy(() => import("./components/Utilities/Display/Display"))
// const Extras = React.lazy(() => import("./components/Utilities/Extras/Extras"))
// const Flex = React.lazy(() => import("./components/Utilities/Flex/Flex"))
// const Height = React.lazy(() => import("./components/Utilities/Height/Height"))
// const Margin = React.lazy(() => import("./components/Utilities/Margin/Margin"))
// const Padding = React.lazy(() => import("./components/Utilities/Padding/Padding"))
// const Position = React.lazy(() => import("./components/Utilities/Position/Position"))
// const Width = React.lazy(() => import("./components/Utilities/Width/Width"))
// coustom pages
// const Error505 = React.lazy(() => import("./components/Custompages/Error-505/Error-505"))
const Error404 = React.lazy(() => import("./components/Custompages/Error1-404/Error-404"))
const Signin = React.lazy(() => import("./components/Custompages/Signin/Signin"))
const Signup = React.lazy(() => import("./components/Custompages/Signup/Signup"))
// const Lockscreen = React.lazy(() => import("./components/Custompages/Lockscreen/Lockscreen"))
const Resetpassword = React.lazy(() => import("./components/Custompages/Resetpassword/Resetpassword"))
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
      <UserContextProvider>
        <BrowserRouter>

          <React.Suspense fallback={<Loader />}>
            <Routes>

              <Route path={`${process.env.PUBLIC_URL}/home`} element={<Landingpageapp />} />
              <Route path={`${process.env.PUBLIC_URL}/login`} element={<Signin />} />
              <Route path={`${process.env.PUBLIC_URL}/cadastrar`} element={<Signup />} />
              <Route path={`${process.env.PUBLIC_URL}/esqueceuasenha`} element={<Forgotpassword />} />

              <Route path={`${process.env.PUBLIC_URL}/`} element={<App />} >
                <Route index element={<ECDashboard />} />

                <Route>
                  <Route path={`${process.env.PUBLIC_URL}/dashboard/`} element={<ECDashboard />} >
                    <Route index element={<Fragment />} />
                    <Route>
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
                  </Route>
                </Route>

                <Route>
                  <Route path={`${process.env.PUBLIC_URL}/dashboard/novo_feedback`} element={<NovoFeedback />} />
                </Route>
{/* ------------------------------CORPORAÇÃO------------------------------------------ */}
                <Route>
                  <Route path={`${process.env.PUBLIC_URL}/corporacao`} element={<MinhaCorporação />} />
                </Route>
{/* ------------------------------OKR------------------------------------------ */}
                <Route>
                  <Route path={`${process.env.PUBLIC_URL}/okr`} element={<Okr />} >
                    <Route index element={<Fragment />} />
                    <Route>

                      <Route
                        path={`${process.env.PUBLIC_URL}/okr/criar_okr`}
                        element={<CriarOkr />}
                      />

                    </Route>
                  </Route>
                </Route>

                <Route>
                  <Route path={`${process.env.PUBLIC_URL}/okr/progresso`} element={<ProgressoOKR />} />
                </Route>
{/* ------------------------------AVR------------------------------------------ */}
                <Route>
                  <Route path={`${process.env.PUBLIC_URL}/avr/`} element={<Avpr />} >
                    <Route index element={<Fragment />} />
                    <Route>
                      <Route
                        path={`${process.env.PUBLIC_URL}/avr/responder`}
                        element={<Responder />}
                      />
                      <Route
                        path={`${process.env.PUBLIC_URL}/avr/criar`}
                        element={<Criar />}
                      />
                    </Route>

                  </Route>
                </Route>
{/* ------------------------------CLIMA PULSO------------------------------------------ */}
                <Route>
                  <Route path={`${process.env.PUBLIC_URL}/climapulso`} element={<ClimaPulso />} >
                    <Route index element={<Fragment />} />
                    <Route>
                      <Route
                        path={`${process.env.PUBLIC_URL}/climapulso/realizados`}
                        element={<TabelaClima />}
                      />
                      <Route
                        path={`${process.env.PUBLIC_URL}/climapulso/criar`}
                        element={<CriarClima />}
                      />
                      <Route
                        path={`${process.env.PUBLIC_URL}/climapulso/configuracoes`}
                        element={<ConfigurarClima />}
                      />

                    </Route>

                  </Route>
                </Route>


                {/* <Route>
                  <Route
                    path={`${process.env.PUBLIC_URL}/ferramentas`}
                    element={<Teste />}
                  />
                </Route> */}

              </Route>

              {/* ........................................Errorpage............................................... */}
              <Route path="*" element={<Error404 />} />
            </Routes>


          </React.Suspense>

        </BrowserRouter>
      </UserContextProvider>
    </Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);




