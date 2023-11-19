import React from 'react'

const ProtectoraInfo = ({ protectora }) => {



    return (
        <div>
            <h2>información de la protectora</h2>
            <p>Nombre: { protectora.name }</p>
            <p>Dirección: { protectora.street }, { protectora.number }, { protectora.city}</p>
            <p>Contacta con nosotros: { protectora.email }, { protectora.phone }</p>
        </div>
    )
}

export default ProtectoraInfo
