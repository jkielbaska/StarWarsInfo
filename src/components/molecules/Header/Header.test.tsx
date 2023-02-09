import { render, screen } from "@testing-library/react";
import { Header } from "./index";
import { useRouter } from "next/router";
import { Breadcrumb } from "../Breadcrumbs";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    pathname: "/mock-path",
  }),
}));

jest.mock("../Breadcrumbs", () => ({
  Breadcrumb: () => <div>Breadcrumb</div>,
}));

describe("Header", () => {
  it("renders the component correctly", () => {
    render(<Header />);
    const link = screen.getByText("StarWarsInfo");
    const goBack = screen.getByRole("goBackButton");
    expect(link).toBeInTheDocument();
    expect(goBack).toBeInTheDocument();
  });

  it("does not render the Go back button on the homepage", () => {
    (useRouter as jest.Mocked<any>).mockReturnValue({ pathname: "/" });
    render(<Header />);
    const goBack = screen.getByRole("goBackButton");
    expect(goBack).toHaveTextContent("");
  });
});
