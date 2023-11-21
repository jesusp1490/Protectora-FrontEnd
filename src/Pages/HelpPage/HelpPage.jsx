import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './_HelpPage.scss';

const HelpPage = () => {
  return (
    <div className='help-container'>
      <h2 className='help-container-h2'>Información de Contacto Directo</h2>
      
        <div className='help-contact-info'>
            <h3 className='help-info-h3'>Correo Electrónico:</h3>
            <p className='help-info-p'><span className='help-info-span'>General:</span> contacto@lucky.org</p>
            <p className='help-info-p'><span className='help-info-span'>Adopciones:</span> adopcion@lucky.org</p>
            <p className='help-info-p'><span className='help-info-span'>Soporte Técnico:</span> soporte@lucky.org</p>
          
            <h3 className='help-info-h3'>Teléfono:</h3>
            <p className='help-info-p'><span className='help-info-span'>Principal:</span> +1-123-456-7890</p>
            <p className='help-info-p'><span className='help-info-span'>Adopciones:</span> +1-123-456-7891</p>

            <h3 className='help-info-h3'>Dirección:</h3>
            <p className='help-info-p'>Lucky</p>
            <p className='help-info-p'>Calle de la Esperanza, 123</p>
            <p className='help-info-p'>Ciudad, Madrid, 28005</p>

            <h3 className='help-info-h3'>Horario de Atención:</h3>  
            <p className='help-info-p'>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p className='help-info-p'>Domingos: Cerrado</p>

            <h3 className='help-info-h3'>Redes Sociales:</h3>

            <div className='help-info-rrss'>
              <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700570940/icons8-facebook-100_qyhujy.png' alt='fb' className='help-icon' />
              <p className='help-info-p-rrss'>@luckyPets</p>
            </div>
            <div className='help-info-rrss'>
              <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700570940/icons8-twitter-100_edstvq.png' alt='twt' className='help-icon' />
              <p className='help-info-p-rrss'>@luckyPets</p>
            </div>
            <div className='help-info-rrss'>  
              <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700570940/icons8-instagram-100_n8ewoe.png' alt='ig' className='help-icon' />
              <p className='help-info-p-rrss'>@luckyPets</p>
            </div>
        </div>

      <Navbar />
    </div>
  );
};

export default HelpPage;