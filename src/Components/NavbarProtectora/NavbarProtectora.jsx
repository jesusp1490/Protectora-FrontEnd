import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


const defaultProfilePic = 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1700049151/1009293_yrwqnw.png';

const Navbar = () => {
    const [homeIcon, setHomeIcon] = useState('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957242/home_2x_oja3h0.png');
    const [mapIcon, setMapIcon] = useState('https://res.cloudinary.com/dizd9f3ky/image/upload/v1700336089/email_2x_zqivcd.png');
    const [petIcon, setPetIcon] = useState('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png');
    const [datas, setDatas] = useState({})

    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/home-protectora':
                setHomeIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1700039921/home_3x_i3zylz.png');
                setMapIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1700336089/email_2x_zqivcd.png');
                setPetIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png');
                break;
            case '/forms-list':
                setHomeIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957242/home_2x_oja3h0.png');
                setMapIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1700336178/email_2x_dagg1i.png');
                setPetIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png');
                break;
            case '/shelter-pets':
                setHomeIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957242/home_2x_oja3h0.png');
                setMapIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1700336089/email_2x_zqivcd.png');
                setPetIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1700041469/mascota_2x_jy07db.png');
                break;
            default:
                setHomeIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957242/home_2x_oja3h0.png');
                setMapIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1700336089/email_2x_zqivcd.png');
                setPetIcon('https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png');
                break;
        }
    }, [location.pathname]);

    const isProfilePage = location.pathname === '/profile-protectora';

    const protectoraId = localStorage.getItem('protectoraID');

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5055/protectoras/${protectoraId}`)
            console.log(data)
            setDatas(data)
        }
        if (protectoraId) {
            getData();
        }
    }, [protectoraId])

    const profilePic = datas.image || defaultProfilePic;


    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/home-protectora' >
                    <img src={homeIcon} alt='Home_Icon' className='nav-icons'/>
                </Link>
                <Link to='/forms-list' >
                    <img src={mapIcon} alt='Mapa_Icon' className='nav-icons'/>
                </Link>
                <Link to='/shelter-pets' >
                    <img src={petIcon} alt='Mascotas_Icon' className='nav-icons'/>
                </Link>

                <Link to='/profile-protectora' className={`profile-link ${isProfilePage ? 'active-profile' : ''}`}>
                    <img
                        src={profilePic}
                        alt='Perfil'
                        className={`profile-image ${isProfilePage ? 'active-border' : ''}`}
                    />
                </Link>

                <Link to='/mas-protectora' className={location.pathname === '/mas-protectora' ? 'active more' : 'more'}>
                    <span className='nav-span'></span>
                    <span className='nav-span'></span>
                    <span className='nav-span'></span>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;