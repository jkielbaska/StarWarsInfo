import Link from "next/link";
import { TCharacter } from "../../../types/tCharacterResponse";

export const CharactersLink = ({
  characters,
}: {
  characters: TCharacter[];
}) => {
  return (
    <div className="scrollbox">
      <ol>
        {characters.map((character: TCharacter) =>
          character.error ? (
            <li key={character.url}>
              <Link href={`/characters/${character?.url}`} prefetch={false}>
                <a className="hover: text-red">{character.name}</a>
              </Link>
            </li>
          ) : (
            <li key={character.url}>
              <Link
                href={`/characters/${character?.url?.split("/")[5]}`}
                prefetch={false}
              >
                <a className="hover:text-dgray">{character.name}</a>
              </Link>
            </li>
          )
        )}
      </ol>
    </div>
  );
};

{
  /* <ol>
        {characters.map((character: Character) =>
          character.detail === "Not found" ? (
            <p>Character not found. Something went wrong</p>
          ) : typeof character === undefined ? (
            <p>something went wrong</p>
          ) : (
            <li key={character.url}>
              <Link
                href={`/characters/${character.url.split("/")[5]}`}
                prefetch={false}
              >
                <a className="hover:text-dgray">{character.name}</a>
              </Link>
            </li>
          )
        )}
      </ol> */
}
