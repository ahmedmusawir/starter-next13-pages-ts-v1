import { ReactNode, useContext } from "react";
import { Footer, Footerbar, Main, Navbar } from "./layouts";
import { ThemeContext } from "@/contexts/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="flex flex-col min-h-screen" data-theme={theme}>
        <Navbar className="bg-base-300" />
        <Main className="flex flex-col">
          {children
            ? children
            : "This is a Layout container. Must have children"}
        </Main>
        <Footer className="navbar bg-neutral text-neutral-content">
          <Footerbar />
        </Footer>
      </div>
    </>
  );
}

export default Layout;
