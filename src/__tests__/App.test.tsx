//create an input field
//create a "+" and a "=" button
//add two numbers together and output the result

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App /> tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should  render an input field", () => {
    const input = screen.getByTestId("user-input");
    expect(input).toBeInTheDocument();
  });

  it("should have a + and a = buttons", () => {
    const plusBtn = screen.getByText("+");
    const equalsBtn = screen.getByText("=");

    expect(plusBtn).toBeInTheDocument();
    expect(equalsBtn).toBeInTheDocument();
  });
});
