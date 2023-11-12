import React, { useState } from 'react';
import axios from 'axios';
import './_RegisterPage.scss'

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5055/users/register', {
                email,
                username,
                password,
                gender,
            });

            const data = response.data;

            if (data.success) {
                console.log('Registro exitoso');
            } else {
                console.error(data.message);
                alert('El registro ha fallado. Asegúrate de que todos los campos estén llenos correctamente.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='register-container'>

            <h2>¡Regístrate!</h2>
            <form onSubmit={handleRegister}>
                <div className="inputbox">
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

                <div className="inputbox">
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

                <div className="inputbox">
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

                <div className="inputbox-gender">
                    <ion-icon name="male-female-outline"></ion-icon>
                    <select
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                        className="form-field"
                    >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>

                <button className='btn-register' type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
