import React, { Component } from "react";
import Chart from "chart.js";
import { Card, Col } from "react-bootstrap";

import "./chartCard.css";

export default class ChartCard extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    console.log(
      "Country one and chart data, ",
      this.props.countryOne,
      this.props.chartData
    );
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: this.props.chartData
          .find((c) => c.country.ISO2 == this.props.countryOne.ISO2)
          .data.map((c) => c.date.slice(0, 10)),
        datasets: [
          {
            label: this.props.countryOne.Country,
            data: this.props.chartData
              .find((c) => c.country.ISO2 == this.props.countryOne.ISO2)
              .data.map((c) => c.cases),
          },
          {
            label: this.props.countryTwo.Country,
            data: this.props.chartData
              .find((c) => c.country.ISO2 == this.props.countryTwo.ISO2)
              .data.map((c) => c.cases),
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
