import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './_PetsPage.scss';
import logoHuella from '../../assets/pawprint.png';
import logoEnviar from '../../assets/compartir.png';
import logoSex from '../../assets/group10.png';
import logoAyuda from '../../assets/ayuda.png';

const PetPage = () => {
    const { id } = useParams();
    const [datos, setDatos] = useState(null);
    const [tab, setTab] = useState('datos');
    const [imagenActual, setImagenActual] = useState(0);

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
    const cambiarImagen = (indice) => {
        setImagenActual(indice);
    };
    // const handleAdoptarClick = () => {
    //     const confirmarAdopcion = window.confirm('¿Quieres continuar con el proceso de adopción?');

    //     if (confirmarAdopcion) {
    //       
    //         console.log('Adopción confirmada');
    //     } else {
    //         console.log('Adopción cancelada');
    //     }
    // };

    return (
        // <div className="pet__container">
        // {datos !== null && datos.images && datos.images.length > 0 ? (
        //     <div
        //         className="pet__header"
        //         style={{
        //             backgroundImage: `url(${datos.images[0]})`,
        //         }}
        //     >
        //             <div className="header-logo1">
        //                 <img src={logoEnviar} alt="Descripción de la imagen" />
        //             </div>
        //             <div className="header-titles">
        //                 <h1>{datos.name}</h1>
        //                 <h2>{datos.city}</h2>
        //             </div>
        //             <div className="header-logos">
        //                 <img src={logoEnviar} alt="Descripción de la imagen 1" />
        //                 <img src={logoEnviar} alt="Descripción de la imagen 2" />
        //             </div>

        <div className="pet__container">
            {datos !== null && datos.images && datos.images.length > 0 ? (
                <div
                    className="pet__header"
                    style={{
                        backgroundImage: `url(${datos.images[imagenActual]})`,
                    }}
                >
                    <div className="header-container">
                        <div>  <div className="header-logo-title">
                            <img src={logoSex} alt="Descripción de la imagen" />
                        </div>
                            <div className="header-titles">
                                <h1>{datos.name}</h1>
                                <h2>{datos.city}</h2>
                            </div>
                            <div className="header-logos">
                                <img src={logoEnviar} alt="Descripción de la imagen 1" />
                                <img src={logoEnviar} alt="Descripción de la imagen 2" />
                            </div>
                        </div>
                    </div>
                    <div className="pet__image-indicators">
                        {datos.images.map((imagen, index) => (
                            <div
                                key={index}
                                className={`image-indicator ${index === imagenActual ? 'active' : ''}`}
                                onClick={() => cambiarImagen(index)}
                            />
                        ))}
                    </div>




                    <div className="pet__body">
                        <nav>
                            <span onClick={() => cambiarTab('datos')} className={tab === 'datos' ? 'active' : ''}>Datos</span>
                            <span onClick={() => cambiarTab('salud')} className={tab === 'salud' ? 'active' : ''}>Salud</span>
                            <span onClick={() => cambiarTab('adopcion')} className={tab === 'adopcion' ? 'active' : ''}>Adopcion</span>
                        </nav>
                        <div id="datos" className={`pet__section ${tab === 'datos' ? 'active' : ''}`}>
                            <div className="info-container">
                                <div className="data-item">
                                    <img src={logoHuella} alt="poner logo huella" />
                                    <p>Especie </p>
                                    <p>{datos.species}</p>
                                </div>
                                <div className="data-item">
                                    <img src={logoHuella} alt="Logo de huella" />
                                    <p>Fecha de nacimiento</p>
                                    <p>{datos.birthday}</p>
                                </div>
                                <div className="data-item">
                                    <img src={logoHuella} alt="Logo  huella" />
                                    <p>Sexo</p>
                                    <p> {datos.sex}</p>
                                </div>
                                <div className="data-item">
                                    <img src={logoHuella} alt="Logo de huella" />
                                    <p>Tamaño</p>
                                    <p> {datos.size}</p>
                                </div>
                                <div className="data-item">
                                    <img src={logoHuella} alt="Logo uella" />
                                    <p>Peso</p>
                                    <p> {datos.weight} kg</p>
                                </div>
                            </div>
                            <div><h2 className="pet__section-title">Personalidad</h2></div>
                            <ul className="pet__good-list">
                                <li>Bueno con niños</li>
                                <li>Cauteloso</li>
                                <li>Tímido</li>
                                <li>Juguetón</li>
                                <li>A veces maúlla, ladra...</li>
                            </ul>
                            <div className="caja-texto">
                                <p className='texto-azul'>Historial</p>
                                <span id="petHistory"                                   
                                    readOnly>{`${datos.history || "No tiene historial"}`}</span>
                               

                            </div>

                            {/* <div className="pet__history-container">
                                <div className="history-content">
                                    <textarea
                                        id="petHistory"
                                        className="pet__history"
                                        defaultValue={`Historia ${datos.history || "No tiene historia para mostrar"}`}
                                        readOnly
                                    />
                                </div>
                            </div> */}



                            <div className="pet__section-buttons">
                                <button className="pet__button"><a href="apadrinar link">Apadrinar</a></button>
                                <button className="pet__button"><a href="adoptar link">Adoptar</a></button>
                            </div>
                        </div>





                        <div id="salud" className={`pet__section ${tab === 'salud' ? 'active' : ''}`}>
                            {tab === 'salud' && datos ? (
                                <div className="salud-container">
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Vacunado </p>
                                        <p>{datos.vaccinated ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Desparasitado </p>
                                        <p>{datos.deparasitized ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Salud</p>
                                        <p> {datos.healthy ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Esterilizado</p>
                                        <p> {datos.castrated ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Identified</p>
                                        <p>{datos.identified ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud-item">
                                        <img src={logoHuella} alt="Logo" />
                                        <p>Microchip </p>
                                        <p>{datos.chip ? 'Sí' : 'No'}</p>
                                    </div>
                                    <div className="salud__history-container">
                                        <span id="saludHistory"
                                            className="salud__history"
                                            readOnly
                                        >  {datos.healthDetails || "Historial: No tiene historial"}
                                        </span>
                                    </div>
                                    <div className="pet__section-buttons">
                                        <button className="pet__button"><a href="apadrinar link">Apadrinar</a></button>
                                        <button className="pet__button"><a href="adoptar link">Adoptar</a></button>
                                    </div>
                                </div>

                            ) : (

                                <p>que te den</p>
                            )}
                        </div>




                        <div id="adopcion" className={`pet__section ${tab === 'adopcion' ? 'active' : ''}`}>

                            <div className="perfil-adopcion">
                                <div className="caja-texto">
                                    <p className="texto-azul">Requisitos de adopción</p>
                                    <span className="perfil__textarea"
                                        readOnly>{`${datos.adoptionReq || "No hay requisitos de adopción disponibles"}`}</span>

                                </div>
                                <div className="caja-texto">
                                    <span className="perfil__textarea texto-azul"
                                        readOnly>{`Tasa de adopción\n${datos.adoptionFee || "Tasa de adopción no disponible"}`}</span>

                                    <img className="logo-ayuda" src={logoAyuda} alt="Descripción de la imagen" />
                                </div>
                                <div className="caja-texto">
                                    <span className="perfil__textarea texto-azul"
                                        readOnly>{`¿Se envía a otra ciudad?\n${datos.delivery || "Información de transporte no disponible"}`} </span>
                                </div>
                            </div>
                            <div className="pet__section-buttons">
                                <button className="pet__button"><a href="apadrinar link">Apadrinar</a></button>
                                <button className="pet__button"><a href="adoptar link">Adoptar</a></button>
                            </div>
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






