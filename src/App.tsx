import ListGroup from "./components/ListGroup";

function App() {
  //array of items
  let items = ["new york", "los angeles", "chicago", "houston", "phoenix"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
