import "./ExpenseSection.css";
import Card from "./Card";

const date = function ExpenseDate(props) {
  const month = props.data.date.toLocaleString("en-US", { month: "long" });
  const date = props.data.date.toLocaleString("en-US", { day: "2-digit" });

  const year = props.data.date.getFullYear();
  return (
    <Card className="date">
      {date}
      <span> {month}</span>
      <span> {year}</span>
    </Card>
  );
};
export default date;
