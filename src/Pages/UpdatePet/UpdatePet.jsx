import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Navbar from '../../Components/Navbar/Navbar';
import './_UpdatePet.scss';
import Button from "../../Components/Button/Button";

const UpdatePet = () => {
  const { petId } = useParams();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [species, setSpecies] = useState("");
  const [birthday, setBirthday] = useState("");
  const [sex, setSex] = useState("");
  const [size, setSize] = useState("");
  const [personality, setPersonality] = useState([]);
  const [history, setHistory] = useState("");
  const [vaccinated, setVaccinated] = useState(false);
  const [deparasitized, setDeparasitized] = useState(false);
  const [healthy, setHealthy] = useState(false);
  const [castrated, setCastrated] = useState(false);
  const [identified, setIdentified] = useState(false);
  const [chip, setChip] = useState(false);
  const [healthDetails, setHealthDetails] = useState("");
  const [adoptionReq, setAdoptionReq] = useState("");
  const [adoptionFee, setAdoptionFee] = useState(0);
  const [delivery, setDelivery] = useState(false);
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
  const [adopted, setAdopted] = useState(false);
  const [adoptiveParent, setAdoptiveParent] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    setImage(file);
  };

  const handleCheckboxChange = (e) => {
    const copyPersonality = [...personality];
    copyPersonality.push(e.target.value);
    setPersonality(copyPersonality)
  }

  const handleUpdatePet = async (e) => {
    e.preventDefault();

    try {
      var formData = new FormData();
      image && formData.append("image", image);

      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }
      if (personality) {
        personality.forEach(value => {
          formData.append("personality", value);
        });
      }
      name && formData.append("name", name);
      city && formData.append("city", city);
      species && formData.append("species", species);
      birthday && formData.append("birthday", birthday);
      sex && formData.append("sex", sex);
      size && formData.append("size", size);
      history && formData.append("history", history);
      vaccinated && formData.append("vaccinated", vaccinated);
      deparasitized && formData.append("deparasitized", deparasitized);
      healthy && formData.append("healthy", healthy);
      castrated && formData.append("castrated", castrated);
      identified && formData.append("identified", identified);
      chip && formData.append("chip", chip);
      healthDetails && formData.append("healthDetails", healthDetails);
      adoptionReq && formData.append("adoptionReq", adoptionReq);
      adoptionFee && formData.append("adoptionFee", adoptionFee);
      delivery && formData.append("delivery", delivery);
      age && formData.append("age", age);
      adopted && formData.append("adopted", adopted)
      adoptiveParent && formData.append("adoptiveParent", adoptiveParent)

      const response = await axios.put(
        `http://localhost:5055/pets/updatePet/${petId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const updatedPet = response.data;
        console.log("Pet updated:", updatedPet);
        navigate("/login");
      } else {
        console.error("update failed:", response.data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (

    <div className="updatePet-container">

      <h2 className="updatePet-title">Actualiza los datos de la mascota</h2>
      <form onSubmit={handleUpdatePet}>

        <div className="inputbox7">
          <span htmlFor="name" className="form-label">
            Nombre:
          </span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-field"
          />
        </div>

        <div className="inputbox7">
          <span htmlFor="" className="form-label">
            Ciudad:
          </span>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-field"
          />
        </div>

        <div className="inputbox7">
          <select
            name="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}

            className="form-field"
          >
            <option value="Dog">Perro</option>
            <option value="Cat">Gato</option>
            <option value="Rabbit">Conejo</option>
            <option value="Guinea Pig">Cobaya</option>
            <option value="Small mammal">Pequeño mamífero</option>
            <option value="Fish">Pez</option>
            <option value="Reptile">Reptil</option>
            <option value="Amphibian">Amfibio</option>
            <option value="Insects">Insecto</option>
            <option value="Bird">Pájaro</option>
          </select>
        </div>

        <div className="inputbox7">
          <span htmlFor="" className="form-label">
            Fecha de nacimiento:
          </span>
          <input
            type="text"
            name="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="form-field"
            placeholder="dd/mm/aaaa"
          />
        </div>

        <div className="inputbox7">
          <select
            name="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}

            className="form-field"
          >
            <option value="male">Macho</option>
            <option value="female">Hembra</option>
          </select>
        </div>

        <div className="inputbox7">
          <select
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}

            className="form-field"
          >
            <option value="small">Pequeño</option>
            <option value="medium">Mediano</option>
            <option value="big">Grande</option>
          </select>
        </div>

        <div className="inputbox-checkbox">
          <fieldset>
            <legend>Personalidad:</legend>

            <div>
              <input
                type="checkbox"
                name="calm"
                value="calm"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="">Calmado</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="active"
                value="active"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="">Activo</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="loving"
                value="loving"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="">Cariñoso</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="fun"
                value="fun"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="">Divertido</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="nervous"
                value="nervous"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="">Nervioso</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="scared"
                value="scared"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="">Asustadizo</label>
            </div>
          </fieldset>
        </div>

        <div className="inputbox7">
          <span htmlFor="" className="form-label">
            Historia:
          </span>
          <textarea
            type="text"
            name="history"
            value={history}
            onChange={(e) => setHistory(e.target.value)}

            className="form-field"
          />
        </div>

        <div className="inputbox-borderless">
          <label htmlFor="" className="form-label">
            ¿Está vacunado?
          </label>
          <input
            type="checkbox"
            name="vaccinated"
            value={true}
            onChange={(e) => setVaccinated(e.target.checked)}
            className="form-field"
          />
        </div>

        <div className="inputbox-borderless">
          <label htmlFor="" className="form-label">
            ¿Está desparasitado?
          </label>
          <input
            type="checkbox"
            name="deparasitized"
            value={true}
            onChange={(e) => setDeparasitized(e.target.checked)}
            className="form-field"
          />
        </div>

        <div className="inputbox-borderless">
          <label htmlFor="" className="form-label">
            ¿Está sano?
          </label>
          <input
            type="checkbox"
            name="healthy"
            value={true}
            onChange={(e) => setHealthy(e.target.checked)}
            className="form-field"
          />
        </div>

        <div className="inputbox-borderless">
          <label htmlFor="" className="form-label">
            ¿Está castrado/a?
          </label>
          <input
            type="checkbox"
            name="castrated"
            value={true}
            onChange={(e) => setCastrated(e.target.checked)}
            className="form-field"
          />
        </div>

        <div className="inputbox-borderless">
          <label htmlFor="" className="form-label">
            ¿Tiene pasaporte?
          </label>
          <input
            type="checkbox"
            name="identified"
            value={true}
            onChange={(e) => setIdentified(e.target.checked)}
            className="form-field"
          />
        </div>

        <div className="inputbox-borderless">
          <label htmlFor="" className="orm-label">
            ¿Tiene chip?
          </label>
          <input
            type="checkbox"
            name="chip"
            value={true}
            onChange={(e) => setChip(e.target.checked)}
            className="form-field"
          />
        </div>

        <div className="inputbox7">
          <span htmlFor="" className="form-label">
            Detalles de salud:
          </span>
          <textarea
            type="text"
            name="healthDetails"
            value={healthDetails}
            onChange={(e) => setHealthDetails(e.target.value)}
            className="form-field"
          />
        </div>

        <div className="inputbox7">
          <span htmlFor="" className="form-label">
            Requisitos de la adopción:
          </span>
          <textarea
            type="text"
            name="adoptionReq"
            value={adoptionReq}
            onChange={(e) => setAdoptionReq(e.target.value)}

            className="form-field"
          />
        </div>

        <div className="inputbox7">
          <span htmlFor="" className="form-label">
            Cuota de adopción
          </span>
          <input
            type="number"
            name="adoptionFee"
            value={adoptionFee}
            onChange={(e) => setAdoptionFee(e.target.value)}

            className="form-field"
          />
        </div>

        <div className="inputbox-borderless">
          <label htmlFor="" className="form-label">
            ¿Disponible para envío?
          </label>
          <input
            type="checkbox"
            name="delivery"
            value={true}
            onChange={(e) => setDelivery(e.target.checked)}
            className="form-field"
          />
        </div>

        <div className="inputbox7">
          <select
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}

            className="form-field"
          >
            <option value="baby">Bebé</option>
            <option value="young">Joven</option>
            <option value="old">Adulto</option>
          </select>
        </div>

        <div className="inputbox-borderless">
          <span htmlFor="" className="form-label">
            Foto
          </span>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="form-field"
          />
        </div>

        <div className="inputbox-borderless">
          <label htmlFor="" className="form-label">
            ¿Ha sido adoptado?
          </label>
          <input
            type="checkbox"
            name="adopted"
            value={true}
            onChange={(e) => setAdopted(e.target.checked)}
            className="form-field"
          />
        </div>

        <div className="inputbox7">
          <span htmlFor="" className="form-label">
            ¿Quién lo adoptó?
          </span>
          <input
            type="text"
            name="adoptiveParent"
            value={adoptiveParent}
            onChange={(e) => setAdoptiveParent(e.target.value)}

            className="form-field"
          />
        </div>

        <div className="updatePet-btn">
          <Button className='btn-main' texto='Actualiza los datos' type="submit" />
        </div>
      </form>

      <Navbar />
    </div>
  );

}

export default UpdatePet;