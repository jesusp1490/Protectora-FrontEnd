import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './_ProfileProtectora.scss'
import NavbarProtectora from '../../../Components/NavbarProtectora/NavbarProtectora'
import Button from '../../../Components/Button/Button';

const ProfileProtectora = () => {
    const [datas, setDatas] = useState({})

    const profileID = localStorage.getItem('protectoraID')

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5055/protectoras/${profileID}`)
            console.log(data)
            setDatas(data)
        }
        if (profileID) {
            getData();
        }
    }, [profileID])


    console.log(profileID)

    return (
        <div className='profileProtectora-container'>
            <div>
                <img src={datas.image} alt="Profile" className='profileProtectora-img' />
            </div>

            <div className='profileProtectora-info'>
                <h2 className='profileProtectora-h2'>Nombre: </h2>
                <p className='profileProtectora-p'>{datas.name}</p>

                <h2 className='profileProtectora-h2'>Email: </h2>
                <p className='profileProtectora-p'>{datas.email}</p>

                <h2 className='profileProtectora-h2'>Dirección:</h2>
                <p className='profileProtectora-p'>{datas.street} número {datas.number}, {datas.city}</p>

                <h2 className='profileProtectora-h2'>Telefono: </h2>
                <p className='profileProtectora-p'>{datas.phone}</p>
            </div>

            <Link to={`/update-protectora/${profileID}`}>
                <Button className='btn-main' texto='Editar información' type='button' />
            </Link>

            <NavbarProtectora/>

        </div>
    )
};

export default ProfileProtectora;