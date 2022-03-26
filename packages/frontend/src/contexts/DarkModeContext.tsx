import React, {
  createContext, FC, ReactElement, useCallback, useMemo, useState
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
  const callback = useCallback(toggleDarkMode, [toggleDarkMode]);
  const value = useMemo(() => ({ darkMode, toggleDarkMode: callback }), [darkMode, callback]);
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
export default DarkModeContextWrapper;
