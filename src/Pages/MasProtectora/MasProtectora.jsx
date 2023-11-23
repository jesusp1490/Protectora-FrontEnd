import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/NavbarProtectora/NavbarProtectora';
import './_MasProtectora.scss'

const MasProtectora = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
            navigate('/');
    }

        return (
            <div className='mas-container-protectora'>
                <div className='mas-menu-protectora'>
                    <div>

                        <div className='mas-option-protectora'>
                            <Link to="/curiosidades" >
                                <button className="curiosidades-protectora" type="button">
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700578469/blogCopy_2x_wpi8vx.png' alt='Mas-icon' className='mas-icon'/>
                                    <p className='masP-curi-p'>Curiosidades</p>
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/>
                                </button>
                            </Link>
                        </div>

                        <div className='mas-option-protectora'>
                            <Link to="/help-protectoras" >
                                <button className="ayuda-protectora" type="button">
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700578469/ayuda_2x_kzfxcj.png' alt='Mas-icon' className='mas-icon'/>
                                    <p className='masP-ayu-p'>Ayuda</p>
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/>
                                </button>
                            </Link>
                        </div>

                        <div className='mas-option-protectora'>
                                <button className="configuracion-protectora" type="button">
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700592838/confi_2x_pby5qu.png' alt='Mas-icon' className='mas-icon'/>
                                    <p className='masP-conf-p'>Configuración</p>
                                </button>
                        </div>

                        <div className='mas-option-protectora'>
                                <button className="logout-protectora" type="button" onClick={handleLogout}>
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700578470/salir_2x_yacals.png' alt='Mas-icon' className='mas-icon'/>
                                    <p className='masP-log-p'>Cerrar sesión</p>
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/>
                                </button>
                        </div>
                    </div>
                </div>

                <Navbar/>  
            </div>
        );
    };


export default MasProtectora;