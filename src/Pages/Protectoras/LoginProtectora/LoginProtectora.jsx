import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LoginProtectora = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [protectoraProfile, setProtectoraProfile] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5055/protectoras/login', {
                email,
                password,
            });

            const data = response.data;

            if (data.success) {
                console.log('Datos de la protectora:', data.protectoraInfo);
                console.log('foto de perfil', data.protectoraInfo.image);
                console.log('Inicio de sesión exitoso');
                
                const protectoraResponse = await axios.get(`http://localhost:5055/protectoras/${email}`);
                const protectoraProfile = protectoraResponse.data;
                console.log(protectoraProfile)

                setProtectoraProfile(data.protectoraInfo);

                localStorage.setItem('protectoraID', data.protectoraInfo._id);
                console.log(data.protectoraInfo.city)
                

                navigate('/profile-protectora');
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

                <p className='forgot'>¿Has olvidado tu contraseña?</p>

                <button className='btn-login' type="submit">Iniciar Sesión</button>
                <Link to="/register-protectora">
                    <button className='btn-cuenta' type="button">Crear cuenta</button>
                </Link>
            </form>
            
        </div>
    );
};

export default LoginProtectora;