import React, { useState } from "react";
import "./_AnimalesAdoption.scss";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/navbar";


const AnimalesAdoption = () => {
  
  const [filtro] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700150629/pckavkfj367g6emtdtwp.png" );
  const [mas] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700152343/protectora/bl0qmkjpymwomuuh1nsw.png");
  const [buscar] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700152167/protectora/vgguolx2li6ycwaqxto0.png")
  
  
  return (
    <div className="mas-container">
      <div className="Animales">
        <label className="containerInput">
          <input className="inputContainer" type="text" placeholder="Buscar"  />
          <img src={buscar} alt="buscar" className="search" />
        </label>
        <div className="Mascotas">
          <p className="mascotas" type="button">
            Mis mascotas
          </p>
          <img className="mas" src={mas} alt="+" />
        </div>
        <div className="perfilMascotas">
          <button className="perfilMascotas" type="button">
            Accede al perfil de tus mascotas{" "}
          </button>
        </div>
        <div className="linea"></div>
        <div className="Estado-adopción">
          <button className="mas-option" type="button">
            Estado de la adopción
            <img
              src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png"
              alt="arrow"
            />
          </button>
        </div>
        <div className="parrafo">
          <p className="display">Animales en adopción</p>
          <Link to="/Filtros">
            <img className="foto" src={filtro} alt="filtros" />
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default AnimalesAdoption;

