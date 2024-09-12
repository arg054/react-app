import userService, { User } from "./components/services/userService";
import apiClient, { CanceledError } from "./components/services/apiClient";
import useUsers from "./components/hooks/useUsers";

export const categiries = ["Groceries", "Entertainment", "Utilities"];

function App() {
  const { error, users, isLoading, setUsers, setError } = useUsers();

  //delete function updating users, using an optimistic update
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err: Error) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: users.length + 1, name: "New User" };
    setUsers([newUser, ...users]);

    userService.add(newUser).catch((err: Error) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err: Error) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

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
    </div>
  );
}

export default App;
