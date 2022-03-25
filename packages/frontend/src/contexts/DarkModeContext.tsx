import React, {
  createContext, FC, ReactElement, useState
} from "react";
export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {
    // stub
  }
});
const DarkModeContextWrapper: FC = ({ children }): ReactElement => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("DarkMode") || "false"));
  const toggleDarkMode = () => {
    localStorage.setItem("DarkMode", JSON.stringify(!darkMode));
    return setDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
export default DarkModeContextWrapper;
