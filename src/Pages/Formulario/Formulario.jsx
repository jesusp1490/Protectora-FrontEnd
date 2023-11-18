import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './_Formulario.scss';
import Button from "../../Components/Button/Button";

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

    try {
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
    } catch (error) {
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
      <h3 className="form-h3">Formulario de adopción</h3>

      <div className="form-bar">
        <div className="form-bar-fill"></div>
      </div>

      <h2 className="form-h2">Tus datos</h2>



      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        placeholder="Nombre y apellidos"
        className="formOne-field"
      />

      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
        className="formOne-field"
      />

      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
        placeholder="Teléfono"
        className="formOne-field"
      />

      <input
        type="text"
        name="dni"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        required
        placeholder="DNI"
        className="formOne-field"
      />

      <h2 className="form-h2">Dirección</h2>

      <input
        type="text"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        placeholder="Calle, número, piso"
        className="formOne-field"
      />

      <input
        type="text"
        name="postalCode"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        required
        placeholder="Código postal"
        className="formOne-field"
      />

      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
        placeholder="Ciudad"
        className="formOne-field"
      />

      <div className="form-label-checkbox">
        <input type="checkbox" id="termsCheckbox" />
        <label htmlFor="termsCheckbox">
          Acepto los términos y condiciones de la adopción.
        </label>
      </div>

      <div className="formOne-btn">
        <Button className='btn-pink' texto='Continuar' type="button" onClick={handleFormOne} />
      </div>
    </div>
  ) : formTwo ? (

    <div className="form-container">

      <div className="formTwo-header">
        <img src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700181379/Imagen_de_WhatsApp_2023-11-17_a_las_01.35.29_156d94f2_yju73f.jpg" alt="" onClick={handleBackOne} className="formTwo-img" />
        <h3 className="formTwo-h3">Formulario de adopción</h3>
      </div>



      <div className="form-bar">
        <div className="form-bar-fill2"></div>
      </div>

      <h2 className="form-h2">Sobre las mascotas</h2>

      <div className="form-label-radio">
        <label>¿Tienes otros animales?</label>

        <div className="radio-options">
          <label>
            <input
              type="radio"
              value="si"
              checked={otherPets === 'si'}
              onChange={() => handleOtherPetsChange('si')}
            />
            Sí
          </label>

          <label>
            <input
              type="radio"
              value="no"
              checked={otherPets === 'no'}
              onChange={() => handleOtherPetsChange('no')}
            />
            No
          </label>
        </div>
      </div>

      <input
        type="text"
        name="whatPets"
        value={whatPets}
        onChange={(e) => setWhatPets(e.target.value)}
        placeholder="¿Cuales?"
        className="formOne-field"
      />

      <input
        type="text"
        name="social"
        value={social}
        onChange={(e) => setSocial(e.target.value)}
        placeholder="¿Se llevan bien con otros animales?"
        className="formOne-field"
      />

      <div className="formTwo-inputbox">
        <label htmlFor="" className="form-label">
          ¿Por qué has elegido adoptar?
        </label>
        <textarea
          name="whyAdopt"
          value={whyAdopt}
          onChange={(e) => setWhyAdopt(e.target.value)}
          required
          className="formOne-field"
        />
      </div>

      <div className="formTwo-inputbox">
        <label htmlFor="" className="form-label">
          ¿Conoces las necesidades del animal?
        </label>
        <textarea
          name="petNeeds"
          value={petNeeds}
          onChange={(e) => setPetNeeds(e.target.value)}
          required
          className="formOne-field"
        />
      </div>

      <div className="formTwo-inputbox">
        <label htmlFor="" className="form-label">
          ¿Conoces sus gastos?
        </label>
        <textarea
          name="petCosts"
          value={petCosts}
          onChange={(e) => setPetCosts(e.target.value)}
          required
          className="formOne-field"
        />
      </div>

      <div className="formTwo-inputbox">
        <label htmlFor="" className="form-label">
          ¿Conoces su alimentación?
        </label>
        <textarea
          name="petFood"
          value={petFood}
          onChange={(e) => setPetFood(e.target.value)}
          required
          className="formOne-field"
        />
      </div>

      <div className="formTwo-inputbox">
        <label htmlFor="" className="form-label">
          ¿Cual es el nombre de la mascota que quieres adoptar?
        </label>
        <textarea
          name="petName"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
          className="formOne-field"
        />
      </div>

      <div className="formTwo-btn">
        <Button className='btn-pink' texto='Continuar' type="button" onClick={handleFormTwo} />
      </div>
    </div>
  ) : formThree ? (
    <div className="form-container">

      <div className="formTwo-header">
        <img src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700181379/Imagen_de_WhatsApp_2023-11-17_a_las_01.35.29_156d94f2_yju73f.jpg" alt="" onClick={handleBackOne} className="formTwo-img" />
        <h3 className="formTwo-h3">Formulario de adopción</h3>
      </div>

      <div className="form-bar">
        <div className="form-bar-fill3"></div>
      </div>

      <h2 className="form-h2">Familia y hogar</h2>

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
          className="formOne-field"
        />
      </div>
      <div className="form_check-container">
        <div className="form_check">
          <div className="form_check-question">
            <label>¿Vives de alquiler?</label>
          </div>
          <div className="form_check-options">
            <label>
              <input
                type="radio"
                name="renting1"
                checked={renting}
                onChange={() => setRenting(true)}
              />
              Si
            </label>
            <label>
              <input
                type="radio"
                name="renting"
                checked={!renting}
                onChange={() => setRenting(false)}
              />
              No
            </label>
          </div>
        </div>

        <div className="form_check">
          <div className="form_check-question">
            <label>¿Tu casero permite animales?</label>
          </div>
          <div className="form_check-options">
            <label>
              <input
                type="radio"
                name="petsAllowed"
                checked={petsAllowed}
                onChange={() => setPetsAllowed(true)}
              />
              Si
            </label>
            <label>
              <input
                type="radio"
                name="petsAllowed"
                checked={!petsAllowed}
                onChange={() => setPetsAllowed(false)}
              />
              No
            </label>
          </div>
        </div>

        <div className="form_check">
          <div className="form_check-question">
            <label>¿Crees que podrías mudarte pronto?</label>
          </div>
          <div className="form_check-options">
            <label>
              <input
                type="radio"
                name="movingSoon"
                checked={movingSoon}
                onChange={() => setMovingSoon(true)}
              />
              Si
            </label>
            <label>
              <input
                type="radio"
                name="movingSoon"
                checked={!movingSoon}
                onChange={() => setMovingSoon(false)}
              />
              No
            </label>
          </div>
        </div>

        <div className="form_check">
          <div className="form_check-question">
            <label>¿Tienes jardín?</label>
          </div>
          <div className="form_check-options">
            <label>
              <input
                type="radio"
                name="garden"
                checked={garden}
                onChange={() => setGarden(true)}
              />
              Si
            </label>
            <label>
              <input
                type="radio"
                name="garden"
                checked={!garden}
                onChange={() => setGarden(false)}
              />
              No
            </label>
          </div>
        </div>

        <div className="form_check">
          <div className="form_check-question">
            <label>¿Vives con otras personas?</label>
          </div>
          <div className="form_check-options">
            <label>
              <input
                type="radio"
                name="morePeople"
                checked={morePeople}
                onChange={() => setMorePeople(true)}
              />
              Si
            </label>
            <label>
              <input
                type="radio"
                name="morePeople"
                checked={!morePeople}
                onChange={() => setMorePeople(false)}
              />
              No
            </label>
          </div>
        </div>

        <div className="form_check">
          <div className="form_check-question">
            <label>¿Están todos deacuerdo con la adopción?</label>
          </div>
          <div className="form_check-options">
            <label>
              <input
                type="radio"
                name="welcoming"
                checked={welcoming}
                onChange={() => setWelcoming(true)}
              />
              Si
            </label>
            <label>
              <input
                type="radio"
                name="welcoming"
                checked={!welcoming}
                onChange={() => setWelcoming(false)}
              />
              No
            </label>
          </div>
        </div>

        <div className="form_check">
          <div className="form_check-question">
            <label>¿Estás de acuerdo con que visitemos tu casa?</label>
          </div>
          <div className="form_check-options">
            <label>
              <input
                type="radio"
                name="visit"
                checked={visit}
                onChange={() => setVisit(true)}
              />
              Si
            </label>
            <label>
              <input
                type="radio"
                name="visit"
                checked={!visit}
                onChange={() => setVisit(false)}
              />
              No
            </label>
          </div>
        </div>
      </div>

      <div className="formThree-btn">
        <Button className='btn-pink' texto='Enviar' type="button" onClick={handleForm} />
      </div>
    </div>
  ) : null;

};

export default Formulario;
