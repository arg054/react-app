import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  //color prop is optional and can only be one of the following values
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

//color prop is optional and defaults to primary
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
