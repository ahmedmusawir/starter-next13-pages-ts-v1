import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

function Footer({ children, className }: Props) {
  return (
    <footer className={`min-w-full ${className}`}>
      {children ? children : "This is a Footer container. Must have children"}
    </footer>
  );
}

export default Footer;
