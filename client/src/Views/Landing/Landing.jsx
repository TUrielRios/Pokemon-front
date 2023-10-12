import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom para manejar la redirección
import "./Landing.css";

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="content">
                <h1 className="text-center">Welcome to <br/> <br/> the Wiki Pokemon App</h1>
                <p className="by">By Tiziano Rios</p> 
                <Link to="/home">
                <button className="redirect-button">Find a Pokemon!</button>
                </Link>

            </div>
        </div>
    );
};

export default Landing;
