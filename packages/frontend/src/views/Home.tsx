import React, { FC, ReactElement } from "react";
import { Container } from "react-bulma-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import MyButton from "../components/MyButton";
import "./Home.css";
const Home: FC = (): ReactElement => (
  <Container>
    <Logo className="home-logo" />
    <p>
      Edit
      {" "}
      <code>src/Home.tsx</code>
      {" "}
      and save to reload.
    </p>
    <a
      className="link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    <br />
    <MyButton text="My Bulma button" />
  </Container>
);
export default Home;
