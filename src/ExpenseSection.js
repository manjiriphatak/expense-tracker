import "./ExpenseSection.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const expense = function ExpenseSection(props) {
  return (
    <Card className="expense-item-section">
      <ExpenseDate data={props.data} />
      <div className="expense-item-description">
        <h2 className="item">{props.data.item.toUpperCase()}</h2>
        <Card className="amount">$ {props.data.amount}</Card>
      </div>
    </Card>
  );
};

export default expense;
