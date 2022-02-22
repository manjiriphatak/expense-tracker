import React, { useState } from "react";
import "./App.css";
import ExpenseSection from "./ExpenseSection";
import Card from "./Card";
import ExpenseForm from "./ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";

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
  const [expenseList, setExpenseList] = useState(dummyExpenseList);
  const [filter, setFilter] = useState("Show All");
  const handleFilterYear = (filterYear) => {
    setFilter(filterYear);
  };

  const handleExpenseList = (newExpense) => {
    setExpenseList((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  };

  const displayByFilter = expenseList.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  let expenseContent = <p>No expenses incured</p>;
  if (displayByFilter.length > 0) {
    expenseContent = displayByFilter.map((expense) => {
      return <ExpenseSection key={expense.id} data={expense} />;
    });
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to your Expense Tracker</h1>
      </header>
      <Card className="form">
        <ExpenseForm data={handleExpenseList} />
      </Card>
      <ExpenseFilter selected={filter} onFilterYear={handleFilterYear} />
      <Card className="expense-section">
        {filter === "Show All"
          ? expenseList.map((expense) => {
              return <ExpenseSection key={expense.id} data={expense} />;
            })
          : expenseContent}
      </Card>
    </div>
  );
}

export default App;
