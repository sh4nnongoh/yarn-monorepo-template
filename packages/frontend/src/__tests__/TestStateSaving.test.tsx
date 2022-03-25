import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
const userStory = `
Given no inital state,
When  user navigates to the Test State page,
      changes the default value of the input box,
      navigates back to the Home page,
      navigates back to the Test State page,
Then user sees a default value of New State in the input box
`;
describe(userStory, () => {
  render(<App />);
  userEvent.click(screen.getByText(/Test State/i));
  userEvent.clear(screen.getByDisplayValue(/Default State/i));
  userEvent.type(screen.getByDisplayValue(""), "New State");
  userEvent.click(screen.getByText(/Home/i));
  userEvent.click(screen.getByText(/Test State/i));
  it("shows the updated state", () => {
    expect(screen.getByDisplayValue(/New State/i)).toBeInTheDocument();
  });
});
