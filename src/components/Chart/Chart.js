import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointVals = props.dataPoints.map((dataPoint) => dataPoint.val); // Transform datapoint object into just a number, so that dataPointVals simply stores an array of numbers
  const totalMax = Math.max(...dataPointVals); // Use spread operator to extract elements of array and add them as individual arguments

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          val={dataPoint.val}
          maxVal={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
