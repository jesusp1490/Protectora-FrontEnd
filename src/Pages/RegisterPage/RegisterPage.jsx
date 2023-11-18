import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './_RegisterPage.scss' 
import Button from '../../Components/Button/Button';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault(); 
        console.log('Evento de registro ejecutado');

        try {
            const response = await axios.post('http://localhost:5055/users/register', {
                name,
                surname,
                email,
                username,
                password,
            });

            const data = response.data;

            if (data.success) {
                console.log('Registro exitoso');
                navigate('/login');
            } else {
                console.error(data.message);
                alert('El registro ha fallado. Asegúrate de que todos los campos estén llenos correctamente.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Hubo un error durante el registro');
        }
    };

    return (
        <div className='register-container'>

            <h2>¡Regístrate!</h2>
            <form onSubmit={handleRegister}>

                <div className="inputbox1">
                    {/* <ion-icon name="mail-outline"></ion-icon> */}
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-field"
                    />
                    <label htmlFor="" className="form-label">
                        Nombre:
                    </label>
                </div>

                <div className="inputbox1">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input
                        type="text"
                        name="surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                        className="form-field"
                    />
                    <label htmlFor="" className="form-label">
                        Apellido:
                    </label>
                </div>

                <div className="inputbox1">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-field"
                    />
                    <label htmlFor="" className="form-label">
                        Email:
                    </label>
                </div>

                <div className="inputbox1">
                    <ion-icon name="person-outline"></ion-icon>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-field"
                    />
                    <label htmlFor="" className="form-label">
                        Username:
                    </label>
                </div>

                <div className="inputbox1">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-field"
                    />
                    <label htmlFor="" className="form-label">
                        Password:
                    </label>
                </div>

                <Button className='btn-main' texto="Registrarse" type="submit" />

            </form>
        </div>
    );
};

export default Register;
