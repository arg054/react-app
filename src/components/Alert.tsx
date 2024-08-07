import { ReactNode } from "react";

//props implementing children react node
interface AlertProps {
  children: ReactNode;
  showAlert: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Alert = ({ children, showAlert, onClose }: AlertProps) => {
  return (
    <div
      className={`alert alert-primary alert-dismissible fade ${showAlert}`}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
