import React, { useState } from "react";
import {
  Modal,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import "./AddChartModal.css";

const AddChartModal = (props) => {
  const [countryOne, setCountryOne] = useState(undefined);
  const [countryTwo, setCountryTwo] = useState(undefined);

  const renderDropdown = (countries) => {
    let filteredCountries = countries.filter(
      (c) => c != countryOne && c != countryTwo
    );

    return filteredCountries.map((c) => (
      <Dropdown.Item key={c.ISO2} eventKey={c.Slug}>
        {c.Country}
      </Dropdown.Item>
    ));
  };

  const handleHide = () => {
    setCountryOne(undefined);
    setCountryTwo(undefined);
    props.handleClose();
  };

  const handleCreate = () => {
    props.createNewChart(
      countryOne,
      countryTwo,
      props.startDate,
      props.endDate
    );
    handleHide();
  };

  return (
    <Modal centered={true} show={props.showModal} onHide={handleHide}>
      <Modal.Header>
        <h3>Chart A New Pair Of Countries</h3>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <DropdownButton
              variant="outline-secondary"
              title={
                !countryOne
                  ? "Select First Country"
                  : props.countries
                      .find((c) => c == countryOne)
                      .Country.slice(0, 17)
              }
              onSelect={(selection) =>
                setCountryOne(props.countries.find((c) => c.Slug == selection))
              }
            >
              {renderDropdown(props.countries)}
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton
              variant="outline-secondary"
              title={
                !countryTwo
                  ? "Select Second Country"
                  : props.countries
                      .find((c) => c == countryTwo)
                      .Country.slice(0, 20)
              }
              onSelect={(selection) =>
                setCountryTwo(props.countries.find((c) => c.Slug == selection))
              }
            >
              {renderDropdown(props.countries)}
            </DropdownButton>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleHide}>
          Cancel
        </Button>
        <Button
          onClick={handleCreate}
          variant="outline-success"
          disabled={!countryOne || !countryTwo}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddChartModal;
