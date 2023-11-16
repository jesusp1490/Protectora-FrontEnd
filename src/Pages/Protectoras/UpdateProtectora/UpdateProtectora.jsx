import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const UpdateProtectora = () => {
  const { protectoraId } = useParams();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    setImage(file);
  };

  const handleUpdateProtectora = async (e) => {
    e.preventDefault();
    try {
      var formData = new FormData();
      image && formData.append("image", image);

      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }

      name && formData.append("name", name);
      city && formData.append("city", city);
      street && formData.append("street", street);
      number && formData.append("number", number);
      phone && formData.append("phone", phone);

      const response = await axios.put(
        `http://localhost:5055/protectoras/updateProtectora/${protectoraId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      

      if (response.status === 200) {
        const updatedProtectora = response.data;
        console.log("Protectora updated:", updatedProtectora);
        navigate("/profile-protectora");
      } else {
        console.error("update failed:", response.data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="updateProtectora-container">
      <h2 className="updateProtectora-title">
        Actualiza los datos de tu protectora
      </h2>
      <form onSubmit={handleUpdateProtectora}>
        <div className="inputbox-borderless">
          <span htmlFor="" className="form-label">
            Logo
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

        <div className="inputbox">
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

        <div className="inputbox">
          <span htmlFor="city" className="form-label">
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

        <div className="inputbox">
          <span htmlFor="street" className="form-label">
            Calle:
          </span>
          <input
            type="text"
            name="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="form-field"
          />
        </div>

        <div className="inputbox">
          <span htmlFor="number" className="form-label">
            Número:
          </span>
          <input
            type="text"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="form-field"
          />
        </div>

        <div className="inputbox">
          <span htmlFor="phone" className="form-label">
            Número de teléfono:
          </span>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-field"
          />
        </div>
        <button className='btn-UpdateProtectora' type="submit">Actualiza los datos</button>
      </form>
    </div>
  );
};

export default UpdateProtectora;
