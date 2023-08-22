import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: ({ limit, offset }, ...args) => {
        console.log({ args });
        return `ability?offset=${offset}&limit=${limit}`;
      },
      keepUnusedDataFor: 30,
    }),
  }),
});

export const { useLazyGetAllPokemonsQuery } = pokemonApi;
