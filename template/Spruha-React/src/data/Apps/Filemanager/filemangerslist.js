import React, { Fragment, useState } from "react";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { Button, Modal } from "react-bootstrap";
export function Filemangerlist1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [files, setFiles] = useState([]);
  const handleAdd = (newFiles) => {
    newFiles = newFiles.filter(
      (file) => !files.find((f) => f.data === file.data)
    );
    setFiles([...files, ...newFiles]);
  };
  const handleDelete = (deleted) => {
    setFiles(files.filter((f) => f !== deleted));
  };
  return (
    <Fragment>
      <Button className="btn ripple btn-primary btn-block" onClick={handleShow}>
        Add New File
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropzoneAreaBase fileObjects={files} onAdd={handleAdd} onDelete={handleDelete} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Add
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
