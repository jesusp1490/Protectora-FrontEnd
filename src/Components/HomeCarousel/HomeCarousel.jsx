import React, { useState, useEffect, useRef } from 'react';
import './_HomeCarousel.scss';

const HomeCarousel = () => {
    const slides = [
        {
            id: 1,
            imgUrl: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png',
            title: 'Estado de Adopción',
            description: 'Revisa el proceso de tus adopciones en curso',
            link: '/status-adopcion',
        },
        {
            id: 2,
            imgUrl: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1700132920/apadrina_2x_ssrxva.png',
            title: 'Apadrina una mascota',
            description: 'Revisa tus mascotas apadrinadas',
            link: '/apadrinar',
        },
        {
            id: 3,
            imgUrl: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1700133186/donar_2x_m6plcl.png',
            title: 'Donar',
            description: 'Revisa tus donaciones',
            link: '/donar',
        },
    ];

    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, [currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            })
        } else {
            const isLastSlide = currentIndex === slides.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }


    return (
        <div className="main-container">
            <div className="slider-container">
                <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                <div className="container-images">
                    <ul ref={listRef} className="slides-list">
                        {slides.map((item) => (
                            <li key={item.id} className="slide-item">
                                <div className="image-container">
                                    <img src={item.imgUrl} alt='Mascotas' className='carousel-img'/>
                                </div>
                                <div className="text-container">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="dots-container">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                            onClick={() => goToSlide(idx)}
                        >
                            &#9865;
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;

