function Summary({ expenses }) {
  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const categoryTotals = {};

  expenses.forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) +
      Number(expense.amount);
  });

  return (
    <div className="summary">
      <h2>Monthly Summary</h2>

      <h3>Total: ₹ {total}</h3>

      {Object.entries(categoryTotals).map(
        ([category, amount]) => (
          <p key={category}>
            {category}: ₹ {amount}
          </p>
        )
      )}
    </div>
  );
}

export default Summary;