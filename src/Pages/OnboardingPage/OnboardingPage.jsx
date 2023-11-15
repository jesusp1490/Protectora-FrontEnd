import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './_OnboardingPage.scss';

function OnboardingPage() {
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLogo(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="onboarding-container">
            {showLogo && (
                <div className="logo-container">
                    <img
                        src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1699703888/group29_kd1wx7.png"
                        alt="Logo-img"
                    />
                    <img
                        src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1699704180/group_mej20e.png"
                        alt="Logo-text"
                    />
                </div>
            )}
            {!showLogo && (
                <div className="slider-container">
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div className="slide-content">
                            <Link to="/login-options">
                                <button className="slide-button">
                                    <img
                                        src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700061552/cerrar_2x_oyaz2p.png"
                                        alt="X"
                                    />
                                </button>
                            </Link>
                            <img
                                src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1699705173/undrawGoodDoggy4Wfq_s2ssqh.png"
                                alt="Slide01"
                            />
                            <h2>Encuentra todo tipo de servicios que tienes cerca de ti</h2>
                        </div>

                        {/* Slide 2 */}
                        <div className="slide-content">
                            <Link to="/login-options">
                                <button className="slide-button">
                                    <img
                                        src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700061552/cerrar_2x_oyaz2p.png"
                                        alt="X"
                                    />
                                </button>
                            </Link>
                            <img
                                src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1699705416/imagen2_nzm3oj.png"
                                alt="Slide02"
                            />
                            <h2>Adopta desde tu móvil</h2>
                            <p>
                                Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para
                                encontrar el que mejor se adapte a ti
                            </p>
                        </div>

                        {/* Slide 3 */}
                        <div className="slide-content">
                            <Link to="/login-options">
                                <button className="slide-button">
                                    <img
                                        src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700061552/cerrar_2x_oyaz2p.png"
                                        alt="X"
                                    />
                                </button>
                            </Link>
                            <img
                                src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1699705551/undrawPetAdoption2Qkw_hhokly.png"
                                alt="Slide03"
                            />
                            <h2>Si eres una asociación sube a tus peludos para darles más difusión</h2>
                        </div>
                    </Slider>
                </div>
            )}
        </div>
    );
}

export default OnboardingPage;
