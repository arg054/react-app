import React, { MouseEvent, useState } from "react";

//interface for ListGroup component
interface Props {
  items: string[];
  heading: string;
}

//functional component ListGroup using props
function ListGroup({ items, heading }: Props) {
  //state for onClick highlight using useState hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //message using const
  const message = items.length === 0 && <p>No items to display</p>;

  //event handler for onClick
  const handleClick = (event: MouseEvent, item: string, index: number) => {
    console.log(event + " " + item + " clicked " + index);
  };

  //message using a function
  const getMessage = () => {
    return items.length === 0 && <p>No items to display</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
