import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import './_UpdateUser.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Button from '../../Components/Button/Button';

const UpdateUser = () => {
  const { userId } = useParams();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  
const [avatarImage, setAvatarImage] = useState(null);

  
  const navigate = useNavigate();
  console.log(userId);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
    setAvatarImage(file);}

 

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
        var formData = new FormData();
        avatarImage && formData.append("avatarImage", avatarImage);
        name && formData.append("name", name);
        surname && formData.append("surname", surname);
        username && formData.append("username", username);

      const response = await axios.put(`http://localhost:5055/users/updateUser/${userId}`, 
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      );

        if (response.status === 200) {
        const updatedUser = response.data;

      console.log('Usuario actualizado exitosamente', updatedUser);
      navigate('/mi-perfil');
        } else {
        console.error('Error al actualizar el usuario');
        }
    } catch (error) {
      console.error('Error al actualizar el usuario', error);
    }
  };

  return (
    <div className='updateUser-container'>
      <h2 className="updateUser-title">
        Actualiza tus datos
      </h2>
      <form onSubmit={handleUpdateUser}>
        <div className='userProfile-info'>
          <div className="inputbox6">
            <span htmlFor='name' className='form-label'>
              Nuevo Nombre:
            </span>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='form-field'
            />
          </div>

          <div className="inputbox6">
            <span htmlFor='surname' className='form-label'>
              Nuevo Apellido:
            </span>
            <input
              type='text'
              id='surname'
              name='surname'
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className='form-field'
            />
          </div>

          <div className="inputbox6">
            <span htmlFor='username' className='form-label'>
              Nuevo Username:
            </span>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='form-field'
            />
          </div>
          <div className="inputbox-logo">
          <span htmlFor="" className="form-label">
          </span>
          <input
            id="avatarImage"
            type="file"
            name="avatarImage"
            accept="image/*"
            onChange={handleImageChange}
            className="form-field"
          />
        </div>

          {/* Otros campos de entrada... */}

          <div className="updateUser-btn">
            <Button className='btn-main' texto='Actualizar información' type='submit' />
          </div>
        </div>
      </form>
      <Navbar />
    </div>
  );
};

export default UpdateUser;











