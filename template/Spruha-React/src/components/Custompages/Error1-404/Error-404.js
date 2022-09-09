import React, { Fragment, useContext, useEffect } from "react";
import { Col, Container, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { usuarioContext } from "../../..";
const Error404 = () => {

  const dadosrota = useLocation();
  const location = useLocation();
  const navegar = useNavigate();
  const { values, setValues } = useContext(usuarioContext);
  useEffect(() => {
    setValues(dadosrota.state)
  }, [dadosrota])

  document.querySelector("body").classList.add("error-1");
  return (
    <Fragment>
      {/* <!-- Page --> */}
      <div className="ltr main-body leftmenu" >
        <div className="page main-signin-wrapper bg-primary construction" >
          <Container >
            <div className="construction1 text-center details text-white">
              <div>
                <Col lg={12}>
                  <h1 className="tx-140 mb-0">404</h1>
                </Col>
                <Col lg={12}>
                  <h1>Oops. A página que você procura não existe</h1>
                  <h6 className="tx-15 mt-3 mb-4 text-white">
                    Você pode ter digitado incorretamente o endereço ou a página pode ter sido removida.
                  </h6>
                  {/* <Link
                    to={`${process.env.PUBLIC_URL}/`}
                    className="btn ripple btn-success text-center mb-2"
                  >
                    Back to Home
                  </Link> */}
                  <Button
                    variant="btn-success"
                    type="button"
                    className="btn ripple btn-success text-center mb-2"
                    onClick={() => { navegar(`${process.env.PUBLIC_URL}/`, { state: values }) }}
                  >
                    Voltar
                  </Button>
                </Col>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* <!-- End Page - */}
    </Fragment>
  );
}

Error404.propTypes = {};

Error404.defaultProps = {};

export default Error404;
