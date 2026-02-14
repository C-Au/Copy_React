import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const resp = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(resp.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Failed to load Pokemon data.");
        setLoading(false);
      }
    }
    fetchPokemon();
  }, [id]);

  if (loading) return <h2>LOADING ...</h2>;
  if (error) return <p>{error}</p>;
  if (!pokemon) return null;

  return (
    <div className="pokemon-detail">
      <Link to="/poke" className="back-link">
        &larr; Back to Pokemon List
      </Link>

      {/* Header */}
      <div className="pokemon-detail-header">
        <img
          src={pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-detail-img"
        />
        <div>
          <h1 className="pokemon-detail-name">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="pokemon-types">
            {pokemon.types.map((t) => (
              <span key={t.type.name} className={`type-badge type-${t.type.name}`}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="pokemon-info-grid">
        <div className="info-card">
          <h3>Basic Info</h3>
          <p><strong>Height:</strong> {pokemon.height / 10} m</p>
          <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
        </div>

        {/* Stats */}
        <div className="info-card">
          <h3>Stats</h3>
          {pokemon.stats.map((s) => (
            <div key={s.stat.name} className="stat-row">
              <span className="stat-name">{s.stat.name}</span>
              <div className="stat-bar-bg">
                <div
                  className="stat-bar-fill"
                  style={{ width: `${Math.min(s.base_stat, 200) / 2}%` }}
                ></div>
              </div>
              <span className="stat-value">{s.base_stat}</span>
            </div>
          ))}
        </div>

        {/* Abilities */}
        <div className="info-card">
          <h3>Abilities</h3>
          <ul className="ability-list">
            {pokemon.abilities.map((a) => (
              <li key={a.ability.name}>
                {a.ability.name}
                {a.is_hidden && <span className="hidden-badge">Hidden</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Moves / Attacks */}
        <div className="info-card">
          <h3>Moves ({pokemon.moves.length})</h3>
          <div className="moves-grid">
            {pokemon.moves.map((m) => (
              <span key={m.move.name} className="move-chip">
                {m.move.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sprites */}
      <div className="info-card">
        <h3>Sprites</h3>
        <div className="sprites-row">
          {pokemon.sprites.front_default && (
            <img src={pokemon.sprites.front_default} alt="front" />
          )}
          {pokemon.sprites.back_default && (
            <img src={pokemon.sprites.back_default} alt="back" />
          )}
          {pokemon.sprites.front_shiny && (
            <img src={pokemon.sprites.front_shiny} alt="shiny front" />
          )}
          {pokemon.sprites.back_shiny && (
            <img src={pokemon.sprites.back_shiny} alt="shiny back" />
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
