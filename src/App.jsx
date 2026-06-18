import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import FilterBar from "./components/FilterBar";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  const [filters, setFilters] = useState({
    category: "",
    title: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) {
      setExpenses(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    if (editingExpense) {
      setExpenses((prev) =>
        prev.map((e) =>
          e.id === editingExpense.id ? expense : e
        )
      );
      setEditingExpense(null);
    } else {
      setExpenses([expense, ...expenses]);
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory =
      !filters.category ||
      expense.category === filters.category;

    const matchesTitle =
      expense.title
        .toLowerCase()
        .includes(filters.title.toLowerCase());

    const matchesFrom =
      !filters.from || expense.date >= filters.from;

    const matchesTo =
      !filters.to || expense.date <= filters.to;

    return (
      matchesCategory &&
      matchesTitle &&
      matchesFrom &&
      matchesTo
    );
  });

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm
        addExpense={addExpense}
        editingExpense={editingExpense}
      />

      <FilterBar filters={filters} setFilters={setFilters} />

      <Summary expenses={filteredExpenses} />

      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
        setEditingExpense={setEditingExpense}
      />
    </div>
  );
}

export default App;
