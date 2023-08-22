import React from "react";
import { DefaultButton } from "../BaseComponents/DefaultButton/DefaultButton";
import { useLazyGetAllPokemonsQuery } from "../../store/services/pokemonApi";

export const FetchedPokemon = () => {
  const [fetchPokemons, { isError, isLoading, data }] =
    useLazyGetAllPokemonsQuery();

  const handleFetch = async () => {
    await fetchPokemons({ limit: 10, offset: 0 });
  };

  if (isError) {
    return (
      <div className="p-6 text-xl font-bold bg-red-400 border-2 rounded-xl">
        oops! some error :/
      </div>
    );
  }

  return (
    <div className="border border-slate border-dashed p-4 rounded-xl">
      <div className="text-4xl font-black mb-10 text-center">
        Fetching Pokémon
      </div>

      {!isLoading &&
        data?.results &&
        data.results.map((item) => {
          return <div key={item.name}>{item.name}</div>;
        })}

      <div className="flex justify-center">
        <DefaultButton disabled={isLoading} onClick={handleFetch}>
          Fetch Pokemon
        </DefaultButton>
      </div>
    </div>
  );
};
