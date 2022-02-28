import React, { useState } from "react";
import "./ExpenseForm.css";
import Card from "./Card";

const ExpenseFrom = (props) => {
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
    console.log(event.target.value);
  };

  const handleAddNewExpense = (event) => {
    event.preventDefault();

    const NewExpense = {
      id: Math.random(),
      item: expenseItem,
      amount: expenseItemAmount,
      date: new Date(expenseItemDate + "T00:00:00"),
    };
    console.log(NewExpense);
    props.data(NewExpense);
    setExpenseItem("");
    setExpenseItemAmount("");
    setExpenseItemDate("");
  };

  return (
    <Card>
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
            <button
              type="submit"
              className="expenseFormInputStyle submitButton"
            >
              Add Expense
            </button>{" "}
          </div>
          <button
            type="button"
            className="expenseFormInputStyle cancelButton"
            onClick={props.form}
          >
            Cancel
          </button>{" "}
        </form>
      </Card>
    </Card>
  );
};

export default ExpenseFrom;
