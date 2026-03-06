import { useState, useEffect } from "react";
import axios from "axios";
import PokeType from "../PokeType/PokeType";

function SinglePoke() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/1/");
        setPokemon(resp.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Failed to load Pokemon data.");
        setLoading(false);
      }
    }
    fetchPokemon();
  }, []);

  if (loading) return <h2>LOADING ...</h2>;
  if (error) return <p>{error}</p>;
  if (!pokemon) return null;

  console.log("TYPE INFO FORM POKEMONM");
  console.log(pokemon.types[0]);

  return (
    <div>
      <h1>Single Pokemon</h1>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.back_default} alt="back default" />

      <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>

      {pokemon.types.map((t) => (
        <PokeType key={t.type.name} typeName={t.type.name} url={t.type.url} />
      ))}
    </div>
  );
}

export default SinglePoke;
