import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './_AnimalList.scss';
import { Link } from 'react-router-dom';

const AnimalList = ({ userData }) => {
    const [favoriteAnimals, setFavoriteAnimals] = useState([]);
  
    useEffect(() => {
      const fetchFavoriteAnimals = async () => {
        try {
          // Verifica si userData está definido y tiene la propiedad 'username'
          if (userData && userData.username) {
            // Obtener todos los animales de la base de datos
            const animalsResponse = await axios.get('http://localhost:5055/pets');
            
            // Filtra los animales favoritos del usuario por su username
            const userFavorites = animalsResponse.data.filter((animal) => 
              animal.favorite && animal.favorite.includes(userData.username)
            );
  
            // Actualiza el estado con los animales favoritos
            setFavoriteAnimals(userFavorites);
          }
        } catch (error) {
          console.error('Error al obtener animales favoritos:', error);
        }
      };
  
      // Llamar a la función para obtener los animales favoritos al cargar el componente
      fetchFavoriteAnimals();
    }, [userData]);
  
    // Imprime la lista de animales favoritos
    return (
      <div className="animal-list-container">
        {favoriteAnimals.map((animal) => (
          <li key={animal._id} className="animal-item">
          <Link to={`/pet-profile/${animal._id}`}>
          <img src={animal.image} alt={animal.name} className="animal-image" />
        </Link>
            <span className="animal-name">{animal.name}</span>
          </li>
        ))}
      </div>
    );
  };
  
  export default AnimalList;