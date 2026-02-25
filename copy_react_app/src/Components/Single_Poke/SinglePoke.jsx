import { useState, useEffect } from "react";
import axios from "axios";

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

  console.log(pokemon);

  return (
    <div>
      <h1>Single Pokemon</h1>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.back_default} alt="back default" />
    </div>
  );
}

export default SinglePoke;
