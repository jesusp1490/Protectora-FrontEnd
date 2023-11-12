import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './_PetsPage.scss';

const PetPage = () => {
    const { id } = useParams();
    const [datos, setDatos] = useState(0);


    useEffect(() => {
        const obtenerDatosDeAPI = async () => {
            try {
                const respuesta = await axios.get('http://localhost:5055/pets/' + id);
                setDatos(respuesta.data)
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
            }
        };
        obtenerDatosDeAPI();
    }, [id]);

    return (
        <div className='pet__container'>
            {datos !== null ? (
                <div>
                    <div class="pet__header">
                    </div>
                    <div class="pet__body">
                        {/* <div class="data__line">
                            <img class="data__icon"/>
                            <span>Especie</span>
                            <span class="align-right">
                                {datos.species}
                            </span>
                        </div> */}
                    </div>
                </div>
            ) : (
                <p>No hay datos disponibles</p>
            )}
        </div>
    );
}

export default PetPage;