import React, { useState } from "react";
import "./ExpenseForm.css";
import Card from "./Card";

const ExpenseFrom = () => {
  const [expenseItem, setExpenseItem] = useState("");
  const [expenseItemAmount, setExpenseItemAmount] = useState("");
  const [expenseItemDate, setExpenseItemDate] = useState("");

  const HandleNewExpenseItem = (event) => {
    setExpenseItem(event.target.value);
  };
  const HandleNewExpenseAmount = (event) => {
    setExpenseItemAmount(event.target.value);
  };
  const HandleNewExpenseDate = (event) => {
    setExpenseItemDate(event.target.value);
  };

  const handleAddNewExpense = (event) => {
    event.preventDefault();
    const NewExpense = {
      Title: expenseItem,
      Amount: expenseItemAmount,
      date: new Date(expenseItemDate),
    };
    console.log(NewExpense);
    setExpenseItem("");
    setExpenseItemAmount("");
    setExpenseItemDate("");
  };

  return (
    <Card className="formCard">
      <form className="expenseForm " onSubmit={handleAddNewExpense}>
        <div className="formStyle">
          {" "}
          <input
            type="text"
            value={expenseItem}
            placeholder="Enter Expense"
            className="expenseFormInputStyle "
            onChange={HandleNewExpenseItem}
          />
          <input
            type="number"
            placeholder="Enter Amount"
            value={expenseItemAmount}
            className="expenseFormInputStyle "
            onChange={HandleNewExpenseAmount}
          />
        </div>
        <div className="formStyle">
          <input
            type="date"
            className="expenseFormInputStyle "
            value={expenseItemDate}
            onChange={HandleNewExpenseDate}
          />
          <button type="submit" className="expenseFormInputStyle submitButton">
            Add Expense
          </button>{" "}
        </div>
      </form>
    </Card>
  );
};

export default ExpenseFrom;
