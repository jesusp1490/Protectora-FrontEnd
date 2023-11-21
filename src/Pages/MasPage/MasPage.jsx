import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './_MasPage.scss';

const MasPage = () => {

    const username = localStorage.getItem('userUsername');
    console.log(username);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
            navigate('/');
    }

        return (
            <div className='mas-container'>
                <div className='mas-menu'>
                    <div>

                        <div className='mas-option'>
                            <Link to="/mi-perfil" >
                                <button className="protectoras" type="button">
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700578469/protectora_2x_uakit0.png' alt='Mas-icon' className='mas-icon'/>
                                    <p className='mas-aso-p'>Asociaciones protectoras</p>
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/>
                                </button>
                            </Link>
                        </div>

                        <div className='mas-option'>
                            <Link to="/mi-perfil" >
                                <button className="curiosidades" type="button">
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700578469/blogCopy_2x_wpi8vx.png' alt='Mas-icon' className='mas-icon'/>
                                    <p className='mas-curi-p'>Curiosidades</p>
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/>
                                </button>
                            </Link>
                        </div>
                        
                        <div className='mas-option'>
                            <Link to="/mi-perfil" >
                                <button className="ayuda" type="button">
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700578469/ayuda_2x_kzfxcj.png' alt='Mas-icon' className='mas-icon'/>
                                    <p className='mas-ayu-p'>Ayuda</p>
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/>
                                </button>
                            </Link>
                        </div>

                        <div className='mas-option'>
                                <button className="configuracion" type="button">
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700578468/confi_2x_jfjquv.png' alt='Mas-icon' className='mas-icon'/>
                                    <p className='mas-conf-p'>Configuración</p>
                                    
                                </button>
                        </div>

                        <div className='mas-option'>
                            <Link to="/mi-perfil" >
                                <button className="logout" type="button" onClick={handleLogout}>
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700578470/salir_2x_yacals.png' alt='Mas-icon' className='mas-icon'/>
                                    <p className='mas-log-p'>Cerrar sesión</p>
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

                <Navbar />
            </div>
        );
    };


export default MasPage;
