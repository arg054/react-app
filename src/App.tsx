import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import produce from "immer";

//current lesson:  sharing state between components
function App() {
  //array of items
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const [showAlert, setShowAlert] = useState("hide");

  const onSelectItem = (item: string, index: number) => {
    console.log(item + " " + index + " selected");
  };

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
    <div>
      {/*
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
