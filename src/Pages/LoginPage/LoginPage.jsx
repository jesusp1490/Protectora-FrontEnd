import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar';
import './_LoginPage.scss';
import Button from '../../Components/Button/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userProfile, setUserProfile] = useState(null);
    const navigate = useNavigate(); 

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5055/users/login', {
                email,
                password,
            });

            const data = response.data;

            if (data.success) {
                console.log('Datos del usuario:', data.userInfo);
                console.log('foto de perfil', data.userInfo.avatarImage);
                console.log('Inicio de sesión exitoso');
                
                const userResponse = await axios.get(`http://localhost:5055/users/${email}`);
                const userProfile = userResponse.data;

                setUserProfile(data.userInfo);

                localStorage.setItem('userEmail', data.userInfo.email);
                localStorage.setItem('userUsername', data.userInfo.username);
                localStorage.setItem('userPassword', data.userInfo.password);
                localStorage.setItem('userRole', data.userInfo.role);
                localStorage.setItem('userImage', data.userInfo.avatarImage);
                localStorage.setItem('userName', data.userInfo.name);
                localStorage.setItem('userSurname', data.userInfo.surname);
                localStorage.setItem('userAdoptionStatus', data.userInfo.adoptionStatus);

                navigate('/home');
            } else {
                console.error(data.message);
                alert('El correo electrónico o la contraseña son incorrectos, inténtelo de nuevo.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='login-container'>

            <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699728927/logo_drgic5.png' alt='Logo' />
            <p className='login-p'>¡Hola! para continuar, inicia sesión como usuario o crea una cuenta</p>

            <form onSubmit={handleLogin}>
                <div className="inputbox3">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-field"
                    />
                    <label htmlFor="" className="form-label">
                        Email:
                    </label>
                </div>

                <div className="inputbox3">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-field"
                    />
                    <label htmlFor="" className="form-label">
                        Password:
                    </label>
                </div>

                <p className='forgot'>¿Has olvidado tu contraseña?</p>

                
                <Button className="btn-main" texto="Iniciar Sesión" type="submit" />

                <Link to="/register">
                    <Button className='btn-empty' texto="Crear Cuenta" type="button" />
                </Link> 
            </form>
            {userProfile && <Navbar userProfile={userProfile} />}
        </div>
    );
};

export default Login;