import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './_navbar.scss';

const Navbar = ({ userProfile }) => {
    useEffect(() => {
        console.log('userProfile en Navbar:', userProfile);
    }, [userProfile]);

    const profilePic = localStorage.getItem('userProfile');

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/'>
                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957242/home_2x_oja3h0.png' alt='Home_Icon' />
                </Link>
                <Link to='/mapa'>
                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957481/mapa_2x_pey5kl.png' alt='Mapa_Icon' />
                </Link>
                <Link to='/mascotasEnAdopcion'>
                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png' alt='Mascotas_Icon' />
                </Link>

                {profilePic && (
                    <Link to='/profile' className='profile-link'>
                        <img
                            src={profilePic}
                            alt='Perfil'
                            className='profile-image'
                        />
                    </Link>
                )}

                <Link to='/mas'>
                    <div className='more'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;

