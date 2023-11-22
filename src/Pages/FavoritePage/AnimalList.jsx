import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './_AnimalList.scss';
import { Link } from 'react-router-dom';

const AnimalList = ({ userData }) => {
    const [favoriteAnimals, setFavoriteAnimals] = useState([]);
  
    useEffect(() => {
      const fetchFavoriteAnimals = async () => {
        try {

          if (userData && userData.username) {

            const animalsResponse = await axios.get('http://localhost:5055/pets');
            const userFavorites = animalsResponse.data.filter((animal) => 
              animal.favorite && animal.favorite.includes(userData.username)
            );
  
            setFavoriteAnimals(userFavorites);
          }
        } catch (error) {
          console.error('Error al obtener animales favoritos:', error);
        }
      };
  

      fetchFavoriteAnimals();
    }, [userData]);
  
    return (
      <div className="animal-list-container">
        <h1 className='animal-list-h1'>Favoritos</h1>
        <p className='animal-list-p'>Aquí podrás encontrar tus mascotas favoritas:</p>
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