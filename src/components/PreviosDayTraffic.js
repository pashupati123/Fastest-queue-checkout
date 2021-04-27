import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Previousdaytraffic extends React.Component {
  state = {
    dataLine: {
      labels: ["9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16","16-17","17-18","18-19"],
      datasets: [
        
        {
          label: "previous day guets traffic per hour @store",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "#cc0000",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#cc0000",
          pointBackgroundColor: "#cc0000",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 186, 27, 90,200,100,250]
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Previous day Guest Traffic Trend</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default Previousdaytraffic;