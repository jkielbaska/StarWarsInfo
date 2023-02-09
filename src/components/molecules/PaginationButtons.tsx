import { useState } from "react";
import { TCharacter, Paginated } from "../../types/tCharacterResponse";

//do poprawy
export const PaginationButtons = ({
  isFetching,
  data,
  setPage,
}: {
  isFetching: boolean;
  data: Paginated<TCharacter[]> | undefined;
  setPage: (page: (p: number) => number) => void;
}) => {
  return (
    <>
      <button
        data-cy="next-page"
        onClick={() => setPage((p) => p + 1)}
        disabled={isFetching || !data?.next}
        className="font-galaxyregular text-sm hover:text-dwhite p-3"
      >
        {isFetching && data?.next
          ? "Loading..."
          : !data?.next
          ? ""
          : "Next page"}
      </button>
      <button
        data-cy="previous-page"
        onClick={() => setPage((p: number) => p - 1)}
        disabled={isFetching || !data?.previous}
        className="font-galaxyregular text-sm hover:text-dwhite pb-3"
      >
        {isFetching && data?.previous
          ? "Loading..."
          : !data?.previous
          ? ""
          : "Previous page"}
      </button>
    </>
  );
};
