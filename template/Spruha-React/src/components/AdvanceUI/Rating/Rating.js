import React, { Fragment } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import * as rating1 from '../../../data/Adavanceui/rating1';
const Rating = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Rating</h2>
        <Breadcrumb >
          <Breadcrumb.Item href="#">Advanced UI</Breadcrumb.Item>
          <Breadcrumb.Item active > Rating</Breadcrumb.Item>
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
            className="btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button variant="primary" type="button" className=" my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Star Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="static-rate text-center fs-30">
              <rating1.StarRating />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Disabled Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className=" text-center fs-30">
              <rating1.DisabledRating />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Radio Group Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box  box-example-1to10">
              <div className="box-body  text-center fs-30">
                <rating1.RadioGroupRating />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Hover Feedback Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box box-large box-example-horizontal">
              <div className="box-body text-center">
                <rating1.CustomizedRating5 />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Circle Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box  box-example-1to10">
              <div className="box box-example-square">
                <div className="box-body text-center">
                  <rating1.MulticircleRating />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Rounded Star Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box  box-example-1to10">
              <div className="box box-example-square">
                <div className="box-body text-center">
                  <rating1.RoundedStarRating />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">

      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Heart rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box box-example-movie">
              <div className="box-body  text-center fs-30">
                <rating1.CustomizedRating1 />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Circle rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box  box-example-1to10">
              <div className="box box-example-square">
                <div className="box-body text-center">
                  <rating1.CustomizedRating />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Rating precision</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box box-example-pill">
              <div className="box-body text-center">
                <rating1.CustomizedRating2 />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="card-title">
              <label className="main-content-label"> Thumbs-up Rating</label>
            </h6>
          </Card.Header>
          <Card.Body>
            <div className="box  box-example-1to10">
              <div className="box box-example-square">
                <div className="box-body text-center">
                  <rating1.ThumbsUp />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

    </Row>

    {/* <!-- End Row --> */}
  </Fragment>
);

Rating.propTypes = {};

Rating.defaultProps = {};

export default Rating;
