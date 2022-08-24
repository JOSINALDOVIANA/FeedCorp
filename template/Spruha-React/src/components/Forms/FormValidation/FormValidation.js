import React, { Fragment, useState } from "react";
// import PropTypes from "prop-types";
import { Button, Form, FormGroup, InputGroup } from "react-bootstrap";
import { FormExample1 } from "../../../data/Forms/formvalidation";

function FormValidation() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  // from 2
  const [validated1, setValidated1] = useState(false);

  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated1(true);
  };
  // Server Side
  const [validated2, setValidated2] = useState(false);

  const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated2(true);
  };
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Form Validation</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">{/* <a href="#">Forms</a> */}</li>
            <li className="breadcrumb-item active" aria-current="page">
              Form Validation
            </li>
          </ol>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <button
              type="button"
              className="btn btn-white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </button>
            <button
              type="button"
              className="btn btn-white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </button>
            <button
              type="button"
              className="btn btn-primary my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <div className="row row-sm">
        <div className="col-xl-6 col-lg-12 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-1">Input Validation</h6>
                <p className="text-muted card-sub-title">
                  This is a demo of a required field that must not leave empty.
                </p>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="">
                  <div className="row row-sm">
                    <Form.Group
                      className="col-lg-6 form-group"
                      controlid="validationCustom01"
                    >
                      <Form.Label>
                        Firstname: <span className="tx-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        name="firstname"
                        placeholder="Enter firstname"
                        type="text"
                        defaultValue="Marky"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="col-lg-6 form-group"
                      controlid="validationCustom02"
                      defaultValue="John"
                    >
                      <Form.Label>
                        Lastname: <span className="tx-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Marky"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3 form-group">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button
                    className="btn ripple btn-main-primary btn-block"
                    type="submit"
                  >
                    Validate Form
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-1">
                  Custom Checkbox Validation
                </h6>
                <p className="text-muted card-sub-title">
                  A demo of checkboxes that must be selected at least two fom
                  any given list.
                </p>
              </div>
              <Form noValidate validated={validated1} onSubmit={handleSubmit1}>
                <div className="">
                  <div className="row row-sm">
                    <Form.Group
                      className="col-lg-6 form-group"
                      controlid="validationCustom01"
                    >
                      <Form.Label>
                        Firstname: <span className="tx-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        name="firstname"
                        placeholder="Enter firstname"
                        type="text"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="col-lg-6 form-group"
                      controlid="validationCustom02"
                    >
                      <Form.Label>
                        Lastname: <span className="tx-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3 form-group">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <div className="mg-t-20">
                    <Button
                      className="btn ripple btn-primary pd-x-20"
                      type="submit"
                    >
                      Validate Form
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- End Row--> */}

      {/* <!-- Row --> */}
      <div className="row row-sm">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-3">Server side</h6>
              </div>
              <Form
                className="row g-3"
                noValidate
                validated={validated2}
                onSubmit={handleSubmit2}
              >
                <FormGroup className="col-md-4" controlid="validationServer01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    defaultValue="Marky"
                    required
                  />
                  <Form.Control.Feedback className="valid-feedback">
                    Looks good!
                  </Form.Control.Feedback>
                </FormGroup>
                <FormGroup className="col-md-4" controlid="validationServer02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    defaultValue="john"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </FormGroup>
                <Form.Group
                  className="col-md-4 form-group"
                  controlid="validationServerUsername"
                >
                  <Form.Label className="form-label">Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend3">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend3"
                      required
                    />
                    <Form.Control.Feedback>
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  className="col-md-6 mt-3 form-group"
                  controlid="validationServer03"
                >
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="validationServer03Feedback"
                    placeholder="City"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="col-md-3 mt-3 form-group"
                  controlid="validationServer04"
                >
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    required
                  ></Form.Control>
                  <Form.Control.Feedback
                    // id="validationServer04Feedback"
                    className="invalid-feedback"
                  >
                    Please select a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-md-3 mt-3 form-group">
                  <Form.Label controlid="validationServer05">Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback id="validationServer05Feedback">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-12 form-group">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <div className="col-12">
                  <Button className="btn btn-primary" type="submit">
                    Submit form
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-3">Tooltips</h6>
                <p className="text-muted card-sub-title">
                  If your form layout allows it, you can use the tooltip prop to
                  display validation feedback in a styled tooltip. Be sure to
                  have a parent with position: relative on it for tooltip
                  positioning. In the example below, our column classes have
                  this already, but your project may require an alternative
                  setup.
                </p>
              </div>
              {/* <form className="was-validated">
                <div className="mb-3">
                  <label for="validationTextarea" className="form-label">
                    Textarea
                  </label>
                  <textarea
                    className="form-control is-invalid"
                    id="validationTextarea"
                    placeholder="Required example textarea"
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="validationFormCheck1"
                    required
                  />
                  <label
                    className="form-check-label"
                    for="validationFormCheck1"
                  >
                    Check this checkbox
                  </label>
                  <div className="invalid-feedback">
                    Example invalid feedback text
                  </div>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="validationFormCheck2"
                    name="radio-stacked"
                    required
                  />
                  <label
                    className="form-check-label"
                    for="validationFormCheck2"
                  >
                    Toggle this radio
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="validationFormCheck3"
                    name="radio-stacked"
                    required
                  />
                  <label
                    className="form-check-label"
                    for="validationFormCheck3"
                  >
                    Or toggle this other radio
                  </label>
                  <div className="invalid-feedback">
                    More example invalid feedback text
                  </div>
                </div>

                <div className="mb-3">
                  <select
                    className="form-select"
                    required
                    aria-label="select example"
                  >
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div className="invalid-feedback">
                    Example invalid select feedback
                  </div>
                </div>

                <div className="input-group file-browser mb-3">
                  <input
                    type="text"
                    className="form-control border-end-0 browse-file"
                    placeholder="choose"
                    required
                  />
                  <label className="input-group-btn">
                    <span className="btn btn-primary">
                      Browse
                      <input
                        type="file"
                        style={{ display: "none" }}
                        multiple=""
                      />
                    </span>
                  </label>
                </div>

                <div className="mb-3">
                  <button className="btn btn-primary" type="submit" disabled>
                    Submit form
                  </button>
                </div>
              </form> */}
              <FormExample1 />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Row--> */}
    </Fragment>
  );
}

FormValidation.propTypes = {};

FormValidation.defaultProps = {};

export default FormValidation;
