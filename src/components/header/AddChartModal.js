import React from "react";
import { Modal, Col, Button } from "react-bootstrap";

const AddChartModal = ({ showModal, handleClose }) => {
  return (
    <Modal centered={true} show={showModal} onHide={handleClose}>
      <Modal.Header>
        <h3>Chart A New Pair Of Countries</h3>
      </Modal.Header>
      <Modal.Body>
        <Col>Select First Country</Col>
        <Col>Select Another Country</Col>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddChartModal;
