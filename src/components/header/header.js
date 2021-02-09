import React, { useState } from "react";
import { connect } from "react-redux";
import { Navbar, Button, Col, Row, FormControl, Form } from "react-bootstrap";

import { updateDateValue, createNewChart } from "../../actions";
import AddChartModal from "./AddChartModal.js";

const Header = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (field, changedDate) => {
    props.updateDateValue(field, changedDate);
  };

  return (
    <>
      <AddChartModal
        showModal={showModal}
        handleClose={handleClose}
        countries={props.countries}
        createNewChart={props.createNewChart}
        startDate={props.startDate}
        endDate={props.endDate}
      />
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand as="h1">Covid Dashboard</Navbar.Brand>
        <Row>
          <Col>
            <Form.Label style={{ color: "white" }}>Start Date</Form.Label>
            <FormControl
              type="date"
              placeholder="Start Date"
              className="mr-sm-2"
              value={props.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label style={{ color: "white" }}>End Date</Form.Label>
            <FormControl
              type="date"
              placeholder="End Date"
              className="mr-sm-2"
              value={props.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
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

const mapStateToProps = (newState, currentState) => {
  return {
    startDate: newState.startDate,
    endDate: newState.endDate,
    countries: newState.countries,
  };
};

export default connect(mapStateToProps, { updateDateValue, createNewChart })(
  Header
);
