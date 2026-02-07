function PokeCard({name, image}) {
    return (
        <div className="poke-card">
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    )
}

export default PokeCard;