import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./App.css";

const NewExpenseButton = (props) => {
  const [expenseList, setExpenseList] = useState(props.list);
  const [displayForm, setDisplayForm] = useState(false);

  const handleExpenseList = (newExpense) => {
    setExpenseList((prevExpense) => {
      console.log([newExpense, ...prevExpense]);
      return [newExpense, ...prevExpense];
    });
    props.updatedExpenselist(expenseList);
  };

  const handleNewExpenseButtonClick = () => {
    setDisplayForm(true);
  };

  return !displayForm ? (
    <button onClick={handleNewExpenseButtonClick} className="newExpenseButton">
      Add Expense
    </button>
  ) : (
    <ExpenseForm data={handleExpenseList} />
  );
};
export default NewExpenseButton;
