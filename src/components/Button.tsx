import React from "react";
interface Props {
  text: string;
}

function onClick(event: React.MouseEvent<HTMLButtonElement>) {
  console.log("Button clicked");
}

const Button = ({ text }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
