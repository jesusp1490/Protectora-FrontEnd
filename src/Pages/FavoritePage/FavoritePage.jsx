import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimalList from './AnimalList';
import Navbar from '../../Components/Navbar/Navbar';


const FavoritesPage = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userProfile = localStorage.getItem('userEmail');
        const { data } = await axios(`http://localhost:5055/users/${userProfile}`);
        console.log('user data:', data);
        setUserData(data[0]);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>

      
      <AnimalList userData={userData} />

      <Navbar userProfile={userData} />
    </div>
  );
};

export default FavoritesPage;