import "./ExpenseSection.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";

const expense = function ExpenseSection(props) {
  const titleCase = props.data.item
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  return (
    <Card className="expense-item-section">
      <ExpenseDate data={props.data} />
      <div className="expense-item-description">
        <h2 className="item">{titleCase}</h2>
        <Card className="amount">$ {props.data.amount}</Card>
      </div>
    </Card>
  );
};

export default expense;
