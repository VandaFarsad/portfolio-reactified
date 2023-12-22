import { createContext } from "react";
import { Theme } from "./Theme";

const ThemeContext = createContext<Theme>({
  theme: "light",
  setTheme: () => {},
});

export default ThemeContext;
