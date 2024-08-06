import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  //array of items
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const onSelectItem = (item: string, index: number) => {
    console.log(item + " " + index + " selected");
  };

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={onSelectItem} />
      <Alert />
      <Button text="Button" />
    </div>
  );
}

export default App;
