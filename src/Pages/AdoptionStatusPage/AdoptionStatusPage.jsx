import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './_AdoptionStatusPage.scss';
import ImageUploader from '../../Components/ImageUploader.jsx/ImageUploader';
import Navbar from '../../Components/Navbar/Navbar';
import Button from '../../Components/Button/Button';

const CustomAlert = ({ onClose }) => {
    return (
        <div className="custom-alert-container">
            <div className="custom-alert-card">
                <span className="close-button" onClick={onClose}>
                    &times;
                </span>
                <h2 className="custom-alert-title">¡Enviado!</h2>
                <p className="custom-alert-message">
                Ya hemos enviado toda la info a la protectora.
                </p>
                <p className="custom-alert-message">
                Recuerda que puedes ponerte en contacto con ellos en cualquier momento si necesitas cambiar algo.
                </p>
                <img
                    src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700430696/undrawNatureFunN9Lv1_2x_a9ll3l.png"
                    alt="Alert Img"
                    className="custom-alert-picture"
                />
            </div>
        </div>
    );
};

const AdoptionStatusPage = ({ protectora }) => {
    const petID = useParams().id;
    const navigate = useNavigate();
    const [section, setSection] = useState('');
    const [datos, setDatos] = useState(null);
    const [protectoras, setProtectoras] = useState([]);
    const [imagenes, setImagenes] = useState([null, null, null]);
    const [paymentOption, setPaymentOption] = useState('pagoUnico');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const showCustomAlert = () => {
        setShowAlert(true);
    };

    const closeCustomAlert = () => {
        setShowAlert(false);
        navigate('/adoption-status-list');
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const respuesta = await axios(`http://localhost:5055/pets/${petID}`);
                setDatos(respuesta.data);
                console.log('datos?.protectora:', datos?.protectora);
            } catch (error) {
                console.error('Error fetching form data:', error);
                setDatos(null);
            }
        };
        getData();
    }, [petID, datos?.protectora]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5055/protectoras');
                if (response.status === 200) {
                    setProtectoras(response.data);
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
    };

    const handleImageChange = (index, img) => {
        const nuevasImagenes = [...imagenes];
        nuevasImagenes[index] = img;
        setImagenes(nuevasImagenes);
    };

    const handlePaymentOptionChange = (option) => {
        setPaymentOption(option);
    };

    const handleSubmitInfoA = () => {

    };

    const handleSubmitAdopt = () => {
        showCustomAlert();
    };

    return (
        <div className="adoptStatus-container">
            <div className="adoptStatus-header">
                <Link to="/adoption-status-list">
                    <img
                        src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700181379/Imagen_de_WhatsApp_2023-11-17_a_las_01.35.29_156d94f2_yju73f.jpg"
                        alt=""
                        className="adoptStatus-header-img"
                    />
                </Link>
                <h2 className="adoptStatus-h2">Adopción de {datos?.name}</h2>
            </div>

            <nav className="adoptStatus-nav">
                <span onClick={() => handleSection('resumen')} className={section === 'resumen' ? 'active' : ''}>
                    Resumen
                </span>
                <span onClick={() => handleSection('infoAdicional')} className={section === 'infoAdicional' ? 'active' : ''}>
                    Info adicional
                </span>
                <span onClick={() => handleSection('adoption')} className={section === 'adoption' ? 'active' : ''}>
                    Adopción
                </span>
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
                        </ul>
                    </div>

                    <div className='aso-container'>
                        <ul>
                            {protectoras.map(protectoraItem => {
                                const protectoraName = protectoraItem.name;
                                if (datos?.protectora === protectoraName) {
                                    return (
                                        <li key={protectoraItem._id}>
                                            <div className='aso-header'>
                                                <img src={protectoraItem.image} alt="Protectora" className="aso-img" />
                                                <div className='aso-header-p'>
                                                    <p className='aso-header-p1'> Asociación Protectora {protectoraItem.name}</p>

                                                    <div className='aso-header2'>
                                                        <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700180487/localization_2x_a8zdgg.png' alt='' className='aso-map-icon' />
                                                        <p className='aso-header-p2'>{protectoraItem.street}, {protectoraItem.number}. {protectoraItem.city}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className='aso-h1'>[MAPITA]</h1>

                                            <div className='aso-contacto'>
                                                <p className='aso-p-contacto'> Contacta con nosotros: </p>
                                                <div className='contact-info'>
                                                    <p className='aso-p-email'> <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700336178/email_2x_dagg1i.png' alt='email-icon' className='aso-icon' />{protectoraItem.email}</p>
                                                    <p className='aso-p-phone'> <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700487269/whatsapp_2x_v5xf8p.png' alt='email-icon' className='aso-icon' />{protectoraItem.phone}</p>
                                                </div>
                                            </div>

                                            {/* Display other protectora information as needed */}
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </div>
            )}

            {section === 'infoAdicional' && (
                <div className='infoA-container'>
                    <div className='infoA-imagenes'>
                        <p className='infoA-title'>Subir imagenes</p>
                        <p className='infoA-p'>Necesitamos que nos subas algunas fotos de dónde va vivir tu nueva mascota para poder echarte una mano si necesitas algo más de información</p>

                        <div className='infoA-upload'>
                            <ImageUploader onImageChange={(img) => handleImageChange(0, img)} />
                            <ImageUploader onImageChange={(img) => handleImageChange(1, img)} />
                            <ImageUploader onImageChange={(img) => handleImageChange(2, img)} />
                        </div>

                        <p className='infoA-title'>¿De que forma quiéres pagar?</p>
                        <p className='infoA-p'>Para pagar las tasas de adopción puedes elegir o pagarlo mediante la app con un pago único o poniéndose en contacto con la protectora para fraccionar el pago</p>

                        <div>
                            <h3 className='infoA-price'>Precio: <span className='infoA-span-price'>{datos?.adoptionFee}€</span></h3>
                        </div>

                        <div className='infoA-paymentOption'>
                            <label>
                                <input
                                    type='radio'
                                    value='pagoUnico'
                                    checked={paymentOption === 'pagoUnico'}
                                    onChange={() => handlePaymentOptionChange('pagoUnico')}
                                    className='infoA-input-paymentOption'
                                />
                                Pago único
                            </label>
                            <label>
                                <input
                                    type='radio'
                                    value='fraccionarPago'
                                    checked={paymentOption === 'fraccionarPago'}
                                    onChange={() => handlePaymentOptionChange('fraccionarPago')}
                                    className='infoA-input-paymentOption'
                                />
                                Fraccionar el pago
                            </label>
                        </div>

                        <div className="infoA-btn">
                            <Button className='btn-pink' texto='Enviar' type="button" onClick={handleSubmitInfoA} />
                        </div>

                    </div>
                </div>
            )}

            {section === 'adoption' && (
                <div className='adopt-container'>

                    <p className='adopt-p'>Dirección</p>

                    <div className='aso-container'>
                        <ul>
                            {protectoras.map(protectoraItem => {
                                const protectoraName = protectoraItem.name;
                                if (datos?.protectora === protectoraName) {
                                    return (
                                        <li key={protectoraItem._id}>
                                            <div className='aso-header'>
                                                <img src={protectoraItem.image} alt="Protectora" className="aso-img" />
                                                <div className='aso-header-p'>
                                                    <p className='aso-header-p1'> Asociación Protectora {protectoraItem.name}</p>

                                                    <div className='aso-header2'>
                                                        <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700180487/localization_2x_a8zdgg.png' alt='' className='aso-map-icon' />
                                                        <p className='aso-header-p2'>{protectoraItem.street}, {protectoraItem.number}. {protectoraItem.city}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className='aso-h1'>[MAPITA]</h1>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>

                    <div className='adopt-pickup'>
                        <label className="adopt-pickup-label" htmlFor='pickupDate'>Fecha de Recogida: </label>
                        <input
                            type='date'
                            id='pickupDate'
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            className='adopt-pickup-inputDate'
                        />

                        <label className="adopt-pickup-label" htmlFor='pickupTime'>Hora de Recogida: </label>
                        <input
                            type='time'
                            id='pickupTime'
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className='adopt-pickup-inputTime'
                        />
                    </div>

                    <div className="adopt-btn">
                        <Button className='btn-pink' texto='Enviar' type="button" onClick={handleSubmitAdopt} />
                    </div>
                </div>
            )}

            {showAlert && <CustomAlert onClose={closeCustomAlert} />}

            <Navbar />
        </div>
    );
};

export default AdoptionStatusPage;
