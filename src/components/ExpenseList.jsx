function ExpenseList({
  expenses,
  deleteExpense,
  setEditingExpense,
}) {
  if (expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <div>
      {expenses.map((expense) => (
        <div className="card" key={expense.id}>
          <h3>{expense.title}</h3>

          <p>₹ {expense.amount}</p>

          <p>{expense.category}</p>

          <p>{expense.date}</p>

          <p>{expense.note}</p>

          <button
            onClick={() => setEditingExpense(expense)}
          >
            Edit
          </button>

          <button
            onClick={() => deleteExpense(expense.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;