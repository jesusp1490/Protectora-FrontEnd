import React from "react";
import "./_Curiosity.scss"
import Navbar from "../../Components/Navbar/Navbar";

const Curiosity = () => {

return (
     <div>
        <h2 className="curiosity-style">Curiosidades</h2>
        <section className="news-section">
        <div className="news-card">
          <a href="https://www.hola.com/mascotas/galeria/20220811215146/mapaches-curiosidades-dn/1/"
            className="news-card">
            <img className="news-img"
              src="https://res.cloudinary.com/ddjbaf93k/image/upload/v1700439901/protectora/bstnpy7equ6r5y2ifagn.jpg"
              alt="Mapachito"/></a>
          <p className="news-p">Curiosidades sobre los mapaches que te sorprenderán</p>
        </div>
        <div className="news-card">
          <a href="https://www.muyinteresante.es/naturaleza/8790.html"
            className="news-card">
            <img className="news-img"
              src="https://res.cloudinary.com/ddjbaf93k/image/upload/v1700440296/protectora/shezn1jwk2vzvmrzw3r5.webp"
              alt="cocodrilo"/></a>
          <p className="news-p">¿Sabes qué comen las iguanas?</p>
        </div>
        <div className="news-card">
          <a href="https://www.expertoanimal.com/10-curiosidades-del-oso-panda-22143.html"
            className="news-card">
            <img className="news-img"
              src="https://res.cloudinary.com/ddjbaf93k/image/upload/v1700440515/protectora/fm7ouqblsm0jk3rxgxw8.jpg"
              alt="osito pandita"/></a>
          <p className="news-p">10 curiosidades del oso panda</p>
        </div> 
        <div className="news-card">
          <a href="https://www.expertoanimal.com/10-curiosidades-del-oso-panda-22143.html"
            className="news-card">
            <img className="news-img"
              src="https://res.cloudinary.com/ddjbaf93k/image/upload/v1700440950/protectora/veesqawvvgehghdakfly.webp"
              alt="gato"/></a>
          <p className="news-p">¿Por qué mi gato me lame y después me muerde?</p>
        </div>
        <div className="news-card">
          <a href="https://www.muyinteresante.es/mascotas/6026.html"
            className="news-card">
            <img className="news-img"
              src="https://res.cloudinary.com/ddjbaf93k/image/upload/v1700441353/protectora/hujzgpdgvtm7gbfv6gp7.jpg"
              alt="perros"/></a>
          <p className="news-p">30 curiosidades sobre los perros</p>
        </div> 
        <div className="news-card">
          <a href="https://www.consumer.es/mascotas/datos-curiosos-sobre-conejos"
            className="news-card">
            <img className="news-img"
              src="https://res.cloudinary.com/ddjbaf93k/image/upload/v1700441622/protectora/dyc8waos2atsypmojo5u.jpg"
              alt="conejos"/></a>
          <p className="news-p">10 curiosidades sobre los conejos que te sorprenderán</p>
        </div>          
        </section>
        <Navbar />
     </div>
  );

};

export default Curiosity;