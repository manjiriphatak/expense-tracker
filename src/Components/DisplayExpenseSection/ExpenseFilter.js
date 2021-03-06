import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (prop) => {
  const handleYearSelect = (event) => {
    event.preventDefault();
    prop.onFilterYear(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={prop.selected} onChange={handleYearSelect}>
          <option value="2022">2022 </option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="Show All">Show All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
