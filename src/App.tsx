import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

//current lesson: State vs Props
function App() {
  //array of items
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const [showAlert, setShowAlert] = useState("hide");
  const [clicked, setClicked] = useState(true);

  const onSelectItem = (item: string, index: number) => {
    console.log(item + " " + index + " selected");
  };

  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log("Button clicked " + clicked);
    clicked ? setClicked(false) : setClicked(true);
    if (clicked) {
      setShowAlert("show");
    } else {
      setShowAlert("hide");
    }
  }

  //<ListGroup items={items} heading="Cities" onSelectItem={onSelectItem} />
  return (
    <div>
      <Alert showAlert={showAlert} onClick={onClick}>
        Alert
      </Alert>
      <Button onClick={onClick}>Alert button</Button>
    </div>
  );
}

export default App;
