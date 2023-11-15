import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './_RegisterProtectora.scss'

const RegisterProtectora = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: {
      city: '',
      street: '',
      number: ''
    },
    password: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5055/protectoras/register', formData);

      const data = response.data
      if (data.success) {
        console.log('Registro exitoso');
        navigate('/login-protectora');
      } else {
        console.error(data.message);
        alert('El registro ha fallado. Asegúrate de que todos los campos estén llenos correctamente.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Hubo un error durante el registro');
    }
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='registerProtectora-container'>
      <h2>¡Regístra tu protectora!</h2>

      <form onSubmit={handleSubmit}>

        <div className="inputbox1">
          <label htmlFor="" className="form-label">Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} required className="form-field"/>
        </div>

        <div className="inputbox1">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-field" />
        </div>

        <div className="inputbox1">
          <label>City:</label>
          <input type="text" name="city" value={formData.address.city} onChange={handleAddressChange} className="form-field"/>
        </div>

        <div className="inputbox1">
          <label>Street:</label>
          <input type="text" name="street" value={formData.address.street} onChange={handleAddressChange} className="form-field"/>
        </div>

        <div className="inputbox1">
          <label>Number:</label>
          <input type="number" name="number" value={formData.address.number} onChange={handleAddressChange} className="form-field"/>
        </div>

        <div className="inputbox1">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required className="form-field"/>
        </div>

        <div className="inputbox1">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-field"/>
        </div>
        <button className='btn-register' type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterProtectora;
