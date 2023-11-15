import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './_navbar.scss';


const defaultProfilePic = 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1700049151/1009293_yrwqnw.png';

const Navbar = () => {
    const [homeIcon, setHomeIcon] = useState('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957242/home_2x_oja3h0.png');
    const [mapIcon, setMapIcon] = useState('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957481/mapa_2x_pey5kl.png');
    const [petIcon, setPetIcon] = useState('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png');

    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/home':
                setHomeIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1700039921/home_3x_i3zylz.png');
                setMapIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957481/mapa_2x_pey5kl.png');
                setPetIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png');
                break;
            case '/mapa':
                setHomeIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957242/home_2x_oja3h0.png');
                setMapIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1700040157/mapa_2x_sxtd9x.png');
                setPetIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png');
                break;
            case '/mascotasEnAdopcion':
                setHomeIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957242/home_2x_oja3h0.png');
                setMapIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957481/mapa_2x_pey5kl.png');
                setPetIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1700041469/mascota_2x_jy07db.png');
                break;
            default:
                setHomeIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957242/home_2x_oja3h0.png');
                setMapIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957481/mapa_2x_pey5kl.png');
                setPetIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png');
                break;
        }
    }, [location.pathname]);

    const isProfilePage = location.pathname === '/profile';

    const userProfile = localStorage.getItem('userProfile');

    const profilePic = userProfile || defaultProfilePic;


    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/home' >
                    <img src={homeIcon} alt='Home_Icon' />
                </Link>
                <Link to='/mapa' >
                    <img src={mapIcon} alt='Mapa_Icon' />
                </Link>
                <Link to='/mascotasEnAdopcion' >
                    <img src={petIcon} alt='Mascotas_Icon' />
                </Link>

                <Link to='/profile' className={`profile-link ${isProfilePage ? 'active-profile' : ''}`}>
                    <img
                        src={profilePic}
                        alt='Perfil'
                        className={`profile-image ${isProfilePage ? 'active-border' : ''}`}
                    />
                </Link>

                <Link to='/mas' className={location.pathname === '/mas' ? 'active more' : 'more'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;

