import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions/index";
import style from "./SearchBar.module.css";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    // Usamos useEffect para manejar la búsqueda en tiempo real
    useEffect(() => {
        // Realizar la búsqueda al cambiar el valor de 'name'
        dispatch(getByName(name));
    }, [name, dispatch]);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div className={style.containerSB}>
        <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleInputChange(e)}
            className={style.inputSB}
        />
        </div>
    );
};

export default SearchBar;
