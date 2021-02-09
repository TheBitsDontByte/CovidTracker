import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

import Header from "./header/header";
import Dashboard from "./dashboard/dashboard";
import { getCountries } from "../actions/index";

function App(props) {
  props.getCountries();

  return (
    <Container fluid>
      <Header />
      <Dashboard />
    </Container>
  );
}

export default connect(null, { getCountries })(App);
