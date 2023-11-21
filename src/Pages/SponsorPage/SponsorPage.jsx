import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './_SponsorPage.scss';



const SponsorPage = () => {
  return (
    <div className='sponsor-section'>
      <h1 className='titleSponsor1'>Apadrina a un Amigo Peludo en Lucky</h1>
      <p className='pSponsor'>
        ¡Bienvenido a Lucky, donde puedes ser el héroe de un amigo peludo! Nuestro programa de apadrinamiento te brinda la oportunidad de marcar la diferencia en la vida de los animales rescatados mientras esperan su hogar perfecto.
      </p>

      <h2 className='titleSponsor2'>¿Qué es el Programa de Apadrinamiento en Lucky?</h2>
      <p className='pSponsor'>
        El Programa de Apadrinamiento de Lucky es tu manera de proporcionar apoyo continuo y amor a nuestros amigos de cuatro patas. Al convertirte en padrino, no solo estás ayudando financieramente, sino que también te conviertes en una parte especial de su historia.
      </p>

      <h2 className='titleSponsor2'>Beneficios de ser Padrino en Lucky:</h2>
      <ul className="center-list">
        <li>Actualizaciones Exclusivas: Recibe noticias periódicas sobre el progreso y las travesuras de tu amigo peludo.</li>
        <li>Contenido Exclusivo: Accede a fotos y momentos especiales que solo compartimos con nuestros padrinos.</li>
        <li>Invitaciones a Eventos Especiales: Celebra la conexión especial que tienes con tu ahijado en eventos exclusivos.</li>
      </ul>
      
      <h2 className='titleSponsor2'>Cómo Apadrinar en Lucky:</h2>
      <ul className="center-list">
        <li>Selecciona a tu Compañero: Explora la galería de animales y elige al que haga latir más fuerte tu corazón.</li>
        <li>Realiza tu Donación Segura: Haz tu donación segura en línea y comienza tu viaje como padrino en Lucky.</li>
      </ul>

      <h2 className='titleSponsor2'>Contáctanos en Lucky:</h2>
      <p className='pSponsor'>
        Si tienes preguntas o necesitas más información sobre nuestro programa de apadrinamiento, no dudes en contactarnos en <a href="mailto:adopcion@lucky.org">adopcion@lucky.org</a> o llámanos al <strong>+1-123-456-7891</strong>.
      </p>

      <p className='pSponsor'>¡Gracias por considerar apadrinar a nuestros amigos peludos en Lucky y ser parte de su historia única!</p>
      <Navbar />
    </div>
  );
}

export default SponsorPage;