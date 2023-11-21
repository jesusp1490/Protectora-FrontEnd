import React, { useEffect, useState } from "react";
import "./_AnimalesAdoption.scss";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import {useLocation} from 'react-router-dom';



const AnimalesAdoption = () => {
const { state } = useLocation();
console.log(state)
const [petData, setPetData] = useState([]);
const [filteredPets, setFilteredPets] = useState([]);


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
  
  console.log(petData)
  }, []);

  useEffect(() => {
    if (state && state.selectedFiltersData) {
    const filterPets = () => {
      const { age, city, sex, size, species } = state.selectedFiltersData;

      

      console.log('species:', species)
      

      const filtered = petData.filter(pet => {
        console.log(pet.species)

          const isAgeMatch = !age || pet.age.toLowerCase() === age.toLowerCase() 
          const isCityMatch = !city || pet.city.toLowerCase() === city.toLowerCase()
          const isSexMatch = !sex || pet.sex.toLowerCase() === sex.toLowerCase()
          const isSizeMatch = !size.length || size.some(selectedSize => pet.size.toLowerCase() === selectedSize.toLowerCase());
          const isSpeciesMatch = !species.length || species.some(selectedSpecies => pet.species.toLowerCase() === selectedSpecies.toLowerCase());

          return isAgeMatch && isCityMatch && isSexMatch && isSizeMatch && isSpeciesMatch;  
        
      });

      setFilteredPets(filtered);
    };

    filterPets();
  }
  }, [state, petData]);

  useEffect(() => {
    console.log('All Pets:', petData);
  }, [petData]);
  
  useEffect(() => {
    console.log('Filtered pets:', filteredPets);
  }, [filteredPets]);

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
    <div className="animal-container">
      <div className="Animales">

        <label className="containerInput">
          <input value={search} onChange={handleChange} className="inputContainer" type="text" placeholder="     Buscar" />
          
          <img src={buscar} alt="buscar" className="search" />
        </label>
        <div className="linea"></div>
        <div className="Estado-adopción">
          <Link to="/adoption-status-list" >
            <button className="animal-option" type="button">
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
        { filteredPets && filteredPets.length > 0 ? (<ul className="adoptionCard">
            {filteredPets.map((pet, index) => (
              <li key={pet.id ? `pet-${pet.id}` : `pet-${index}`} className="card-animals">
                <div className="div-imagenes">
                <img key={pet.id ? `image-${pet.id}` : undefined} src={pet.image} alt={pet.name} className="imagenes" />
                  {/* <img src={pet.image} alt={pet.name} className="imagenes" /> */}
                </div>
                <section className="parrafo2">
                  <p key={pet.id ? `name-${pet.id}` : undefined} className="pet-name">{pet.name}</p>
                  <p key={pet.id ? `city-${pet.id}` : undefined} className="pet-city">{pet.city} </p>
                  <p key={pet.id ? `age-${pet.id}` : undefined} className="pet-age">{pet.age}</p>
                </section>
              </li>
            ))}
          </ul>) : search ? (<ul className="adoptionCard">
              {filteredResults.map((pet, index) => (
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
              ))}
            </ul>) : (<ul className="adoptionCard">
            {petData.map((pet, index) => (
              <li key={pet.id ? `pet-${pet.id}` : `pet-${index}`} className="card-animals">
                <div className="div-imagenes">
                <img key={pet.id ? `image-${pet.id}` : undefined} src={pet.image} alt={pet.name} className="imagenes" />
                  {/* <img src={pet.image} alt={pet.name} className="imagenes" /> */}
                </div>
                <section className="parrafo2">
                  <p key={pet.id ? `name-${pet.id}` : undefined} className="pet-name">{pet.name}</p>
                  <p key={pet.id ? `city-${pet.id}` : undefined} className="pet-city">{pet.city} </p>
                  <p key={pet.id ? `age-${pet.id}` : undefined} className="pet-age">{pet.age}</p>
                </section>
              </li>
            ))}
          </ul>)}
        </div>

        <Navbar />
      </div>
    </div>
  );
};


export default AnimalesAdoption;