import React, { useEffect, useState } from 'react';
import './AsociacionesProtectoras.scss';

const AsociacionesProtectorasPage = () => {
    const [protectoras, setProtectoras] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5055/protectoras');
                if (response.ok) {
                    const data = await response.json();
                    setProtectoras(data);
                } else {
                    console.error('Error al obtenner los datos de protectoras');
                }
            } catch (error) {
                console.error('Error al obtener los datos:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="asociaciones-container">
            <h1>Asociaciones Protectoras</h1>
            <ul>
                {protectoras.map(protectora => (
                    <li className='caja-texto' key={protectora._id}>
                        <h2>{protectora.name}</h2>
                        <div className='datos-protectora'>
                            <img src={protectora.image} alt={protectora.name} className='imagen-protectora' />
                            <ul>
                                <li> <span className='azul-text'>Email:</span>  {protectora.email}</li>
                                <li> <span className='azul-text'>Dirección:</span> {protectora.street} número {protectora.number}, {protectora.city}</li>
                                <li> <span className='azul-text'>Teléfono:</span> {protectora.phone}</li>
                            </ul>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AsociacionesProtectorasPage;