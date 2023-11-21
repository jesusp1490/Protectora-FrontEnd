import React from 'react';
import { Link } from 'react-router-dom';
import './_UserProfilePage.scss';
import Navbar from '../../Components/Navbar/Navbar';

const defaultProfilePic = 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1700049151/1009293_yrwqnw.png';

const UserProfilePage = () => {

    const profilePic = localStorage.getItem('userImage') || defaultProfilePic;

    return (
        <div className='userProfile-container'>
            <div className='userImg-container'>
                <img src={profilePic} alt='User Foto' className='user-img'/>
            </div>

            <div className='userProfile-menu'> 
                <div>
                    <div className='userProfile-option'>
                        <Link to="/mi-perfil" >
                            <button className="miPerfil" type="button">
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700179683/chico_2x_wbo3pi.png' alt='Perfil-icon' className='userProfile-icon'/>
                                <p className='userProfile-p'>Mi Perfil</p>
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/>
                            </button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/profile/direcciones" >
                            <button className="direcciones" type="button">
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700180487/localization_2x_a8zdgg.png' alt='Perfil-icon' className='userProfile-icon'/>
                                <p className='userProfile-loc-p'>Direcciones</p>
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/profile/favoritos" >
                            <button className="favoritos" type="button">
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700180775/favoritosCopy_2x_rqbhda.png' alt='Perfil-icon' className='userProfile-icon'/>
                                <p className='userProfile-fav-p'>Favoritos</p>
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/adoption-status-list" >
                            <button className="adoptionStatus" type="button">
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png' alt='Perfil-icon' className='userProfile-icon'/>
                                <p className='userProfile-adop-p'>Estado de la adopción</p>
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/profile/apadrinar" >
                            <button className="apadrinar" type="button">
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700181496/apadrina_ubej4m.png' alt='Perfil-icon' className='userProfile-icon'/>
                                <p className='userProfile-apad-p'>Apadrina</p>
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    <div className='userProfile-option'>
                        <Link to="/profile/donar" >
                            <button className="donar" type="button">
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700181795/donar_2x_dxcvrk.png' alt='Perfil-icon' className='userProfile-icon'/>
                                <p className='userProfile-don-p'>Dona</p>
                                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' className='arrow-icon'/></button>
                        </Link>
                    </div>

                    
                </div>
            </div>

            <Navbar isProfilePage={true} />
        </div>
    );
};

export default UserProfilePage;