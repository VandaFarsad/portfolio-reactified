import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitcher = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const [isDark, setIsDark] = useState(isDarkMode ? true : false);

  const toggleDarkMode = (checked: boolean) => {
    setIsDark(checked);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    console.log("Theme is now dark: ", !isDarkMode);
  };

  return (
    <>
      <div>
        <DarkModeSwitch checked={isDark} onChange={toggleDarkMode} size={40} />
      </div>
    </>
  );
};

export default ThemeSwitcher;
