import React from "react";
import { connect } from "react-redux";

import Header from "./header/header";
import Dashboard from "./dashboard/dashboard";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Header />
      <Dashboard />
    </Container>
  );
}

export default connect()(App);
