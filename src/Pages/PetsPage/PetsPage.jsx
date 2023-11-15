import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './_PetsPage.scss';
import logoHuella from '../../assets/pawprint.png';

const PetPage = () => {
    const { id } = useParams();
    const [datos, setDatos] = useState(null);
    const [tab, setTab] = useState('datos');


    useEffect(() => {
        const obtenerDatosDeAPI = async () => {
            try {
                const respuesta = await axios.get('http://localhost:5055/pets/' + id);
                console.log('Datos de la API:', respuesta.data);
                setDatos(respuesta.data);
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
                setDatos(null);
            }
        };
        obtenerDatosDeAPI();
    }, [id]);

    const cambiarTab = (nuevaTab) => {
        setTab(nuevaTab);
        console.log('Tab actual:', nuevaTab);
    };

    return (
        <div className='pet__container'>
            {datos !== null ? (
                <div>
                    <div className="pet__header">
                       
                    </div>
                    <div className="pet__body">

                        <nav>
                            <span onClick={() => cambiarTab('datos')} className={tab === 'datos' ? 'active' : ''}>Data</span>
                            <span onClick={() => cambiarTab('salud')} className={tab === 'salud' ? 'active' : ''}>Health</span>
                            <span onClick={() => cambiarTab('adopcion')} className={tab === 'adopcion' ? 'active' : ''}>Adoption</span>
                        </nav>
                        <div id="datos" className={`pet__section ${tab === 'datos' ? 'active' : ''}`}>
                            <div className="info-container">
                                <div className="data-item">
                                    <img src={logoHuella} alt="poner logo huella" />
                                    <p>Especie: </p>
                                    <p>{datos.species}</p>
                                </div>
                                <div className="data-item">
                                    <img src={logoHuella} alt="Logo de huella" />
                                    <p>Fecha de nacimiento: </p>
                                    <p>{datos.birthday}</p>
                                </div>
                                <div className="data-item">
                                    <img src={logoHuella} alt="Logo  huella" />
                                    <p>Sexo:</p>
                                    <p> {datos.sex}</p>
                                </div>
                                <div className="data-item">
                                    <img src={logoHuella} alt="Logo de huella" />
                                    <p>Tamaño:</p>
                                    <p> {datos.size}</p>
                                </div>
                                <div className="data-item">
                                    <img src={logoHuella} alt="Logo uella" />
                                    <p>Peso:</p>
                                    <p> {datos.weight} kg</p>
                                </div>
                            </div>
                            <h2 className="pet__section-title">Personalidad</h2>
                            <ul className="pet__good-list">
                                <li>Bueno con niños</li>
                                <li>Cauteloso</li>
                                <li>Tímido</li>
                                <li>Juguetón</li>
                                <li>A veces maúlla</li>
                                <li>Ladra...</li>
                            </ul>
                            <div className="pet__history-container">
                                <textarea id="petHistory" className="pet__history" defaultValue="Historial:" />
                            </div>
                            <div className="pet__section-buttons">
                                <button className="pet__button"><a href="apadrinar link">Apadrinar</a></button>
                                <button className="pet__button"><a href="adoptar link">Adoptar</a></button>
                            </div>


                            {/* masss de "Datos" */}
                        </div>

                        <div id="salud" className={`pet__section ${tab === 'salud' ? 'active' : ''}`}>
                            {tab === 'salud' && datos ? (
                                <div className="salud-container">
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Vacunado: {datos.vaccinated ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Desparasitado: {datos.deparasitized ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Salud: {datos.healthy ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Esterilizado: {datos.castrated ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Identified: {datos.identified ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Microchip: {datos.chip ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud__history-container">
                                        <textarea id="saludHistory" className="salud__history" defaultValue="Historial:" />
                                    </div>
                                </div>

                            ) : (

                                <p>que te den</p>
                            )}
                        </div>

                        <div id="adopcion" className="pet__section">
                            {/* ... Datos de adopción ... */}
                        </div>
                    </div>
                </div>
            ) : (
                <p>No hay datos disponibles</p>
            )}
        </div>

    );
};

export default PetPage;







