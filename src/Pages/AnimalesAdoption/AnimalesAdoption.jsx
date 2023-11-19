import React, { useEffect, useState } from "react";
import "./_AnimalesAdoption.scss";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import Slider from "react-slick";



const AnimalesAdoption = () => {

  const [petData, setPetData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:5055/pets`);
        setPetData(response.data);
      } catch (error) {
        console.log(`error fetching pets:`, error);
      }
    };

    getData();
  }, []);

  
  
  const [filtro] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700150629/pckavkfj367g6emtdtwp.png" );
  const [mas] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700152343/protectora/bl0qmkjpymwomuuh1nsw.png");
  const [buscar] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700152167/protectora/vgguolx2li6ycwaqxto0.png")
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
  
  return (
    <div className="mas-container">
      <div className="Animales">
        <label className="containerInput">
          <input className="inputContainer" type="text" placeholder="Buscar"   />
          <img src={buscar} alt="buscar" className="search" />
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
        <div className="slider-containe">
          <Slider {...settings}>
           {/* Slide 1 */}
            <div className="slide-conten">                            
              <button className="slide-butto"></button>                            
            </div>
            {/* Slide 2 */}
            <div className="slide-conten">
              <button className="slide-butto">  </button>
            </div>
            {/* Slide 3 */}
            <div className="slide-conten">
              <button className="slide-butto"></button>
            </div>
          </Slider>   
        </div>
        <div className="linea"></div>
        <div className="Estado-adopción">
        <Link to="/profile/status-adoption" >
          <button className="mas-option" type="button">
            Estado de la adopción
            <img
              src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png"
              alt="arrow"
            />
          </button>
          </Link>
        </div>
        <div className="parrafo">
          <p className="display">Animales en adopción</p>
          <Link to="/Filtros">
            <img className="foto" src={filtro} alt="filtros" />
          </Link>
        </div>
        <div>
  {/*    <ul>
        {petData.map((pet) => (
          <li key={pet.id}>
            <img src={pet.image} alt={pet.name} />
            <p>{pet.name}</p>
            <p>{pet.city}</p>
            <p>{pet.age}</p>
          </li>
        ))}
      </ul>*/}
    </div>
      </div>
      <Navbar />
    </div>
  );
};

export default AnimalesAdoption;

