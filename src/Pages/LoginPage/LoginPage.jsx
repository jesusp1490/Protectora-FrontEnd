import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                console.log('Inicio de sesión exitoso');
                navigate('/profile');
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
            <p>¡Hola! para continuar, inicia sesión o crea una cuenta</p>

            <form onSubmit={handleLogin}>
                <div className="inputbox">
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

                <div className="inputbox">
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

                <button className='btn-login' type="submit">Iniciar Sesión</button>
                <Link to="/register">
                    <button className='btn-cuenta' type="button">Crear cuenta</button>
                </Link>
            </form>
        </div>
    );
};

export default Login;
