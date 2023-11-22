import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './_ShelterPets.scss';
import Navbar from '../../../Components/NavbarProtectora/NavbarProtectora';
import { Link } from 'react-router-dom';


const ShelterPets = () => {
    const [protectoraProfile, setProtectoraProfile] = useState(null);
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
        const protectoraID = localStorage.getItem('protectoraID');

        axios.get(`http://localhost:5055/protectoras/${protectoraID}`)
            .then(response => {
                const protectoraData = response.data;
                setProtectoraProfile(protectoraData);

                axios.get('http://localhost:5055/pets')
                    .then(response => {
                        const allPets = response.data;
                        // Filter pets by protectora name
                        const petsByProtectora = allPets.filter(pet => pet.protectora === protectoraData.name);
                        setMascotas(petsByProtectora);
                    })
                    .catch(error => {
                        console.error('Error fetching mascotas:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching protectora data:', error);
            });
    }, []);

    return (
        <div className='shelterPets-container'>
            <h2 className='shelterPets-h2'>Mascotas de {protectoraProfile?.name}</h2>
            <ul className='shelterPets-ul'>
                {mascotas.map(mascota => (
                    
                    <Link to={`/pet-profile/${mascota._id}`} className='shelterPets-link'>
                    <li key={mascota._id} className='shelterPets-card'>
                    <img src={mascota.image} alt={`Imagen de ${mascota.name}`}  className='shelterPets-img'/>
                        <div className='shelterPets-info'>
                            <p className='shelterPets-p'><span className='shelterPets-span'>Nombre:</span> {mascota.name}</p>
                            <p className='shelterPets-p'><span className='shelterPets-span'>Ciudad</span>: {mascota.city}</p>
                            <p className='shelterPets-p'><span className='shelterPets-span'>Sexo:</span> {mascota.sex}</p>
                        </div>
                    </li>
                    </Link>
                ))}
            </ul>
            <Navbar />

        </div>
    );
};


export default ShelterPets;
