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
  };

  return (
    <Card className="formCard">
      <form className="expenseForm " onSubmit={handleAddNewExpense}>
        <div className="formStyle">
          {" "}
          <input
            type="text"
            placeholder="Enter Expense"
            className="expenseFormInputStyle "
            onChange={HandleNewExpenseItem}
          />
          <input
            type="number"
            placeholder="Enter Amount"
            className="expenseFormInputStyle "
            onChange={HandleNewExpenseAmount}
          />
        </div>
        <div className="formStyle">
          <input
            type="date"
            className="expenseFormInputStyle "
            onChange={HandleNewExpenseDate}
          />
          <button type="submit" className="expenseFormInputStyle submitButton">
            Submit
          </button>{" "}
        </div>
      </form>
    </Card>
  );
};

export default ExpenseFrom;
