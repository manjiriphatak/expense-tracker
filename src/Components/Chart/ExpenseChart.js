import React from "react";
import styles from "./ExpenseChart.module.css";

const ExpenseChart = (props) => {
  let barFill = `0%`;

  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + `%`;
  }

  return (
    <div className={styles.chartSection}>
      <div className={styles.chartContainer}>
        <div className={styles.chartBarFill} style={{ height: barFill }}></div>
      </div>
      <div className={styles.chartLabels}>{props.label}</div>
    </div>
  );
};
export default ExpenseChart;
