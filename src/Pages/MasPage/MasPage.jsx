import React from 'react'
import Navbar from '../../Components/Navbar/navbar';
import './_MasPage.scss';

const MasPage = () => {
    return (
        <div className='mas-container'>

            <div className='mas-menu'>
                <div>
                    <div className='protectoras'>
                        <button className="mas-option" type="button">Asociaciones protectoras<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' /></button>
                    </div>

                    <div className='eventos'>
                        <button className="mas-option" type="button">Eventos<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' /></button>
                    </div>

                    <div className='Curiosidades'>
                        <button className="mas-option" type="button">Curiosidades<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' /></button>
                    </div>

                    <div className='ayuda'>
                        <button className="mas-option" type="button">Ayuda<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' /></button>
                    </div>

                    <div className='Configuración'>
                        <button className="mas-option" type="button">Configuración<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' /></button>
                    </div>

                    <div className='Cerrar sesión'>
                        <button className="mas-option" type="button">Cerrar sesión<img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrow' /></button>
                    </div>

                </div>
            </div>

            <Navbar />
        </div>
    );
}

export default MasPage
