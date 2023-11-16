import React from 'react';
import { Link } from 'react-router-dom';
import './_UserProfilePage.scss';
import Navbar from '../../Components/Navbar/navbar';

const defaultProfilePic = 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1700049151/1009293_yrwqnw.png';

const UserProfile = () => {

    
    const profilePic = localStorage.getItem('userProfile');

    const userImage = profilePic || defaultProfilePic;

    return (
        <div className='userProfile-container'>
            <div className='userImg-container'>
                <img src={userImage} alt='User Foto' className='user-img'/>
            </div>

            <div className='userProfile-menu'>
                <div>
                    <div className='userProfile-option'>
                        <Link to="/profile/mi-perfil" >
                            <button className="miPerfil" type="button">Mi Perfil<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/profile/direcciones" >
                            <button className="direcciones" type="button">Direcciones<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/profile/favoritos" >
                            <button className="favoritos" type="button">Favoritos<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/profile/notificaciones" >
                            <button className="notificaciones" type="button">Notificaciones<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/profile/status-adoption" >
                            <button className="adoptionStatus" type="button">Estado de la adopción<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/profile/apadrinar" >
                            <button className="apadrinar" type="button">Apadrinar<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/profile/donar" >
                            <button className="donar" type="button">Donar<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    
                </div>
            </div>

            <Navbar />
        </div>
    );
};

export default UserProfile;