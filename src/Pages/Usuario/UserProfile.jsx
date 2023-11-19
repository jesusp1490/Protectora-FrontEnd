import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './_UserProfile.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Button from '../../Components/Button/Button';

const UserProfile = () => {
    const [datas, setDatas] = useState({})

    const userProfile = localStorage.getItem('userEmail')

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5055/users/${userProfile}`);
            console.log('data:', data)
            setDatas(data[0])
            
        }
        if (userProfile) {
            getData();
        }
    }, [userProfile])

    console.log(userProfile);

    return (
        <div className='userProfile-container'>
            <div>
                <img src={datas.avatarImage} alt="Profile" className='userProfile-img' />
            </div>

            <div className='userProfile-info'>
                <h2 className='userProfile-h2'>Nombre: </h2>
                <p className='userProfile-p'>{datas.name}</p>
                
                <h2 className= 'userProfile-h2'>Apellido:</h2>
                <p className='userProfile-p'>{datas.surname}</p>

                <h2 className='userProfile-h2'>Username:</h2>
                <p className='userProfile-p'>{datas.username}</p>

                <h2 className='userProfile-h2'>Email: </h2>
                <p className='userProfile-p'>{datas.email}</p>
            </div>

            <Link to={`/update-usuario/${datas._id}`}>
                <Button className='btn-main' texto='Editar información' type='button' />
            </Link>

            <Navbar />

        </div>
    );
};

export default UserProfile;