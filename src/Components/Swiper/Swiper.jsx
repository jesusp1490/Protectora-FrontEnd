import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./_Swiper.scss";

const SwiperComp = () => {
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
        title: "Donar",
        description: "Revisa tus donaciones",
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
      </div>
    );
  };
  
  export default SwiperComp;


/* import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';


const SwiperComp = () => {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
    });

    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699957643/mascota_2x_k8pknx.png' alt='' />
                    <h3>Estado de Adopción</h3>
                    <p>Revisa el proceso de tus adopciones en curso</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700132920/apadrina_2x_ssrxva.png' alt='' />
                    <h3>Apadrina una mascota</h3>
                    <p>Revisa tus mascotas apadrinadas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700133186/donar_2x_m6plcl.png' alt='' />
                    <h3>Donar</h3>
                    <p>Revisa tus donaciones</p>
                </SwiperSlide>
                
                
            </Swiper>
        </div>
    )
}

export default SwiperComp; */
