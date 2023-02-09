import { GetStaticProps } from "next";
import { useState } from "react";
import { PageLoader } from "../../components/atoms/PageLoader";
import { TCharacter, Paginated } from "../../types/tCharacterResponse";
import { PhotoIndex } from "../../components/molecules/PhotoIndex";
import { getCharactersPaginated } from "../../services/api";
import { useCharacters } from "../../hooks/useCharacters";
import Link from "next/link";
import { getUrlId } from "../../utils/getUrlId";
import { OurImage } from "../../components/atoms/OurImage";
import { PaginationButtons } from "../../components/molecules/PaginationButtons";

export const getStaticProps: GetStaticProps<{
  initialData: Paginated<TCharacter[]> | undefined;
}> = async () => {
  const response = await getCharactersPaginated({ page: 1 });
  return {
    props: {
      initialData: response,
    },
  };
};

const Characters = ({
  initialData,
}: {
  initialData: Paginated<TCharacter[]> | undefined;
}) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching } = useCharacters({
    initialData,
    page,
  });
  return (
    <>
      {isFetching ? (
        <div className="div-wrapCenter">
          <PageLoader open={isFetching} />
        </div>
      ) : (
        <>
          <PhotoIndex
            data={data}
            keyExtractor={(item) => item?.name!}
            renderItems={(item) => (
              <Link href={`/characters/${getUrlId(item?.url!)}`}>
                <a>
                  <div className="div-cards">
                    <OurImage
                      url={item.url}
                      name={item.name}
                      type={"characters"}
                    />
                    <p className="pt-2">{item?.name}</p>
                  </div>
                </a>
              </Link>
            )}
          />
          <PaginationButtons
            data-cy="pagination-buttons"
            isFetching={isFetching}
            data={data}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};

export default Characters;
