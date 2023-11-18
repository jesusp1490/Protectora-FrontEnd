import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './_MasPage.scss';

const MasPage = ({ userProfile }) => {

    console.log('userProfile:', userProfile);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userUsername');
        localStorage.removeItem('userPassword');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userAvatarImage');
        localStorage.removeItem('userName');
        localStorage.removeItem('userSurname');
        localStorage.removeItem('userAdoptionStatus');

        navigate('/home');
    };

    return (
        <div className='mas-container'>
            <div className='mas-menu'>
                <div>
                    <div className='mas-option'>
                        <Link to="/login-protectora" >
                            <button className="protectoras" type="button">Asociaciones protectoras<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='mas-option'>
                        <Link to="/eventos" >
                            <button className="eventos" type="button">Eventos<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='mas-option'>
                        <Link to="/curiosidades" >
                            <button className="curiosidades" type="button">Curiosidades<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='mas-option'>
                        <Link to="/ayuda" >
                            <button className="ayuda" type="button">Ayuda<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='mas-option'>
                        <Link to="/configuracion" >
                            <button className="configuracion" type="button">Configuración<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='mas-option'>
                        {userProfile && (
                            <button className="logout" type="button" onClick={handleLogout}>Cerrar sesión<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        )}
                    </div>
                </div>
            </div>

            <Navbar />
        </div>
    );
};

export default MasPage;
