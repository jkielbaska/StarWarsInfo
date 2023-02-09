import { api } from "../../services/api";
import Link from "next/link";
import { TCharacter, TParams } from "../../types/tCharacterResponse";
import { OurImage } from "../../components/atoms/OurImage";
import { getUrlId } from "../../utils/getUrlId";
import { MovieResponse } from "../../types/tMovieResponse";

export const getServerSideProps = async ({ params }: { params: TParams }) => {
  const charactersResponse = await api.get(`/people/${params?.id}`);
  const movies = await api.get(`/films/`);

  return {
    props: {
      characterById: charactersResponse.data,
      movies: movies.data.results,
    },
  };
};

const CharacterById = ({
  characterById,
  movies,
}: {
  characterById: TCharacter;
  movies: MovieResponse[];
}) => {
  const filteredMovies = movies?.filter((movie: MovieResponse) => {
    return characterById?.films?.includes(movie.url);
  });
  console.log(characterById?.url?.split("/")[5]);

  return (
    <>
      {characterById === undefined ? (
        <div>
          <p>loading</p>
        </div>
      ) : (
        <div className="flex flex-col items-center pt-10 ">
          <div className="w-60 max-w-xs h-max pt-4 bg-gray flex flex-col justify-center items-center rounded-md">
            <OurImage
              url={characterById?.url}
              name={characterById?.name}
              type={"characters"}
            />
            <h1 className="font-galaxyregular w-full text-3xl pl-1  text-dgray text-center">
              {characterById?.name}
            </h1>
            <h3 className="font-serif text-dgray text-sm">
              gender: {characterById?.gender}, height: {characterById?.height},
              mass: {characterById?.mass}
            </h3>
          </div>

          <div className="text-gray font-galaxyregular pt-5">
            <ol>
              <h1 className="text-yellow items-start ">films:</h1>
              {filteredMovies.map((movie: MovieResponse) => (
                <p key={movie?.episode_id}>
                  <Link href={`/films/${getUrlId(movie?.url)}`}>
                    <a className="hover:text-dgray">{movie?.title}</a>
                  </Link>
                </p>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterById;
