import React from "react";
import ExpenseChart from "./ExpenseChart";
import "./chartSection.css";

const ExpenseChartSection = (props) => {
  const MaxDatapointCalculation = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  console.log(props.dataPoints.value);
  const maximumValue = Math.max(...MaxDatapointCalculation);
  console.log(maximumValue);
  return (
    <div className="chartSection">
      {props.dataPoints.map((datapoint) => (
        <ExpenseChart
          value={datapoint.value}
          label={datapoint.label}
          key={datapoint.label}
          maxValue={maximumValue}
        />
      ))}
    </div>
  );
};
export default ExpenseChartSection;
