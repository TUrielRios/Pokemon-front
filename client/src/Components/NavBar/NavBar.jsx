import React from "react";
import logo from "../../assets/pokeball.gif";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
    return (
        <div className={style.navContainer}>
            <Link to={"/"}>
                <div className={style.imgContainer}>
                <img src={logo} alt="logoPokeball" />
                </div>
            </Link>
            <div className={style.linkContainer}>
                <Link className={style.linkHome} to={"/home"}>
                Home
                </Link>
                <Link className={style.linkCrear} to={"/create"}>
                Create
                </Link>
                <Link className={style.linkCrear} to={"/about"}>
                About
                </Link>
                <div className={style.searchContainer}>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
};
export default Navbar;