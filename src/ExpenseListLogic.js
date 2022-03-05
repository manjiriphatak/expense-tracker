import React from "react";
import ExpenseSection from "./ExpenseSection";

const ExpenseListLogic = (props) => {
  let expenseContent = <p className="noExpenseMessage">No expenses incured</p>;
  if (props.displayByFilterData.length > 0) {
    expenseContent = props.displayByFilterData.map((expense) => {
      return <ExpenseSection key={expense.id} data={expense} />;
    });
  }
  return (
    <ul>
      {props.filterStateData === "Show All"
        ? props.expenseListData.map((expense) => {
            return <ExpenseSection key={expense.id} data={expense} />;
          })
        : expenseContent}
    </ul>
  );
};

export default ExpenseListLogic;
