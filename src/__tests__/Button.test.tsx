import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("<Button /> tests", () => {
  it("should render a button with a specified symbol", () => {
    render(<Button symbol="+" />);
    const plusBtn = screen.getByText("+");
    expect(plusBtn).toBeInTheDocument();
  });
});
