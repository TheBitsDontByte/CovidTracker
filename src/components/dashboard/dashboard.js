import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

import ChartCard from "./chart/chartCard";

const Dashboard = (props) => {
  return props.charts.map((chartOne, index) => {
    if (index % 2 == 0 && props.charts[index + 1]) {
      const chartTwo = props.charts[index + 1];
      return (
        <Row>
          <Col>
            <ChartCard
              countryOne={chartOne.countryOne}
              countryTwo={chartOne.countryTwo}
            />
            {/* Index */}
          </Col>
          <Col>
            <ChartCard
              countryOne={chartTwo.countryOne}
              countryTwo={chartTwo.countryTwo}
            />{" "}
            {/* Index +1 */}
          </Col>
        </Row>
      );
    } else if (index % 2 == 0 && !props.charts[index + 1]) {
      return (
        <Row>
          <Col>
            <ChartCard
              countryOne={chartOne.countryOne}
              countryTwo={chartOne.countryTwo}
            />
            {/* Index */}
          </Col>
          <Col></Col>
        </Row>
      );
    }
  });
};

const mapStateToProps = (newState, currentState) => {
  return { charts: newState.charts };
};

export default connect(mapStateToProps)(Dashboard);
