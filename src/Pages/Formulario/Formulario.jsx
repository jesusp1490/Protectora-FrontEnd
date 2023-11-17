import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [petName, setPetName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [otherPets, setOtherPets] = useState(false);
  const [whatPets, setWhatPets] = useState("");
  const [social, setSocial] = useState("");
  const [whyAdopt, setWhyAdopt] = useState("");
  const [petNeeds, setPetNeeds] = useState("");
  const [petCosts, setPetCosts] = useState("");
  const [petFood, setPetFood] = useState("");
  const [houseType, setHouseType] = useState("");
  const [renting, setRenting] = useState(false);
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [movingSoon, setMovingSoon] = useState(false);
  const [garden, setGarden] = useState(false);
  const [morePeople, setMorePeople] = useState(false);
  const [welcoming, setWelcoming] = useState(false);
  const [visit, setVisit] = useState(false);
  const [address, setAddress] = useState("");
  const [formOne, setFormOne] = useState(true);
  const [formTwo, setFormTwo] = useState(false);
  const [formThree, setFormThree] = useState(false);
  const navigate = useNavigate();

  const handleOtherPetsChange = (value) => {
    setOtherPets(value);
  };

  const handleFormOne = () => {
    setFormOne(false);
    setFormTwo(true);
  }

  const handleFormTwo = () => {
    setFormTwo(false);
    setFormThree(true);
  }

  const handleBackOne = () => {
    setFormTwo(false);
    setFormOne(true)
  }

  const handleBackTwo = () => {
    setFormThree(false);
    setFormTwo(true)
  }

  const handleForm = async (e) => {
    e.preventDefault();

    try{
        var formData = new FormData();

      formData.append("fullName", fullName);
      formData.append("city", city);
      formData.append("petName", petName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("dni", dni);
      formData.append("postalCode", postalCode);
      formData.append("otherPets", otherPets);
      formData.append("whatPets", whatPets);
      formData.append("social", social);
      formData.append("whyAdopt", whyAdopt);
      formData.append("petNeeds", petNeeds);
      formData.append("petCosts", petCosts);
      formData.append("petFood", petFood);
      formData.append("houseType", houseType);
      formData.append("renting", renting);
      formData.append("petsAllowed", petsAllowed);
      formData.append("movingSoon", movingSoon);
      formData.append("garden", garden);
      formData.append("morePeople", morePeople);
      formData.append("welcoming", welcoming);
      formData.append("visit", visit);
      formData.append("address", address);

      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }

      const response = await axios.post("http://localhost:5055/forms/apply", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        const createdForm = response.data;
        console.log("Form submitted:", createdForm);
        showCustomAlert();
      } else {
        console.error("Registration failed:", response.data.error);
      }
    }catch (error) {
        console.error("Network error:", error);
      }
  }

  const showCustomAlert = () => {
    const alertContainer = document.createElement("div");
    alertContainer.className = "custom-alert-container";
  
    const closeButton = document.createElement("span");
    closeButton.className = "close-button";
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", closeCustomAlert);

    const alertTitle = document.createElement("h2");
    alertTitle.textContent = '¡Enviado!'
  
    const alertMessage = document.createElement("p");
    alertMessage.textContent =
      "Hemos enviado tu formulario a la protectora. Si quieres ponerte en contacto con ellos puedes hacerlo vía email o WhatsApp.";
  
    const alertMessageTwo = document.createElement("p");
    alertMessageTwo.textContent = 'Recuerda que la protectora se pondrá en contacto contigo para poder hacer la entrevista personal.'

    const alertPicture = document.createElement('img');
    alertPicture.setAttribute('src', "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700212416/undrawPlayfulCatRchv2x_kpzjau.png")

    alertContainer.appendChild(closeButton);
    alertContainer.appendChild(alertMessage);
    alertContainer.appendChild(alertMessageTwo);
    alertContainer.appendChild(alertPicture)
  
    document.body.appendChild(alertContainer);
  };
  
  const closeCustomAlert = () => {
    const alertContainer = document.querySelector(".custom-alert-container");
    if (alertContainer) {
      alertContainer.remove();
      navigate("/login")
    }
  };



  return formOne ? (
    <div className="form-container">
      <h3>Formulario de adopción</h3>
      <h2>Tus datos</h2>
      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        placeholder="Nombre y apellidos"
        className="form-field"
      />

      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
        className="form-field"
      />

      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
        placeholder="Teléfono"
        className="form-field"
      />

      <input
        type="text"
        name="dni"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        required
        placeholder="DNI"
        className="form-field"
      />

      <h2>Dirección</h2>

      <input
        type="text"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        placeholder="Calle, número, piso"
        className="form-field"
      />

      <input
        type="text"
        name="postalCode"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        required
        placeholder="Código postal"
        className="form-field"
      />

      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
        placeholder="Ciudad"
        className="form-field"
      />

        <span htmlFor="" className="form-label">
          Acepto los términos y condiciones de la adopción.
        </span>
      <input type="checkbox"/>
       

      <button type="button" onClick={handleFormOne}>Continuar</button>
    </div>
  ) : formTwo ? (
    <div className="form-container">
        <div>
            <img src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700181379/Imagen_de_WhatsApp_2023-11-17_a_las_01.35.29_156d94f2_yju73f.jpg" alt="" onClick={handleBackOne}/>
        </div>
      <h3>Formulario de adopción</h3>
      <h2>Sobre las mascotas</h2>
      <label>¿Tienes otros animales?</label>

      <div>
        <label>
          <input
            type="checkbox"
            checked={otherPets}
            onChange={() => handleOtherPetsChange(true)}
          />
          Yes
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={!otherPets}
            onChange={() => handleOtherPetsChange(false)}
          />
          No
        </label>
      </div>

      <input
        type="text"
        name="whatPets"
        value={whatPets}
        onChange={(e) => setWhatPets(e.target.value)}
        placeholder="¿Cuales?"
        className="form-field"
      />

      <input
        type="text"
        name="social"
        value={social}
        onChange={(e) => setSocial(e.target.value)}
        placeholder="¿Se llevan bien con otros animales?"
        className="form-field"
      />

      <div className="inputbox">
        <span htmlFor="" className="form-label">
          ¿Por qué has elegido adoptar?
        </span>
        <input
          type="text"
          name="whyAdopt"
          value={whyAdopt}
          onChange={(e) => setWhyAdopt(e.target.value)}
          required
          className="form-field"
        />
      </div>

      <div className="inputbox">
        <span htmlFor="" className="form-label">
          ¿Conoces las necesidades del animal?
        </span>
        <input
          type="text"
          name="petNeeds"
          value={petNeeds}
          onChange={(e) => setPetNeeds(e.target.value)}
          required
          className="form-field"
        />
      </div>

      <div className="inputbox">
        <span htmlFor="" className="form-label">
          ¿Conoces sus gastos?
        </span>
        <input
          type="text"
          name="petCosts"
          value={petCosts}
          onChange={(e) => setPetCosts(e.target.value)}
          required
          className="form-field"
        />
      </div>

      <div className="inputbox">
        <span htmlFor="" className="form-label">
          ¿Conoces su alimentación?
        </span>
        <input
          type="text"
          name="petFood"
          value={petFood}
          onChange={(e) => setPetFood(e.target.value)}
          required
          className="form-field"
        />
      </div>

      <div className="inputbox">
        <span htmlFor="" className="form-label">
          Nombre de la mascota que quieres adoptar
        </span>
        <input
          type="text"
          name="petName"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
          className="form-field"
        />
      </div>

      <button type="button" onClick={handleFormTwo}>Continuar</button>
    </div>
  ) : formThree ? (
    <div className="form-container">
    <div>
            <img src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700181379/Imagen_de_WhatsApp_2023-11-17_a_las_01.35.29_156d94f2_yju73f.jpg" alt="" onClick={handleBackTwo}/>
        </div>
      <h3>Formulario de adopción</h3>
      <h2>Familia y hogar</h2>

      <div className="inputbox">
        <span htmlFor="" className="form-label">
          ¿Dónde vives?
        </span>
        <input
          type="text"
          name="houseType"
          value={houseType}
          onChange={(e) => setHouseType(e.target.value)}
          required
          className="form-field"
        />
      </div>

    <div className="form_check">
      <label>¿Vives de alquiler?</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={renting}
            onChange={() => setRenting(true)}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={!renting}
            onChange={() => setRenting(false)}
          />
          No
        </label>
      </div>
    </div>

    <div className="form_check">
      <label>¿Tu casero permite animales?</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={petsAllowed}
            onChange={() => setPetsAllowed(true)}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={!petsAllowed}
            onChange={() => setPetsAllowed(false)}
          />
          No
        </label>
      </div>
    </div>

    <div className="form_check">
      <label>¿Crees que podrías mudarte pronto?</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={movingSoon}
            onChange={() => setMovingSoon(true)}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={!movingSoon}
            onChange={() => setMovingSoon(false)}
          />
          No
        </label>
      </div>
    </div>

    <div className="form_check">
      <label>¿Tienes jardín?</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={garden}
            onChange={() => setGarden(true)}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={!garden}
            onChange={() => setGarden(false)}
          />
          No
        </label>
      </div>
    </div>

    <div className="form_check">
      <label>¿Vives con otras personas?</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={morePeople}
            onChange={() => setMorePeople(true)}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={!morePeople}
            onChange={() => setMorePeople(false)}
          />
          No
        </label>
      </div>
    </div>

    <div className="form_check">
      <label>¿Están todos de acuerdo con la adopción?</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={welcoming}
            onChange={() => setWelcoming(true)}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={!welcoming}
            onChange={() => setWelcoming(false)}
          />
          No
        </label>
      </div>
    </div>

    <div className="form_check">
      <label>¿Estás de acuerdo con que visitemos tu casa?</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={visit}
            onChange={() => setVisit(true)}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={!visit}
            onChange={() => setVisit(false)}
          />
          No
        </label>
      </div>
    </div>
      <button type="button" onClick={handleForm}>Enviar</button>
    </div>
  ) : null;
  
};

export default Formulario;
