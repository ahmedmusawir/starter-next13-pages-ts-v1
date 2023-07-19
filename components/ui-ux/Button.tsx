import { MouseEvent } from "react";

interface Props {
  children: string;
  color?:
    | "btn-primary"
    | "btn-secondary"
    | "btn-error"
    | "btn-warning"
    | "btn-success";
  onClick: (e: MouseEvent) => void;
}

function Button({ children, color, onClick }: Props) {
  //   const handleClick = (e: MouseEvent) => console.log("Clicked:", e.target);

  return (
    // <div className={"mx-1 btn btn-primary"} onClick={onClick}>
    <div className={"mx-1 btn " + color} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
