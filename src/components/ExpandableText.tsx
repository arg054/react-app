import React, { ReactNode, useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChars?: number;
} //
const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
  //state hook to toggle showAll
  const [showAll, setShowAll] = useState(false);

  //function to toggle button
  const toggleButton = () => {
    return (
      <button
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        {showAll ? "Show less" : "Show more"}
      </button>
    );
  };

  //function to toggle text
  const toggleShowAll = () => {
    if (showAll)
      return (
        <div>
          {children}...{toggleButton()}
        </div>
      );
    else {
      return (
        <div>
          {children.substring(0, maxChars) + "..."}
          {children}...{toggleButton()}
        </div>
      );
    }
  };

  //return the children if the length is less than or equal to maxChars
  return <div>{children.length <= maxChars ? children : toggleShowAll()}</div>;
};

export default ExpandableText;
