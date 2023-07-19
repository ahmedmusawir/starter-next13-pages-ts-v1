import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

function Main({ children, className }: Props) {
  return (
    <main className={`min-w-full flex flex-grow my-10 ${className}`}>
      {children}
    </main>
  );
}

export default Main;
