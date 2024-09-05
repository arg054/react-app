import React from "react";
import { categiries } from "../../../App";

// Define the props for the ExpenseForm component
interface ExpenseFormProps {
  onExpenseFormSubmit: (expense: {
    id: number;
    description: string;
    cost: number;
    category: string;
  }) => void;
}

interface FormErrors {
  description: string;
  cost: string;
  category: string;
}

const ExpenseForm = ({ onExpenseFormSubmit }: ExpenseFormProps) => {
  const descRef = React.useRef<HTMLInputElement | null>(null);
  const costRef = React.useRef<HTMLInputElement | null>(null);
  const catRef = React.useRef<HTMLSelectElement | null>(null);
  const [errors, setErrors] = React.useState<FormErrors>({
    description: "",
    cost: "",
    category: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const description = descRef.current?.value || "";
    const cost = Number(costRef.current?.value) || 0;
    const category = catRef.current?.value || "";

    const newErrors: FormErrors = {
      description: "",
      cost: "",
      category: "",
    };

    if (description.trim() === "") {
      newErrors.description = "Description is required";
    }

    if (cost <= 0) {
      newErrors.cost = "Amount must be greater than 0";
    }

    if (category === "") {
      newErrors.category = "Category is required";
    }

    if (newErrors.description || newErrors.cost || newErrors.category) {
      setErrors(newErrors);
      return;
    }

    onExpenseFormSubmit({
      id: Math.floor(Math.random() * 1000),
      description,
      cost: cost,
      category,
    });

    descRef.current!.value = "";
    costRef.current!.value = "";
    catRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          ref={descRef}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <div className="text-danger">{errors.description}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="cost" className="form-label">
          Cost
        </label>
        <input ref={costRef} id="cost" type="number" className="form-control" />
        {errors.cost && <div className="text-danger">{errors.cost}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select ref={catRef} id="category" className="form-select">
          <option value="">Select a category</option>
          {categiries.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <div className="text-danger">{errors.category}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
