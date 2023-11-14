import React from 'react';
import { Link } from 'react-router-dom';
import './_UserProfilePage.scss'

const UserProfile = () => {


    return (
        <div className='userProfile-container'>
            
            <div className='userImg-container'>
                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1697206175/imageMale_mqwzhf.png' alt='User Foto' />
            </div>

            <div className='userProfile-menu'>
                <div>
                    <div className='miPerfil'>
                        <Link to="/profile/mi-perfil" >
                            <button className="userProfile-option" type="button">Mi Perfil<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' /></button>
                        </Link>
                    </div>

                    <Link to="/profile/direcciones" >
                        <button className="userProfile-option" type="button">Direcciones</button>
                    </Link>

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
        </div>
    );
};

export default UserProfile;