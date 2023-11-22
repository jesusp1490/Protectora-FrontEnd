import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './_RegisterProtectora.scss'
import Button from '../../../Components/Button/Button';

const RegisterProtectora = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        city: '',
        street: '',
        number: '',
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
          <span htmlFor="" className="form-label">Email:</span>
          <input type="text" name="email" value={formData.email} onChange={handleChange} required className="form-field"/>
        </div>

        <div className="inputbox1">
          <span>Name:</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-field" />
        </div>

        <div className="inputbox1">
          <span>City:</span>
          <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-field"/>
        </div>

        <span className="inputbox1">
          <span>Street:</span>
          <input type="text" name="street" value={formData.street} onChange={handleChange} className="form-field"/>
        </span>

        <div className="inputbox1">
          <span>Number:</span>
          <input type="number" name="number" value={formData.number} onChange={handleChange} className="form-field"/>
        </div>

        <div className="inputbox1">
          <span>Password:</span>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required className="form-field"/>
        </div>

        <div className="inputbox1">
          <span>Phone:</span>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-field"/>
        </div>

          <Button className='btn-main' texto='Registrar' type="submit" />
      </form>
    </div>
  );
};

export default RegisterProtectora;
