import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

import ChartCard from "./chart/chartCard";

const Dashboard = () => {
  var charts = [
    <ChartCard />,
    <ChartCard />,
    <ChartCard />,
    <ChartCard />,
    <ChartCard />,
  ];

  const mapCharts = () => {
    return charts.map((c, index) => {
      if (index % 2 == 0 && charts[index + 1]) {
        return (
          <Row>
            <Col>
              <ChartCard /> {/* Index */}
            </Col>
            <Col>
              <ChartCard /> {/* Index +1 */}
            </Col>
          </Row>
        );
      } else if (index % 2 == 0 && !charts[index + 1]) {
        return (
          <Row>
            <Col>
              <ChartCard /> {/* Index */}
            </Col>
            <Col></Col>
          </Row>
        );
      }
    });
  };

  return mapCharts();
};

export default connect()(Dashboard);
