import React from 'react';
import { Link } from 'react-router-dom';
import './_LoginOptions.scss'

const LoginOptionsPage = () => {
    return (
        <div className='loginOpt-container'>
            <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700065255/fondo_3x_zzbghi.png' alt='Fondo_Img' className='loginOpt-fondo'/>
            
            <div className='loginOpt-content'>
                <h2 className='loginOpt-h2'>¿Cómo quieres entrar?</h2>

                <Link to="/login">
                    <button className='btn-login' type="button">Usuario</button>
                </Link> 

                <Link to="/login-protectora">
                    <button className='btn-login-protectora' type="button">Asociación protectora</button>
                </Link> 

                <Link to="/home">
                    <p className='loginOpt-p'>Registrarse en otro momento</p>
                </Link>
            </div>
        </div>
    )
}

export default LoginOptionsPage;

