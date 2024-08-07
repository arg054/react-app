import React, { MouseEvent, useState } from "react";

//arguments for ListGroup component
interface ListGroupProps {
  items: string[];
  heading: string;
  //optional(?) function prop
  onSelectItem?: (item: string, index: number) => void;
}

//functional component ListGroup using props
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //state for onClick highlight using useState hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //message using const and a prop
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
            onClick={() => {
              setSelectedIndex(index);
              if (onSelectItem) {
                onSelectItem(item, index);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
