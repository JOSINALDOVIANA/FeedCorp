import DatePicker from "react-datepicker";
import React, { useState, Fragment } from "react";
import {
  Modal,
  Button,
  Col,
  Row,
  Container,
  Tooltip,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import Searchable from "react-searchable-dropdown";
import { Link } from "react-router-dom";


export function Basicmodal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        View Demo
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
export function Smallmodal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="secondary" onClick={handleShow}>
        View Demo
      </Button>

      <Modal show={show} onHide={handleClose} size="sm" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal Small</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export function Largemodal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="info" onClick={handleShow}>
        View Demo
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal Large</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
export function Modalextralarge() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="info" onClick={handleShow}>
        View Demo
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>FullScreen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export function Moodalfullscreen() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow} >
        View Demo
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="fullscreen"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>FullScreen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
export function MydModalWithGrid(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={6}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Col>
            <Col xs={6} md={6}>
              teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure
              itself, because it is pleasure desires to obtain pain. Neque porro
              quisquam est, qui dolorem ipsum quia dolor sit amet.
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Save Changes</Button>
        <Button onClick={props.onHide} variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function Gridmodal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <Button variant="warning" onClick={() => setModalShow(true)}>
        View Demo
      </Button>
      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
}
export function Modalonscroll() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        View Demo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ration.sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequiqui ratione voluptatem sequi nesciunt
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ration.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
export function Modalcontentscroll() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="secondary" onClick={handleShow} backdrop="static">
        View Demo
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
export const Datepicker = () => {
  const [date, setDate] = useState(new Date());
  const handleCalendarClose = () => // console.log("Calendar closed");
  const handleCalendarOpen = () => // console.log("Calendar opened");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        View Demo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <DatePicker className="form-control"
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export function Modalmessagealert() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="secondary" onClick={handleShow} className="text-center">
        viewDemo
      </Button>

      <Modal show={show} onHide={handleClose} size="large">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
          <br />
          <Button
            variant="success"
            onClick={handleClose}
            className="text-center"
          >
            cantainue
          </Button>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Fragment>
  );
}

// Modal success alert
export function MessageAlert1() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Fragment>
      <Button variant="danger" onClick={() => setModalShow(true)}>
        View Demo
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  );
}
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="large"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton />
      <button
        aria-label="Close"
        className="btn ripple  pd-x-25"
        data-bs-dismiss="modal"
        type="button"
      ></button>

      <Modal.Body className="text-center pd-y-20 pd-x-20">
        <i className="icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block"></i>
        <h4 className="tx-danger mg-b-20">Error: Cannot process your entry!</h4>
        <p className="mg-b-20 mg-x-20">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <Button onClick={props.onHide} variant="danger">
          continue
        </Button>
      </Modal.Body>
    </Modal>
  );
}
// modal Danger alert-end:

// Modal Success alert-star
export function MessageAlert2() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Fragment>
      <Button variant="success" onClick={() => setModalShow(true)}>
        View Demo
      </Button>
      <MyVerticallyCenteredModal2
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  );
}
function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="large"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton />
      <Modal.Body className="text-center">
        <i className="icon ion-ios-checkmark-circle-outline tx-100 tx-success  mg-t-20 "></i>

        <h4 className="tx-success tx-semibold mg-b-20">Congratulations!</h4>
        <p className="mg-b-20 mg-x-20">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <Button onClick={props.onHide} variant="success">
          continue
        </Button>
      </Modal.Body>
    </Modal>
  );
}
// Modal  danger message-end:
// Tooltip and Popover

export function Modalwithtooltip() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Popover content
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover </Popover.Header>
      <Popover.Body>
        <p> Vivamus sagittis lacus vel</p>
      </Popover.Body>
    </Popover>
  );

  // popovercontent-end:
  // Tooltip:
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Tooltip
    </Tooltip>
    // Tooltip-end
  );
  return (
    <Fragment>
      <Button variant="success" onClick={handleShow}>
        View Demo
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Tooltips & Popover</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Popover in a modal</h5>
          <p className="me-2">
            This
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button
                variant="primary"
                className="btn btn-sm ripple btn-primary mx-2"
                data-bs-container="body"
                data-bs-content="Vivamus sagittis lacus vel"
                data-bs-placement="right"
                data-bs-popover-color="default"
                data-bs-toggle="popover"
                title="Popover"
                type="button"
                size="sm"
              >
                Popover
              </Button>
            </OverlayTrigger>
            triggers a popover on click
          </p>
          <hr />
          <h5>Tooltips in a modal</h5>
          <p>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Link to="#">
                <span className="mx-2">Hover me</span>
              </Link>
            </OverlayTrigger>
            and
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Link to="#">
                <span className="mx-2">Hover me</span>
              </Link>
            </OverlayTrigger>
            have tooltips on hover
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
export function ModalwithSelect2() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Button variant="success" onClick={handleShow}>
        View Demo
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Select2 Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Searchable className="form-control select2"
            value="test"
            placeholder="Choose one" // by default "Search"
            notFoundText="No result found" // by default "No result found"
            noInput
            options={[
              { value: "", label: "All categories" },
              { value: "it projects", label: "IT Projects" },
              { value: "business case", label: "Business Case" },
              { value: "microsoft project", label: "Microsoft Project" },
              { value: "risk ]management", label: "Risk Management" },
              { value: "popular", label: "Popular" },
              { value: "team building", label: "Team Building" }
            ]}
            onSelect={(value) => {
              // console.log(value);
            }}
            listMaxHeight={140} //by default 140
          />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laudantium, obcaecati esse non sunt qui.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}



