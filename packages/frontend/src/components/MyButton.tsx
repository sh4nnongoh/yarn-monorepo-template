import React, { FC, ReactElement, useContext } from "react";
import { Button } from "react-bulma-components";
import { DarkModeContext } from "../contexts/DarkModeContext";
const MyButton: FC<{
  text: string
}> = ({ text }): ReactElement => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Button color={darkMode ? "light" : "brand"}>{text}</Button>
  );
};
export default MyButton;
