import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
const userStory = `
Given no inital state,
When user navigates to the Test URL State page with a specified state in the URL,
Then user sees the specified state in the input box
`;
describe(userStory, () => {
  window.history.pushState({}, "Test page", "/test-url-state/new%20state");
  render(<App />);
  it("shows the updated state", () => {
    expect(screen.getByDisplayValue(/new state/i)).toBeInTheDocument();
  });
});
