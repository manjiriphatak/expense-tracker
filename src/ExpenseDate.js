import "./ExpenseSection.css";
const date = function ExpenseDate(props) {
  const month = props.data.date.toLocaleString("en-US", { month: "long" });
  const date = props.data.date.toLocaleString("en-US", { day: "2-digit" });

  const year = props.data.date.getFullYear();
  return (
    <div className="date">
      <div>
        {date}
        <span> {month}</span>
        <span> {year}</span>
      </div>
    </div>
  );
};
export default date;
