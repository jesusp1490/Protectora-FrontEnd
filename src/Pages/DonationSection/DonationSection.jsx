import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './_DonationSection.scss';

const DonationSection = () => {
  return (
    <div className="donation-section">
      <h1 className='titleDonation1'>¡Haz la Diferencia con Lucky!</h1>
      <p className='pDontation'>Tu generosidad salva vidas.</p>

      <h3 className='titleDonation2'>¿Cómo Ayudamos a los Animales?</h3>
      <p className='pDontation'>
        En Lucky, nos dedicamos a proporcionar alimentación, atención médica y refugio a animales rescatados.
      </p>

      <h3 className='titleDonation2'>Formas de Donar</h3>
      <p className='pDontation'>
        Ofrecemos diversas formas de donar, desde donaciones únicas hasta compromisos mensuales. Cada aporte cuenta.
      </p>


      <h3 className='titleDonation2'>Impacto Social</h3>
      <p className='pDontation'>
        Juntos, estamos construyendo una comunidad compasiva y trabajando hacia un futuro donde cada animal tenga un hogar amoroso.
      </p>

      <h3 className='titleDonation2'>Agradecimiento</h3>
      <p className='pDontation'>
        Gracias por ser parte de nuestra misión. Tu apoyo marca la diferencia en la vida de los animales necesitados.
      </p>


      <h3 className='titleDonation2'>¡Haz tu Donación!</h3>
      <p className='pDontation'>
        Ayuda a Lucky a seguir salvando vidas. Haz tu donación a través de PayPal.
      </p>
      <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" // Reemplaza con la URL de tu imagen PayPal
          alt="Donar con PayPal" className="paypal-image"
        />
      </a>
      <Navbar/>
    </div>
  );
};

export default DonationSection;