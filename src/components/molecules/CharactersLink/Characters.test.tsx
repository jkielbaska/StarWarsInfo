import { render, screen } from "@testing-library/react";
import { CharactersLink } from "./index";

describe("CharactersLink component", () => {
  const characters = [
    { name: "Luke Skywalker", url: "https://swapi.dev/api/people/1/" },
  ];
  it("should render the character links", () => {
    render(<CharactersLink characters={characters} />);

    characters.forEach((character) => {
      const characterLink = screen.getByText(character.name);
      expect(characterLink).toBeInTheDocument();
    });
  });
});
