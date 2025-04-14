function ExpenseTable({ expenses, onDelete, onSort }) {
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th onClick={() => onSort && onSort('name')}>
              Name {onSort && <span>{'↕'}</span>}
            </th>
            <th onClick={() => onSort && onSort('description')}>
              Description {onSort && <span>{'↕'}</span>}
            </th>
            <th>Amount</th>
            <th onClick={() => onSort && onSort('category')}>
              Category {onSort && <span>{'↕'}</span>}
            </th>
            <th>Date</th>
            {onDelete && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan={onDelete ? 6 : 5}>No expenses found</td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
                {onDelete && (
                  <td>
                    <button
                      onClick={() => onDelete(expense.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;