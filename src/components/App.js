import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

import Header from "./header/header";
import Dashboard from "./dashboard/dashboard";
import { getInitialState } from "../actions/index";

function App(props) {
  props.getInitialState();

  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
}

export default connect(null, { getInitialState })(App);
