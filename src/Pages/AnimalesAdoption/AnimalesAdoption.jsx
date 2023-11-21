import React, { useEffect, useState } from "react";
import "./_AnimalesAdoption.scss";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";







const AnimalesAdoption = () => {
  
  
  
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    


    const getData = async () => {
      try {
        
        let URL = "http://localhost:5055/pets";
        const response = await axios.get(URL);
        setPetData(response.data);
      

      } catch (error) {
        console.log(`error fetching pets:`, error);
      }
    };

   
  
    getData();

  }, []);

  const [search, setSearch ] = useState("")
 
  const filteredResults = petData.filter((pet) =>
  pet.name.toLowerCase().includes(search.toLowerCase())
);

const handleChange = (e) => {
  setSearch(e.target.value);
};
  








  const [filtro] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700150629/pckavkfj367g6emtdtwp.png");
  
  const [buscar] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700152167/protectora/vgguolx2li6ycwaqxto0.png")
  
  

  return (
    <div className="mas-container">
      <div className="Animales">
        <label className="containerInput">
          <input value={search} onChange={handleChange} className="inputContainer" type="text" placeholder="     Buscar" />
          
          <img src={buscar} alt="buscar" className="search" />
        </label>
        <div className="linea"></div>
        <div className="Estado-adopción">
          <Link to="/adoption-status-list" >
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
        <ul className="adoptionCard">
            {search ? (
              filteredResults.map((pet, index) => (
                <li key={pet.id ? `pet-${pet.id}` : `pet-${index}`} className="card-animals">
                  <div className="div-imagenes">
                    <img key={pet.id ? `image-${pet.id}` : undefined} src={pet.image} alt={pet.name} className="imagenes" />
                  </div>
                  <section className="parrafo2">
                    <p key={pet.id ? `name-${pet.id}` : undefined} className="pet-name">{pet.name}</p>
                    <p key={pet.id ? `city-${pet.id}` : undefined} className="pet-city">{pet.city} </p>
                    <p key={pet.id ? `age-${pet.id}` : undefined} className="pet-age">{pet.age}</p>
                  </section>
                </li>
              ))
            ) : (
              petData.map((pet, index) => (
                <li key={pet.id ? `pet-${pet.id}` : `pet-${index}`} className="card-animals">
                  <div className="div-imagenes">
                    <img key={pet.id ? `image-${pet.id}` : undefined} src={pet.image} alt={pet.name} className="imagenes" />
                  </div>
                  <section className="parrafo2">
                    <p key={pet.id ? `name-${pet.id}` : undefined} className="pet-name">{pet.name}</p>
                    <p key={pet.id ? `city-${pet.id}` : undefined} className="pet-city">{pet.city} </p>
                    <p key={pet.id ? `age-${pet.id}` : undefined} className="pet-age">{pet.age}</p>
                  </section>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default AnimalesAdoption;

