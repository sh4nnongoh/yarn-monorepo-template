import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios, { AxiosStatic } from "axios";
import App from "../App";
jest.mock("axios");
const userStory = `
Given no inital state,
When user navigates to the BTC Price view,
Then user sees the current BTC price
`;
describe(userStory, () => {
  const mockAxios = jest.createMockFromModule("axios") as AxiosStatic;
  beforeEach(() => {
    mockAxios.get = jest.fn().mockResolvedValue({
      data: {
        result: {
          price: 123
        }
      }
    });
    axios.create = jest.fn().mockReturnValue(mockAxios);
    render(
      <App />
    );
  });
  it("shows the current BTC price", async () => {
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: "http://localhost:8080/https://ftx.com/api/",
      timeout: 2500
    });
    userEvent.click(screen.getByText(/BTC/i));
    expect(screen.getByText(/-/i)).toBeInTheDocument();
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledWith("/markets/BTC/USD"));
    expect(screen.getByText(/123/i)).toBeInTheDocument();
  });
});
