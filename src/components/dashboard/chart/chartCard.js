import React, { Component } from "react";
import Chart from "chart.js";
import { Card, Col } from "react-bootstrap";

import "./chartCard.css";

export default class ChartCard extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    console.log("did mount", this.props);
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: [
          "Jan",
          "Feb",
          "March",
          "Jan",
          "Feb",
          "March",
          "Jan",
          "Feb",
          "March",
          "Jan",
          "Feb",
          "March",
          "Jan",
          "Feb",
          "March",
          "Jan",
          "Feb",
          "March",
          "Jan",
          "Feb",
          "March",
          "Jan",
          "Feb",
          "March",
        ],
        datasets: [
          {
            label: this.props.countryOne.Country,
            data: [
              46,
              47,
              61,
              46,
              37,
              71,
              46,
              47,
              61,
              46,
              37,
              71,
              46,
              47,
              61,
              46,
              37,
              71,
              46,
              47,
              61,
              46,
              37,
              71,
            ],
          },
          {
            label: this.props.countryTwo.Country,
            data: [83, 43, 93, 83, 61, 99],
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
