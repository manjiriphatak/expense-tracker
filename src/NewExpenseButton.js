import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./App.css";

const NewExpenseButton = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const handleExpenseList = (newExpense) => {
    let addExpense = (prevExpense) => {
      return [newExpense, ...prevExpense];
    };
    props.updatedExpenselist(addExpense);
    setDisplayForm(false);
  };

  const DisplayFormToggle = () => {
    setDisplayForm(false);
  };

  const handleNewExpenseButtonClick = () => {
    setDisplayForm(true);
  };

  return !displayForm ? (
    <button onClick={handleNewExpenseButtonClick} className="newExpenseButton">
      Add Expense
    </button>
  ) : (
    <ExpenseForm data={handleExpenseList} form={DisplayFormToggle} />
  );
};
export default NewExpenseButton;
