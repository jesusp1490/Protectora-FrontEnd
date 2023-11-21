import React, { useState, useEffect } from 'react';
import NavbarProtectora from '../../../Components/NavbarProtectora/NavbarProtectora';
import './_HomePageProtectora.scss' 
import HomeCarousel from '../../../Components/HomeCarousel/HomeCarousel';
import axios from 'axios';

const HomePageProtectora = () => {
    const [datas, setDatas] = useState({})

    const protectoraId = localStorage.getItem('protectoraID');

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5055/protectoras/${protectoraId}`)
            console.log(data)
            setDatas(data)
        }
        if (protectoraId) {
            getData();
        }
    }, [protectoraId])


    return (
        <div>
            <h2 className='home-protectora-username'>¡Hola protectora {datas.name}!</h2>
            <HomeCarousel />
            
            <p className='news-protectora-title'>Novedades</p>

            <section className="news-protectora-section">
                <div className="news-protectora-card" >
                    <a href="https://www.bekiamascotas.com/articulos/descubre-10-curiosidades-chinchillas/" className="news-protectora-card">
                    <img className='news-protectora-img' src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700144422/uli1Copy_2x_ojm7hd.png' alt='Chinchillas' />
                    </a>
                    <p className='news-protectora-p'>10 curiosidades sobre las chinchillas</p>
                </div>
                <div className="news-protectora-card" >
                    <a href="https://www.tiendanimal.es/articulos/que-comen-las-iguanas/" className="news-protectora-card">
                    <img className='news-protectora-img' src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700145303/uli1Copy_2x_psdppg.png' alt='Iguanas' />
                    </a>
                    <p className='news-protectora-p'>¿Sabes qué comen las iguanas?</p>
                </div>
                <div className="news-protectora-card" >
                    <a href="https://yendoplan.com/planes/madrid/parques-perros" className="news-protectora-card">
                    <img className='news-protectora-img' src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700145281/uli1Copy_2x_fclikb.png' alt='PerrosMadrid' />
                    </a>
                    <p className='news-protectora-p'>10 lugares para visitar con tu perro en Madrid</p>
                </div>
            </section>

            <NavbarProtectora />
        </div >
    );
};


export default HomePageProtectora;


