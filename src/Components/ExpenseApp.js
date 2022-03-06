import React, { useState } from "react";
import "./ExpenseApp.css";
import Card from "./Card/Card";
import NewExpenseButton from "./Header/NewExpenseButton";
import ExpenseFilter from "./DisplayExpenseSection/ExpenseFilter";
import ExpenseListLogic from "./DisplayExpenseSection/ExpenseListLogic";
import Chart from "./Chart/Chart";

const dummyExpenseList = [
  {
    id: 1,
    item: "Car Insurance",
    amount: 265,
    date: new Date("2019, 7, 29"),
  },
  {
    id: 2,
    item: "Home Insurance",
    amount: 65,
    date: new Date("2019, 5, 18"),
  },
  {
    id: 3,
    item: "Fuel",
    amount: 1265,
    date: new Date("2020, 12, 20"),
  },
  {
    id: 4,
    item: "Grocery",
    amount: 4000,
    date: new Date("2022, 10, 4"),
  },
];

const ExpenseApp = () => {
  const [updateExpenseList, setUpdateExpenseList] = useState(dummyExpenseList);
  const [filter, setFilter] = useState("Show All");
  const handleFilterYear = (filterYear) => {
    setFilter(filterYear);
  };

  const handleUpdateExpenseList = (expenseList) => {
    setUpdateExpenseList(expenseList);
  };

  const displayByFilter = updateExpenseList.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  return (
    <div className="expenseApp">
      <header className="header">
        <h1> Expense Tracker</h1>
      </header>

      <NewExpenseButton
        list={dummyExpenseList}
        updatedExpenselist={handleUpdateExpenseList}
      />
      <Card>
        <Chart
          expenses={displayByFilter}
          expenseListData={updateExpenseList}
          filterStateData={filter}
        />
      </Card>
      <Card className="expense-section">
        <ExpenseFilter selected={filter} onFilterYear={handleFilterYear} />
        <li>
          <ExpenseListLogic
            displayByFilterData={displayByFilter}
            filterStateData={filter}
            expenseListData={updateExpenseList}
          />
        </li>
      </Card>
    </div>
  );
};

export default ExpenseApp;
