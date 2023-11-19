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
                    <li key={protectora._id}>
                        <h2 className='caja-texto'>{protectora.name}</h2>
                        <div className='datos-protectora'>   <p>Email: {protectora.email}</p>
                            <p>Dirección: {protectora.street} número {protectora.number}, {protectora.city}</p>
                            <p>Teléfono: {protectora.phone}</p></div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AsociacionesProtectorasPage;