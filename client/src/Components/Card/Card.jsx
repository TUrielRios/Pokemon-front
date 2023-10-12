import './Card.css'

const Card = ({ image, name, types, attack, hp, id}) => {

    // Mapeo de colores por tipo de Pokémon
    const typeColors = {
        fire: '#FF5733',
        water: '#3399FF',
        grass: 'green',
        electric: '#F0E68C',
        ice: "#A4DDED",
        fighting: "red",
        poison: "#B102FE",
        ground: "#brown",
        flying: "rgb(184, 55, 145)",
        psychic: "#f95587",
        bug:"#a8b820" ,
        rock:"grey",
        ghost:"#740dcb",
        normal: "rgb(24, 94, 71)"
    };

    return (
        <div className="card-container" key={id}>
            <div className="card-title">
                <h2 className="card-name">{name}</h2>
                <h5 className="card-hp">Hp: {hp}</h5>
                <h5 className="card-attack">Attack: {attack}</h5>
                </div>
                <div className="card-info">
                <img src={image} alt={name} />
                <div className="card-info">
                {types.map((type, index) => (
                    <p
                        key={index}
                        style={{
                            backgroundColor: typeColors[type.toLowerCase()],
                            color: '#fff',
                            padding: '2px 5px',
                            margin: '3px',
                            borderRadius: '5px',
                            fontSize: '12px',
                            display: 'inline-block',
                        }}
                        >
                        {type}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Card;