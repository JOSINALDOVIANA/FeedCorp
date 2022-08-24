import React, { Fragment } from "react";
import { Modal, Button, OverlayTrigger, Tooltip, Nav } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      className="main-mail-compose  "
      {...props}
      size="lg"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>
            <span>New Message</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="main-mail-compose-body">
        <div className="form-group mb-0">
          <label className="form-label">To</label>
          <div>
            <input className="form-control" placeholder="" type="text" />
          </div>
        </div>
        <div className="form-group mb-0">
          <label className="form-label">Subject</label>
          <div>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder=""
            rows="12"
          ></textarea>
        </div>
        <div className="form-group mg-b-0">
          <Nav>
            <Nav.Item>
              <Nav.Link>
                <OverlayTrigger
                  placement="top"
                  title="Formatting"
                  overlay={<Tooltip> Formatting</Tooltip>}
                >
                  <i className="fas fa-font me-3 "></i>
                </OverlayTrigger>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <OverlayTrigger
                  placement="top"
                  title="Add attachment"
                  overlay={<Tooltip> Add Attachment</Tooltip>}
                >
                  <i className="fas fa-paperclip me-3"></i>
                </OverlayTrigger>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <OverlayTrigger
                  placement="top"
                  title="Add photo"
                  overlay={<Tooltip> Add photo</Tooltip>}
                >
                  <i className="far fa-image me-3"></i>
                </OverlayTrigger>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <OverlayTrigger
                  placement="top"
                  title="Emoticons"
                  overlay={<Tooltip> Emoticons</Tooltip>}
                >
                  <i className="fab fa-google-drive me-3"></i>
                </OverlayTrigger>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <OverlayTrigger
                  placement="top"
                  title=" Insert files into Drive"
                  overlay={<Tooltip> Insert files into Drive</Tooltip>}
                >
                  <i className="fab fa-google-drive me-3"></i>
                </OverlayTrigger>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <OverlayTrigger
                  placement="top"
                  title="Delete"
                  overlay={<Tooltip>Delete</Tooltip>}
                >
                  <i className="far fa-trash-alt me-3"></i>
                </OverlayTrigger>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Button onClick={props.onHide} className="btn ripple btn-primary ">
            Send
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export function Indexview() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Fragment>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        className="btn btn-main-primary btn-block btn-compose"
        href="#"
        id="btnCompose"
      >
        Compose
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  );
}
