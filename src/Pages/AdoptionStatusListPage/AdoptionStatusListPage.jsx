import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import PetCard from '../../Components/AdoptionStatus/PetCard/PetCard';

const AdoptionStatusListPage = () => {

    const [forms, setForms] = useState([]);
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const respuesta = await axios.get('http://localhost:5055/form/');
                console.log('Data de la API', respuesta.data);
                setDatos(respuesta.data);
            } catch (error) {
                console.error('Error fetching pets:', error);
                setDatos(null);
            }
        };
        getData();

    }, []);

    return (
        <div>
            <h2>Tus solicitudes de Adopción</h2>

            <div>
                <PetCard />
                <PetCard />
                <PetCard />
            </div>
        </div>
    )
}

export default AdoptionStatusListPage
