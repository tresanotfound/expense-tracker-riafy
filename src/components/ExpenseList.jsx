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

          <p><strong>Amount:</strong> ₹ {expense.amount}</p>

          <p><strong>Category:</strong> {expense.category}</p>

          <p><strong>Date:</strong> {expense.date}</p>

          <p><strong>Note:</strong> {expense.note}</p>

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