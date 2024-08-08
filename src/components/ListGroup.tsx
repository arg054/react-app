import React, { MouseEvent, useState } from "react";
import styled from "styled-components";

//styled components, css in js
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background-color: ${(props) => (props.active ? "#f1f1f1" : "white")};
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

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
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              if (onSelectItem) {
                onSelectItem(item, index);
              }
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
