import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} required />
    
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
    
          <label>City:</label>
          <input type="text" name="city" value={formData.address.city} onChange={handleAddressChange} />
    
          <label>Street:</label>
          <input type="text" name="street" value={formData.address.street} onChange={handleAddressChange} />
    
          <label>Number:</label>
          <input type="number" name="number" value={formData.address.number} onChange={handleAddressChange} />
    
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
    
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
    
          <button type="submit">Register</button>
        </form>
      );
    };

export default RegisterProtectora;
