function ListGroup() {
  let items = ["new york", "los angeles", "chicago", "houston", "phoenix"];

  //message using const
  const message = items.length === 0 && <p>No items to display</p>;

  //message using a function
  const getMessage = () => {
    return items.length === 0 && <p>No items to display</p>;
  };

  return (
    <>
      <h1>List Group</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item + " clicked " + index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
