import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

//current lesson: Vanilla CSS
function App() {
  //array of items
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const [showAlert, setShowAlert] = useState("hide");

  const onSelectItem = (item: string, index: number) => {
    console.log(item + " " + index + " selected");
  };

  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    setShowAlert("show");
  }

  function onClose(event: React.MouseEvent<HTMLButtonElement>) {
    setShowAlert("hide");
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={onSelectItem} />
      {showAlert && (
        <Alert showAlert={showAlert} onClose={onClose}>
          Alert
        </Alert>
      )}
      <Button onClick={onClick}>Alert button</Button>
    </div>
  );
}

export default App;
