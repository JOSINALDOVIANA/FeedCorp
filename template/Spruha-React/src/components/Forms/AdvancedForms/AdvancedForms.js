
import React, { Fragment } from "react";
import { Breadcrumb, Row, Col, Card, Button, InputGroup } from "react-bootstrap";
import IntlTelInput from "react-intl-tel-input";
import * as forms from "../../../data/Forms/advanceforms";
import * as formelement from "../../../data/Forms/formelement";
const AdvancedForms = () => (
  <Fragment>
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Advanced Forms</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#" >Forms</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Advanced Forms
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button
            variant="white" type="button" className=" btn-icon-text my-2 me-2">
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button
            variant="white" type="button" className="btn-icon-text my-2 me-2" >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button
            variant="primary" type="button" className="my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Telephone Input</h6>
              <p className="text-muted card-sub-title">
                A plugin for entering and validating international telephone
                numbers. It adds a flag dropdown to any input, detects the
                user's country, displays a relevant placeholder and provides
                formatting/validation methods.
              </p>
            </div>
            <InputGroup className="telephone-input">
              <IntlTelInput
                containerClassName="intl-tel-input"
                inputClassName="form-control"
              />
              <span className="input-group-btn">
                <Button
                  variant="" className="btn ripple btn-primary" type="button">
                  Submit
                </Button>
              </span>
            </InputGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Select2</h6>
              <p className="text-muted card-sub-title">
                Select2 gives you a customizable select box with support for
                searching, tagging, remote data sets, infinite scrolling, and
                many other highly used options.
              </p>
            </div>
            <Row className="row-sm mg-b-20">
              <Col lg={4} className="">
                <p className="mg-b-10">Single Select</p>
                <forms.Singleselect />
              </Col>
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <p className="mg-b-10">Multiple Select with Search</p>
                <forms.MultipleSelect22 />
              </Col>
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <p className="mg-b-10">Single Select (Disabled)</p>
                <forms.Disabledselect />
              </Col>
            </Row>
            <Row className="row-sm">
              <Col lg={4}>
                <p className="mg-b-10">Multiple Select</p>
                <forms.AnimatedMulti />
              </Col>
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <p className="mg-b-10">Multiple Select with Pre-Filled Input</p>
                <forms.Prefilledinputs />
              </Col>
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <p className="mg-b-10">Multiple Select (Disabled)</p>
                <forms.Disabledselect />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Date Range Picker</h6>
              <p className="text-muted card-sub-title">Date Range Picker</p>
            </div>
            <Row className="row-sm">
              <Col lg={12}>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fe fe-calendar  lh--9 op-6"></i>
                  </InputGroup.Text>
                  <formelement.Previousmonth />
                </InputGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">File Upload</h6>
              <p className="text-muted">
                Dropify is a react dropzone plugin to create a beautiful file
                uploader that converts a standard <code>input type="file"</code>
                into a nice drag & drop zone with previews and custom styles.
              </p>
            </div>
            <Row className="mb-4">
              <Col sm={12} md={4} className="mg-t-10">

                <forms.Materialui />
              </Col>
              <Col sm={12} md={4} className="mg-t-10">

                <forms.CustomMaterialui />

              </Col>
              <Col sm={12} md={4} className="mg-t-10">
                <forms.MUIdropzonebadge />

              </Col>
              <Col sm={12} md={4} className="mg-t-10">

                <forms.MUIdropzonebutton />
              </Col>
              <Col sm={12} md={4} className="mg-t-10">

                <forms.StyledDropzone1 />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

AdvancedForms.propTypes = {};

AdvancedForms.defaultProps = {};

export default AdvancedForms;
