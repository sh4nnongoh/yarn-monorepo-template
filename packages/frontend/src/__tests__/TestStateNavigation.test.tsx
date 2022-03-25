import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
const userStory = `
Given no inital state,
When user navigates to the Test State page,
Then user sees the default value of Default State in the input box
`;
describe(userStory, () => {
  render(<App />);
  userEvent.click(screen.getByText(/Test State/i));
  it("shows 'Default State' in the input box", () => {
    const element = screen.getByDisplayValue(/Default State/i);
    expect(element).toBeInTheDocument();
  });
});
