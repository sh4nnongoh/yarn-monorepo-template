import React, {
  FC, ReactElement, useState, useContext
} from "react";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import {
  Container
} from "react-bulma-components";
import Home from "./views/Home";
import TestState from "./views/TestState";
import TestURLState from "./views/TestURLState";
import NavBar from "./components/NavBar";
import "./App.autogen.css";
import BTC from "./views/BTC";
import { DarkModeContext } from "./contexts/DarkModeContext";
import AxiosContextWrapper from "./contexts/AxiosContext";
const App: FC = (): ReactElement => {
  const [value, setValue] = useState("Default State");
  const { darkMode } = useContext(DarkModeContext);
  return (
    <AxiosContextWrapper>
      <Router>
        <div className={`
            ${darkMode ? "has-background-dark" : "has-background-light"} 
            ${darkMode ? "has-text-light" : "has-text-dark"}`}
        >
          <NavBar />
          <Container className="app">
            <Switch>
              <Route path="/BTC">
                <BTC />
              </Route>
              <Route path="/test-state">
                <TestState value={value} setValue={setValue} />
              </Route>
              <Route path="/test-url-state/:state?/">
                <TestURLState />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </AxiosContextWrapper>
  );
};
export default App;
