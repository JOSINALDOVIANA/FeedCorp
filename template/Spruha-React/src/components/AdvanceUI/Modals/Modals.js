import React, { Fragment } from "react";
import { Modal, Button, Breadcrumb, Row, Col, Card } from "react-bootstrap";
import * as modalmethods from "../../../data/Modalmethods/modalmethods";
const Modals = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Modal</h2>
        <Breadcrumb >
          <Breadcrumb.Item href="#">
            Advanced UI
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Modal
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white"
            type="button"
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button variant="white"
            type="button"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button variant="primary" type="button" className="my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- Row --> */}
    <Row className=" row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">
                Basic Example of Modal View
              </h6>
              <p className="text-muted card-sub-title">
                Below is the static example of the basic modal.
              </p>
            </div>
            <div className="pd-20 bg-light">
              <div className="modal d-block pos-static">
                <Modal.Dialog>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal Header</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Modal.Title>Modal Body</Modal.Title>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="primary">Save changes</Button>
                    <Button variant="secondary">Close</Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className=" row-sm">
      <Col sm={4} md={4}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">Basic Modal</h6>
            </div>
            <modalmethods.Basicmodal />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} md={4}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">Small Modal</h6>
            </div>
            <modalmethods.Smallmodal />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} md={4}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">Large Modal</h6>
            </div>
            <modalmethods.Largemodal />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} md={4}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">Grid Modal</h6>
            </div>
            <modalmethods.Gridmodal />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} md={4}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">
                Modal Success Alert Messages
              </h6>
            </div>
            <modalmethods.MessageAlert2 />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} md={4}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">
                Modal Danger Alert Messages
              </h6>
            </div>
            <modalmethods.MessageAlert1 />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} md={4}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">Tooltips and popovers</h6>
            </div>
            <modalmethods.Modalwithtooltip />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} md={4}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">Full Screen Modal</h6>
            </div>
            <modalmethods.Moodalfullscreen />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} md={4}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3"> Extra Large Modal</h6>
            </div>
            <modalmethods.Modalextralarge />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">Scrolling Modal</h6>
            </div>
            <modalmethods.Modalonscroll />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">
                Scrolling with Content
              </h6>
            </div>
            <modalmethods.Modalcontentscroll />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6} lg={6}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">Select2 Inside Modals</h6>
            </div>

            <modalmethods.ModalwithSelect2 />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6} lg={6}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-3">Modal-datepicker</h6>
            </div>
            <modalmethods.Datepicker />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Modals.propTypes = {};

Modals.defaultProps = {};

export default Modals;
