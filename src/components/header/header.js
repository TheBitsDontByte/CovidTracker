import React, { useState } from "react";
import { connect } from "react-redux";
import { Navbar, Button, Col, Row, FormControl, Form } from "react-bootstrap";

import AddChartModal from "./AddChartModal.js";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <AddChartModal showModal={showModal} handleClose={handleClose} />
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand as="h1">Covid Dashboard</Navbar.Brand>
        <Row>
          <Col>
            <Form.Label style={{ color: "white" }}>Start Date</Form.Label>
            <FormControl
              type="date"
              placeholder="Start Date"
              className="mr-sm-2"
            />
          </Col>
          <Col>
            <Form.Label style={{ color: "white" }}>End Date</Form.Label>
            <FormControl
              type="date"
              placeholder="End Date"
              className="mr-sm-2"
            />
          </Col>
          <Col xs="auto" style={{ alignSelf: "flex-end" }}>
            <Button variant="outline-light" onClick={() => setShowModal(true)}>
              +Add Chart
            </Button>
          </Col>
        </Row>
      </Navbar>
    </>
  );
};

export default connect(null, null)(Header);
