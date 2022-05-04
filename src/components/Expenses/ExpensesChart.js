import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDatapoints = [
    { label: "Jan", val: 0 },
    { label: "Feb", val: 0 },
    { label: "Mar", val: 0 },
    { label: "Apr", val: 0 },
    { label: "May", val: 0 },
    { label: "Jun", val: 0 },
    { label: "Jul", val: 0 },
    { label: "Aug", val: 0 },
    { label: "Sep", val: 0 },
    { label: "Oct", val: 0 },
    { label: "Nov", val: 0 },
    { label: "Dec", val: 0 },
  ];

  for (const expense in props.expenses) {
    // Loop through and look at existing expenses in props.expenses
    const expenseMonth = expense.date.getMonth(); // starting at index 0 => January => 0
    chartDatapoints[expenseMonth].val += expense.amount; // Increase value of a given month by that expense amount
  } // Once loop finishes, the values in the array above will no longer be 0, but have the total amount spend that month
  return (
    <Chart
      dataPoints={
        // Pass the datapoints array to the chart:
        (datapoints = { chartDatapoints })
      }
    />
  );
};

export default ExpensesChart;
