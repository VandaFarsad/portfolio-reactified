import { useContext, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ThemeContext from "../theme/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isLight, setIsLight] = useState(theme === "light" ? true : false);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsLight(checked);
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log("Theme is now: ", theme);
  };

  return (
    <>
      <div>
        <DarkModeSwitch checked={isLight} onChange={toggleDarkMode} size={40} moonColor="black" sunColor="white" />
      </div>
    </>
  );
};

export default ThemeSwitcher;
