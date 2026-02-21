import { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "../../PokeCard/PokeCard";

// UPDATE LIMIT VAL TO GET MORE OR LESS RESULTS
const URL = "https://pokeapi.co/api/v2/pokemon?limit=1";

// explain the concepts and ideas in this doc in a very simple way that a 12 year old can understand at a basic and then complex level

function Poke() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currLink, setCurrLink] = useState(URL);
  const [nextLink, setNextLink] = useState(URL);
  const [prevLink, setPrevLink] = useState(null);

  useEffect(() => {
    async function loadPoke() {
      try {
        const resp = await axios.get(currLink);

        setLoading(false);
        if (resp.status !== 200) {
          setError("DID NOT GET 200");
        }

        console.log(resp);

        console.log(resp.data.next);
        setNextLink(resp.data.next);
        setPrevLink(resp.data.previous);

        // make a list of URLs to be used all together
        const pokeReqList = resp.data.results.map((p) => {
          return axios.get(p.url);
        });

        // make a bulk API request to all of the urls
        const pokeResponse = await Promise.all(pokeReqList);

        // Format the responses from all of the pokemon requests
        const formatPoke = pokeResponse.map((res) => {
          return {
            name: res.data.name,
            image: res.data.sprites.front_default,
          };
        });

        // Set state to reload the screen
        setPokemon(formatPoke);
      } catch (err) {
        console.log(err);
      }
    }
    loadPoke();
  }, [currLink]);

  function updateScreenNext() {
    setCurrLink(nextLink);
  }

  function updateScreenPrev() {
    setCurrLink(prevLink);
  }

  if (loading) {
    return <h2>LOADING ... </h2>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Pokemon LIST!</h1>

      {!prevLink ? <></> : <button onClick={updateScreenPrev}> Prev </button>}

      <button onClick={updateScreenNext}> Next </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {pokemon.map((p) => {
          return <PokeCard name={p.name} image={p.image} key={p.name} />;
        })}
      </div>
    </div>
  );
}

export default Poke;
