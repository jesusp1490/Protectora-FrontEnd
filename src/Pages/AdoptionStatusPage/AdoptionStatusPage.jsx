import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PetCard from '../../Components/AdoptionStatus/PetCard/PetCard';
import ProtectoraInfo from '../../Components/AdoptionStatus/ProtectoraInfo/ProtectoraInfo';
import InfoAdicional from '../../Components/AdoptionStatus/InfoAdicional.jsx/InfoAdicional';
import PetRecogida from '../../Components/AdoptionStatus/PetRecogida/PetRecogida';
import './_AdoptionStatusPage.scss';


const AdoptionStatusPage = () => {

    const { id } = useParams();
    const [section, setSection] = useState('resumen');
    const [datos, setDatos] = useState(null);
    const [tab, setTab] = useState('datos');

    useEffect(() => {
        const getData = async () => {
            try {
                const respuesta = await axios.get('http://localhost:5055/pets/' + id);
                console.log('Data de la API', respuesta.data);
                setDatos(respuesta.data);
            } catch (error) {
                console.error('Error fetching pets:', error);
                setDatos(null);
            }
        };
        getData();

    }, [id]);

        const handleSection = (newTab) => {
            setSection(newTab)
            console.log('Actual Tab', newTab);

        }

        return (
            <div className='adoptStatus-container'>
                <div className='adoptStatus-header'>
                    <img
                        src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700181379/Imagen_de_WhatsApp_2023-11-17_a_las_01.35.29_156d94f2_yju73f.jpg"
                        alt=""
                        // onClick={handleBackOne} 
                        className="adoptStatus-header-img"
                    />
                    <h2 className='adoptStatus-h2'>Adopción de {datos.name}</h2>
                </div>

                <nav className='adoptStatus-nav'>
                    <span onClick={() => handleSection('resumen')} className={section === 'resumen' ? 'active' : ''}>Resumen</span>
                    <span onClick={() => handleSection('infoAdicional')} className={section === 'infoAdicional' ? 'active' : ''}>Info adicional</span>
                    <span onClick={() => handleSection('adoption')} className={section === 'adoption' ? 'active' : ''}>Adopción</span>
                </nav>

                {section === 'resumen' && (
                    <div>
                        <h1>resume</h1>
                        {datos && <PetCard datos={datos} />}
                        {/* <ProtectoraInfo /> */}
                    </div>
                )}

                {section === 'infoAdicional' && (
                    <div>
                        <h1>info</h1>
                        {/* <InfoAdicional /> */}
                    </div>
                )}

                {section === 'adoption' && (
                    <div>
                        <h1>adoption</h1>
                        {/* <PetRecogida /> */ }
                    </div>
                )}
            </div>
        );
}
export default AdoptionStatusPage;