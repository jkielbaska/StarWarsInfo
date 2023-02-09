import axios from "axios";
import { useState, useEffect } from "react";
import { TCharacter, Paginated } from "../types/tCharacterResponse";
import { MovieResponse } from "../types/tMovieResponse";
// import type { Movie, Character } from "../types/types";

const apiBase = "https://swapi.dev/api";
export const api = axios.create({
  baseURL: apiBase,
});

export const getFilms = async () => {
  const response = await api.get<Paginated<MovieResponse[]>>(`/films/`);
  return response.data;
};

export const getCharacterById = async (id: string) => {
  try {
    const response = await api.get<TCharacter>(`/people/${id}/`);
    // zapiac sie na kod 404
    if (response.statusText === "Not Found") {
      throw new Error("Not Found");
    } else return response.data;
  } catch (err) {
    return `${err} people/${id}/`;
  }
};

export const getCharactersPaginated = async ({
  page,
}: {
  page: number | string | undefined;
}) => {
  const response = await api.get<Paginated<TCharacter[]>>("/people", {
    params: { page },
  });
  return response.data;
};
