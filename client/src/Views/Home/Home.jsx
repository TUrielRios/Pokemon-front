import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { 
    fetchPokemons, 
    getTypes,
    orderByName,
    orderByAttack,
    orderByHp,
    filterCreated,
    filterByType
} from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import loadingGif from "../../assets/loading.gif";
import notFoundPs from "../../assets/notFound.gif";
import filters from '../../assets/filters.png'
import recargar from '../../assets/recargar.png'
import './Home.css'
import Navbar from "../../Components/NavBar/NavBar";

const Home = () => {

    //extraemos los estados
    const allPokemons = useSelector((state)=> state.allPokemons)
    const allTypes = useSelector((state) => state.types);

    //definimos estados locales para ordenar y manejar el indicador de carga
    const [, setOrden] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [loading, setLoading] = useState(true);

    //PAGINADO
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage,] = useState(12);
    const indexOfLastPokemon = currentPage * pokemonsPerPage; // 6
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; // 0
    const currentPokemons = allPokemons.slice(
        indexOfFirstPokemon,
        indexOfLastPokemon
    );

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const dispatch= useDispatch();

    //COMPONENT DID MOUNT
    useEffect(() => {
        dispatch(fetchPokemons())
            .then(() => setLoading(false))
            .catch(() => {
                setLoading(false);
                // manejador de errores
            });
        dispatch(getTypes());
    }, [dispatch]);


    //HANDLERS

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(fetchPokemons());
    };

    const handleSort = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    };

    const handleSortAttack = (e) => {
        e.preventDefault();
        if (e.target.value !== "attack") dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    };

    const handleFilterCreated = (e) => {
        e.preventDefault();
        dispatch(filterCreated(e.target.value));
    };

    const handleFilterTypes = (e) => {
        e.preventDefault();
        if (e.target.value !== "Tipos") {
            dispatch(filterByType(e.target.value));
        }
    };
    
    const handleSortHp = (e) => {
        e.preventDefault();
        if (e.target.value !== "jp") dispatch(orderByHp(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    };
    

    return (
        <div>
            <Navbar/>
            <div className="home-container">
            <img
                onClick={(e) => {
                    handleClick(e);
                }}
                className="recargar"
                src={recargar}
                style={{ cursor: "pointer" }}
                alt="recargar"
                />
            <img
                className="filters" src={filters}
                alt="Filters"
                onClick={() => setShowFilters(!showFilters)}
                style={{ cursor: "pointer" }} />
                {showFilters && (
                    <div className="filter-options">
                        <select onChange={(e) => handleSort(e)} className="order-by-name">
                            <option value="asc">A - Z</option>
                            <option value="des">Z - A</option>
                        </select>
                        <select
                        onChange={(e) => handleSortAttack(e)}
                        className="order-attack"
                        >
                            <option value="attack">Attack</option>
                            <option value="min">min</option>
                            <option value="max">max</option>
                        </select>
                        <select
                        onChange={(e) => handleFilterTypes(e)}
                        className="order-types"
                        >
                            <option>Types</option>
                            <option value="All">All</option>
                            {allTypes?.map((e) => {
                            return (
                                <option key={e.id} value={e.name}>
                                {e.name}
                                </option>
                            );
                            })}
                        </select>
                        <select
                            onChange={(e) => handleFilterCreated(e)}
                            className="order-filter-created"
                            >
                            <option value="All">Origin</option>
                            <option value="created">Created</option>
                            <option value="api">Api</option>
                        </select>
                        <select
                            onChange={(e) => handleSortHp(e)}
                            className="order-hp"
                            >
                            <option value="hp">HP</option>
                            <option value="min">min</option>
                            <option value="max">max</option>
                        </select>
                    </div>
                )}
            <div className="pagination-container">
                <Pagination
                    pokemonsPerPage={pokemonsPerPage}
                    allPokemons={allPokemons.length}
                    pagination={pagination}
                    page={currentPage}
                />
            </div>
            <div className="linkCard">
                
                    {loading ? (
                        <div className="containerLoading">
                            <img className="gif" src={loadingGif} alt="Cargando..." />
                            <p className="loading">Loading...</p>
                        </div>
                    ) : currentPokemons.length ? (
                        currentPokemons.map((e, index) => (
                            <Link key={index} className="card" to={`/detail/${e.id}`}>
                                <Card name={e.name} hp={e.hp} attack={e.attack} image={e.image} id={e.id} types={e.types} key={index} />
                            </Link>
                        ))
                    ) : (
                        <div className="error-container">
                                <div>
                                    <p className="not-found">Pokemon not found</p>
                                    <p className="signos">¿?</p>
                                    <img src={notFoundPs} alt="notFound" style={{ width: 130 }} />
                                </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Home;