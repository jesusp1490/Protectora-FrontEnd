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
                            <button className="miPerfil" type="button">Mi Perfil<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow'/></button>
                        </Link>
                    </div>

                    <div className='direcciones'>
                        <Link to="/profile/direcciones" >
                            <button className="userProfile-option" type="button">Direcciones</button>
                        </Link>
                    </div>

                    <Link to="/profile/favoritos" >
                        <button className="userProfile-option" type="button">Favoritos</button>
                    </Link>

                    <Link to="/profile/notificaciones" >
                        <button className="userProfile-option" type="button">Notificaciones</button>
                    </Link>

                    <Link to="/profile/adopcion" >
                        <button className="userProfile-option" type="button">Estado de la adopción</button>
                    </Link>

                    <Link to="/profile/apadrinar" >
                        <button className="userProfile-option" type="button">Apadrinar</button>
                    </Link>

                    <Link to="/profile/donar" >
                        <button className="userProfile-option" type="button">Donar</button>
                    </Link>

                    
                </div>
            </div>

            <Navbar />
        </div>
    );
};

export default UserProfile;