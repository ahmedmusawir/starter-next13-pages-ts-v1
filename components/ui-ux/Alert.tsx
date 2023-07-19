import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-success shadow-lg mt-5">
      <h1 className="text-red-500">{children}</h1>
      <button
        type="button"
        className="border-2 border-white py-1 px-3 rounded-full text-white"
        aria-label="Close"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

export default Alert;
