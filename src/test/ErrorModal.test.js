import React from "react";
import { render } from "@testing-library/react";

import { ErrorModal } from "../ErrorModal";

test("Check for error message render", () => {
  const { getByText } = render(<ErrorModal errMsg={"Error"} />);
  getByText("Error");
});

test("Check for error message render #2", () => {
  const { getByText } = render(<ErrorModal errMsg={"Another Error Message"} />);
  getByText("Another Error Message");
});
