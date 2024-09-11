import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/expandable-text/components/ExpandableText";
import Form from "./components/Form";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ProductList from "./components/ProductList";
import { literal } from "zod";
import apiClient, { CanceledError } from "./components/services/apiClient";
import userService, { User } from "./components/services/userService";
import useUsers from "./components/hooks/useUsers";

export const categiries = ["Groceries", "Entertainment", "Utilities"];

function App() {
  const { error, users, isLoading, setUsers, setError } = useUsers();

  //delete function updating users, using an optimistic update
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: users.length + 1, name: "New User" };
    setUsers([newUser, ...users]);

    userService.add(newUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const [category, setCategory] = useState("");

  const [expenses, setExpenses] = useState<
    { id: number; description: string; cost: number; category: string }[]
  >([]);

  const handleExpenseFormSubmit = (expense: {
    id: number;
    description: string;
    cost: number;
    category: string;
  }) => {
    setExpenses([...expenses, expense]);
  };

  const handleExpenseRemove = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Priduct 1", quantity: 1 },
      { id: 2, title: "Priduct 2", quantity: 1 },
    ],
  });

  const handleCartClick = () => {
    setCart((cart) => ({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  };

  const handlePizzaClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  const handleGameClick = () => {
    //setGame using spread operator
    setGame({ ...game, player: { ...game.player, name: "Jane" } });

    //setGame using produce
    produce((draft) => {
      draft.player.name = "Jane";
    });
  };

  //array of items
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const [showAlert, setShowAlert] = useState("hide");

  const onSelectItem = (item: string, index: number) => {
    console.log(item + " " + index + " selected");
  };

  const [cartItems, setCartItems] = useState(["Prduct 1", "Prduct 2"]);

  //array of objects
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  //function to change the state of the first bug
  const handleClick = () => {
    //setBugs using map
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    //setBugs using immer produce
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );

    console.log(bugs.map((bug) => bug.id === 1 && console.log(bug.fixed)));
  };

  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    setShowAlert("show");
  }

  function onClose(event: React.MouseEvent<HTMLButtonElement>) {
    setShowAlert("hide");
  }

  return (
    <div style={{ padding: "20px" }}>
      <>
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
        <button className="btn btn-primary mb-3" onClick={addUser}>
          Add
        </button>
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
      {/*
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
      <ExpenseForm onExpenseFormSubmit={handleExpenseFormSubmit} />
      <br />
      <ExpenseList expenses={expenses} onClick={handleExpenseRemove} />
      <ExpandableText>
        Lorem ipsum
      </ExpandableText>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <Like />
      <ListGroup items={items} heading="Cities" onSelectItem={onSelectItem} />
      {showAlert && (
        <Alert showAlert={showAlert} onClose={onClose}>
          Alert
        </Alert>
      )}
      <Button onClick={onClick}>Alert button</Button>
      */}
    </div>
  );
}

export default App;
