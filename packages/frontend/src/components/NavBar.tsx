import React, {
  FunctionComponent, ReactElement, useContext, useState
} from "react";
import {
  Link
} from "react-router-dom";
import {
  Navbar, Button, Image
} from "react-bulma-components";
import DarkModeToggle from "../assets/darkmode.png";
import { DarkModeContext } from "../contexts/DarkModeContext";
const NavBar: FunctionComponent = (): ReactElement => {
  const [active, setActive] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <Navbar color={darkMode ? "primary" : "secondary"} active={active}>
      <Navbar.Brand>
        <Navbar.Item renderAs={Link} to="/">
          Home
        </Navbar.Item>
        <Navbar.Burger onClick={() => setActive(!active)} />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container align="left">
          <Navbar.Item renderAs={Link} to="/test-state" textColor={darkMode ? "secondary" : "primary"}>
            Test State
          </Navbar.Item>
          <Navbar.Item renderAs={Link} to="/test-url-state/" textColor={darkMode ? "secondary" : "primary"}>
            Test URL State
          </Navbar.Item>
          <Navbar.Item renderAs={Link} to="/BTC/" textColor={darkMode ? "secondary" : "primary"}>
            BTC
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align="right">
          <Navbar.Item renderAs={Button} onClick={toggleDarkMode} text>
            <Image src={DarkModeToggle} alt="DarkModeToggle" />
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
export default NavBar;
