import React from "react";
import './Pagination.css'; 

export default function Pagination({
    pokemonsPerPage,
    allPokemons,
    pagination,
    page
}) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i+1);
    }

    return (
        <nav>
        <ul className="pagination">
            {pageNumbers &&
            pageNumbers.map((number, index) => (
                <li
                key={index}
                style={{ listStyle: "none" }}
                >
                <button
                    className="boton"
                    style={
                    page === number
                        ? { color: 'white' , background: "darkgrey" }
                        : {}
                    }
                    onClick={() => pagination(number)}
                >
                    {number}
                </button>
                </li>
            ))}
        </ul>
        </nav>
    );
}
