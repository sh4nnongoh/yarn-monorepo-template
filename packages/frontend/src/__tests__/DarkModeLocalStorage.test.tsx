import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import DarkModeContextWrapper from "../contexts/DarkModeContext";
const userStory = `
Given an inital state of DarkMode enabled,
When user refreshes the web page,
Then user sees the theme remains
`;
describe(userStory, () => {
  const component = (
    <DarkModeContextWrapper>
      <App />
    </DarkModeContextWrapper>
  );
  render(component);
  it("gets the DrakMode state from localStorage", () => {
    expect(localStorage.getItem).toBeCalledTimes(1);
  });
});
