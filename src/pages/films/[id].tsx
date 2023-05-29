import { OurImage } from "../../components/atoms/OurImage";
import { api } from "../../services/api";
import { MovieResponse, Params } from "../../types/tMovieResponse";
import { TCharacter, TCharacterId } from "../../types/tCharacterResponse";
import { GetStaticPaths } from "next";
import { getCharacterById } from "../../services/api";
import { Comments } from "../../components/molecules/Comment";
import { useRouter } from "next/router";
import { CharactersLink } from "../../components/molecules/CharactersLink";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get("/films/");
  const movies = response.data.results;
  const paths = movies.map((movie: MovieResponse) => {
    return {
      params: { id: movie.url.split("/")[5] },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: Params }) => {
  const filmsResponse = await api.get(`/films/${params.id}`);

  const charactersId = await filmsResponse.data.characters.map(
    (character: string) => {
      return {
        characterId: { id: character.split("/")[5] },
      };
    }
  );

  const characters = await Promise.all(
    charactersId.map(async (el: TCharacterId) => {
      try {
        const response = await getCharacterById(el?.characterId.id);
        return response;
      } catch (error) {
        console.log(error);
        return {
          error: true,
          url: `${el?.characterId.id}`,
          name: "Sorry, we can't load this character name. Click to see who is it",
        };
      }
    })
  );

  return {
    props: {
      movie: filmsResponse.data,
      characters,
    },
  };
};

const Film = ({
  movie,
  characters,
}: {
  movie: MovieResponse;
  characters: TCharacter[];
}) => {
  const { query } = useRouter();

  return (
    <>
      <div className="full">
        <OurImage url={movie.url} name={movie.episode_id} type={"films"} />
        <div className="flex flex-col items-center">
          <h1 className="font-galaxyregular text-3xl text-center pt-5 ">
            {movie?.title}
          </h1>
          <h3 className="font-serif text-gray text-sm">
            relase date: {movie?.release_date}, episode: {movie?.episode_id}
          </h3>

          <div className="font-deathstar w-5/6 max-w-2xl  p-5  text-dwhite">
            <h1 className="text-yellow">OPENING CRAWL :</h1>
            <h2 className="pb-5">{movie?.opening_crawl}</h2>
          </div>

          <h1 className=" font-deathstar text-yellow w-5/6 max-w-2xl pl-5 ">
            Characters:
          </h1>
          <CharactersLink characters={characters} />
          <Comments filmId={Number(query.id)} />
        </div>
      </div>
    </>
  );
};

export default Film;
