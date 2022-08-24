import React, { Fragment } from "react";
import { Breadcrumb, Button, Row, Card, Col } from "react-bootstrap";
import * as sweetalerts from "../../../data/Adavanceui/sweetalerts";
const Sweetalert = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Sweet Alert</h2>
        <Breadcrumb >
          <Breadcrumb.Item href="#"> Advanced UI </Breadcrumb.Item>
          <Breadcrumb.Item active> Sweet Alert</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button
            variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button
            variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button
            variant="primary"
            type="button"
            className="my-2 btn-icon-text"
          >
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- Row --> */}
    <div className="sidemenu-height">
      <Row className="row-sm ">
        <Col sm={6} md={6} lg={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Basic Alert</h6>
                <p className="text-muted card-sub-title">A Basic Message</p>
              </div>
              <Button
                variant="primary"
                onClick={sweetalerts.Basicsweetalert}
                className="btn ripple"
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Title alert</h6>
                <p className="text-muted card-sub-title">
                  A title with a text under
                </p>
              </div>
              <Button
                variant="primary"
                onClick={sweetalerts.Titlealert}
                className="btn ripple"
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Success alert</h6>
                <p className="text-muted card-sub-title">A Success Message</p>
              </div>
              <Button
                variant="primary"
                onClick={sweetalerts.Successalert}
                className="btn ripple"
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Warning alert</h6>
                <p className="text-muted card-sub-title">A warning message</p>
              </div>
              <Button
                variant="primary"
                onClick={sweetalerts.Dangeralert}
                className="btn ripple btn-primary"
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm ">
        <Col sm={6} md={6} lg={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Passing a parameter alert
                </h6>
                <p className="text-muted card-sub-title">
                  By passing a parameter
                </p>
              </div>
              <Button
                variant="primary"
                onClick={sweetalerts.Passingparameter}
                className="btn ripple"
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Image alert</h6>
                <p className="text-muted card-sub-title">
                  A message with custom Image
                </p>
              </div>
              <Button
                variant="primary"
                onClick={sweetalerts.Sweetalertimage}
                className="btn ripple"
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Timer alert</h6>
                <p className="text-muted card-sub-title">
                  A message with auto close timer
                </p>
              </div>
              <Button
                variant="primary"
                onClick={sweetalerts.Autoalert}
                className="btn ripple"
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">File Alert</h6>
                <p className="text-muted card-sub-title">
                  With a Fileupload (for Input Types)
                </p>
              </div>
              <Button
                variant="primary"
                onClick={sweetalerts.Filealert}
                className="btn ripple"
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    {/* <!-- End Row --> */}
  </Fragment>
);

Sweetalert.propTypes = {};

Sweetalert.defaultProps = {};

export default Sweetalert;
