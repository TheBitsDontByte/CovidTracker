import React, { Component } from "react";
import Chart from "chart.js";
import { Card, Col } from "react-bootstrap";

import "./chartCard.css";

export default class ChartCard extends Component {
  chartRef = React.createRef();

  generateData(chartData, country) {
    return chartData
      .find((c) => c.country.ISO2 == country.ISO2)
      .data.map((c) => c.cases);
  }

  generateLabels(chartData, country) {
    return chartData
      .find((c) => c.country.ISO2 == country.ISO2)
      .data.map((c) => c.date.slice(0, 10));
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: this.generateLabels(
          this.props.chartData,
          this.props.countryOne
        ),
        datasets: [
          {
            label: this.props.countryOne.Country,
            data: this.generateData(
              this.props.chartData,
              this.props.countryOne
            ),
          },
          {
            label: this.props.countryTwo.Country,
            data: this.generateData(
              this.props.chartData,
              this.props.countryTwo
            ),
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
  }

  render() {
    return (
      <Col>
        <Card className="m-3">
          <Card.Header className="text-center">
            {this.props.countryOne.Country} compared to{" "}
            {this.props.countryTwo.Country}
          </Card.Header>
          <canvas className="p-2" id="myChart" ref={this.chartRef} />
        </Card>
      </Col>
    );
  }
}
