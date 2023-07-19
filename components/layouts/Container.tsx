import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
  FULL: boolean;
}

function Container({ children, className, FULL }: Props) {
  return (
    <>
      {FULL && (
        <section className={`min-h-full min-w-full ${className}`}>
          {children
            ? children
            : "This is a Container container. Must have children"}
        </section>
      )}
      {!FULL && (
        <section className={`min-h-full w-11/12 xl:w-4/5 mx-auto ${className}`}>
          {children
            ? children
            : "This is a Container container. Must have children"}
        </section>
      )}
      {/* LG: 1024+ IS SET TO 91% WIDTH (w-11/12) */}
      {/* XL: 1280+ IS SET TO 80% WIDTH (w-4/5) */}
    </>
  );
}

export default Container;
