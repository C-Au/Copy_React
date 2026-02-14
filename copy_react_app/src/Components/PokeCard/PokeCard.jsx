import { Link } from "react-router-dom";

function PokeCard({id, name, image}) {
    return (
        <Link to={`/poke/${id}`} className="poke-card" style={{ textDecoration: "none", color: "inherit" }}>
            <p>{name}</p>
            <img src={image} alt={name} />
        </Link>
    )
}

export default PokeCard;