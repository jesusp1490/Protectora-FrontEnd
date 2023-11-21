import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./_PetProfile.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const PetProfile = () => {
  const { petId } = useParams();
  const [datos, setDatos] = useState({});
  const [section, setSection] = useState('datos');
  const [favorite, setFavorite] = useState([]);

  const logoHuella =
    "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700398952/pawprint2x_pb2xf3.png";
  const logoEnviar =
    "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700398952/compartir2x_urndmj.png";
  const logoMale =
    "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700398952/male2x_whz6ik.png";
  const logoFem =
    "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700398952/female2x_fqw1ar.png";
  const logoFav =
    "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700398952/favoritos2x_tpy5x6.png";
  const logoInfo =
    "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700399195/ayuda2x_aw56lg.png";

    const logoFavFull = 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1700403459/favoritos2xfull_owlina.png';
    const username = localStorage.getItem('userUsername');
    const navigate = useNavigate()

    const handleFavorite = async (e) => {
        e.preventDefault();

        console.log('favoritos:', datos.favorite);
        try{
        if (datos.favorite.includes(username)){
            const newFavorites = []
            for (const fav of datos.favorite){
                if (fav !== username){
                    newFavorites.push(fav)
                }
            }
            

        const response = await axios.put(
          `http://localhost:5055/pets/updatePet/${petId}`,
          { favorite: newFavorites },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        setFavorite(newFavorites)

      } else {
        const copyFav = [...datos.favorite];
        copyFav.push(username)
        setFavorite(copyFav)
        const formData = new FormData();
        copyFav.forEach((value) => {
          formData.append('favorite', value)
        });
        const response = await axios.put(
          `http://localhost:5055/pets/updatePet/${petId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response.data)

      }

    } catch (error) {
      console.error('Error updating favorites:', error);
    }
    window.location.reload()
  }

  useEffect(() => {
    const obtenerDatosDeAPI = async () => {
      try {
        const respuesta = await axios.get(
          `http://localhost:5055/pets/${petId}`
        );
        console.log("Datos de la API:", respuesta.data);
        setDatos(respuesta.data);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };
    obtenerDatosDeAPI();
  }, [petId]);

  console.log("datos:", datos);
  const personalityList = datos.personality || [];

  const showCustomAlert = () => {
    const alertContainer = document.createElement("div");
    alertContainer.className = "custom-alert-container";

    const alertCard = document.createElement("div");
    alertCard.className = "custom-alert-card";

    const backButton = document.createElement("button");
    backButton.className = "btn-empty-pink";
    backButton.textContent = 'Cancelar';
    backButton.addEventListener("click", cancelAdopt);

    const closeButton = document.createElement("button");
    closeButton.className = "btn-pink";
    closeButton.textContent = 'Continuar';
    closeButton.addEventListener("click", closeCustomAlert);

    const alertTitle = document.createElement("h2");
    alertTitle.textContent = 'Solicitud de adopción'
    alertTitle.className = 'custom-alert-title';

    const alertMessage = document.createElement("p");
    alertMessage.textContent =
      "Adoptar es un acto de amor, pero sobre todo una responsabilidad de por vida";
    alertMessage.className = "custom-alert-message";

    const alertMessageTwo = document.createElement("p");
    alertMessageTwo.textContent = 'Por éste motivo es importante que sepas si estás realmente preparado para un cambio tan grande y especial en tu vida, al dejar entrar en ella a uno de nuestros peludos!'
    alertMessageTwo.className = "custom-alert-message";

    const alertPicture = document.createElement('img');
    alertPicture.setAttribute('src', "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700430696/undrawNatureFunN9Lv1_2x_a9ll3l.png")
    alertPicture.className = 'custom-alert-picture';


    alertCard.appendChild(alertTitle);
    alertCard.appendChild(alertMessage);
    alertCard.appendChild(alertMessageTwo);
    alertCard.appendChild(alertPicture)
    alertCard.appendChild(backButton);
    alertCard.appendChild(closeButton);
    alertContainer.appendChild(alertCard);

    document.body.appendChild(alertContainer);
  };

  const closeCustomAlert = () => {
    const alertContainer = document.querySelector(".custom-alert-container");
    if (alertContainer) {
      alertContainer.remove();
      navigate("/send-form")
    }
  };

  const cancelAdopt = () => {
    const alertContainer = document.querySelector(".custom-alert-container");
    if (alertContainer) {
      alertContainer.remove();
      navigate("/profile/favoritos")
    }
  };

  const handleSection = (newTab) => {
    setSection(newTab);
  };

  return (
    <div className="petProfile-container">

      <div className="adoptStatus-header">
        
            <img
                src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700514835/atras_2x_lq4qfc.png"
                alt=""
                className="adoptStatus-header-img"
                onClick={() => navigate(-1)}
            />
       
      </div>
      <div className="petProfile-header">
        <img src={datos.image} alt="pet" className="pet__header--img" />
      </div>

      <div className="petProfile-headerBox">

        <div className="petProfile-headerBox-text">
          <img src={datos.sex === "male" ? logoMale : logoFem} alt="Descripción de la imagen" className="petProfile-headerBox-img" />
          <h1 className="petProfile-headerBox-h1">{datos.name}</h1>
          <h2 className="petProfile-headerBox-h2">{datos.city}</h2>
        </div>

        <div className="petProfile-headerBox-icons">
          <img src={(datos.favorite || []).includes(username) ? logoFavFull : logoFav} alt="Descripción de la imagen 1" onClick={handleFavorite} className="petProfile-headerBox-icons1" />
          <img src={logoEnviar} alt="Descripción de la imagen 2" className="petProfile-headerBox-icons2" />
        </div>

      </div>

      <nav className="petProfile-nav">
        <span onClick={() => handleSection('datos')} className={section === 'datos' ? 'active' : ''}>
          Datos
        </span>
        <span onClick={() => handleSection('salud')} className={section === 'salud' ? 'active' : ''}>
          Salud
        </span>
        <span onClick={() => handleSection('adoption')} className={section === 'adoption' ? 'active' : ''}>
          Adopción
        </span>
      </nav>


      {section === 'datos' && (

        <div className="petProfile-datos-container">

          <div>

            <div className="petProfile-datos-info">
              <img src={logoHuella} alt="poner logo huella" className="datos-info-img" />
              <p className="datos-info-preg">Especie:</p>
              <p className="datos-info-resp">{datos.species}</p>
            </div>

            <div className="petProfile-datos-info">
              <img src={logoHuella} alt="Logo de huella" className="datos-info-img" />
              <p className="datos-info-preg">Nacimiento: </p>
              <p className="datos-info-resp">{datos.birthday}</p>
            </div>

            <div className="petProfile-datos-info">
              <img src={logoHuella} alt="Logo  huella" className="datos-info-img" />
              <p className="datos-info-preg">Sexo: </p>
              <p className="datos-info-resp">{datos.sex}</p>
            </div>

            <div className="petProfile-datos-info">
              <img src={logoHuella} alt="Logo de huella" className="datos-info-img" />
              <p className="datos-info-preg">Tamaño: </p>
              <p className="datos-info-resp">{datos.size}</p>
            </div>

            <div className="petProfile-datos-info">
              <img src={logoHuella} alt="Logo uella" className="datos-info-img" />
              <p className="datos-info-preg">Peso: </p>
              <p className="datos-info-resp">{datos.weight} kg</p>
            </div>

          </div>

          <div className="petProfile-personality">

            <p className="petProfile-personality-p">Personalidad</p>

            <ul className="petProfile-personality-list">
              {personalityList.map((trait, index) => (
                <li key={index}>{trait === 'calm' ? 'Calmado' : trait === 'loving' ? 'Cariñoso' : trait === 'active' ? 'Activo' : trait === 'fun' ? 'Divertido' : trait === 'nervous' ? 'Nervioso' : trait === 'scared' ? 'Asustadizo' : ''}</li>
              ))}
            </ul>

          </div>

          <div className="history-box">
            <p className="history-title">Historia</p>
            <p className="history-pet" readOnly>{`${datos.history || "No tiene historial"}`}</p>
          </div>

          <div className="petProfile-datos-btn">
            <Link to="/apdrinar" >
              <Button className='btn-empty-pink' texto='Apadrinar' type="button" />
            </Link>

              <Button className='btn-pink' texto='Adoptar' type="button" onClick={showCustomAlert} />

          </div>

        </div>

      )}


      {section === 'salud' && (

        <div className="petProfile-salud-container">

          <div>
            <div className="petProfile-salud-info">
              <img src={logoHuella} alt="Logo" className="datos-info-img"/>
              <p className="datos-info-preg">Vacunado </p>
              <p className="datos-info-resp">{datos.vaccinated ? "Sí" : "No"}</p>
            </div>

            <div className="petProfile-salud-info">
              <img src={logoHuella} alt="Logo" className="datos-info-img"/>
              <p className="datos-info-preg">Desparasitado </p>
              <p className="datos-info-resp">{datos.deparasitized ? "Sí" : "No"}</p>
            </div>

            <div className="petProfile-salud-info">
              <img src={logoHuella} alt="Logo" className="datos-info-img"/>
              <p className="datos-info-preg">Sano</p>
              <p className="datos-info-resp"> {datos.healthy ? "Sí" : "No"}</p>
            </div>

            <div className="petProfile-salud-info">
              <img src={logoHuella} alt="Logo" className="datos-info-img"/>
              <p className="datos-info-preg">Esterilizado</p>
              <p className="datos-info-resp"> {datos.castrated ? "Sí" : "No"}</p>
            </div>

            <div className="petProfile-salud-info">
              <img src={logoHuella} alt="Logo" className="datos-info-img"/>
              <p className="datos-info-preg">Identificado</p>
              <p className="datos-info-resp">{datos.identified ? "Sí" : "No"}</p>
            </div>

            <div className="petProfile-salud-info">
              <img src={logoHuella} alt="Logo" className="datos-info-img"/>
              <p className="datos-info-preg">Microchip </p>
              <p className="datos-info-resp">{datos.chip ? "Sí" : "No"}</p>
            </div>
          </div>

          <div className="history-box">
            <p className="history-title">Tienes que saber que: </p> 
            <p className="history-pet" readOnly> {`${datos.healthDetails || "No tiene historial"}`}</p>         
          </div>

          <div className="petProfile-datos-btn">
            <Link to="/apdrinar" >
              <Button className='btn-empty-pink' texto='Apadrinar' type="button" />
            </Link>

              <Button className='btn-pink' texto='Adoptar' type="button" onClick={showCustomAlert} />

          </div>

        </div>
      )}

      {section === 'adoption' && (
        
        <div className="petProfile-adoption-container">

          <div className="history-box">
            <p className="history-title">Requisitos de adopción </p> 
            <p className="history-pet" readOnly> {`${datos.adoptionReq || "No hay requisitos de adopción disponibles"}`}</p>         
          </div>

          <div className="history-box">
            <p className="history-title">Tasa de adopción <img className="petProfile-helpIcon" src={logoInfo} alt="ayuda"/> </p> 
            <p className="history-pet" readOnly> {datos.adoptionFee}€</p>         
          </div>

          <div className="history-box">
            <p className="history-title">¿Se envía a otra ciudad? </p> 
            <p className="history-pet" readOnly> {`${datos.delivery ? "Si" : "No" || "Información de transporte no disponible"}`}</p>         
          </div>

          <div className="petProfile-datos-btn">
            <Link to="/apdrinar" >
              <Button className='btn-empty-pink' texto='Apadrinar' type="button" />
            </Link>

              <Button className='btn-pink' texto='Adoptar' type="button" onClick={showCustomAlert} />
            
          </div>
        </div>
      )}
    </div >
  );
};

export default PetProfile;