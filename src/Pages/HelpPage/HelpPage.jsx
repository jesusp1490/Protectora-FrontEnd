import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './_HelpPage.scss';

const HelpPage = () => {
  return (
    <div>
      <h2>Información de Contacto Directo</h2>
      <p>
        <strong>Correo Electrónico:</strong>
        <br />
        General: <a href="mailto:contacto@lucky.org">contacto@lucky.org</a>
        <br />
        Adopciones: <a href="mailto:adopcion@lucky.org">adopcion@lucky.org</a>
        <br />
        Soporte Técnico: <a href="mailto:soporte@lucky.org">soporte@lucky.org</a>
      </p>
      <p>
        <strong>Teléfono:</strong>
        <br />
        Principal: +1-123-456-7890
        <br />
        Adopciones: +1-123-456-7891
      </p>
      <p>
        <strong>Dirección:</strong>
        <br />
        LuckyPets
        <br />
        Calle de la Esperanza, 123
        <br />
        Ciudad, Madrid, 28005
      </p>
      <p>
        <strong>Horario de Atención:</strong>
        <br />
        Lunes a Viernes: 9:00 AM - 6:00 PM
        <br />
        Sábados: 10:00 AM - 4:00 PM
        <br />
        Domingos: Cerrado
      </p>
      <p>
        <strong>Redes Sociales:</strong>
        <br />
        Facebook: <a href="https://www.facebook.com/lucky">lucky</a>
        <br />
        Twitter: <a href="https://twitter.com/lucky">lucky</a>
        <br />
        Instagram: <a href="https://www.instagram.com/lucky">lucky</a>
      </p>
      <Navbar />
    </div>
  );
};

export default HelpPage;