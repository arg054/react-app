import React from "react";

interface ExpenseListProps {
  expenses: {
    id: number;
    description: string;
    cost: number;
    category: string;
  }[];
  onClick: (id: number) => void;
}

/**
 * Renders a list of expenses with the ability to filter by category and delete individual expenses.
 *
 * @param expenses - An array of expense objects.
 * @param onClick - A callback function triggered when a delete button is clicked.
 */
const ExpenseList = ({ expenses, onClick }: ExpenseListProps) => {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          {Array.from(new Set(expenses.map((expense) => expense.category))).map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>

      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Cost</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>${expense.cost}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  onClick={() => onClick(expense.id)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <td>
            Total: $
            {filteredExpenses.reduce(
              (total, expense) => total + expense.cost,
              0
            )}
          </td>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
