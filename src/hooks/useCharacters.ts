import { useQuery } from "@tanstack/react-query";
import { getCharactersPaginated } from "../services/api";
import { TCharacter, Paginated } from "../types/tCharacterResponse";

export const useCharacters = ({
  initialData,
  page,
}: {
  initialData: any;
  page: number | string;
}) => {
  const query = useQuery<Paginated<TCharacter[]>>(
    ["characters", page],
    () => getCharactersPaginated({ page }),
    {
      initialData,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
  return query;
};
