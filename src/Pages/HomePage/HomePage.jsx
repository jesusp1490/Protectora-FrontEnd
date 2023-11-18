import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './_HomePage.scss'
// import SwiperComp from '../../Components/Swiper/Swiper';
// import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel';

const HomePage = () => {

    const username = localStorage.getItem('userUsername');
    console.log(username);

    const userName = username ? username : 'invitado';
    console.log('Username in HomePage:', userName);


    return (
        <div>
            <h2 className='home-username'>¡Hola {userName}!</h2>
            {/* <SwiperComp /> */}
            {/* <HomeCarousel /> */}
            
            <p className='news-title'>Novedades</p>

            <section className="news-section">
                <div className="news-card" >
                    <a href="https://www.bekiamascotas.com/articulos/descubre-10-curiosidades-chinchillas/" className="news-card">
                    <img className='news-img' src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700144422/uli1Copy_2x_ojm7hd.png' alt='Chinchillas' />
                    </a>
                    <p className='news-p'>10 curiosidades sobre las chinchillas</p>
                </div>
                <div className="news-card" >
                    <a href="https://www.tiendanimal.es/articulos/que-comen-las-iguanas/" className="news-card">
                    <img className='news-img' src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700145303/uli1Copy_2x_psdppg.png' alt='Iguanas' />
                    </a>
                    <p className='news-p'>¿Sabes qué comen las iguanas?</p>
                </div>
                <div className="news-card" >
                    <a href="https://yendoplan.com/planes/madrid/parques-perros" className="news-card">
                    <img className='news-img' src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700145281/uli1Copy_2x_fclikb.png' alt='PerrosMadrid' />
                    </a>
                    <p className='news-p'>10 lugares para visitar con tu perro en Madrid</p>
                </div>
            </section>

            <Navbar />
        </div >
    );
};


export default HomePage;


