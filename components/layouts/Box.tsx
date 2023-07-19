import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function Box({ children, className }: Props) {
  return (
    <div className={`${className}`}>
      {children ? children : "This is a Box container. Must have children"}
    </div>
  );
}

export default Box;
