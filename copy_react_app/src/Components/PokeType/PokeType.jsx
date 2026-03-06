import { useState, useEffect } from "react";
import axios from "axios";

function PokeType({ typeName, url }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [typeObj, setType] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const resp = await axios.get(url);
        setType(resp.data);
      } catch (err) {
        console.log(err);
        setError("Failed to load Pokemon data.");
      } finally {
        setLoading(false);
      }
    }
    fetchPokemon();
  }, [url]);

  if (loading) return <h2>LOADING ...</h2>;
  if (error) return <p>{error}</p>;
  if (!typeObj) return null;

  console.log(typeObj);
  return (
    <div style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}>
      <p>{typeName}</p>
      {/* LOOP OVER THE ARRAY WITH A MAP INSTEAD OF HARDCODING THE INDEX VALYES
      <p>{typeObj.moves[0].name}</p>
      <p>{typeObj.moves[1].name}</p>
      <p>{typeObj.moves[2].name}</p>
      */}
    </div>
  );
}

export default PokeType;
