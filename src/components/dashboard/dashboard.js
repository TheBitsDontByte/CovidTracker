import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

import ChartCard from "./chart/chartCard";

const Dashboard = () => {
  return (
    <Row>
      <Col>
        <ChartCard />
      </Col>
      <Col>Col2</Col>
    </Row>
  );
};

export default connect()(Dashboard);
