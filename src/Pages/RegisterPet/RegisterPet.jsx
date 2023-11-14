import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPet = () => {
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

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    setImage(file);
  };

  useEffect(() => {
    console.log("Image state:", image);
  }, [image]);

  const handleRegisterPet = async (e) => {
    e.preventDefault();
  
    try {
      var formData = new FormData();
      formData.append("image", image);
  
      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }
  
      formData.append("name", name);
      formData.append("city", city);
      formData.append("species", species);
      formData.append("birthday", birthday);
      formData.append("sex", sex);
      formData.append("size", size);
      formData.append("personality", JSON.stringify(personality));
      formData.append("history", history);
      formData.append("vaccinated", vaccinated);
      formData.append("deparasitized", deparasitized);
      formData.append("healthy", healthy);
      formData.append("castrated", castrated);
      formData.append("identified", identified);
      formData.append("chip", chip);
      formData.append("healthDetails", healthDetails);
      formData.append("adoptionReq", adoptionReq);
      formData.append("adoptionFee", adoptionFee);
      formData.append("delivery", delivery);
      formData.append("age", age);
  
      const response = await axios.post(
        "http://localhost:5055/pets/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.status === 201) {
        const createdPet = response.data;
        console.log("Pet registered:", createdPet);
        navigate("/login");
      } else {
        console.error("Registration failed:", response.data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <form onSubmit={handleRegisterPet}>
      <div className="RegisterPet_inputbox">
        <label htmlFor="name" className="RegisterPet_form-label">
          Nombre:
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          Ciudad:
        </label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <select
          name="species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
          className="RegisterPet_form-field"
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

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          Fecha de nacimiento:
        </label>
        <input
          type="text"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
          className="RegisterPet_form-field"
          placeholder="dd/mm/aaaa"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <select
          name="sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          required
          className="RegisterPet_form-field"
        >
          <option value="male">Macho</option>
          <option value="female">Hembra</option>
        </select>
      </div>

      <div className="RegisterPet_inputbox">
        <select
          name="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
          className="RegisterPet_form-field"
        >
          <option value="small">Pequeño</option>
          <option value="medium">Mediano</option>
          <option value="big">Grande</option>
        </select>
      </div>

      <div className="RegisterPet_inputbox">
        <fieldset>
          <legend>Personalidad:</legend>

          <div>
            <input
              type="checkbox"
              name="calm"
              value="calm"
              onChange={(e) => setPersonality([...personality, e.target.value])}
            />
            <label htmlFor="">Calmado</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="active"
              value="active"
              onChange={(e) => setPersonality([...personality, e.target.value])}
            />
            <label htmlFor="">Activo</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="loving"
              value="loving"
              onChange={(e) => setPersonality([...personality, e.target.value])}
            />
            <label htmlFor="">Cariñoso</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="fun"
              value="fun"
              onChange={(e) => setPersonality([...personality, e.target.value])}
            />
            <label htmlFor="">Divertido</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="nervous"
              value="nervous"
              onChange={(e) => setPersonality([...personality, e.target.value])}
            />
            <label htmlFor="">Nervioso</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="scared"
              value="scared"
              onChange={(e) => setPersonality([...personality, e.target.value])}
            />
            <label htmlFor="">Asustadizo</label>
          </div>
        </fieldset>
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          Historia:
        </label>
        <input
          type="text"
          name="history"
          value={history}
          onChange={(e) => setHistory(e.target.value)}
          required
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          ¿Está vacunado?
        </label>
        <input
          type="checkbox"
          name="vaccinated"
          value={true}
          onChange={(e) => setVaccinated(e.target.checked)}
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          ¿Está desparasitado?
        </label>
        <input
          type="checkbox"
          name="deparasitized"
          value={true}
          onChange={(e) => setDeparasitized(e.target.checked)}
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          ¿Está sano?
        </label>
        <input
          type="checkbox"
          name="healthy"
          value={true}
          onChange={(e) => setHealthy(e.target.checked)}
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          ¿Está castrado/a?
        </label>
        <input
          type="checkbox"
          name="castrated"
          value={true}
          onChange={(e) => setCastrated(e.target.checked)}
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          ¿Tiene pasaporte?
        </label>
        <input
          type="checkbox"
          name="identified"
          value={true}
          onChange={(e) => setIdentified(e.target.checked)}
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          ¿Tiene chip?
        </label>
        <input
          type="checkbox"
          name="chip"
          value={true}
          onChange={(e) => setChip(e.target.checked)}
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          Detalles de salud:
        </label>
        <input
          type="text"
          name="healthDetails"
          value={healthDetails}
          onChange={(e) => setHealthDetails(e.target.value)}
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          Requerimientos de la adopción:
        </label>
        <input
          type="text"
          name="adoptionReq"
          value={adoptionReq}
          onChange={(e) => setAdoptionReq(e.target.value)}
          required
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          Cuota de adopción
        </label>
        <input
          type="number"
          name="adoptionFee"
          value={adoptionFee}
          onChange={(e) => setAdoptionFee(e.target.value)}
          required
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          ¿Disponible para envío?
        </label>
        <input
          type="checkbox"
          name="delivery"
          value={true}
          onChange={(e) => setDelivery(e.target.checked)}
          className="RegisterPet_form-field"
        />
      </div>

      <div className="RegisterPet_inputbox">
        <select
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="RegisterPet_form-field"
        >
          <option value="baby">Bebé</option>
          <option value="young">Joven</option>
          <option value="old">Adulto</option>
        </select>
      </div>

      <div className="RegisterPet_inputbox">
        <label htmlFor="" className="RegisterPet_form-label">
          Foto
        </label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="RegisterPet_form-field"
        />
      </div>
      <button type="submit">Registrar mascota</button>
    </form>
  );
};

export default RegisterPet;
