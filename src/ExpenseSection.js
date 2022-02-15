import "./ExpenseSection.css";
import ExpenseDate from "./ExpenseDate";

const expense = function ExpenseSection(props) {
  return (
    <div className="expense-item-section">
      <ExpenseDate data={props.data} />
      <div className="item">{props.data.item}</div>
      <div className="amount">$ {props.data.amount}</div>
    </div>
  );
};

export default expense;
