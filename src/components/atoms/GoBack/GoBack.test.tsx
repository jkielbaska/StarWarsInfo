import { GoBack } from "./index";
import { render, fireEvent, screen } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => {
  return {
    useRouter: jest.fn().mockReturnValue({ back: jest.fn() }),
  };
});

describe("GoBack component", () => {
  test("GoBack component should call router.back()", () => {
    render(<GoBack />);
    const button = screen.getByText("go back");
    fireEvent.click(button);

    expect(useRouter().back).toHaveBeenCalled();
  });
});
