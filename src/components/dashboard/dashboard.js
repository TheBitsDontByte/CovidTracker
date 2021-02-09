import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

import ChartCard from "./chart/chartCard";

const renderChartCard = (chart, chartData) => {
  console.log(
    "render chart",
    chart,
    chartData,
    chartData.find((c) => c.country.ISO2 == chart.countryOne.ISO2)
  );
  return chartData.find((c) => c.country.ISO2 == chart.countryOne.ISO2) &&
    chartData.find((c) => c.country.ISO2 == chart.countryTwo.ISO2) ? (
    <ChartCard
      countryOne={chart.countryOne}
      countryTwo={chart.countryTwo}
      chartData={chartData}
    />
  ) : (
    "Loading"
  );
};

const Dashboard = (props) => {
  return props.charts.map((chartOne, index) => {
    if (index % 2 == 0 && props.charts[index + 1]) {
      const chartTwo = props.charts[index + 1];

      return (
        <Row>
          <Col>{renderChartCard(chartOne, props.chartData)}</Col>
          <Col>{renderChartCard(chartTwo, props.chartData)}</Col>
        </Row>
      );
    } else if (index % 2 == 0 && !props.charts[index + 1]) {
      return (
        <Row>
          <Col>{renderChartCard(chartOne, props.chartData)}</Col>
          <Col></Col>
        </Row>
      );
    }
  });
};

const mapStateToProps = (newState, currentState) => {
  return { charts: newState.charts, chartData: newState.chartData };
};

export default connect(mapStateToProps)(Dashboard);
