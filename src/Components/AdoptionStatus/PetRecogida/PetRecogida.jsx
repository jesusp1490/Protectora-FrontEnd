import React, { useState } from 'react'
import ProtectoraInfo from '../ProtectoraInfo/ProtectoraInfo'

const PetRecogida = ({ protectora }) => {

    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');

    const handleSubmit = () => {
        console.log('Información de recogida enviada:', { protectora, pickupDate, pickupTime });
    }

    return (
        <div>
            <h2>Información para recoger a la mascota</h2>
            <ProtectoraInfo />

            <div>
                <label htmlFor='pickupDate'>Fecha de Recogida: </label>
                <input
                    type='date'
                    id='pickupDate'
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                />
            </div>
            <label htmlFor='pickupTime'>Hora de Recogida: </label>
                <input
                    type='time'
                    id='pickupTime'
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                />
            <div>

            <button onClick={handleSubmit}>Enviar</button>

            </div>
        </div>
    )
}

export default PetRecogida
