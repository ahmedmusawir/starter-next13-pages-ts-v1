import React from "react";

export const ThemeContext = React.createContext<{
  theme: string;
  setTheme: (theme: string) => void;
}>({
  theme: "light",
  setTheme: (theme) => console.warn("no theme provider"),
});
