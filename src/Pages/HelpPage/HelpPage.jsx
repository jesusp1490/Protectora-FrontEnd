import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './_HelpPage.scss';

const HelpPage = () => {
  return (
    <div className='help-container'>
      <h2 className='help-container-h2'>Información de Contacto Directo</h2>
      <p className='help-container-h2'></p>
      
        <div className='help-contact-info'>
            <h3>Correo Electrónico:</h3>
            <p>General: <a href="mailto:contacto@lucky.org">contacto@lucky.org</a></p>
            <p>Adopciones: <a href="mailto:adopcion@lucky.org">adopcion@lucky.org</a></p>
            <p>Soporte Técnico: <a href="mailto:soporte@lucky.org">soporte@lucky.org</a></p>
          
            <h3>Teléfono:</h3>
            <p>Principal: +1-123-456-7890</p>
            <p>Adopciones: +1-123-456-7891</p>


            <h3>Dirección:</h3>
            <p>Lucky</p>
            <p>Calle de la Esperanza, 123</p>
            <p>Ciudad, Madrid, 28005</p>

            Horario de Atención:  

            Lunes a Viernes: 9:00 AM - 6:00 PM


            Domingos: Cerrado

            <strong>Redes Sociales:</strong>
            <br />
            Facebook: <a href="https://www.facebook.com/lucky">lucky</a>
            <br />
            Twitter: <a href="https://twitter.com/lucky">lucky</a>
            <br />
            Instagram: <a href="https://www.instagram.com/lucky">lucky</a>

        </div>

      <Navbar />
    </div>
  );
};

export default HelpPage;