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
                            <Link to="/mas-option" >
                                <button className="protectoras" type="button">Asociaciones protectoras<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon' /></button>
                            </Link>
                        </div>

                        <div className='mas-option'>
                            <Link to="/eventos" >
                                <button className="eventos" type="button">Eventos<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon' /></button>
                            </Link>
                        </div>

                        <div className='mas-option'>
                            <Link to="/curiosity" >
                                <button className="curiosidades" type="button">Curiosidades<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon' /></button>
                            </Link>
                        </div>

                        <div className='mas-option'>
                            <Link to="/ayuda" >
                                <button className="ayuda" type="button">Ayuda<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon' /></button>
                            </Link>
                        </div>

                        <div className='mas-option'>
                            <Link to="/configuracion" >
                                <button className="configuracion" type="button">Configuración<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon' /></button>
                            </Link>
                        </div>

                        <div className='mas-option'>
                            
                                <button className="logout" type="button" onClick={handleLogout}>
                                    Cerrar sesión
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/>
                                </button>
                        
                        </div>
                    </div>
                </div>

                <Navbar />
            </div>
        );
    };


export default MasPage;
