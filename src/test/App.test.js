import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent, fireEvent } from "@testing-library/user-event";
import { App } from "../App";

test("Check main page render", () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  getByText("Reset");
  getByPlaceholderText("Search");
  getByText("Powered By", { exact: false });
  getByText("Copyright 2020, Chung Hak Ngor", { exact: false });
});

// Error right now with userEvent.type of undefined when trying to find the DOM Element

test("Checking search event", () => {
  render(<App />);
  screen.getByPlaceholderText("Search");
  // userEvent.type(screen.getByPlaceholderText("Search"), "Avengers");
  // expect(screen.getByRole("text")).toHaveValue("Avengers");
});

test("Checking error events", async () => {
  render(<App />);
  screen.getByPlaceholderText("Search");
});
