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

const ExpenseList = ({ expenses, onClick }: ExpenseListProps) => {
  return (
    <>
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
          {expenses.map((expense) => (
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
            {expenses.reduce((total, expense) => total + expense.cost, 0)}
          </td>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
