export interface TCharacter {
  error?: boolean;
  name?: string;
  height?: number;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url?: string;
  detail?: string;
}

export interface Paginated<T> {
  count: number;
  next: string;
  previous: string;
  results: T;
}

export type TParams = {
  id: string | string[] | undefined;
};

export type Id = {
  id: string;
};

export interface TCharacterId {
  characterId: Id;
}
