import React, { useState } from "react";
import "./ExpenseForm.css";
import Card from "../Card/Card";

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
    // console.log(event.target.value);
  };

  const handleAddNewExpense = (event) => {
    event.preventDefault();

    const NewExpense = {
      id: Math.random(),
      item: expenseItem,
      amount: +expenseItemAmount,
      date: new Date(expenseItemDate + "T00:00:00"),
    };
    // console.log(NewExpense);
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
            <input
              type="date"
              className="expenseFormInputStyle datePicker"
              value={expenseItemDate}
              onChange={HandleNewExpenseDate}
            />{" "}
          </div>
          <div className="buttonStyle">
            <button
              type="submit"
              className="expenseFormInputStyle  buttonHover"
            >
              Add Expense
            </button>{" "}
            <button
              type="button"
              className="expenseFormInputStyle buttonHover"
              onClick={props.form}
            >
              Cancel
            </button>{" "}
          </div>
        </form>
      </Card>
    </Card>
  );
};

export default ExpenseFrom;
