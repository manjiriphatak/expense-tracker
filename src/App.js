import "./App.css";
import ExpenseSection from "./ExpenseSection";
import Card from "./Card";
import ExpenseForm from "./ExpenseForm";

function App() {
  const expenses = [
    {
      id: 1,
      item: "Car Insurance",
      amount: 265,
      date: new Date(2014, 7, 24),
    },
    {
      id: 2,
      item: "Home Insurance",
      amount: 65,
      date: new Date(2019, 5, 18),
    },
    {
      id: 3,
      item: "Fuel",
      amount: 1265,
      date: new Date(2013, 12, 20),
    },
    {
      id: 4,
      item: "Grocery",
      amount: 4000,
      date: new Date(2000, 10, 4),
    },
  ];
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to your Expense Tracker</h1>
      </header>
      <Card className="form">
        <ExpenseForm />
      </Card>
      <Card className="expense-section">
        <ExpenseSection data={expenses[3]} />
        <ExpenseSection data={expenses[0]} />
        <ExpenseSection data={expenses[1]} />
        <ExpenseSection data={expenses[2]} />
      </Card>
    </div>
  );
}

export default App;
