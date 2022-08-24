import React, { useState } from "react";
import { Row, Col, Toast, ToastContainer } from "react-bootstrap";
export function Toastbasic() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA} className="ms-2 mb-1">
          <Toast.Header>
            <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
            <small className="text-muted">11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
export function Toaststack() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
            <small className="text-muted">11 mins ago</small>
          </Toast.Header>
          <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
export function Toastright() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className=" position-relative"
      style={{ minHeight: "240px" }}
    >
      <ToastContainer position="top-end" className="">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
            <small className="text-muted">11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export function Toastcenter() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <div
      // aria-live="polite"
      // aria-atomic="true"
      className=" position-relative"
      style={{ minHeight: "240px" }}
    >
      <ToastContainer position="middle-center" className="">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
            <small className="text-muted">11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
