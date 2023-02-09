import { Paginated } from "../../types/tCharacterResponse";

interface Props<T> {
  data?: Paginated<T[]>;
  renderItems: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

export const PhotoIndex = <T extends unknown>({
  data,
  renderItems,
  keyExtractor,
}: Props<T>) => {
  return (
    <>
      <div data-cy="character-list" className="div-wrapCenter">
        {data?.results?.map((item) => (
          <div key={keyExtractor(item)}>{renderItems(item)}</div>
        ))}
      </div>
    </>
  );
};

//https://medium.com/edonec/creating-a-generic-component-with-react-typescript-2c17f8c4386e
