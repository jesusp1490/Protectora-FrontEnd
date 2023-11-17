import React from 'react';
import { Link } from 'react-router-dom';
import './_LoginOptions.scss'
import Button from '../../Components/Button/Button';

const LoginOptionsPage = () => {
    return (
        <div className='loginOpt-container'>
            <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700065255/fondo_3x_zzbghi.png' alt='Fondo_Img' className='loginOpt-fondo'/>
            
            <div className='loginOpt-content'>
                <h2 className='loginOpt-h2'>¿Cómo quieres entrar?</h2>

                <Link to="/login">
                    <Button className='btn-main' texto='Usuario' type="button"/>
                </Link> 

                <Link to="/login-protectora">
                    <Button className='btn-main' texto='Asociación protectora' type="button" />
                </Link> 

                <Link to="/home">
                    <p className='loginOpt-p'>Registrarse en otro momento</p>
                </Link>
            </div>
        </div>
    )
}

export default LoginOptionsPage;

