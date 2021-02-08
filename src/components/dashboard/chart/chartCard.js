import React, { Component } from "react";
import Chart from "chart.js";
import { Card } from "react-bootstrap";

import "./chartCard.css";

export default class ChartCard extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March", "Jan", "Feb", "March"],
        datasets: [
          {
            label: "Country 1",
            data: [46, 47, 61, 46, 37, 71],
          },
          {
            label: "Country 2",
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
      <Card border="secondary" className="m-3">
        <Card.Header>Some Title</Card.Header>
        <canvas className="p-2" id="myChart" ref={this.chartRef} />
      </Card>
    );
  }
}
