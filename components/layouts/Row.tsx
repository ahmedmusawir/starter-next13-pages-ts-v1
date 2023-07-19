import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function Row({ children, className }: Props) {
  return (
    <div className={`min-w-full p-5 ${className}`}>
      {children ? children : "This is a Row container. Must have children"}
    </div>
  );
}

export default Row;
