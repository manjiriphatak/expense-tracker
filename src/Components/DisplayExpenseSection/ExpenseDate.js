import "./ExpenseSection.css";
import Card from "../Card/Card";

const date = function ExpenseDate(props) {
  const month = props.data.date.toLocaleString("en-US", { month: "short" });
  const date = props.data.date.toLocaleString("en-US", { day: "2-digit" });

  const year = props.data.date.getFullYear();
  return (
    <Card className="date">
      <span className="dateNumber">{date}</span>
      <span> {month}</span>
      <span> {year}</span>
    </Card>
  );
};
export default date;
