import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./_PetProfile.scss";
import { useNavigate } from "react-router-dom";

const PetProfile = () => {
  const { petId } = useParams();
  const [datos, setDatos] = useState({});
  const [tab, setTab] = useState("datos");
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
            
            // console.log(newFavorites)
            // const formData = new FormData();
            // newFavorites.forEach((value) => {
            //     formData.append('favorite', value)
            // }); 


        const response = await axios.put(
            `http://localhost:5055/pets/updatePet/${petId}`,
            {favorite: newFavorites},
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
        
        }catch (error) {
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
        setDatos(null);
      }
    };
    obtenerDatosDeAPI();
  }, [petId]);

  const cambiarTab = (nuevaTab) => {
    setTab(nuevaTab);
    console.log("Tab actual:", nuevaTab);
  };

  console.log("datos:", datos);
  const personalityList = datos.personality || [];

  const showCustomAlert = () => {
    const alertContainer = document.createElement("div");
    alertContainer.className = "custom-alert-container";

    const alertCard = document.createElement("div");
    alertCard.className = "custom-alert-card";

    const backButton = document.createElement("button");
    backButton.className = "form-button";
    backButton.textContent = 'Cancelar';
    backButton.addEventListener("click", cancelAdopt);

    const closeButton = document.createElement("button");
    closeButton.className = "form-button";
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
    }
  };

  return (
    <div className="pet__container">
      <div className="pet__header">
        <div className="petPicture">
          <img src={datos.image} alt="pet" />
        </div>
        <div className="header-container">
          <div>
            {" "}
            <div className="header-logo-title">
              <img
                src={datos.sex === "male" ? logoMale : logoFem}
                alt="Descripción de la imagen"
              />
            </div>
            <div className="header-titles">
              <h1>{datos.name}</h1>
              <h2>{datos.city}</h2>
            </div>
            <div className="header-logos">

              <img src={(datos.favorite || []).includes(username) ? logoFavFull : logoFav} alt="Descripción de la imagen 1" onClick={handleFavorite}/>
              <img src={logoEnviar} alt="Descripción de la imagen 2" />
            </div>
          </div>
        </div>

        <div className="pet__body">
          <nav>
            <span
              onClick={() => cambiarTab("datos")}
              className={tab === "datos" ? "active" : ""}
            >
              Datos
            </span>
            <span
              onClick={() => cambiarTab("salud")}
              className={tab === "salud" ? "active" : ""}
            >
              Salud
            </span>
            <span
              onClick={() => cambiarTab("adopcion")}
              className={tab === "adopcion" ? "active" : ""}
            >
              Adopcion
            </span>
          </nav>
          <div
            id="datos"
            className={`pet__section ${tab === "datos" ? "active" : ""}`}
          >
            <div className="info-container">
              <div className="data-item">
                <img src={logoHuella} alt="poner logo huella" />
                <p>Especie </p>
                <p>{datos.species}</p>
              </div>
              <div className="data-item">
                <img src={logoHuella} alt="Logo de huella" />
                <p>Fecha de nacimiento</p>
                <p>{datos.birthday}</p>
              </div>
              <div className="data-item">
                <img src={logoHuella} alt="Logo  huella" />
                <p>Sexo</p>
                <p> {datos.sex}</p>
              </div>
              <div className="data-item">
                <img src={logoHuella} alt="Logo de huella" />
                <p>Tamaño</p>
                <p> {datos.size}</p>
              </div>
              <div className="data-item">
                <img src={logoHuella} alt="Logo uella" />
                <p>Peso</p>
                <p> {datos.weight} kg</p>
              </div>
            </div>
            <div>
              <h2 className="pet__section-title">Personalidad</h2>
            </div>
            <ul className="pet__good-list">
              {personalityList.map((trait, index) => (
                <li key={index}>{trait === 'calm' ? 'Calmado' : trait === 'loving' ? 'Cariñoso' : trait === 'active' ? 'Activo' : trait === 'fun' ? 'Divertido' : trait === 'nervous' ? 'Nervioso' : trait === 'scared' ? 'Asustadizo' : '' }</li>
              ))}
            </ul>
            <div className="caja-texto">
              <p className="texto-azul">Historial</p>
              <span id="petHistory" readOnly>{`${
                datos.history || "No tiene historial"
              }`}</span>
            </div>

            {/* <div className="pet__history-container">
                                <div className="history-content">
                                    <textarea
                                        id="petHistory"
                                        className="pet__history"
                                        defaultValue={`Historia ${datos.history || "No tiene historia para mostrar"}`}
                                        readOnly
                                    />
                                </div>
                            </div> */}

            <div className="pet__section-buttons">
              <button className="pet__button">
                <a href="apadrinar link">Apadrinar</a>
              </button>
              <button className="pet__button" onClick={showCustomAlert}>
                <p>Adoptar</p>
              </button>
            </div>
          </div>

          <div
            id="salud"
            className={`pet__section ${tab === "salud" ? "active" : ""}`}
          >
            {tab === "salud" && datos ? (
              <div className="salud-container">
                <div className="salud-item">
                  <img src={logoHuella} alt="Logo" />
                  <p>Vacunado </p>
                  <p>{datos.vaccinated ? "Sí" : "No"}</p>
                </div>
                <div className="salud-item">
                  <img src={logoHuella} alt="Logo" />
                  <p>Desparasitado </p>
                  <p>{datos.deparasitized ? "Sí" : "No"}</p>
                </div>
                <div className="salud-item">
                  <img src={logoHuella} alt="Logo" />
                  <p>Sano</p>
                  <p> {datos.healthy ? "Sí" : "No"}</p>
                </div>
                <div className="salud-item">
                  <img src={logoHuella} alt="Logo" />
                  <p>Esterilizado</p>
                  <p> {datos.castrated ? "Sí" : "No"}</p>
                </div>
                <div className="salud-item">
                  <img src={logoHuella} alt="Logo" />
                  <p>Identificado</p>
                  <p>{datos.identified ? "Sí" : "No"}</p>
                </div>
                <div className="salud-item">
                  <img src={logoHuella} alt="Logo" />
                  <p>Microchip </p>
                  <p>{datos.chip ? "Sí" : "No"}</p>
                </div>
                <div className="salud__history-container">
                  <span id="saludHistory" className="salud__history" readOnly>
                    {" "}
                    <p>Tienes que saber que: </p>
                    {datos.healthDetails || "Historial: No tiene historial"}
                  </span>
                </div>
                <div className="pet__section-buttons">
                  <button className="pet__button">
                    <a href="apadrinar link">Apadrinar</a>
                  </button>
                  <button className="pet__button" onClick={showCustomAlert}>
                <p>Adoptar</p>
              </button>
                </div>
              </div>
            ) : (
              <p>que te den</p>
            )}
          </div>

          <div
            id="adopcion"
            className={`pet__section ${tab === "adopcion" ? "active" : ""}`}
          >
            <div className="perfil-adopcion">
              <div className="caja-texto">
                <p className="texto-azul">Requisitos de adopción</p>
                <span className="perfil__textarea" readOnly>{`${
                  datos.adoptionReq ||
                  "No hay requisitos de adopción disponibles"
                }`}</span>
              </div>
              <div className="caja-texto">
                <p>Tasa de adopción</p>
                <img
                  className="logo-ayuda"
                  src={logoInfo}
                  alt="Descripción de la imagen"
                />

                <span className="perfil__textarea texto-azul" readOnly>
                  {datos.adoptionFee}
                </span>
              </div>
              <div className="caja-texto">
                <span className="perfil__textarea texto-azul" readOnly>
                  {`¿Se envía a otra ciudad?\n${
                    datos.delivery || "Información de transporte no disponible"
                  }`}{" "}
                </span>
              </div>
            </div>
            <div className="pet__section-buttons">
              <button className="pet__button">
                <a href="apadrinar link">Apadrinar</a>
              </button>
              
              <button className="pet__button" onClick={showCustomAlert}>
                <p>Adoptar</p>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
