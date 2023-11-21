import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/NavbarProtectora/NavbarProtectora';

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
                                <button className="curiosidades-protectora" type="button">Curiosidades<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon' /></button>
                            </Link>
                        </div>

                        <div className='mas-option-protectora'>
                            <Link to="/ayuda" >
                                <button className="ayuda-protectora" type="button">Ayuda<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon' /></button>
                            </Link>
                        </div>

                        <div className='mas-option-protectora'>
                            <Link to="/configuracion" >
                                <button className="configuracion-protectora" type="button">Configuración<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon' /></button>
                            </Link>
                        </div>

                        <div className='mas-option-protectora'>
                            
                                <button className="logout-protectora" type="button" onClick={handleLogout}>
                                    Cerrar sesión
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