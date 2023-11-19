import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './_AdoptionStatusPage.scss';

const AdoptionStatusPage = () => {
    const petID = useParams().id;
    console.log('petID:', petID);

    const [section, setSection] = useState('');
    const [datos, setDatos] = useState(null);
    const [protectoras, setProtectoras] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const respuesta = await axios(`http://localhost:5055/pets/${petID}`);
                console.log('Data de la API', respuesta.data);
                setDatos(respuesta.data);
            } catch (error) {
                console.error('Error fetching form data:', error);
                setDatos(null);
            }
        };
        getData();
    }, [petID]);

    console.log('datos:', datos);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5055/protectoras')
                if (response.ok) {
                    const data = await response.json();
                    setProtectoras(data);
                } else {
                    console.error('Error al obtener los datos');
                }
            } catch (error) {
                console.error('Error al obtener los datos', error.message);
            }
        };

        fetchData();
    }, []);

    const handleSection = (newTab) => {
        setSection(newTab);
        console.log('Actual Tab', newTab);
    };

    return (
        <div className='adoptStatus-container'>
            <div className='adoptStatus-header'>
                <img
                    src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700181379/Imagen_de_WhatsApp_2023-11-17_a_las_01.35.29_156d94f2_yju73f.jpg"
                    alt=""
                    className="adoptStatus-header-img"
                />
                <h2 className='adoptStatus-h2'>Adopción de {datos?.name}</h2>
            </div>

            <nav className='adoptStatus-nav'>
                <span onClick={() => handleSection('resumen')} className={section === 'resumen' ? 'active' : ''}>Resumen</span>
                <span onClick={() => handleSection('infoAdicional')} className={section === 'infoAdicional' ? 'active' : ''}>Info adicional</span>
                <span onClick={() => handleSection('adoption')} className={section === 'adoption' ? 'active' : ''}>Adopción</span>
            </nav>

            {section === 'resumen' && datos && (
                <div className='resumen-container'>
                    <div className='petCard-container'>
                        <ul className="ul-forms">
                            <li className="petCard-card">
                                <div className='petCard-header'>
                                    <h3 className='petCard-h3'>Adopción de {datos?.name}</h3>
                                </div>
                                <div className='petCard-info'>
                                    <img src={datos?.image} alt="Pet" className="petCard-img" />
                                    <div className='petCard-text'>
                                        <p className='petCard-p'><span className='petCard-span'>Nombre:</span> {datos?.name}</p>
                                        <p className='petCard-p'><span className='petCard-span'>Ciudad:</span> {datos?.city}</p>
                                        <p className='petCard-p'><span className='petCard-span'>Sexo:</span> {datos?.sex}</p>
                                    </div>
                                </div>
                            </li>
                        </ul >
                    </div>

                    <div className='aso-container'>
                        {/* <ul>
                            {protectoras.map(protectoras => {
                                <li key={protectoras._id} >
                                    <h2>Asociación Protectora {protectoras.name} </h2>
                                    <div className=''>

                                    </div>
                            }
                            
                        </ul> */}
                    </div>






                </div>

                
            )}

            {section === 'infoAdicional' && (
                <div>
                    <h1>Información Adicional</h1>
                    <p>Historia: {datos?.history}</p>
                    <p>Requisitos de Adopción: {datos?.adoptionReq}</p>
                    {/* Otras informaciones adicionales */}
                </div>
            )}

            {section === 'adoption' && (
                <div>
                    <h1>Proceso de Adopción</h1>
                    <p>Estado de Adopción: {datos?.adopted ? 'Adoptado' : 'Disponible para Adopción'}</p>
                    <p>Costo de Adopción: {datos?.adoptionFee} dólares</p>
                    {/* Otras informaciones relacionadas con la adopción */}
                </div>
            )}
        </div>
    );
};

export default AdoptionStatusPage;
