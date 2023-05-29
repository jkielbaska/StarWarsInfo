import { OurImage } from "../../components/atoms/OurImage";
import Link from "next/link";
import { getUrlId } from "../../utils/getUrlId";
import { PhotoIndex } from "../../components/molecules/PhotoIndex";
import { GetServerSideProps } from "next";
import { MovieResponse } from "../../types/tMovieResponse";
import { getFilms } from "../../services/api";
import { Paginated } from "../../types/tCharacterResponse";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getFilms();
  return {
    props: {
      initialData: response,
    },
  };
};

const Films = ({
  initialData,
}: {
  initialData: Paginated<MovieResponse[]> | undefined;
}) => (
  <PhotoIndex
    data={initialData}
    keyExtractor={(item) => item.title}
    renderItems={(item) => (
      <Link href={`/films/${getUrlId(item.url)}`}>
        <a>
          <div className="div-cards">
            <OurImage url={item.url} name={item.episode_id} type={"films"} />
            <p className="pt-2">{item?.title}</p>
          </div>
        </a>
      </Link>
    )}
  />
);

export default Films;
