import { useEffect, useState } from "react";

function ExpenseForm({ addExpense, editingExpense }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: new Date().toISOString().split("T")[0],
    note: "",
  });

  useEffect(() => {
    if (editingExpense) {
      setForm(editingExpense);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Title required");
      return;
    }

    if (form.amount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    addExpense({
      ...form,
      id: editingExpense?.id || Date.now(),
    });

    setForm({
      title: "",
      amount: "",
      category: "Food",
      date: new Date().toISOString().split("T")[0],
      note: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) =>
          setForm({ ...form, amount: e.target.value })
        }
      />

      <select
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>

      <input
        type="date"
        value={form.date}
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }
      />

      <textarea
        placeholder="Note"
        value={form.note}
        onChange={(e) =>
          setForm({ ...form, note: e.target.value })
        }
      />

      <button type="submit">
        {editingExpense ? "Update" : "Add"} Expense
      </button>
    </form>
  );
}

export default ExpenseForm;