import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App /> tests", () => {
  it("should render hello react", () => {
    render(<App />);
    const helloElement = screen.getByText(/hello react/i);
    expect(helloElement).toBeInTheDocument();
  });
});
