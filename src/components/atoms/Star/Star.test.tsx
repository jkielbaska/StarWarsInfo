import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Star } from "./index";

describe("Star component", () => {
  it("should render the star icon", () => {
    const { getByTestId } = render(
      <Star selected={false} onClick={jest.fn()} />
    );
    expect(getByTestId("star-icon")).toBeInTheDocument();
  });

  it("should render the star icon with yellow color", () => {
    const { getByTestId } = render(
      <Star selected={true} onClick={jest.fn()} />
    );
    expect(getByTestId("star-icon")).toHaveClass("text-yellow");
  });

  it("should render the star icon with white color", () => {
    const { getByTestId } = render(
      <Star selected={false} onClick={jest.fn()} />
    );
    expect(getByTestId("star-icon")).toHaveClass("text-dwhite");
  });

  it("should call 'onClick' prop when clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Star selected={false} onClick={onClick} />);
    fireEvent.click(getByTestId("star-icon"));
    expect(onClick).toHaveBeenCalled();
  });
});
