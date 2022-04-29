import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          val={dataPoint.property}
          maxVal={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
