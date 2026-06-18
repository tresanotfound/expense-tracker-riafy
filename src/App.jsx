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
      setExpenses((prev) => [expense, ...prev]);
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const filteredExpenses = expenses
    .filter((expense) => {
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
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalExpenses = filteredExpenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>Expense Tracker</h2>

        <div className="sidebar-menu">
  <button className="active-menu">
    Dashboard
  </button>

  <button
    onClick={() =>
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      })
    }
  >
    Add Expense
  </button>

  <button
    onClick={() =>
      alert("Reports feature coming soon 🚀")
    }
  >
    Reports
  </button>

  <button
    onClick={() =>
      alert("Settings feature coming soon ⚙️")
    }
  >
    Settings
  </button>
</div>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <div>
            <h1>Hello, Buddy 👋</h1>
            <span>Track your daily expenses smartly</span>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Expenses</h3>
            <p>₹ {totalExpenses}</p>
          </div>

          <div className="stat-card">
            <h3>Total Transactions</h3>
            <p>{filteredExpenses.length}</p>
          </div>

          <div className="stat-card">
            <h3>Categories</h3>
            <p>
              {
                [...new Set(filteredExpenses.map(e => e.category))]
                  .length
              }
            </p>
          </div>
        </div>

        <div className="dashboard-grid">
          <div>
            <ExpenseForm
              addExpense={addExpense}
              editingExpense={editingExpense}
            />
          </div>

          <div>
            <FilterBar
              filters={filters}
              setFilters={setFilters}
            />

            <Summary expenses={filteredExpenses} />

            <ExpenseList
              expenses={filteredExpenses}
              deleteExpense={deleteExpense}
              setEditingExpense={setEditingExpense}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
