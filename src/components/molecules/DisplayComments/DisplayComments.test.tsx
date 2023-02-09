import { render, screen, act } from "@testing-library/react";
import { DisplayComments } from "./index";
import { useComments } from "../../../hooks/useComments";

jest.mock("../../../hooks/useComments", () => {
  return {
    useComments: jest.fn().mockReturnValue({
      comments: [
        {
          name: "John Mock",
          text: "Fajny film",
          rating: "5",
        },
        {
          name: "Jane Mock",
          text: "Dobry film",
          rating: "4",
        },
      ],
    }),
  };
});

describe("DisplayComments", () => {
  it("renders the comments correctly", () => {
    render(<DisplayComments filmId={1} />);

    expect(useComments).toHaveBeenCalledTimes(1);

    const commentsbox = screen.getByRole("commentsbox");
    expect(commentsbox).toBeInTheDocument();

    const comment = screen.getAllByRole("comment");
    expect(comment).toHaveLength(2);

    const firstComment = comment[0];
    expect(firstComment).toHaveTextContent(
      "name: John Mockstar rating: 5Fajny film"
    );

    const secondComment = comment[1];
    expect(secondComment).toHaveTextContent(
      "name: Jane Mockstar rating: 4Dobry film"
    );
  });
});
