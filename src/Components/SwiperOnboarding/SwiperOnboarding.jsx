import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import './_SwiperOnboarding.scss'
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const SwiperOnboarding = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex);
    };

    const duplicateSlides = [
        {
            image:
                "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700061552/cerrar_2x_oyaz2p.png",
            image2:
                "https://res.cloudinary.com/dizd9f3ky/image/upload/v1699705214/undrawGoodDoggy4Wfq_2x_fat1sp.png",
            title: "Encuentra todo tipo de servicios que tienes cerca de ti",
            description: "",
        },
        {
            image:
                "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700061552/cerrar_2x_oyaz2p.png",
            image2:
                "https://res.cloudinary.com/dizd9f3ky/image/upload/v1699705435/imagen2_2x_awoxa1.png",
            title: "Adopta desde tu móvil",
            description: "Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos paraencontrar el que mejor se adapte a ti",
        },
        {
            image:
                "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700061552/cerrar_2x_oyaz2p.png",
            image2:
                "https://res.cloudinary.com/dizd9f3ky/image/upload/v1699705570/undrawPetAdoption2Qkw_2x_rtam8p.png",
            title: "Si eres una asociación sube a tus peludos para darles más difusión",
            description: "",
        },
    ];
    return (
        <div className="swiperOnboarding-container">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                loop={duplicateSlides.length > 1}
                pagination={{ clickable: true }}
                className="mySwiper"
                onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
                {duplicateSlides.map((slide, index) => (
                    <SwiperSlide key={index} className="swiperOnboarding-slide">
                        <div className="swiperOnboarding-card">
                            
                            
                            <div className="swiperOnboarding-content">
                            <Link to="/login-options" >
                                <img src={slide.image} alt="" className="swiperOnboarding-imgX" />
                            </Link>
                                <img src={slide.image2} alt="" className="swiperOnboarding-img" />
                                <h3 className="swiperOnboarding-title">{slide.title}</h3>
                                <p className="swiperOnboarding-description">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiperOnboarding-pagination">
                <Pagination slides={duplicateSlides} activeIndex={activeSlide} onSlideChange={handleSlideChange} bulletSize="15px" bulletHeight="8px" />
            </div>
        </div>
    )
}

export default SwiperOnboarding
