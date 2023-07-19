import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

function Header({ children, className }: Props) {
  return (
    <header className={`min-w-full border-solid border-2 ${className}`}>
      {children ? children : "This is a Header container. Must have children"}
    </header>
  );
}

export default Header;
