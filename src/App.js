import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import NewExpenseButton from "./NewExpenseButton";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseListLogic from "./ExpenseListLogic";

const dummyExpenseList = [
  {
    id: 1,
    item: "Car Insurance",
    amount: 265,
    date: new Date("2014, 7, 29"),
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
    date: new Date("2013, 12, 20"),
  },
  {
    id: 4,
    item: "Grocery",
    amount: 4000,
    date: new Date("2000, 10, 4"),
  },
];

function App() {
  const [updateExpenseList, setUpdateExpenseList] = useState(dummyExpenseList);
  const [filter, setFilter] = useState("Show All");
  const handleFilterYear = (filterYear) => {
    setFilter(filterYear);
  };

  // const handleExpenseList = (newExpense) => {
  //   setExpenseList((prevExpense) => {
  //     return [newExpense, ...prevExpense];
  //   });
  // };
  const handleUpdateExpenseList = (expenseList) => {
    console.log(expenseList);
    setUpdateExpenseList(expenseList);
  };

  const displayByFilter = updateExpenseList.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to your Expense Tracker</h1>
      </header>

      <NewExpenseButton
        list={dummyExpenseList}
        updatedExpenselist={handleUpdateExpenseList}
      />

      {/* <Card className="form">
        <ExpenseForm data={handleExpenseList} />
      </Card> */}
      <ExpenseFilter selected={filter} onFilterYear={handleFilterYear} />
      <li>
        <Card className="expense-section">
          <ExpenseListLogic
            displayByFilterData={displayByFilter}
            filterStateData={filter}
            expenseListData={updateExpenseList}
          />
        </Card>
      </li>
    </div>
  );
}

export default App;
