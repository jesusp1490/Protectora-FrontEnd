import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "./_Swiper.scss";
import Pagination from "../Pagination/Pagination";

const SwiperComp = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

    const duplicateSlides = [
      {
        image:
          "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700132920/apadrina_2x_ssrxva.png",
        title: "Apadrina una mascota",
        description: "Revisa tus mascotas apadrinadas",
      },
      {
        image:
          "https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png",
        title: "Estado de Adopción",
        description: "Revisa el proceso de tus adopciones en curso",
      },
      {
        image:
          "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700133186/donar_2x_m6plcl.png",
        title: "¿Quiéres donar?",
        description: "Dona para mejorar la vida de una mascota",
      },
    ];
  
    return (
      <div className="swiper-container">
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
            <SwiperSlide key={index} className="swiper-slide">
              <div className="card">
                <img src={slide.image} alt="" className="logo" />
                <div className="content">
                  <h3 className="swiper-title">{slide.title}</h3>
                  <p className="swiper-description">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Pagination slides={duplicateSlides} activeIndex={activeSlide} onSlideChange={handleSlideChange} />
      </div>
    );
  };
  
  export default SwiperComp;
