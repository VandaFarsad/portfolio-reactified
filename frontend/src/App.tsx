import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Theme } from "./theme/Theme";
import ThemeContext from "./theme/ThemeContext";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const initalTheme: Theme = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={initalTheme}>
      <div>
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
